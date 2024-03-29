//regex



///Test Sting
var testString = {
	"CHRISTI  CAPERS": "4874 HARPETH PEYTOINSVILLE Thompsons Station TN 37179",
	"DELPHIA  MCKNIGHT": "330 E COLLEGE ST Murfreesboro TN 37130",
	"DOTTIE L GENTRY": "1340 ROCK SPRINGS ROAD Bethpage TN 37022",
	"Vera  Shcherbachuk": "1612 Blackwood Drive Knoxville TN 37923",
	"MARCUS  STEWART": "423 HULL CIRCLE Gallatin TN 37066",
	"Brian  Ford": "75 Miller Cove Circle Signal Mountain TN 37377",
	"ELIZABETH  JAEGER": "20045 EAST MAIN STREET Huntingdon TN 38344",
	"YVONNE M LYONS": "103 CORNELIA DRIVE Hendersonville TN 37075",
	"MARY L WRIGHT": "426 JOANN ST Gallatin TN 37066",
	"PATRICIA  ADCOCK": "103 EDGEFIELD CIRCLE Dickson TN 37055",
	"CHRISTOPHER  JAMES": "PO BOX 826 Hendersonville TN 37077",
};
// Get the Addresses into an array
const array = Object.values(testString);

//Functions
// Add a new row to the table
const addRow = (table, data) => {
	const row = table.insertRow();
	for (const [property, value] of Object.entries(data)) {
		const cell = row.insertCell();
		value? cell.innerHTML = value : cell.innerHTML = "";
        cell.setAttribute("class", "whitespace-nowrap px-3 py-4 text-sm text-gray-500");
		cell.setAttribute("data-attr", property);
	}
        //edit button
      const editButtonCell = row.insertCell();
		editButtonCell.textContent= "Edit";
		editButtonCell.setAttribute("class", "editBtn relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6");
        editButtonCell.setAttribute("data-attr", "editBtn");
        //delete button
        const deleteButton = document.createElement("td");
        deleteButton.textContent = "Delete"
		deleteButton.setAttribute("class", "deleteBtn relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6");
        deleteButton.setAttribute("data-attr", "deleteBtn");
        //copy button
        const copyButton = document.createElement("td");
        copyButton.textContent = "Copy";
        copyButton.setAttribute("class", "copyBtn text-indigo-600 hover:text-indigo-900");
        copyButton.setAttribute("data-attr", "copyBtn");
        // save button
        const saveButton = document.createElement("td");
        saveButton.textContent = "Save";
        saveButton.setAttribute("class", " saveBtn text-indigo-600 hover:text-indigo-900");
        saveButton.setAttribute("data-attr", "saveBtn");
        // cancel button
        const cancelButton = document.createElement("td");
        cancelButton.textContent = "Cancel";
        cancelButton.setAttribute("class", " cancelBtn text-indigo-600 hover:text-indigo-900");
        cancelButton.setAttribute("data-attr", "cancelBtn");

        row.prepend(copyButton);
        row.appendChild(deleteButton);
        row.appendChild(saveButton);
        row.appendChild(cancelButton);
    };

    const copyBtns = document.querySelectorAll(".copyBtn");
    const cancelBtns = document.querySelectorAll("[data-attr='cancelBtn']");
    const saveBtns = document.querySelectorAll("[data-attr='saveBtn']");
    const editBtns = document.querySelectorAll("[data-attr='editBtn']");
    const deleteBtns = document.querySelectorAll("[data-attr='deleteBtn']");

addRow(myTable, {
	number: "15495",
	prefix: "",
	streetName: "Main",
	streetType: "ave",
	postStType: "N",
	Suffix: "",
	aptNum: "apt 3",
	city: "Nashville",
	state: "TN",
	zip: "37209",
	country: "USA",
	line1: "15495 Main ave N",
	line2: "apt 3",
	line3: "Nashville, TN 37209",
});

array.forEach(address => {
    const rowArray = address.split(" ");
	let word = rowArray[1];
    addRow(myTable, {
		number: rowArray[0],
		prefix: rowArray[1],
		streetName: rowArray[2],
		streetType: rowArray[3],
		postStType: rowArray[4],
		Suffix: rowArray[5],
		aptNum: rowArray[6],
		city: rowArray[7],
		state: rowArray[8],
		zip: rowArray[9],
		country: rowArray[10],
		line1: "15495 Main ave N",
		line2: "apt 3",
		line3: "Nashville, TN 37209",
	});
});

const copyTableValues = () => {
	var rows = document.querySelectorAll("table tr");
	var rowData = Array.from(rows)
		.map(function (row) {
			var rowTexts = Array.from(row.children)
				.filter(function (cell, index) {
					return (
						index !== 0 &&
						index !== row.children.length - 4 &&
						index !== row.children.length - 3 &&
						index !== row.children.length - 2 &&
						index !== row.children.length - 1
					);
				})
				.map(function (cell) {
					return cell.textContent;
				})
				.join("\t");
			return rowTexts;
		})
		.join("\n");
	navigator.clipboard.writeText(rowData).then(
		function () {
			/* clipboard successfully set */
			alert("Copied!");
		},
		function () {
			/* clipboard write failed */
			alert("Failed!");
		}
	);
};

const copyRowValues = (event) => {
	const row = event.target.parentElement;
	const cells = Array.from(row.children)
		.filter((cell, index) => index !== 0 && index < row.children.length - 4)
		.map((cell) => cell.textContent)
		.join("\t");
	navigator.clipboard.writeText(cells).then(
		() => {
			/* clipboard successfully set */
			console.log(`Copied: ${cells}`);
		},
		() => {
			/* clipboard write failed */
			console.log(`Failed to copy: ${cells}`);
		}
	);
};



// Copy  Table Button
const copyAllBtn = document.getElementById("copy-button");
copyAllBtn.addEventListener("click", () => {
    copyTableValues();
});

// Copy Row Buttons
const rows = document.querySelectorAll("table tr");
rows.forEach((row) => {
	const copyButton = row.children[0];
	copyButton.addEventListener("click", copyRowValues);
});


//Output

