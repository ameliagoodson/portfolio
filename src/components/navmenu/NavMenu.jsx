import React from "react";
import "./navmenu.scss";
import { Link } from "react-router-dom";

export default function NavMenu({ menuOpen, setMenuOpen }) {
	return (
		<div className={"navmenu " + (menuOpen && "active")}>
			{/* //if menuOpen is true, add active class */}
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<Link to="/portfolio" className="nav-link">
						Portfolio
					</Link>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<Link to="/contact" className="nav-link">
						Contact
					</Link>
				</li>

				<li onClick={() => setMenuOpen(false)}>
					<Link to="/about" className="nav-link">
						About
					</Link>
				</li>
			</ul>
		</div>
	);
}
