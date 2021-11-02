import "./navbar.scss";
import EmailIcon from "@mui/icons-material/Email";
import { Divide as Hamburger } from "hamburger-react";
// import spiderWebLogo from "../../assets/logos/spider-web-64.png";

export default function Navbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={"navbar " + (menuOpen && "active")}>
			<div className="container-navbar">
				<div className="left">
					<a href="#intro" className="brand">
						{/* <img
							src={spiderWebLogo}
							alt="pink spider web logo"
							className="logo-brand"
						/> */}
						Amelia Goodson
					</a>
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
