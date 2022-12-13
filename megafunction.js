let bdis = document.querySelector("#backerDescription");
let items = document.querySelectorAll(`*[id^="eventHandlerCreatedItem"]`); // select all items whose Ids begin with: ...
let input = document.querySelector("#input");
var item2 = items[0];
let input2 = document.querySelector("#eventHandlerCreatedItem-2");

bdis.innerHTML = "<button>click</button>";
bdis.firstElementChild.setAttribute("type", "button");
bdis.padding = "5px";
bdis.border = "2px solid grey";
bdis.borderRadius = "8px";
bdis.cursor = "pointer";

input.addEventListener("focusout", () => {
	var text = input.value;
	var regex = /((?:[^m.]+|m[.]ed|m(?![.]ed))+)|[.]/gm;
	input.value = text.replace(regex, "$1");
});

// let edit_1 = {
// 	refEl: bdis,
// 	event: "click",
// 	focusEls: items,
// 	action: (el) => {
// 		el.style.backgroundColor = "orange";
// 		input.placeholder = "changed";
// 		input.required = true;
// 		const requireds = document.querySelectorAll("input[required]");
// 		requireds.forEach((reqInput) => {
// 			const ast = document.createElement("span");
// 			ast.setAttribute("style", "color: red; position: absolute");
// 			reqInput.style.marginLeft = "10px";

// 			reqInput.insertAdjacentElement("beforebegin", ast);
// 			ast.textContent = "*";
// 		});
// 	},
// 	functn: (el) => {
// 		alert("Help! I wan't to go home!");
// 	},
// 	htmlParse: {
// 		element: "alert", //Create an alert
// 		id: "button", //Give it this id
// 		classes: ["input", "blue"], //Give it this class
// 		styles: ["color: red", "font-weight: bold", "font-size: 22px"], //Give it these styles
// 		content: "there isnt another input I'd rather stick to", //Display this inner Text
// 		place: bdis, //put it adjacent to this element already located in the dom
// 		position: "afterend", //Place the element after
// 	},
// };

// let edit_2 = {
// 	action: (document.body.style.backgroundColor = "lightgray"),
// };

// let edit_4 = {
// 	// action: `${var snoopy = document.querySelector("#snoopy")}`,
// 	createRef: "snoopy",
// 	createRefName: "#snoopy",
// 	htmlParse: {
// 		element: "div", //Create an alert
// 		id: "snoopy", //Give it this id
// 		classes: ["snoopy"], //Give it this class
// 		styles: [
// 			"background-color: black",
// 			"color: white",
// 			"height: fit-content",
// 			"display: flex",
// 			"width: full",
// 			"cursor: pointer",
// 		], //Give it these styles
// 		content: "Snoopy", //Display this inner Text
// 		place: input2, //put it adjacent to this element already located in the dom
// 		position: "beforeend", //Place the element after
// 	},
// };

// let edit_5 = {
// 	refEl: snoopy,
// 	event: "click",
// 	functn: (e) => console.log("snoopy"),
// };

// var eventHandler = async (data) => {
// 	// define attributes of the function
// 	const { createRef, createRefName, refEl, event, focusEls, action, functn } =
// 		{ ...data };
// 	const { element, id, classes, styles, content, place, position } = {
// 		...data.htmlParse,
// 	};

// HTML PARSE

//     const {createRefName.toString()} = document.querySelector(createRef);
// 	const Insert = document.createElement(element);
// 	place?.insertAdjacentElement(position, Insert);
// 	Insert.setAttribute("id", `${id}`);
// 	Insert.setAttribute("class", `${classes?.toString().replaceAll(",", " ")}`);
// 	Insert.setAttribute("style", `${styles?.toString().replaceAll(",", ";")}`);
// 	Insert.textContent = `${content}`;

// 	refEl?.addEventListener(`${event}`, () => {
// 		action.length
// 			? focusEls.forEach((focusEl) => {
// 					// focusEl.style.backgroundColor = "orange"; // works
// 					action(focusEl);
// 			  })
// 			: null;
// 		setTimeout(function () {
// 			functn.length ? functn() : null;
// 		}, 20);
// 	});
// };

// eventHandler(edit_1);

// eventHandler(edit_2);
// eventHandler(edit_4);
// eventHandler(edit_5);
