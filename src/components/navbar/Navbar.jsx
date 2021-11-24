import "./navbar.scss";
import EmailIcon from "@mui/icons-material/Email";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import brandLarge from "../../assets/logos/Brand-large-subtitle-white-text-black-background-60px.png";
import brandSmall from "../../assets/logos/Brand-small-no-subtitle-white-text-black-background.png";

export default function Navbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={"navbar " + (menuOpen && "active")}>
			<div className="container-navbar">
				<div className="left">
					<Link to="/" className="brand" id="home">
						<img
							src={brandLarge}
							alt="Amelia Goodson brand - Web Developer / Engineer / Designer"
							className="brand-large"
						></img>
						<img
							src={brandSmall}
							alt="Amelia Goodson brand - Web Developer"
							className="brand-small"
						></img>
					</Link>
					<div className="contact-container">
						<EmailIcon className="icon-email" />
						<p>ameliajanegoodson@gmail.com</p>
					</div>
				</div>
				<div className="right">
					<div
						className="hamburger"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<Hamburger />
					</div>
				</div>
			</div>
		</div>
	);
}
