import React from "react";
import "./navmenu.scss";

export default function NavMenu({ menuOpen, setMenuOpen }) {
	return (
		<div className={"navmenu " + (menuOpen && "active")}>
			{/* //if menuOpen is true, add active class */}
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#intro" className="nav-link">
						Home
					</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#contact">Contact</a>
				</li>

				<li onClick={() => setMenuOpen(false)}>
					<a href="#about">About</a>
				</li>
			</ul>
		</div>
	);
}
