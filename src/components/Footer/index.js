import Link from "next/link";
import Logo from "../Logo";
import styles from "@/styles/footer.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.links}>
				<Link href='https://x.com/podrucki444'>Twitter</Link> |{" "}
				<Link href='https://www.linkedin.com/in/oskar-podrucki-5198322b7/'>
					LinkedIn
				</Link>{" "}
				|{" "}
				<Link href='https://www.instagram.com/podrucki444/?next=%2F'>
					Instagram
				</Link>{" "}
				| <Link href='https://github.com/oskarpodrucki'>GitHub</Link>
			</div>
			<h3 className={styles["privacy-policy"]}>Privacy Policy</h3>
			<h4 className={styles["copyright"]}>
				© 2024 Oskar Podrucki. All rights reserved
			</h4>
		</div>
	);
}
