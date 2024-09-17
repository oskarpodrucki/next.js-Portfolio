import styles from "@/styles/textblock.module.css"

export default function TextBlock({ heading, content }) {
	return (
		<div className={styles.textBlock}>
			<h2 className={styles.heading}>{heading}</h2>
			<p className={styles.content}>{content}</p>
		</div>
	);
}
