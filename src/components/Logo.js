import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<div>
			<Link href='/'>
				<Image src='/logo.jpg' width={69} height={69} alt='logo' />
			</Link>
		</div>
	);
}
