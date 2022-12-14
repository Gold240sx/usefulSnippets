var regex_No_Periods = /"\\.+", ";"/g;
var regex_period_first_letter = (/^([a-zA-Z])([ ])/, (letter) => letter.toUpperCase());
var regex_all_two_letter_words = /(\b\w{2}\b)/g;
var regex_all_one_letter_words = /(\b\w{1}\b)/g;
var regex_isolate_2lett = /\b([a-zA-Z])([a-zA-Z])\b/g;
var regexCapitalize = /[A-Z]+/g;

var testString = [
	"j handcock",
	"je handcock",
	"jim handcock",
	"jim j handcock",
	"jim je handcock,",
	"jim jer handcock",
	"j handcock",
	"j. e, handcock",
	"j. er handcock jr",
	"jim js handcock sr",
	"jim handcock nn",
];

testString.forEach((str) => {
	var firstStr = str.replaceAll(".", "").replaceAll(",", "");
	var secndStr = firstStr.replace(regex_all_two_letter_words, "$1.");
	var thirdStr = secndStr.replace(regex_all_one_letter_words, "$1.", (letter) => letter.toUpperCase());
	var fourthStr = thirdStr.replace(regex_isolate_2lett, "$1.$2");

	var test = firstStr.match(regex_all_two_letter_words);

	console.log(test, (word) => {
		var word = () => {
			if (!word == "null" || null) {
				word = word.toUpperCase();
				return word;
			} else {
				null;
			}
		};
		return word;
	});

	var fifthStr = fourthStr.replaceAll("j.r.", ", jr.").replaceAll("s.r.", ", sr.");
	var sixthStr = secndStr.toUpperCase().replaceAll(regex_all_two_letter_words, "$1.");
	// console.log(sixthStr);

	const lastString = (string) => {
		if (string[string.length - 3] === ".") {
			const partOne = string.slice(0, -3);
			const partTwo = string.slice(-2, -1);
			string = partOne + partTwo;
			return string;
		}
		return string;
	};
	var finalString = lastString(fifthStr);
	// console.log("final string", finalString);
	const finalCap = finalString.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

	// console.log("finalCap", finalCap);
});
