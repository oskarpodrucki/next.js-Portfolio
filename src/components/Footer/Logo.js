import Image from "next/image";

export default function Logo() {
	return (
		<div>
			<Image src='/logo.jpg' width={69} height={69} alt='logo' />
		</div>
	);
}
