const input = document.querySelector("#input");
const working = document.querySelector("#working");
const output = document.querySelector("#output");
const tens = document.querySelector("#addTen");
const teens = document.querySelector("#addTeen");
const hundreds = document.querySelector("#addHundred");
const thousands = document.querySelector("#addThousand");
const tenThousands = document.querySelector("#addTenThousand");
const hundredThousands = document.querySelector("#addHundredThousand");
const millions = document.querySelector("#addMillion");
const tenMillions = document.querySelector("#addTenMillion");
const hundredMillions = document.querySelector("#addHundredMillion");

const convertNumToWords = (amount) => {
	const cmaLss = amount.replaceAll(/\,/g, "");
	const wholeNum = Math.floor(cmaLss);
	const length = wholeNum.length;

	const text = {
		0: "",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		15: "fifteen",
		00: "hundred",
		20: "twenty",
		30: "thirty",
		40: "fourty",
		50: "fifty",
		000: "thousand",
		000000: "million",
		000000000: "billion",
		000000000000: "trillion",
		000000000000000: "quadrillion",
	};

	let numData = {
		input: amount,
		output: "",
		slang: "",
	};

	// const calcTens = (num) => {
	// 	if (num.toString().slice(-2) > 1) {
	// 		if (num.toString().slice(-1) == 0) {
	// 			numData.output = num.replace(num, text[num]);
	// 		} else {
	// 			numData.output = num.replace(num, num.toString().slice(-2, -2) + "0" + " " + num.toString().slice(-1, -1));
	// 		}
	// 	} else if (num == 10) {
	// 		numData.output = "ten";
	// 	} else if (num == 14 || num == 16 || num == 17 || num == 19) {
	// 		numData.output = num.replace(num, num.toString().slice(-2, -2) + "teen");
	// 	} else if (num == 18) {
	// 		numData.output = num.replace(num, num.toString().slice(-2, -2) + "een");
	// 	} else {
	// 		numData.output = num.replace(num, text[num]);
	// 	}
	// };

	// const calcHundreds = (num) => {
	// 	numData.output = cmaLss.replace(cmaLss, cmaLss.toString().slice(-3));
	// 	const removedHundred = cmaLss.replace(cmaLss.toString().slice(-3), "");
	// 	//if the tens digit and the 1s digit are 0
	// 	if (removedHundred == 00) {
	// 		// utilize the 100 definition in the text object
	// 		numData.output += text[cmaLss];
	// 	} else {
	// 		numData += calcTens(cmaLss);
	// 	}
	// };

	// const calcThousands = (num) => {
	// 	numData.output = cmaLss.replace(cmaLss, text[cmaLss[0]]);
	// 	const removedThousand = cmaLss.replace(cmaLss[0], "");
	// 	//if the hundreds, tens digit and the 1s digit are 0
	// 	if (removedThousand == 000) {
	// 		// utilize the 1000 definition in the text object
	// 		numData.output += text[cmaLss];
	// 	} else {
	// 		numData += calcHundreds(cmaLss);
	// 	}
	// };

	//get number of digits
	if (length === 0 || wholeNum == 0) {
		numData.output = "zero";
		numData.slang = "nothing";
		output.textContent = numData.output;
	} else if (length === 1) {
		numData.output = text[wholeNum];
		numData.slang = text[wholeNum];
		console.log(numData);
	}
	// Doubles
	else if (length === 2) {
		numData.output = calcTens(wholeNum).output;
		numData.slang = calcTens(wholeNum).output;
		console.log(numData);
	} else if (length === 3) {
		// numData.output = cmaLss.replace(cmaLss, text[cmaLss[0]]) + " hundred and ";
		// if (cmaLss[1] > 1) {
		// 	if (cmaLss[2] == 0) {
		// 		numData.output += cmaLss.replace(cmaLss, text[cmaLss]);
		// 	} else {
		// 		numData.output += cmaLss.replace(cmaLss, text[cmaLss[1] + "0"] + " " + text[cmaLss[2]]);
		// 	}
		// } else if (cmaLss == 10) {
		// 	numData.output += "ten";
		// } else if (cmaLss == 14 || cmaLss == 16 || cmaLss == 17 || cmaLss == 19) {
		// 	numData.output += cmaLss.replace(cmaLss, text[cmaLss[2]] + "teen");
		// } else if (cmaLss == 18) {
		// 	numData.output += cmaLss.replace(cmaLss, text[cmaLss[2]]) + "een";
		// } else {
		// 	numData.output += cmaLss.replace(cmaLss, text[cmaLss]);
		// }
		return numData;
	} else {
		return "error";
	}
};

working.textContent = "working";

input.addEventListener("keyup", (e) => {
	const input = e.target.value;
	// output.textContent = convertNumToWords([input, (country = "USA")]).output;
	output.textContent = convertNumToWords(input).output;
});
