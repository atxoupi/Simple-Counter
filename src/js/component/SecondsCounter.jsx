import React from "react";

const SecondsCounter = ({ segundos, s2, s3, s4 }) => {
	//segundos++;
	//console.log(segundos);
	return (
		<>
			<h1>
				Mi Contador: {s4} : {s3} : {s2} : {segundos}
			</h1>
		</>
	);
};

export default SecondsCounter;
