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
		setGlowRed({ boxShadow: "0px 0px 50px 10px rgba(255, 255, 0, .8)" });
		setGlowYellow({ boxShadow: " " });
		setGlowGreen({ boxShadow: " " });
	};
	const lightYellowActive = () => {
		setGlowRed({ boxShadow: "" });
		setGlowYellow({ boxShadow: "0px 0px 50px 10px rgba(255, 255, 0, .8)" });
		setGlowGreen({ boxShadow: "" });
	};
	const lightGreenActive = () => {
		setGlowRed({ boxShadow: "" });
		setGlowYellow({ boxShadow: "" });
		setGlowGreen({ boxShadow: "0px 0px 50px 10px rgba(255, 255, 0, .8)" });
	};

	const newStyle = () => {};
	return (
		<div>
			<div className="trafficTop"></div>
			<div className="background">
				<div
					className="redLight"
					onClick={lightRedActive}
					style={glowRed}></div>
				<div
					className="yellowLight"
					onClick={lightYellowActive}
					style={glowYellow}></div>
				<div
					className="greenLight"
					onClick={lightGreenActive}
					style={glowGreen}></div>
			</div>
		</div>
	);
};
export default TrafficLights;
