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
let num = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
setInterval(function () {
	ReactDOM.render(
		<Home tiempo={num} t2={num1} t3={num2} t4={num3} />,
		document.querySelector("#app")
	);
	if (num === 9) {
		num = 0;
		num1++;
		if (num1 === 9) {
			num1 = 0;
			num2++;
			if (num2 === 9) {
				num2 = 0;
				num3++;
				if (num3 === 9) {
					num3 = 0;
					num++;
				}
			}
		}
	} else num++;
}, 1000);
