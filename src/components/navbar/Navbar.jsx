import "./navbar.scss";
import EmailIcon from "@mui/icons-material/Email";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export default function Navbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={"navbar " + (menuOpen && "active")}>
			<div className="container-navbar">
				<div className="left">
					<Link to="/" className="brand" id="home">
						Amelia Goodson
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
