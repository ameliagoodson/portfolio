import React from "react";
import "./portfolio.scss";
import "../../global.scss";
import Carousel from "../carousel/Carousel.jsx";

export default function Portfolio() {
	return (
		<div className="portfolio">
			<h1 id="portfolio" className="page-heading">
				Portfolio
			</h1>
			<Carousel />
		</div>
	);
}
