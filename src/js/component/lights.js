import { nodeName } from "jquery";
import React, { useState } from "react";

const TrafficLights = () => {
	const [glowRed, setGlowRed] = useState({
		boxShadow: " "
	});
	const [glowYellow, setGlowYellow] = useState({
		boxShadow: " "
	});
	const [glowGreen, setGlowGreen] = useState({
		boxShadow: " "
	});

	const lightRedActive = () => {
		setGlowRed(document.querySelector(".redLight").classList.add("active"));
		setGlowYellow(
			document.querySelector(".yellowLight").classList.contains("active")
				? document
						.querySelector(".yellowLight")
						.classList.remove("active")
				: " "
		);
		setGlowGreen(
			document.querySelector(".greenLight").classList.contains("active")
				? document
						.querySelector(".greenLight")
						.classList.remove("active")
				: " "
		);
	};
	const lightYellowActive = () => {
		setGlowRed(
			document.querySelector(".redLight").classList.contains("active")
				? document.querySelector(".redLight").classList.remove("active")
				: " "
		);
		setGlowYellow(
			document.querySelector(".yellowLight").classList.add("active")
		);
		setGlowGreen(
			document.querySelector(".greenLight").classList.contains("active")
				? document
						.querySelector(".greenLight")
						.classList.remove("active")
				: " "
		);
	};
	const lightGreenActive = () => {
		setGlowRed(
			document.querySelector(".redLight").classList.contains("active")
				? document.querySelector(".redLight").classList.remove("active")
				: " "
		);
		setGlowYellow(
			document.querySelector(".yellowLight").classList.contains("active")
				? document
						.querySelector(".yellowLight")
						.classList.remove("active")
				: " "
		);
		setGlowGreen(
			document.querySelector(".greenLight").classList.add("active")
		);
	};

	const newStyle = () => {};
	return (
		<div>
			<div className="trafficTop"></div>
			<div className="background">
				<div className="redLight" onClick={lightRedActive}></div>
				<div className="yellowLight" onClick={lightYellowActive}></div>
				<div className="greenLight" onClick={lightGreenActive}></div>
			</div>
		</div>
	);
};
export default TrafficLights;
