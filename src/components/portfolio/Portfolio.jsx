import React from "react";
import "./portfolio.scss";
import Carousel from "../carousel/Carousel.jsx";

export default function Portfolio() {
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<Carousel />
		</div>
	);
}
