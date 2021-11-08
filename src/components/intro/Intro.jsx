import "./intro.scss";
import "../../global.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import spiderwebTop from "../../assets/spider-web-top_1.svg";
import resume from "../../assets/Resume-Amelia-Goodson.pdf";
import linkedInLogo from "../../assets/logos/linkedin.png";

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
		<div className="intro" id="intro">
			<img
				className="spiderweb-top"
				src={spiderwebTop}
				alt="finely draping cob web"
			></img>
			<div className="cta">
				<h1>Amelia Goodson</h1>
				<h2>
					<span ref={textRef}></span>
				</h2>
			</div>
			<div className="btn-container">
				<button className="btn-portfolio">
					<a href="#portfolio" className="anchor-portfolio">
						Portfolio
					</a>
				</button>
				<div className="links-container">
					<a href={resume} className="link-resume">
						<h3>View Resume</h3>
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
	);
}
