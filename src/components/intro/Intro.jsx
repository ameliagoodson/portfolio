import "./intro.scss";
import "../../global.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import spiderwebTop from "../../assets/spider-web-top_1.svg";
import resume from "../../assets/Resume-Amelia-Goodson.pdf";
import linkedInLogo from "../../assets/logos/linkedin.png";
import { Link } from "react-router-dom";
import About from "../about/About";
import webLogo from "../../assets/logos/spider-web-logo-small.png";

export default function Intro() {
	const textRef = useRef();
	useEffect(() => {
		//ityped information (the typing animation)
		init(textRef.current, {
			showCursor: true,
			strings: [
				"Web developer",
				"Front-end engineer",
				"UX Designer",
			],
			typeSpeed: 100,
			backDelay: 1000,
			startDelay: 1500,
		});
	}, []);
	return (
		<div>
			<div className="intro" id="intro">
				<img
					className="spiderweb-top"
					src={spiderwebTop}
					alt="finely draping cob web"
				></img>
				<div className="cta">
					<h1>
						Amelia{" "}
						<img
							src={webLogo}
							alt="Pink spider web logo"
							className="web-logo"
						></img>{" "}
						Goodson
					</h1>
					<h2>
						<span ref={textRef}></span>
					</h2>
				</div>
				<div className="btn-container">
					<button className="btn-portfolio">
						<Link
							to="/portfolio"
							className="anchor-portfolio"
						>
							Portfolio
						</Link>
					</button>
				</div>
				<div className="intro-container">
					<div className="intro-para">
						{" "}
						Hey, I'm Amelia. I like designing and coding
						websites that are easy to use and nice to look
						at. I made this site and I think it's pretty
						nice. Click{" "}
						<Link to="/portfolio" className="highlight">
							{" "}
							here{" "}
						</Link>
						to see the rest of my work.
					</div>
					<div className="links-career">
						<a href={resume} className="link-resume">
							<h3>Resume</h3>
						</a>
						<a
							href="https://www.linkedin.com/in/ameliagoodson/"
							className="link-linkedin"
						>
							<h3>
								LinkedIn{" "}
								<img
									src={linkedInLogo}
									alt="LinkedIn logo"
									height="30px"
								></img>
							</h3>
						</a>
					</div>
				</div>
			</div>
			<About />
		</div>
	);
}
