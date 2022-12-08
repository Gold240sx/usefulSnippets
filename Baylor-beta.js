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
var backerSelectQ = document.querySelector("#ELEMENT_1226753");
var backSelector = document.querySelector("#E_PleaseSelectYourBusinessCardBackerbswh, ");
var backerLabel = document.querySelector("#L_PleaseSelectYourBusinessCardBackerbswh");
var nameAndCreds = document.querySelector("#E_NameandCredentials");
var logoSelector = document.querySelector("#E_PleaseChooseYourLogobsw");

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
  #ELEMENT_1226753 h3, #ELEMENT_744853 h3{
    margin-bottom: 15px;
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
        id="ELEMENT_276937" 
        data-element_id="276937" 
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
// var wrap = (function (toWrap, wrapper, id) {
// 	wrapper = wrapper || document.createElement("div");
// 	wrapper.setAttribute("id", `${id}`);
// 	toWrap.parentNode.appendChild(wrapper);

// 	// Non-working auto id something to
// 	var id = document.querySelector(`${id}`);
// 	window.id = id;

// 	return wrapper.appendChild(toWrap);
// })(window);

// console.log(window.id);
// wrap(item, "div", "item-added");

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

backSelector.addEventListener("focus", respondFocus, true);
function respondFocus() {
	console.log("focus");
	document.addEventListener("keyup", respondKeyUp, true);
	function respondKeyUp(event) {
		if (event.code === "Space") {
			document.removeEventListener("keyup", respondKeyUp, true);
			console.log("Space pressed");
			dataEntryNote.style.display = "block";
		}
		var addedDataBackerNote = document.createElement(dataPopup);
		addedDataBackerNote.setAttribute("id", "addedDataBackerNote");
		backerQ.insertAdjacentElement("afterend", addedDataBackerNote);
		return addedDataBackerNote;
	}
	backSelector.removeEventListener("focus", respondFocus, true);
	return addedDataBackerNote;
}

logoSelector.addEventListener("focus", respondFocus, true);
function respondFocus() {
	console.log("focus");
	document.addEventListener("keyup", respondKeyUp, true);
	function respondKeyUp(event) {
		if (event.code === "Space") {
			document.removeEventListener("keyup", respondKeyUp, true);
			console.log("Space pressed");
			dataEntryNote2.style.display = "block";
		}
	}
	logoSelector.removeEventListener("focus", respondFocus, true);
}

//*************************************************************************************************
/*========================================================================
 /////////////////////////////////////////////////////////////                             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   |   |   |        EVENTS        |  |   |   |   | |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\                              ////////////////////////////////////////////////////////////////                         
========================================================================*/
//*************************************************************************************************

/*===================================================
                                 Backer Is Selected To be Wanted               
====================================================*/
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
console.log(nameAndCreds);

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
