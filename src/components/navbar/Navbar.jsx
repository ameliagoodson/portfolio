import "./navbar.scss";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import { Divide as Hamburger } from "hamburger-react";

export default function Navbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={"navbar " + (menuOpen && "active")}>
			<div className="container-navbar">
				<div className="left">
					<a href="#intro" className="brand">
						Amelia Goodson
					</a>
					<div className="contact-container">
						<PhoneIphoneIcon className="icon-phone" />
						<p>0478 097 895</p>
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
