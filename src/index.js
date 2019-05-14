import "./styles.css";

var array1 = ["caio, matheus, roberto, maxsuel, frederico"];
var array2 = ["fernanda", "carol", "juliana", "luisa"];
var spreadInicio = [...array1, ...array2];
var spreadFim = [...array2, ...array1];

document.getElementById("array1").innerHTML = `Array1: ${array1}\n`;

document.getElementById("array2").innerHTML = `Array2: ${array2}\n`;

document.getElementById("btn").addEventListener("click", Spread);

function Spread() {
  document.getElementById(
    "array1combined"
  ).innerHTML = `Array1 + Array2: ${spreadInicio}\n`;
  document.getElementById(
    "array2combined"
  ).innerHTML = `Array2 + Array1: ${spreadFim}\n`;
}
