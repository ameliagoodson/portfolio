import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import "./app.scss";
import { useState } from "react";
import NavMenu from "./components/navmenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="app">
			<Navbar
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
			<NavMenu
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
			<div className="sections">
				<Intro className="intro" />
				<Portfolio className="portfolio" />
				<Contact className="contact" />
				<About className="about" />
			</div>
		</div>
	);
}

export default App;
