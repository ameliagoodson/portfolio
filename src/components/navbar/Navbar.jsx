import "./navbar.scss";
import EmailIcon from "@mui/icons-material/Email";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import brandLarge from "../../assets/logos/branding/Brand-large-no-subtitle-white-text-black-background.svg";
import brandSmall from "../../assets/logos/branding/Brand-large-no-subtitle-white-text-no-background.svg";

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
					<div className="large-menu">
						<ul className="large-menu-list">
							<li>
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>
							<li>
								<Link to="/portfolio" className="nav-link">
									Portfolio
								</Link>
							</li>
							<li>
								<Link to="/contact" className="nav-link">
									Contact
								</Link>
							</li>

							<li>
								<Link to="/about" className="nav-link">
									About
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
