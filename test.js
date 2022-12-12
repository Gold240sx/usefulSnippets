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

const webURL = document.querySelector("#url_input");

webURL.addEventListener("keyup", (e) => {
	input = e.target.value;

	if (input.startsWith("www.")) {
		console.log("triggered");
		const wwwdot = "www.";
		webURL.value = input.slice(wwwdot.length);
		alert(`
            Per Guidelines provided by Baylor Scott, 
            your business card's website may not 
            begin with any of the following:
                
                www.
                https:
                https://www.
                http://
                http://www.

            Please type in your website with the format: 

                                     "Website.com"

            Thank you!
        `);
	}
	webURL.removeEventListener("keyup");
});

// <h2>Per Guidelines provided by Baylor Scott, they do not allow websites on your business card to include any of the following:</h2> <br/>
// <p>Please type in your website with the format: "Website.com"</p>
// <ul>
//     <li>www.</li>
//     <li>https:// </li>
//     <li>https://www.</li>
//     <li>http:// </li>
//     <li>http://www.</li>
// </ul>
const email = document.querySelector("#email");
// const EML_ORGONLY_REGEX = /[a-z0-9-]+\( .org | uspi.com )/g;
// const EML_ORGONLY_REGEX = /[a-z-]+(.org|uspi.com)/s;
// const EML_ORGONLY_REGEX = /[a-z-]+((?!@uspi.org)(@+[a-z-]+(.org))|(@uspi.com))?$/;
const EML_ORGONLY_REGEX = /[a-z-]+((?!uspi).*\.org|.*\@uspi.com)$/m;

email.addEventListener("keyup", emailProcess, true);
function emailProcess(e) {
	var input = e.target.value;
	switch (EML_ORGONLY_REGEX.test(input)) {
		case true:
			console.log("true");
			lastIndex = 0;
			break;
		case false:
			// console.log("false");
			lastIndex = 0;
			break;
	}
}

// const EML_ORGONLY_REGEX = /(?:https?:\/\/)?(?:www\.)?[a-z-]+\.(?:org)(?:\[a-z]{0,0})?/g;
// email.addEventListener("keyup", emailProcess, true);
// function emailProcess(e) {
// 	var input = e.target.value;
// 	// console.log(EML_ORGONLY_REGEX.test(input));
// 	// console.log({ input });
// 	switch (EML_ORGONLY_REGEX.test(input)) {
// 		case true:
// 			// console.log("true");
// 			// console.log(input.length);
// 			// console.log(input.slice(-3));
// 			break;
// 		// case false:
// 		// 	console.log("false");
// 		// 	break;
// 	}
// }
