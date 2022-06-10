import React from "react";

const SecondsCounter = ({ segundos }) => {
	//segundos++;
	//console.log(segundos);
	return (
		<>
			<div className="d-flex justify-content-center p-2 m-auto fs-1 text">
				<h1 className="text-primary shadow-lg p-3 mb-5 bg-body rounded">
					Mi Contador:
				</h1>
			</div>
			<div className="d-flex justify-content-center p-2 m-auto shadow-lg p-3 mb-5 bg-body rounded w-25 h-25">
				<div
					className="bg-secondary fs-1 text shadow-lg p-3 m-auto mb-5 rounded text-center "
					style={{ width: "70px" }}>
					<i className="fa-solid fa-clock"></i>
				</div>
				<div
					className="bg-secondary fs-1 text shadow-lg p-3 m-2 mb-5 rounded text-center"
					style={{ width: "40px" }}>
					{segundos[3]}
				</div>

				<div
					className="bg-secondary fs-1 text shadow-lg p-3 m-2 mb-5 rounded text-center"
					style={{ width: "40px" }}>
					{segundos[2]}
				</div>

				<div
					className="bg-secondary fs-1 text shadow-lg p-3 m-2 mb-5 rounded text-center"
					style={{ width: "40px" }}>
					{segundos[1]}
				</div>

				<div
					className="bg-secondary fs-1 text shadow-lg p-3 m-2 mb-5 rounded text-center"
					style={{ width: "40px" }}>
					{segundos[0]}
				</div>
			</div>
		</>
	);
};

export default SecondsCounter;
