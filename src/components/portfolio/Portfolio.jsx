import React from "react";
import "./portfolio.scss";
import Carousel from "../carousel/Carousel.jsx";

export default function Portfolio() {
	return (
		<div className="portfolio">
			<h1 id="portfolio">Portfolio</h1>
			<Carousel />
		</div>
	);
}
