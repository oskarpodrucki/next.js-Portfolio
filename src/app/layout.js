import "@/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
	title: "oskarpodrucki - portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
