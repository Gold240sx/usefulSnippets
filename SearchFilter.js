const dropdownList = document.getElementById("myDropdown");
const originalOptions = Array.from(dropdownList.options);
// console.log(originalOptions);
const origOptArray = Array.from(dropdownList.options).map((option) => {
	return option.value;
});
// console.log(origOptArray);

const filterOptions = (inputValue) => {
	const updatedOptions = dropdownList.options;

	const removeSelected = (options) => {
		const filteredOptions = removeSelected(options);
		return filteredOptions;
	};
	const matchingOptions = Array.prototype.filter.call(filteredOptions, (option) =>
		option.textContent.toUpperCase().startsWith(inputValue.toUpperCase())
	);
	const nonMatchingOptions = Array.prototype.filter.call(
		filteredOptions,
		(option) => !option.value.toUpperCase().startsWith(inputValue.toUpperCase())
	);

	return { matchingOptions, nonMatchingOptions };

	console.log(matchingOptions, nonMatchingOptions);
	while (dropdownList.firstChild) {
		dropdownList.removeChild(dropdownList.firstChild);
	}
	const newOptions = matchingOptions.map((option) => {
		const newOption = document.createElement("option");
		newOption.value = option.value;
		newOption.textContent = option.textContent;
		return newOption;
	});
	dropdownList.append(...newOptions);

	// Add the new options to the dropdown list
	// dropdownList.childNodes.forEach((node) => {
	// 	// remove option if the option is already in the dropdown list
	// 	console.log(node.textContent, inputValue);
	// 	while (dropdownList.firstChild) {
	// 		dropdownList.removeChild(dropdownList.firstChild);
	// 	}
	// 	if (node.textContent.startsWith(inputValue)) {
	// 		dropdownList.appendChild(node);
	// 	} else {
	// 		// dropdownList.removeChild(node);
	// 	}

	// // Add the first option back to the dropdown list
	const firstOption = document.createElement("option");
	firstOption.value = "";
	firstOption.textContent = "-- SELECT --";
	firstOption.disabled = true;
	dropdownList.append(firstOption);
};

const input = document.getElementById("myInput");
const firstOption = document.createElement("option");
firstOption.value = "";
firstOption.textContent = "-- SELECT --";
firstOption.disabled = true;
dropdownList[0].textContent = "";
dropdownList[0].append(firstOption);

const inputField = document.getElementById("myInput");
inputField.addEventListener("input", function () {
	filterOptions(inputField.value);
});
