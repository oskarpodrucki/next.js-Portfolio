import Link from "next/link";
import Logo from "./Logo";
import styles from "@/styles/footer.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.links}>
				<Link href='/'>Twitter</Link>| <Link href='/portfolio'>Linkedin</Link> |{" "}
				<Link href='/services'>Instagram</Link>
			</div>
			<h3 className={styles["privacy-policy"]}>Privacy Policy</h3>
			<h4 className={styles["copyright"]}>
				© 2024 Oskar Podrucki. All rights reserved
			</h4>
		</div>
	);
}
