"use client";
import { Poppins } from "next/font/google";
import NavbarComp from "@/components/NavbarComp";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Lex Oxales",
	viewport: "width=device-width, initial-scale=1",
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Lex Oxales</title>
				<link rel="icon" href="/code.png" />
			</head>
			<body className={`${poppins.className}`} id="about">
				<NavbarComp />
				{children}
				<Footer />
			</body>
		</html>
	);
}
