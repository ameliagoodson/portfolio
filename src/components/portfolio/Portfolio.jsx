import React from "react";
import "./portfolio.scss";
import CarouselWork from "../carousel/Carousel.jsx";

export default function Portfolio() {
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<CarouselWork />
		</div>
	);
}
