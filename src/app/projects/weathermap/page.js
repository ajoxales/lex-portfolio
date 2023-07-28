"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderComponent from "@/app/projects/weathermap/components/HeaderComponent";
import MapComponent from "@/app/projects/weathermap/components/MapComponent";

import { Rubik } from "next/font/google";
import Head from "next/head";

const rubik = Rubik({ subsets: ["latin"] });

const page = () => {
	return (
		<>
			<Head>
				<title>WeatherMap</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/map.png" />
			</Head>
			<main className={`${rubik.className} bg-transparent`}>
				<HeaderComponent />
				<MapComponent />
			</main>
		</>
	);
};

export default page;
