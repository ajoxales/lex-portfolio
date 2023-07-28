"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter, Poppins } from "next/font/google";
import NavbarComp from "@/components/NavbarComp";
import Footer from "@/components/Footer";
import "../app/globals.css";
import Head from "next/head";
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
	title: "Lex Oxales",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Lex Oxales</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
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
