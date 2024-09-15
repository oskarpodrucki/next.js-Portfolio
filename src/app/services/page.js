import TextBlock from "@/components/TextBlock/page";
import ItemList from "@/components/ItemList/page";
import styles from "@/styles/services.module.css";

export default function Services() {
	const services = [
		"Web development",
		"Web application development",
		"Database management",
		"Linux system administration",
		"2D/3D graphics and video editing",
	];

	return (
		<div className={styles.servicesPage}>
			<TextBlock
				heading='What do I offer?'
				content='I offer a wide range of services related to software development, server management, and computer graphics.'
			/>
			<h2>My services:</h2>
			<ItemList items={services} />
		</div>
	);
}
