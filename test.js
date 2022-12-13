const button = document.querySelector(".buttons");
const value = document.querySelector(".value");

const inputName = document.querySelector("#input-name");
const title = document.querySelector("#input-title");
const combined = document.querySelector("#input-combined");
const TITLE_REGEX = /^(?!.*uspi\.org).+(?:uspi\.com|\.org)$/gm;

inputName.value + title.value;
inputName.onpaste = (e) => e.preventDefault();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// if not, delete
// if so check if next letter is e
// if not delete period.
// if so, check if next letter is M,
// if so, end function
// if not delete period.
function func1(event) {
	var input = inputName.value;

	//Check if period was pressed
	if (event.key === ".") {
		console.log("period has been pressed");
		// now check the previous letter to see if it is M.
		if (input.slice(-2, -1) === "m") {
			console.log("m is the correct letter");
			console.log(event.key);

			//   boiler
			function func2(event) {
				if (event.key === "e") {
					console.log(" e = continue");
					function func3(event) {
						if ((event.key = "M")) {
							console.log("horray all the functions worked!");
							/////////////////////////////////////////////////////////////////////////////////
							box3.removeEventListener("click", func3, true);
						} else if (event.key === "delete") {
							console.log(input.slice(-3));
						} else {
							console.log(input.slice(-3));
							box3.removeEventListener("click", func3, true);
						}
					}
					box3.addEventListener("click", func3, true);
				} else if (event.key === "m") {
					console.log("m.m is not allowed");
				} else {
					inputName.value = input.slice(0, -2);
				}
				/////////////////////////////////////////////////////////////////////////////////
				box2.removeEventListener("click", func2, true);
			}
			box2.addEventListener("click", func2, true);
		} else {
			// delete the period and say it is not allowed.
			inputName.value = input.slice(0, -1);
			console.log("set alert. Period is not valid except for 'M.ED' ");
		}
		/////////////////////////////////////////////////////////////////////////////////
		//now fire func2 event listener to see if the next key pressed is  E...
		box1.removeEventListener("click", func1, true);
	}
	/// fake function 1 content
	combined.value = inputName.value + "  " + title.value;
}
box1.addEventListener("click", func1, true);

//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const checkPeriodOutter = (event) => {
	var input = inputName.value;
	if (event.key === ".") {
		console.log("period has been pressed");

		if (input.slice(-2, -1) === "m") {
			console.log("m is the correct letter");
			console.log(event.key);
			//////////////////////////////////////////////////////////////////////////////////////////
			inputName.addEventListener("keyup", (event) => {
				console.log(event.key);

				if (event.key === "e") {
					console.log(" e = continue");
					// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

					///////////////////////////////////////////////////////////////////////////////////////////////////////////////
				} else if (event.key === "m") {
					console.log("m.m is not allowed");
				} else {
					inputName.value = input.slice(0, -2);
				}
				//
				//
				///
				//
				//
			});
			//////////////////////////////////////////////////////////////////////////////////////////
		} else {
			inputName.value = input.slice(0, -1);
			console.log("set alert. Period is not valid except for 'M.D' ");
		}
		// if not, delete
		// if so check if next letter is e
		// if not delete period.
		// if so, check if next letter is M,
		// if so, end function
		// if not delete period.
	}

	combined.value = inputName.value + "  " + title.value;
};
const checkE = () => {};
const checkD = () => {};

///
///
////
///
////
//
//
//
//
//
//
///
///
//
//
////
////
///
///
//
//
inputName.addEventListener("keyup", (event) => {
	// function respondKeyUp(event) {
	var input = inputName.value;
	if (event.key === ".") {
		console.log("period has been pressed");

		if (input.slice(-2, -1) === "m") {
			console.log("m is the correct letter");
			console.log(event.key);

			const checkM = (e) => {
				//
			};
			//
			//
			//
			//
			//
			//
			inputName.addEventListener("keyup", (event) => {
				console.log(event.key);
				//
				//
				//
				//
				if (event.key === "e") {
					console.log(" e = continue");
					inputName.addEventListener("keyup", (event) => {
						if ((event.key = "delete")) {
							console.log("delete was pressed");
						}
					});
				} else if (event.key === "m") {
					console.log("m.m is not allowed");
				} else {
					inputName.value = input.slice(0, -2);
				}
				//
				//
				///
				//
				//
			});
		} else {
			inputName.value = input.slice(0, -1);
			console.log("set alert. Period is not valid except for 'M.D' ");
		}
		// if not, delete
		// if so check if next letter is e
		// if not delete period.
		// if so, check if next letter is M,
		// if so, end function
		// if not delete period.
	}

	combined.value = inputName.value + "  " + title.value;
});

title.addEventListener("change", () => {
	combined.value = inputName.value + " " + title.value;
});
