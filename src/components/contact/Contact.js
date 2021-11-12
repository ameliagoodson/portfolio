import "./contact.scss";
import { useForm, ValidationError } from "@formspree/react";
import spiderWeb2 from "../../assets/spider-web2.svg";

export default function Contact() {
	const [state, handleSubmit] = useForm("meqvwkgl");
	if (state.succeeded) {
		return (
			<div className="response">
				Thank you for your email. I'll get back to you as
				soon as possible.
			</div>
		);
	}
	return (
		<div className="contact">
			<h1 id="contact">CONTACT</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Your email address"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
				<br></br>
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
					placeholder="Write me a message"
				/>
				<br></br>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
				<button
					type="submit"
					disabled={state.submitting}
					className="submit"
				>
					<h2>Submit</h2>
				</button>
			</form>
			<img
				className="spiderweb-bottom"
				src={spiderWeb2}
				alt="finely draping cob web"
			></img>
		</div>
	);
}
