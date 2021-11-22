import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import "./app.scss";
import { useState } from "react";
import NavMenu from "./components/navmenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter as Router,
	Route,
	// Switch,
} from "react-router-dom";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<Router>
			<div className="app">
				<Navbar
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
				/>
				<NavMenu
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
				/>
				<main>
					<Route path="/" component={Intro} exact />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact" component={Contact} />
					<Route path="/about" component={About} />
				</main>
			</div>
		</Router>
	);
}

export default App;
