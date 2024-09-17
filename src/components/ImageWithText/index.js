import styles from "@/styles/imagewithtext.module.css";
import Link from "next/link";

export default function ImageWithText({
	imageUrl,
	headerText,
	text,
	showButton,
	buttonText,
	buttonLink,
}) {
	return (
		<div className={styles.container}>
			<img
				src={imageUrl}
				alt={"imageimportedbyprop"}
				className={styles.image}
			/>
			<div className={styles.content}>
				<h1 className={styles.header}>{headerText}</h1>
				<p className={styles.text}>{text}</p>

				{/* Render button if showButton is true */}
				{showButton && (
					<Link href={buttonLink} className={styles.button}>
						{buttonText}
					</Link>
				)}
			</div>
		</div>
	);
}
