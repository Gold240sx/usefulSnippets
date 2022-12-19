var regex_No_Periods = /"\\.+", ";"/g;
var regex_period_first_letter = (/^([a-zA-Z])([ ])/, (letter) => letter.toUpperCase());
var regex_all_two_letter_words = /(\b\w{2}\b)/g;
var regex_all_one_letter_words = /(\b\w{1}\b)/g;
var regex_isolate_2lett = /\b([a-zA-Z])([a-zA-Z])\b/g;
var regexCapitalize = /[A-Z]+/g;
var regex_lowercase_last_letter = /(\w)(\W*)$/;
var regex_is_letter = /^[a-z]/i;
var regex_is_letter_or_space = /^[a-zA-Z\s]+$/i;
var regex_extra_space_check = /^[A-Za-z]+( [A-Za-z]+)*$/;
var regex_remove_consec_spaces = /\s+/g;
var regex_remove_beginning_and_end_spaces = /^\s+|\s+$/;
const isUpperCase = (string) => /^[A-Z]*$/.test(string);
var regex_remove_periods_from_dash_words = /\b[^-\s]+-.+[^-\s]+\b/g;

var testString = [
	"j handcock",
	"je handcock",
	"j.y. handcock",
	"jim handcock",
	"jim j handcock",
	"jim je handcock,",
	"jim jer handcock",
	"jo jenny handcock",
	"jo jim le   handcock",
	"j handcock",
	"j. e, handcock",
	"j. er handcock jr",
	" jim js handcock sr",
	" jim. handcock",
	"jim handcock nn   ",
	"bo bo bice",
	"J.K Handcock",
	"Ro RO Jones",
	"Ruby Jo Tarrent",
	"Ruby-Jo Mellie",
];

const nameProcess = (array) => {
	const newArray = array.map((str) => {
		// limit all spaces to single spaces and remove spaces at beginning and end of string
		const consecSpaceChecked = str.replace(regex_remove_consec_spaces, " ");
		const spaceChecked = consecSpaceChecked.replace(regex_remove_beginning_and_end_spaces, "");

		//uppercase all 2 letter words. always lowercase the last letter
		var initStr = spaceChecked
			.split(" ")
			.map((i) => (i.replaceAll(/[^a-z]/gi, "").length === 2 ? i.toUpperCase() : i))
			.join(" ")
			.replace(regex_lowercase_last_letter, function (match, capture1, capture2) {
				return capture1.toLowerCase() + capture2;
			});
		//remove all periods and commas
		var firstStr = initStr.replaceAll(".", "").replaceAll(",", "");
		//add periods to all 2 letter words
		var secndStr = firstStr.replace(regex_all_two_letter_words, "$1.");
		//add periods to all 1 letter words
		var thirdStr = secndStr.replace(regex_all_one_letter_words, "$1.");
		//add periods between all 2 letter words that are not the last word
		var fourthStr = thirdStr.replace(regex_isolate_2lett, "$1.$2");
		// create exceptions for jr and sr
		var fifthStr = fourthStr.replaceAll("j.r.", ", jr.").replaceAll("s.r.", ", sr.");

		//remove periods from the center of last 2 letter word
		const sixthStringFunct = (string) => {
			if (string[string.length - 3] === ".") {
				const partOne = string.slice(0, -3);
				const partTwo = string.slice(-2, -1);
				string = partOne + partTwo;
				return string;
			}
			return string;
		};
		const sixthString = sixthStringFunct(fifthStr);
		//capitalize first letter of each word
		const seventhString = sixthString.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

		/////  Final String Manilpulation

		//check if str first name of two characters includes  a period
		const initCheck1 = spaceChecked[1] === "." ? true : false;
		const initCheck2 = spaceChecked[3] === "." ? true : false;
		const initCheckNone = !initCheck1 && !initCheck2 ? true : false;
		const initCheckAll = initCheck1 && initCheck2 ? true : false;
		const twoLettrWordBegin = spaceChecked[0] !== " " && spaceChecked[1] !== " " && spaceChecked[2] == " " ? true : false;

		const eighthStringFunct = (eighth_sttring) => {
			if (initCheckNone) {
				// Assumes a 2letter first name ie: "Bo"
				// chck if the the string begins with a 2 letter word
				var text = eighth_sttring;
				if (twoLettrWordBegin) {
					// remove periods from the first name
					text = eighth_sttring.slice(0, 1) + eighth_sttring.substr(2);
					text = text.slice(0, 2) + text.substr(3);
					// console.log("none, 2lett, ", text);
					text = text[0] + text[1].toLowerCase() + text.slice(2);
					return text;
				} else {
					var text = eighth_sttring;
					// console.log("none ", text);
					return text;
				}
			} else if (initCheckAll) {
				// All Assumes a acronym first name: ie: "D.J." None inputs capture inputs like "david Williams or bo bo bice"
				// do nothing as the name is already formatted correctly either with or without periods.
				var text = eighth_sttring;
				// console.log("all", text);
				return text;
			} else if (initCheck1) {
				//user input something like "J. HANDCOCK or J.R Handcock"
				// if 4th letter[3] of str  is a space,  add a space before the 3rd letter[2] in text
				if (spaceChecked[2] !== " ") {
					//this means that the second letter is a period and the fourth letter is a space. ie: "J.S Handcock"
					// assume spelling error (first initial, middle initial) and add a space before the 3rd letter
					var text = eighth_sttring.slice(0, 2) + " " + eighth_sttring.substr(2);
					// console.log("init1, sp !=", text, str);
					return text;
				} else {
					// else if 3rd letter[2] of str is a space,  add a space before the 2nd letter[1] in text
					var text = eighth_sttring;
					// console.log("init1, sp =", text, str);
					return text;
				}
			} else if (initCheck2) {
				//user input something like "Jus. HANDCOCK
				var text = eighth_sttring;
				// console.log("init2", text);
				return text;
			} else {
				// user didn't input a name or the name was less than 3 characters
				console.log("err", text);
				return eighth_sttring;
			}
		};
		const eighthString = eighthStringFunct(seventhString);
		const ninthString = (text) =>
			text.replace(/\b[a-zA-Z]+-[a-zA-Z]+.[a-zA-Z]+.+\b/g, function (word) {
				return word.replace(/\./g, "");
			});

		return ninthString(eighthString);
	});

	return newArray;
};

console.log(
	"length: ",
	nameProcess(testString).length,
	testString.map((v) => v),
	nameProcess(testString)
);

const newData = nameProcess(testString);
const oldData = testString;
var newList = document.getElementById("new");
var oldList = document.getElementById("old");

oldData.forEach((item) => {
	let li = document.createElement("li");
	li.innerText = item;
	oldList.appendChild(li);
});

newData.forEach((item) => {
	let li = document.createElement("li");
	li.innerText = item;
	newList.appendChild(li);
});

// nameProcess(testString);
