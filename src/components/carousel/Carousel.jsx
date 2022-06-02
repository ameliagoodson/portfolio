import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
import goodsongardens from "../../assets/projects/mobile-Goodson-Gardens.png";
import ggLogo from "../../assets/projects/gg-logo-white.svg";
import calcul8 from "../../assets/projects/mobile-Calcul823.png";
import expenseTracker from "../../assets/projects/mobile-Expense-Tracker.png";
import React from "react";
import { useState } from "react";
import htmlLogo from "../../assets/logos/html.png";
import cssLogo from "../../assets/logos/css3.png";
import jsLogo from "../../assets/logos/javascript.svg";
import jqueryLogo from "../../assets/logos/jquery.jpg";
import adobeAI from "../../assets/logos/adobe-illustrator.png";
import figmaLogo from "../../assets/logos/figma.png";
import bootstrapLogo from "../../assets/logos/bootstrap.png";
import accessibilityLogo from "../../assets/logos/accessibility.png";
import yourNews from "../../assets/projects/mobile-your-news.png";
import ajaxLogo from "../../assets/logos/ajax.png";
import githubLogo from "../../assets/logos/github.png";
import reactLogo from "../../assets/logos/react.png";

export default function CarouselWork() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div>
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				interval={999999999}
			>
				<Carousel.Item>
					<div className="carousel-item-container">
						<div className="carousel-left">
							<img
								className="d-block carousel-img"
								src={expenseTracker}
								alt="Second slide"
							/>
						</div>
						<div className="carousel-right">
							<div className="container-heading">
								<h2 className="heading-project">
									Expense tracker
								</h2>
								<h3 className="subheading-project">
									Track and visualise personal expenses
								</h3>
								<div className="links-container">
									<h4 className="link-project">
										<a href="https://ameliagoodson.github.io/Expense-Tracker/">
											Live site
										</a>
									</h4>
									<h4 className="link-project">
										<a href="https://github.com/ameliagoodson/Expense-Tracker">
											Github
										</a>
										<img
											src={githubLogo}
											alt="Github logo"
											className="icon-program"
										/>
									</h4>
								</div>
							</div>
							<div className="container-description">
								<p>
									Allows a user to add expenses including an
									amount, title and date incurred, which are
									output in an expense list and{" "}
									<span className="highlight">
										dynamically displayed
									</span>{" "}
									in a chart.
								</p>
								<p>
									Coded in{" "}
									<span className="highlight">
										React native
									</span>{" "}
									using JSX. Makes use of props (child to
									parent and parent to child),{" "}
									<span className="highlight">
										manipulates state
									</span>{" "}
									using the useState hook, and dynamically
									outputs styles and content based on user
									input.
								</p>
							</div>
							<div className="logo-container">
								<img
									src={htmlLogo}
									alt="HTML logo"
									className="icon-program"
								/>
								<img
									src={cssLogo}
									alt="CSS logo"
									className="icon-program"
								/>
								<img
									src={reactLogo}
									alt="JavaScript logo"
									className="icon-program"
								/>
							</div>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="carousel-item-container">
						<div className="carousel-left">
							<img
								className="d-block carousel-img"
								src={goodsongardens}
								alt="First slide"
							/>
						</div>
						<div className="carousel-right">
							<div className="container-heading">
								<h2 className="heading-project">
									Goodson Gardens{" "}
									<img
										src={ggLogo}
										alt="Goodson Gardens logo"
										className="logo-project"
									/>{" "}
								</h2>
								<h3 className="subheading-project">
									Local business website
								</h3>
								<div className="links-container">
									<h4 className="link-project">
										<a href="https://ameliagoodson.github.io/Goodson-Gardens/">
											Live site
										</a>
									</h4>
									<h4 className="link-project">
										<a href="https://github.com/ameliagoodson/Goodson-Gardens">
											Github
										</a>
										<img
											src={githubLogo}
											alt="Github logo"
											className="icon-program"
										/>
									</h4>
								</div>
							</div>
							<div className="container-description">
								<p>
									Showcases a small landscaping business.{" "}
									<span className="highlight">
										High contrast design
									</span>{" "}
									and bold photos to capture attention. The{" "}
									<span className="highlight">
										waratah logo
									</span>{" "}
									reflects the business location and the
									owner's fondness for waratahs.{" "}
									<span className="highlight">
										High accessibility
									</span>{" "}
									score tested with{" "}
									<a href="https://wave.webaim.org">
										WAVE®
									</a>
								</p>
							</div>
							<div className="container-features">
								<div className="features-div">
									<p>
										Layout and design in semantic HTML and
										CSS. Fully{" "}
										<span className="highlight">
											responsive.
										</span>{" "}
										Form validation with jQuery.
										Lightbox/modal box in gallery made with
										JS. Toggle dot menu for mobile and full
										menu for larger devices. Back to top
										button to{" "}
										<span className="highlight">
											ease navigation
										</span>{" "}
										Logo designed in Illustrator. Visual{" "}
										<span className="highlight">
											mockups
										</span>{" "}
										created in Figma. Booking and contact
										functionality via embedding Calendly and
										Formspree.
									</p>
									<div className="logo-container">
										<img
											src={htmlLogo}
											alt="HTML logo"
											className="icon-program"
										/>
										<img
											src={cssLogo}
											alt="CSS logo"
											className="icon-program"
										></img>
										<img
											src={jsLogo}
											alt="JavaScript logo"
											className="icon-program"
										/>
										<img
											src={jqueryLogo}
											alt="jQuery logo"
											className="icon-program"
										/>
										<img
											src={adobeAI}
											alt="Adobe Illustrator logo"
											className="icon-program"
										/>{" "}
										<img
											src={figmaLogo}
											alt="Figma logo"
											className="icon-program"
										></img>
										<img
											src={accessibilityLogo}
											alt="Accessibility logo"
											className="icon-program"
										></img>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="carousel-item-container">
						<div className="carousel-left">
							<img
								className="d-block carousel-img"
								src={calcul8}
								alt="Second slide"
							/>
						</div>
						<div className="carousel-right">
							<div className="container-heading">
								<h2 className="heading-project">Calcul8</h2>
								<h3 className="subheading-project">
									Calculators and conversions
								</h3>
								<div className="links-container">
									<h4 className="link-project">
										<a href="https://ameliagoodson.github.io/Calculat8/">
											Live site
										</a>
									</h4>
									<h4 className="link-project">
										<a href="https://github.com/ameliagoodson/Calculat8">
											Github
										</a>
										<img
											src={githubLogo}
											alt="Github logo"
											className="icon-program"
										/>
									</h4>
								</div>
							</div>
							<div className="container-description">
								<p>
									Calculat8 is a cheerfully-coloured
									frontend website featuring a main basic
									calculator, a BMI calculator, conversions
									of distance, length and temperature, and a
									tips and split bill calculator.
								</p>
								<p>
									Web design and layout in HTML, CSS, and
									modified Bootstrap. Functionality of all
									calculators in native JavaScript. Icons
									designed in Adobe Illustrator. Hexagonal
									pattern on navigation bar created with SVG
									pattern generator,{" "}
									<a href="https://pattern.monster/">
										Pattern Monster
									</a>
									. Radial gradient overlay made with{" "}
									<a href="https://cssgradient.io/">
										CSS Gradient
									</a>
									.
								</p>
							</div>
							<div className="logo-container">
								<img
									src={htmlLogo}
									alt="HTML logo"
									className="icon-program"
								/>
								<img
									src={cssLogo}
									alt="CSS logo"
									className="icon-program"
								/>
								<img
									src={bootstrapLogo}
									alt="
												Bootstrap logo"
									className="icon-program"
								/>
								<img
									src={jsLogo}
									alt="JavaScript logo"
									className="icon-program"
								/>
								<img
									src={adobeAI}
									alt="Adobe Illustrator logo"
									className="icon-program"
								/>
							</div>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="carousel-item-container">
						<div className="carousel-left">
							<img
								className="d-block carousel-img"
								src={yourNews}
								alt="First slide"
								// height=""
							/>
						</div>
						<div className="carousel-right">
							<div className="container-description">
								<h2 className="heading-project">
									Your News
								</h2>
								<h3 className="subheading-project">
									News and weather website
								</h3>
								<div className="links-container">
									<h4 className="link-project">
										<a href="https://ameliagoodson.github.io/Your-News/">
											Live site
										</a>
									</h4>
									<h4 className="link-project">
										<a href="https://github.com/ameliagoodson/Your-News">
											Github
										</a>
										<img
											src={githubLogo}
											alt="Github logo"
											className="icon-program"
										/>
									</h4>
								</div>

								<p>
									This web application uses six APIs to
									provide users with news articles available
									in a number of languages, and to provide
									weather information based on the user's
									geolocation or user search input. It also
									displays a 'trending news' section. The
									website is fully responsive and is
									attractive on both desktop and mobile
									phones, with the sidebars switching
									location to a central navigation pane
									under a certain screen size to aid for
									better navigation and user experience on
									smaller devices. The 'Covid News' feature
									is a handy link to the latest COVID-19
									information globally. If a user wishes to
									view more specific news on this subject,
									they can use the search bar.
								</p>
								<div className="logo-container">
									<img
										src={htmlLogo}
										alt="HTML logo"
										className="icon-program"
									/>
									<img
										src={cssLogo}
										alt="CSS logo"
										className="icon-program"
									></img>
									<img
										src={jsLogo}
										alt="JavaScript logo"
										className="icon-program"
									/>
									<img
										src={jqueryLogo}
										alt="jQuery logo"
										className="icon-program"
									/>
									<img
										src={ajaxLogo}
										alt="AJAX logo"
										className="icon-program-wide"
									/>
								</div>
							</div>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
