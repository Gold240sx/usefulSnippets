const counter = document.querySelector("#count");
const input = document.querySelector("#input");
const clear = document.querySelector("#btn");

input.addEventListener("keyup", (event) => {
	counter.textContent = event.target.value.length;
	navigator.clipboard.writeText(input.value.length);
});
clear.addEventListener("click", () => {
	input.value = "";
	counter.textContent = 0;
});
// input.addEventListener("change", (input) => (counter.textContent = input.length));
