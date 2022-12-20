var c = document.getElementById("myCanvas");
const midMargin = 33.12;
const ctx = c.getContext("2d");
var fontSize = "8px";
var fontFam = "Arial";
ctx.font = `${fontSize} ${fontFam}`;
var leftInput = document.querySelector("#left-name");
const leftValue = document.querySelector("#left-value");
const rightValue = document.querySelector("#right-value");
const leftBox = document.querySelector("#left-box");
const rightBox = document.querySelector("#right-box");

leftInput.addEventListener("keyup", function () {
	const txt = leftInput.value;
	ctx.font = "14px Arial";
	leftValue.textContent = ctx.measureText(leftInput.value).width.toFixed(2);
	leftBox.style.width = ctx.measureText(leftInput.value).width.toFixed(2) + "px";
	leftBox.textContent = leftInput.value;

	ctx.fillText("width:" + ctx.measureText(txt).width.toFixed(2) + "px", 10, 36);
	ctx.fillText(txt, 10, 70);
});
