import React, { useState } from "react";

const TrafficLights = () => {
	return (
		<div>
			<div className="trafficTop"></div>
			<div className="background">
				<div className="redLight trafficLight"></div>
				<div className="yellowLight trafficLight"></div>
				<div className="greenLight trafficLight"></div>
			</div>
		</div>
	);
};
export default TrafficLights;
