import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//include images into your bundle

//create your first component

const Home = ({ tiempo }) => {
	return (
		<div className="container m-auto">
			<SecondsCounter segundos={tiempo} />
		</div>
	);
};

export default Home;
