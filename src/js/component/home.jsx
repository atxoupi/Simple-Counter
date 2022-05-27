import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//include images into your bundle

//create your first component

const Home = ({ tiempo, t2, t3, t4 }) => {
	return (
		<div>
			<SecondsCounter segundos={tiempo} s2={t2} s3={t3} s4={t4} />
		</div>
	);
};

export default Home;
