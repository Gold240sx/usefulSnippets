//*************************************************************************************************
/*========================================================================
/////////////////////////////////////////////////////////////                             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   |   |   | Query Selectors |  |   |   |   | ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\                              ////////////////////////////////////////////////////////////////                         
========================================================================*/
//*************************************************************************************************
// Login  + prod Info
var loginInfo = document.querySelector("#opc_content").firstElementChild;
var prodInfo = document.querySelector(".product_info");
var prodTabs = document.querySelector("#product-tabs");
var eachCost = document.querySelector('span[dataname="totalEach"]').innerText;
var totalCostInput = document.querySelector('input[name = "InstantPricing_Total"]');

//Notes and other Removed items
var note = document.querySelector("#ELEMENT_297321");
var note2 = document.querySelector("#ELEMENT_1226583");
var dataEntryNote = document.querySelector("#ELEMENT_276937");

// =======================Validation=========================
var backerInputNo = document.querySelector("#E_WouldYouLikeABackerOnYourCards0");
var backerInputYes = document.querySelector("#E_WouldYouLikeABackerOnYourCards1");
var backerSelectFirstChild = document.querySelector("#OPTION_4020111");
var backerQ = document.querySelector("#ELEMENT_1215739");
var backerQTitle = document.querySelector("#L_WouldYouLikeABackerOnYourCards");
var backerSelectQ = document.querySelector("#ELEMENT_1226753");
var backSelector = document.querySelector("#E_PleaseSelectYourBusinessCardBackerbswh");
var backerLabel = document.querySelector("#L_PleaseSelectYourBusinessCardBackerbswh");
var nameAndCreds = document.querySelector("#E_NameandCredentials");
var logoSelector = document.querySelector("#E_PleaseChooseYourLogobsw");
var logoLabel = document.querySelector("#L_PleaseChooseYourLogobsw");
var quantityDD = document.querySelector("#E_Quantity");
var zip = document.querySelector("#E_ZipCode");
var stateNote = document.querySelector("#ELEMENT_1366633");
var webURL = document.querySelector("#E_Website");
var email = document.querySelector("#E_EmailAddress");

//*************************************************************************************************
/*========================================================================
/////////////////////////////////////////////////////////////                             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   |   |   |          Styles         |  |   |   |   | ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\                              ////////////////////////////////////////////////////////////////                         
========================================================================*/
//*************************************************************************************************
/*===================================================
                                        JS added classes              
====================================================*/

/*===================================================
                                                Stylesheet               
====================================================*/
var styles = `
    #ELEMENT_1226753 h3, #ELEMENT_744853 h3 {
        margin-bottom: 15px;
    }
    .invalid-input::-webkit-input-placeholder {
        color: red;
    }
`;

var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

//*************************************************************************************************
/*========================================================================
/////////////////////////////////////////////////////////////                             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   |   |   |        Objects        |  |   |   |   | ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\                              ////////////////////////////////////////////////////////////////                         
========================================================================*/
//*************************************************************************************************
var productOverView = `
<div  style="
    min-height: 90px; 
    height: fit-content; 
    width: auto; 
    background-color: rgba(0, 0, 0, .1); 
    border-radius: 20px; 
    display: flex; 
    flex-direction: row; 
    margin: 25px;
">
    <div style="display: flex; flex-direction: column; margin: 10px;">
        <h2 style="color: white; ">Order Details:</h2>
        <h2 style="color: white;">Amount</h2>;
    </div>
</div>
`;

var dataPopup = `
<div 
    class="highlight textmessage" 
    style="-webkit-user-select: auto;"
>
    DATA ENTRY NAVIGATION:
    <br style="-webkit-user-select: auto;" />
    1. Press the TAB KEY to move to the next data entry field.
    <br style="-webkit-user-select: auto;" />
    2. Press the ENTER KEY to move to the next text line ONLY while you are within a multiline text field.  Multiline text fields can be recognized by their larger size.
</div>
`;

var nameAndCreds = `
<input 
    id="E_NameandCredentials" 
    name="step2Attribute_Value_744836"
    data-element_id="744836" data-autofill="" 
    style="height: 60px; -webkit-user-select: auto;" 
    placeholder="" 
    required="required" 
    data-required="1"
>
</input>
`;

//*************************************************************************************************
/*========================================================================
/////////////////////////////////////////////////////////////                                  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   |   |   GENERIC FUNCTIONS   |   | ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\                                   ///////////////////////////////////////////////////////////                         
========================================================================*/
//*************************************************************************************************

// wrap any item with an element and describe
// const item = document.querySelector(".item");

// var wrap = function (toWrap, wrapperType, id) {
// 	const wrapper = document.createElement(wrapperType ?? "div");
// 	wrapper.setAttribute("id", id);
// 	toWrap.parentNode.insertBefore(wrapper, toWrap);
// 	wrapper.appendChild(toWrap);
// 	return wrapper;
// };

// const wrapper = wrap(item, "div", "itemadded");
// console.log("wrapper item with ID", wrapper.id);

//*************************************************************************************************
/*========================================================================
/////////////////////////////////////////////////////////////                             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   |   |   | ON PAGE LOAD |  |   |   |   | |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\                              ////////////////////////////////////////////////////////////////                         
========================================================================*/
//*************************************************************************************************

/*===================================================
                                            Login and Prod info               
====================================================*/
loginInfo.style.marginTop = "-30px"; // moves login info up
if (prodInfo) {
	prodInfo.style.display = "none";
} // hides the product preview header
note.style.display = "none"; // hides the main note item
note2.style.display = "none"; // hides the secondary note item

/*===================================================
                                            Questions + Inputs               
====================================================*/

// ===============              Backer              ===============
backerQ.style.paddingBottom = "40px";
backerSelectFirstChild.value = "";
backerSelectFirstChild.textContent = "SELECT";
dataEntryNote.style.display = "none";
backerInputNo.checked = "true";
backerSelectQ.style.display = "none";
backerQTitle.textContent = 'SELECT: 2-Sided-Printed Card: ("Yes")? Default is a single-sided card: ("No").';
logoLabel.textContent = "Please Choose Your Logo:";

// ==============              ZipCode             ==============
zip.setAttribute("maxlength", 5);
// ==============              stateNote             ==============
stateNote.display = "none";

//*************************************************************************************************
/*========================================================================
/////////////////////////////////////////////////////////////                             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   |   |   |        EVENTS        |  |   |   |   | |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\                              ////////////////////////////////////////////////////////////////                         
========================================================================*/
//*************************************************************************************************

/*===================================================
                                            Quantity Focus        
====================================================*/

// Quantity Focus on Page Load
quantityDD.focus();
console.log("init focused");

document.addEventListener("click", (e) => {
	console.log(e.target);
});
// Quantity Focus on tab
quantityDD.addEventListener("keyup", quantityTabPress, true);
function quantityTabPress(event) {
	console.log("quantity tab press");
	if (event.code === "Tab") {
		document.querySelector("#E_HowQuicklyDoYouNeedThisProduct0").focus();
		document.querySelector("#E_HowQuicklyDoYouNeedThisProduct0").checked = "checked";
	}
}
quantityDD.addEventListener("change", quantityClick, true);
function quantityClick() {
	console.log("click heard");
	document.addEventListener("keyup", quantityTabPress, true);
	document.removeEventListener("keyup", quantityTabPress, true);
}

/*===================================================
                                                Speed Focus        
====================================================*/
// Select all the radio buttons
var speedRadios = document.querySelectorAll("input[name=step2Attribute_Value_297318]");
console.log(speedRadios);

speedRadios.forEach((radio) => {
	radio.addEventListener("change", (e) => {
		console.log("change");
		e.target.focus();
		document.addEventListener("keyup", respondKeyUp, true);
		function respondKeyUp(event) {
			if (event.code === "Tab") {
				document.removeEventListener("keyup", respondKeyUp, true);
				console.log("Space 3 pressed");
				// add an event here...(focus on the backer radio element rather than the logo dropdown)
				backerInputNo.focus();
			}
		}
		backSelector.removeEventListener("focus", respondFocus2, true);
	});
});

/*===================================================
                                Backer Is Selected To be Wanted               
====================================================*/

backSelector.addEventListener("focus", respondFocus2, true);
function respondFocus2() {
	console.log("focus  2");
	document.addEventListener("keyup", respondKeyUp, true);
	function respondKeyUp(event) {
		if (event.code === "Tab") {
			document.removeEventListener("keyup", respondKeyUp, true);
			console.log("Space 2 pressed");
			dataEntryNote.style.display = "block";
		}
		var addedDataBackerNote = document.createElement(dataPopup);
		addedDataBackerNote.setAttribute("id", "addedDataBackerNote2");
		backerQ.insertAdjacentElement("afterend", addedDataBackerNote);
		// return addedDataBackerNote;
	}
	backSelector.removeEventListener("focus", respondFocus2, true);
	// return addedDataBackerNote ? addedDataBackerNote : null;
}

// logoSelector.addEventListener("focus", respondFocus, true);
// function respondFocus() {
// 	console.log("focus");
// 	dataEntryNote.style.display = "block";

// 	document.addEventListener("keyup", respondKeyUp, true);
// 	function respondKeyUp(event) {
// 		if (event.code === "Space") {
// 			document.removeEventListener("keyup", respondKeyUp, true);
// 			console.log("Space pressed");
// 		}
// 	}
// 	logoSelector.removeEventListener("focus", respondFocus, true);
// }

backerInputNo.addEventListener("change", () => {
	console.log("checked No");
	backerLabel.innerHTML = `
    <span 
        id="L_PleaseSelectYourBusinessCardBackerbswh" 
        style="-webkit-user-select: auto;"
    >
        Please Select Your Business Card Backer
    </span>
`;
});

var backerClickCount = 0; // define number of times yes is clicked to prevent reoccuring alerts.
backerInputYes.addEventListener("change", () => {
	backerClickCount = backerClickCount + 1;
	backSelector.setAttribute("required", "");
	if (backerInputYes.checked) {
		backSelector.required = true;
		backerSelectQ.style.display = "block";
		backerLabel.innerHTML = `
        <span class="warning" style="-webkit-user-select: auto;">*</span>
            <span id="L_PleaseSelectYourBusinessCardBackerbswh" style="-webkit-user-select: auto;">
            Please Select Your Business Card Backer
        </span>
    `;
		if (backerClickCount == 1) {
			alert("Please ensure you are sure you want a backer, and if so, select a backer according to the backer options");
		}
	} else {
		// backer Input No is checked
		logoSelector.value = "";
		backSelector.removeAttribute("required");
		backerLabel.innerHTML = `
        <span id="L_PleaseSelectYourBusinessCardBackerbswh" style="-webkit-user-select: auto;">
            Please Select Your Business Card Backer
        </span>
    `;
	}
});
/*===================================================
                                    Name and Credentials              
====================================================*/
//nameAndCreds... Awaiting for the name and creentials to be individually added.

/*===================================================
                                            Price Changes               
====================================================*/
totalCostInput.addEventListener("input", () => {
	newTotalCost = totalCost.value; // match tne input value
	stuff = productOverView;
	prodTabs.innerHTML = stuff;
});

var totalCost = totalCostInput.addEventListener("change", function () {
	return this.value;
});
var newTotalCost = null;

// Observe the price as it changes and match it to the new div
function observeElement(element, property, callback, delay = 0) {
	let elementPrototype = Object.getPrototypeOf(element);
	if (elementPrototype.hasOwnProperty(property)) {
		let descriptor = Object.getOwnPropertyDescriptor(elementPrototype, property);
		Object.defineProperty(element, property, {
			get: function () {
				return descriptor.get.apply(this, arguments);
			},
			set: function () {
				let oldValue = this[property];
				descriptor.set.apply(this, arguments);
				let newValue = this[property];
				if (typeof callback == "function") {
					setTimeout(callback.bind(this, oldValue, newValue), delay);
				}
				// console.log(newValue);
				return newValue;
			},
		});
	}
}

observeElement(totalCostInput, "value", function (oldValue, newValue) {
	productOverView = `${newValue}`;
	prodTabs.innerHTML = productOverView;
});

/*===================================================
                                          Name and Credentials             
====================================================*/

/*===================================================
                                                    Credentials             
====================================================*/

/*===================================================
                                                    Website            
====================================================*/
webURL.addEventListener("keyup", webProcess, true);
function webProcess(e) {
	const input = e.target.value;
	console.log({ input });

	const Alert = (e) =>
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

	switch (input) {
		case "www.":
			var prefix = "www.";
			webURL.value = input.slice(prefix.length);
			Alert();
			break;
		case "//":
			var prefix = "//";
			webURL.value = input.slice(prefix.length);
			Alert();
			break;
		case "https://":
			var prefix = "https://";
			webURL.value = input.slice(prefix.length);
			Alert();
			break;
		case "http://":
			var prefix = "http://";
			webURL.value = input.slice(prefix.length);
			Alert();
			break;
	}
}

/*===================================================
                                                    Email            
====================================================*/
const EML_ORGONLY_REGEX2 = /^(?!.*uspi\.org).+(?:(uspi|bswRehab)\.com|\.org)$/gm;

email.addEventListener("focusout", emailProcess, true);

function emailProcess(e) {
	email.classList.remove("invalid-input");
	email.placeholder = "";
	var regcheck = undefined;
	var input = email.value;
	let regexCheck = !!EML_ORGONLY_REGEX2.test(input);

	switch (true) {
		case regexCheck:
			console.log("run true");
			regcheck = true;
			lastIndex = 0;
			break;

		default:
			console.log("run false");
			console.log(regcheck);
			var regcheck = false;
			lastIndex = 0;

			if (email.value.slice(-3) === "com") {
				email.value = email.value.slice(0, -3) + "org";
			} else if ((email.length = 0)) {
				email.placeholder = "";
				email.classList.remove("invalid-input");
				return;
			} else {
				email.classList.add("invalid-input");
				console.log("regex = false");
				email.placeholder = "Invalid email";
				email.value = "";
			}
			return;
	}
}
