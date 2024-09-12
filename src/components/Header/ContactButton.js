import styles from "@/styles/header.module.css";
import Link from "next/link";

export default function ContactButton() {
	return (
		<button className={styles.contactButton}>
			<Link href='/contact'>Contact</Link>
		</button>
	);
}
