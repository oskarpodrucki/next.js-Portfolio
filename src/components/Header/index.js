import Link from "next/link";
import Logo from "../Logo";
import ContactButton from "./ContactButton";
import styles from "@/styles/header.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.links}>
				<Link href='/'>Home</Link> |{" "}
				<Link href='/about'>About</Link> |{" "}
				<Link href='/portfolio'>Portfolio</Link> |{" "}
				<Link href='/services'>Services</Link> |{" "}
				<Link href='/contact'>Contact</Link>
			</div>
			<ContactButton />
		</div>
	);
}
