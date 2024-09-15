import ImageWithText from "@/components/ImageWithText/page";
import TextBlock from "@/components/TextBlock/page";
import ItemList from "@/components/ItemList/page";
import styles from "@/styles/about.module.css";

const services = [
	"Web Development",
	"Web Application Development",
	"SEO Optimization",
	"Linux System Administration",
	"2D/3D Graphics and Video Editing",
];

const skills = [
	"HTML, CSS, JavaScript",
	"React, Next.js",
	"Python",
	"Linux",
	"Database Management (SQL, NoSQL)",
];

const hobbies = [
	"Music Creation",
	"2D/3D Graphics",
	"Reading books",
	"Watching films/serials",
	"Gym",
	"Freelancing",
	"Self-Improvement",
];

export default function About() {
	return (
		<div className={styles.aboutPage}>
			<ImageWithText
				imageUrl='/logo.jpg' // Insert the path to the image
				headerText='Oskar – Technician Programmer'
				text='I am a technology enthusiast and a programmer with experience in creating websites and applications. I specialize in both frontend and backend technologies.'
				showButton={false}
			/>
			<TextBlock
				heading='My Skills'
				content='Explore my key skills in programming, web development, and multimedia:'
			/>
			<ItemList items={skills} />
			<TextBlock
				heading='My Interests'
				content='Check out my interests:'
			/>
			<ItemList items={hobbies} />
		</div>
	);
}
