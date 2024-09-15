import ImageWithText from "@/components/ImageWithText/page";
import TextBlock from "@/components/TextBlock/page";
import styles from "@/styles/portfolio.module.css";

export default function Portfolio() {
	const projects = [
		{
			imageUrl: "/logo.jpg",
			headerText: "Tic-Tac-Toe Game",
			text: "A classic Tic-Tac-Toe game built with React. Features include a user-friendly interface, game logic to detect wins and ties, and a reset function to start a new game.",
			buttonText: "Learn More",
			buttonLink: "https://github.com/oskarpodrucki/tic-tac-toe-gamereact",
		},
		{
			imageUrl: "/logo.jpg",
			headerText: "Rock-Paper-Scissors Game",
			text: "A Rock-Paper-Scissors game developed in Python. Includes a simple text-based interface where players can compete against the computer, with game logic to determine the winner.",
			buttonText: "Learn More",
			buttonLink: "https://github.com/oskarpodrucki/rock-paper-scissors-gamepy",
		},
	];

	return (
		<div className={styles.portfolioPage}>
			<TextBlock
				heading='My portfolio'
				content='Check out my projects that I consider worthy of attention'
			/>
			{projects.map((project, index) => (
				<ImageWithText
					key={index}
					imageUrl={project.imageUrl}
					headerText={project.headerText}
					text={project.text}
					showButton={true}
					buttonText={project.buttonText}
					buttonLink={project.buttonLink}
				/>
			))}
		</div>
	);
}
