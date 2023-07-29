"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import WeatherComponent from "./WeatherComponent";
import { useState, useEffect } from "react";

const MapComponent = () => {
	// Center coordinates for the map
	const [centerCoords, setCenterCoords] = useState({
		lat: 14.300081228945489,
		lng: 120.95477712384054,
	});
	const [clickedCoords, setClickedCoords] = useState(centerCoords);
	const [lat, setLat] = useState(14.299);
	const [long, setLong] = useState(120.959);
	const [loc, setLoc] = useState("");
	const [showWeather, setShowWeather] = useState(false);

	const [day0, setDay0] = useState({
		icon: "",
		high: "",
		low: "",
		condition: "",
	});
	const [day1, setDay1] = useState({
		icon: "",
		high: "",
		low: "",
		condition: "",
	});
	const [day2, setDay2] = useState({
		day: "",
		icon: "",
		high: "",
		low: "",
		condition: "",
	});

	const handleMapClick = (event) => {
		const lati = parseFloat(event.latLng.lat());
		const long = parseFloat(event.latLng.lng());
		setLat(lati);
		setLong(long);

		setClickedCoords({ lat: lati, lng: long });
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowWeather(true);
		}, 500);
		return () => clearTimeout(timer);
	}, [lat, long]);

	useEffect(() => {
		let loc = "";
		const apiKey = "af4ac4ae55334cd4b82114537232407";
		const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${long}&days=3`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const name = data.location.name;
				const region = data.location.region;
				const country = data.location.country;

				const loc1 = name + ", " + region;
				const loc2 = name + ", " + country;
				const loc3 = region + ", " + country;

				{
					region === "" ? setLoc(loc2) : setLoc(loc1);
				}

				{
					name === "" ? setLoc(loc3) : setLoc(loc1);
				}
				console.log(data);

				function getCurrentDay(dataDate) {
					let date = new Date(dataDate);
					let actualDate = date.getDay();
					let dateWord = "";
					switch (actualDate) {
						case 0:
							dateWord = "SUNDAY";
							break;
						case 1:
							dateWord = "MONDAY";
							break;
						case 2:
							dateWord = "TUESDAY";
							break;
						case 3:
							dateWord = "WEDNESDAY";
							break;
						case 4:
							dateWord = "THURSDAY";
							break;
						case 5:
							dateWord = "FRIDAY";
							break;
						case 6:
							dateWord = "SATURDAY";
							break;
					}
					return dateWord;
				}

				function changeTemp(index) {
					const iconUrl = `https:${data.forecast.forecastday[index].day.condition.icon}`;
					let dataDate = data.forecast.forecastday[index].date;
					let curDay = getCurrentDay(dataDate);
					const highTemp =
						data.forecast.forecastday[index].day.maxtemp_c;
					const lowTemp =
						data.forecast.forecastday[index].day.mintemp_c;
					const cond =
						data.forecast.forecastday[index].day.condition.text;

					switch (index) {
						case 0:
							setDay0({
								icon: iconUrl,
								high: highTemp,
								low: ` ${lowTemp} ºC`,
								condition: cond,
							});
							break;
						case 1:
							setDay1({
								icon: iconUrl,
								high: highTemp,
								low: ` ${lowTemp} ºC`,
								condition: cond,
							});
							break;
						case 2:
							setDay2({
								day: curDay,
								icon: iconUrl,
								high: highTemp,
								low: ` ${lowTemp} ºC`,
								condition: cond,
							});
							break;
					}
					console.log(iconUrl);
					console.log(dataDate);
					console.log(curDay);
				}

				changeTemp(0);
				changeTemp(1);
				changeTemp(2);
			});
	}, [lat, long]);

	return (
		<div>
			<div>
				<LoadScript googleMapsApiKey="AIzaSyAjoogJgLV7u5L_w-yotaxTh-qbEQZoND0">
					<GoogleMap
						mapContainerStyle={{ width: "100%", height: "460px" }}
						center={centerCoords}
						zoom={12}
						onClick={handleMapClick}>
						<Marker position={clickedCoords} />
					</GoogleMap>
				</LoadScript>
			</div>
			{showWeather && (
				<WeatherComponent
					loc={loc}
					day2={day2.day}
					day0High={day0.high}
					day1High={day1.high}
					day2High={day2.high}
					day0Low={day0.low}
					day1Low={day1.low}
					day2Low={day2.low}
					day0Cond={day0.condition}
					day1Cond={day1.condition}
					day2Cond={day2.condition}
					icon0={day0.icon}
					icon1={day1.icon}
					icon2={day2.icon}
				/>
			)}
		</div>
	);
};

export default MapComponent;
