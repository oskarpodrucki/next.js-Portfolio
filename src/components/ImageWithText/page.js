export default function ImageWithText({ imageUrl, headerText, text }) {
	return (
		<div>
			<img
				src={imageUrl}
				alt={"imageimportedbyprop"}
				style={{ width: "100px", height: "100px" }}
			/>
			<h1>{headerText}</h1>
			<p>{text}</p>
		</div>
	);
}
