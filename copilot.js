var regex_No_Periods = /"\\.+", ";"/g;
var regex_period_first_letter = (/^([a-zA-Z])([ ])/, (letter) => letter.toUpperCase());
var regex_all_two_letter_words = /(\b\w{2}\b)/g;
var regex_all_one_letter_words = /(\b\w{1}\b)/g;
var regex_isolate_2lett = /\b([a-zA-Z])([a-zA-Z])\b/g;
var regexCapitalize = /[A-Z]+/g;
var regex_lowercase_last_letter = /(\w)(\W*)$/;
var regex_is_letter = /^[a-z]/i;
var regex_is_letter_or_space = /^[a-zA-Z\s]+$/i;

var testString = [
	"j handcock",
	"je handcock",
	"j.e. handcock",
	"jim handcock",
	"jim j handcock",
	"jim je handcock,",
	"jim jer handcock",
	"jo jenny handcock",
	"jo jim le handcock",
	"j handcock",
	"j. e, handcock",
	"j. er handcock jr",
	"jim js handcock sr",
	"jim handcock nn",
];

testString.forEach((str) => {
	//uppercase all 2 letter words. always lowercase the last letter
	var initStr = str
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
	const lastString = (string) => {
		if (string[string.length - 3] === ".") {
			const partOne = string.slice(0, -3);
			const partTwo = string.slice(-2, -1);
			string = partOne + partTwo;
			return string;
		}
		return string;
	};
	var finalStr = lastString(fifthStr);
	//capitalize first letter of each word
	const finalCap = finalStr.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

	// limit all spaces to single spaces

	//check if str first name of two characters includes  a period
	const initCheck1 = str[1] === "." ? true : false;
	const initCheck2 = str[3] === "." ? true : false;
	const initCheckNone = initCheck1 && initCheck2 ? false : true;

	const initSolve = (finalCap) => {
		if (initCheckNone) {
			// Assunes a 2letter first name
			// Deletes the 1st period in the first name.
			if (regex_is_letter_or_space.test(finalCap)) {
				//do nothing - there are letters. or spaces and no periods
				return finalCap;
			} else {
				//The user entered periods in the first name.
				var text = finalCap.slice(0, 1) + finalCap.substr(2);
				text = text.slice(0, 2) + text.substr(3);
				return text;
			}
			finalCap = text;
			return finalCap;
		} else {
			// return finalCap.replace(regex_period_first_letter, "$1$2");
		}
		// var txt2 = txt1.slice(0, 3) + "bar" + txt1.slice(3);
	};
	initSolve(finalCap);

	//console.log(initCheck1, initCheck2);
	// if not, delete the periods on the first name = str[3] + str[0]
	// console.log(str[3]);
	// console.log(finalCap);
});
