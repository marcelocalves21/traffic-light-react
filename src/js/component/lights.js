import { nodeName } from "jquery";
import React, { useState } from "react";

const TrafficLights = () => {
	const [glow, setGlow] = useState("");
	const glowing = color => {
		switch (color) {
			case "red":
				setGlow("red");
		}
	};

	const newStyle = () => {};
	return (
		<div>
			<div className="trafficTop"></div>
			<div className="background">
				<div
					className={"redLight " + (glow === "red" ? "active" : "")}
					onClick={() => setGlow("red")}></div>
				<div
					className={
						"yellowLight " + (glow === "yellow" ? "active" : "")
					}
					onClick={() => setGlow("yellow")}></div>
				<div
					className={
						"greenLight " + (glow === "green" ? "active" : "")
					}
					onClick={() => setGlow("green")}></div>
			</div>
		</div>
	);
};
export default TrafficLights;
