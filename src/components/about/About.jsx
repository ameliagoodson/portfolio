import "./about.scss";

export default function About() {
	return (
		<div className="about" id="about">
			<div className="about-container">
				<h1>ABOUT</h1>
				<p>
					{" "}
					Hi, I'm Amelia. I'm an inquisitive and driven web
					developer with a flair for design and thirst for
					knowledge. I'm pursuing job opportunities in web
					development, engineering or UX Design so if you're
					looking to hire, you can get in touch{" "}
					<a href="#contact" className="highlight">
						here
					</a>{" "}
					or check out my{" "}
					<a
						href="https://www.linkedin.com/in/ameliagoodson/"
						className="highlight"
					>
						LinkedIn
					</a>
					.
				</p>
				<p>
					I have experience in maintaining corporate
					websites and creating content that adheres to
					brand style guides, engages stakeholders and
					delivers conversions. With certifications in full
					stack development, UX Design, IT support, digital
					marketing, business and law, I'm looking to build
					on these skills to create seamless websites that
					are both smart and beautiful.
				</p>
				<h2>Tech skills</h2>
				<ul className="list-skills">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React and JSX</li>
					<li>jQuery</li>
					<li>Familiarity with Node.js</li>
					<li>
						Github, version control, Webpack and Babel
					</li>
					<li>Implementing APIs using AJAX</li>
				</ul>
				<h2>Other skills</h2>
				<ul className="list-skills">
					<li>Professional communications</li>
					<li>Policy writing and research</li>
					<li>Documentation writing and user training </li>
					<li>Copywriting and proofreading</li>
				</ul>
			</div>
		</div>
	);
}
