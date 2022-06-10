//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
/*let segundos;
let myinterval;
document.querySelector("body").addEventListener("onload", function () {
	segundos = 0;val = setInterval(imprimir(segundos), 1000);
	myinter
});

function imprimir(segundos) {
	ReactDOM.render(<Home tiempo={segundos} />, document.querySelector("#app"));
	//segs++;
}*/

let arr = [0, 0, 0, 0];
//tiempo={num} t2={num1} t3={num2} t4={num3}
setInterval(function () {
	ReactDOM.render(<Home tiempo={arr} />, document.querySelector("#app"));
	if (arr[0] === 9) {
		arr[0] = 0;
		arr[1]++;
		if (arr[1] === 9) {
			arr[1] = 0;
			arr[2]++;
			if (arr[2] === 9) {
				arr[2] = 0;
				arr[3]++;
				if (arr[3] === 9) {
					arr[3] = 0;
					arr[0]++;
				}
			}
		}
	} else arr[0]++;
}, 1000);
