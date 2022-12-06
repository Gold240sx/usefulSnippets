const button = document.querySelector(".buttons");
const value = document.querySelector(".value");

(function () {
	var count = 0;
	window.baz = function baz(w1, w2) {
		var output = `${w1} + ${w2}`;
		count = count + 1;
		value.textContent = count;
		console.log(output);
		// return output;
	};
})(window);

button.addEventListener("click", () => window.baz("Hello", "Wisconsin"));

//buzz and bazz are the same.. except count is hidden from global context in the upper and available in the lower.
// only practical application is to enclose variables at the cost of code bloat and hurt performance.

var count = 0;
const buzz = (w1, w2) => {
	var output = `${w1} + ${w2}`;
	count = count + 1;
	value.textContent = count;
	console.log(output);
	// return output;
};
button.addEventListener("click", () => buzz("Hello", "Arizona"));
