import ImageWithText from "@/components/ImageWithText/page";

export default function Home() {
	return (
		<div>
			<ImageWithText
				imageUrl='/logo.jpg'
				headerText='Nagłówek'
				text='To jest przykładowy tekst.'
			/>
		</div>
	);
}
