import "./about.scss";
import "../../global.scss";
import { Link } from "react-router-dom";

export default function About() {
	return (
		<div className="about">
			<div className="about-container">
				<h1 id="about">ABOUT</h1>
				<p>
					Originally from the Blue Mountains in Sydney, I
					enjoyed a childhood surrounded by nature before
					escaping surburbia at 18 to move to 'the city'. I
					pursued a degree and career in law in Sydney then
					London without much heart until I learnt about
					nascent technologies like smart contracts and AI
					judicial analysis. I wrote a few research papers
					and my thesis on tech law issues, looking at
					potential liability frameworks (in non-lawyer
					speak: who's guilty here?) for fully autonmous
					vehicles as well as technology in healthcare
					applications, like robot-assisted surgery and
					image recognition systems that can detect cancers.
					I've always been fascinated by the future and as I
					researched and wrote, I found myself - three
					quarters of the way through law - far more
					interested in pursuing a career in technology.{" "}
				</p>
				<p>
					So, before the ink was fresh on the transcript, I
					finished my degree and promptly enrolled in a Full
					Stack Web Development Boot Camp. Sure, making
					pretty designs (I also did a UX Design course) and
					seamless user interfaces is a far cry from Teslas,
					but the fit was right. I also did an IT Support
					Course just to be sure. It feels nice to finally
					know what I'm going to be when I 'grow up'. I'm a
					life long student, though, and my 'to learn' list
					would probably make your eyes water.
				</p>
				<p>
					In my spare time when I'm not designing, coding,
					or wondering why my code doesn't work, I like to
					garden, game, and cook extravagant meals that take
					five hours to make and five minutes to eat.
					Travelling and experiencing different cultures,
					cuisine and landscapes is my greatest passion and
					I hope to see at least one country a year on
					average until I kick the bucket (current total:
					31). I guess I like to write as well, so I'll have
					to update this page with a blog soon.
				</p>{" "}
				<p>
					{" "}
					I'm pursuing job opportunities in web development,
					engineering or UX Design so if you're looking to
					hire, you can get in touch{" "}
					<Link to="/contact" className="highlight">
						here
					</Link>{" "}
					or check out my{" "}
					<a
						href="https://www.linkedin.com/in/ameliagoodson/"
						className="highlight"
					>
						LinkedIn
					</a>
					.
				</p>
			</div>
		</div>
	);
}
