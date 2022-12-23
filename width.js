var c = document.getElementById("myCanvas");
const midMargin = 33.12;
const ctx = c.getContext("2d");
var fontSize = "8px";
var fontFam = "Arial";
ctx.font = `${fontSize} ${fontFam}`;
var leftInput = document.querySelector("#left-name");
const leftValue = document.querySelector("#left-value");
const rightInput = document.querySelector("#right-name");
const rightValue = document.querySelector("#right-value");
const leftBox = document.querySelector("#left-box");
const rightBox = document.querySelector("#right-box");
const largeLeftBox = document.querySelector("#large-left-box");
const largeRightBox = document.querySelector("#large-right-box");
const largeLeftBoxText = document.querySelector("#left-box-text");
const largeRightBoxText = document.querySelector("#right-box-text");
const largeBackground = document.querySelector("#large-preview-container");
const line1 = document.querySelectorAll(".line-1");
const largePreview = document.querySelector("#largePreview");

// Large Preview Functionality
largeBackground.addEventListener("click", function () {
	largeBackground.classList.add("hidden");
	console.log("click");
});
largePreview.addEventListener("click", function () {
	largeBackground.classList.remove("hidden");
});

// Text Input Functionality
const preventMore = (e) => {
	e.target.value = e.target.value.slice(0, -1);
};

leftInput.addEventListener("keyup", function () {
	const txt = leftInput.value;
	ctx.font = "8px Arial";
	c.style.width = "255px";
	c.style.height = "144px";
	leftValue.textContent = ctx.measureText(leftInput.value).width.toFixed(2);
	leftBox.style.width = ctx.measureText(leftInput.value).width.toFixed(2) + "px";
	leftBox.innerText = leftInput.value;
	largeLeftBoxText.innerText = leftInput.value;

	ctx.fillText("width:" + ctx.measureText(txt).width.toFixed(2) + "px", 10, 36);
	ctx.fillText(txt, 10, 70);
});

rightInput.addEventListener("keyup", function () {
	const txt = rightInput.value;
	ctx.font = "8px Arial";
	c.style.width = "255px";
	c.style.height = "144px";
	rightValue.textContent = ctx.measureText(rightInput.value).width.toFixed(2);
	rightBox.style.width = ctx.measureText(rightInput.value).width.toFixed(2) + "px";
	largeRightBoxText.innerText = rightInput.value;
	rightBox.innerText = rightInput.value;

	ctx.fillText("width:" + ctx.measureText(txt).width.toFixed(2) + "px", 10, 36);
	ctx.fillText(txt, 10, 70);

	// function addSpace() {
	// 	rightInput.value = txt + " ";
	// 	rightInput.removeEventListener("blur", addSpace(), true);
	// }
	// rightInput.addEventListener("blur", addSpace(), true);
});

line1.forEach((input) => {
	input.addEventListener("keyup", (e) => {
		const totalWidth = document.querySelector("#total-width");
		const width = parseFloat(rightBox.style.width) + parseFloat(leftBox.style.width);
		totalWidth.textContent = width;
		if (width + midMargin + 12.45 * 2 + 21 > 255) {
			rightBox.style.color = "red";
			leftBox.style.color = "red";
			rightInput.style.color = "red";
			leftInput.style.color = "red";
			totalWidth.style.color = "red";
			totalWidth.textContent += " **WARNING!!** - Content will overflow!!";
			largePreview.disabled = true;
			largePreview.classList.add("disabled");
			rightInput.addEventListener("keyup", preventMore, true);
			leftInput.addEventListener("keyup", preventMore, true);
		} else {
			rightBox.style.color = "black";
			leftBox.style.color = "black";
			rightInput.style.color = "black";
			leftInput.style.color = "black";
			rightInput.style.borderColor = "gray";
			leftInput.style.borderColor = "gray";
			totalWidth.style.color = "black";
			largePreview.disabled = false;
			largePreview.classList.remove("disabled");
			rightInput.removeEventListener("keyup", preventMore, true);
			leftInput.removeEventListener("keyup", preventMore, true);
			e.target.disabled = false;
		}
	});
});
