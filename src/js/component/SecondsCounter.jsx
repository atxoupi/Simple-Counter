import React from "react";

const SecondsCounter = ({ segundos, s2, s3, s4 }) => {
	//segundos++;
	//console.log(segundos);
	return (
		<>
			<div className="d-flex justify-content-center p-2 m-auto fs-1 text">
				<h1 className="text-primary shadow-lg p-3 mb-5 bg-body rounded">
					Mi Contador:
				</h1>
			</div>
			<div className="d-flex justify-content-center p-2 m-auto shadow-lg p-3 mb-5 bg-body rounded w-25">
				<div
					className="bg-secondary fs-1 text shadow-lg p-3 mb-5 rounded text-center"
					style={{ width: "40px" }}>
					{s4}
				</div>
				<div className="fs-1 text M-2 "> : </div>
				<div
					className="bg-secondary fs-1 text shadow-lg p-3 mb-5 rounded text-center"
					style={{ width: "40px" }}>
					{s3}
				</div>
				<div className="fs-1 text M-2 "> : </div>
				<div
					className="bg-secondary fs-1 text shadow-lg p-3 mb-5 rounded text-center"
					style={{ width: "40px" }}>
					{s2}
				</div>
				<div className="fs-1 text M-2 "> : </div>
				<div
					className="bg-secondary fs-1 text shadow-lg p-3 mb-5 rounded text-center"
					style={{ width: "40px" }}>
					{segundos}
				</div>
			</div>
		</>
	);
};

export default SecondsCounter;
