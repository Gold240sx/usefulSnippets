const bdis = document.querySelector("#backerDescription");
const items = document.querySelectorAll(`*[id^="eventHandlerCreatedItem"]`); // select all items whose Ids begin with: ...
const input = document.querySelector("#input");
var item2 = items[0];

bdis.innerHTML = "<button>click</button>";
bdis.firstElementChild.setAttribute("type", "button");
bdis.padding = "5px";
bdis.border = "2px solid grey";
bdis.borderRadius = "8px";
bdis.cursor = "pointer";

const edit_1 = {
	refEl: bdis,
	event: "click",
	focusEls: items,
	action: (el) => {
		el.style.backgroundColor = "orange";
		input.placeholder = "changed";
		input.required = true;
		const requireds = document.querySelectorAll("input[required]");
		requireds.forEach((reqInput) => {
			const ast = document.createElement("span");
			ast.setAttribute("style", "color: red; position: absolute");
			reqInput.style.marginLeft = "10px";

			reqInput.insertAdjacentElement("beforebegin", ast);
			ast.textContent = "*";
		});
	},
	functn: (el) => {
		alert("Help! I wan't to go home!");
	},
	htmlParse: {
		element: "alert", //Create an alert
		id: "button", //Give it this id
		classes: ["input", "blue"], //Give it this class
		styles: ["color: red", "font-weight: bold", "font-size: 22px"], //Give it these styles
		content: "there isnt another input I'd rather stick to", //Display this inner Text
		place: bdis, //put it adjacent to this element already located in the dom
		position: "afterend", //Place the element after
	},
};

const edit_2 = {
	action: (document.body.style.backgroundColor = "lightgray"),
};

var eventHandler = async (data) => {
	// define attributes of the function
	const { refEl, event, focusEls, action, functn } = { ...data };
	const { element, id, classes, styles, content, place, position } = {
		...data.htmlParse,
	};

	// HTML PARSE

	var Insert = document.createElement(element);
	place?.insertAdjacentElement(position, Insert);
	Insert.setAttribute("id", `${id}`);
	Insert.setAttribute("class", `${classes?.toString().replaceAll(",", " ")}`);
	Insert.setAttribute("style", `${styles?.toString().replaceAll(",", ";")}`);
	Insert.textContent = `${content}`;

	refEl?.addEventListener(`${event}`, () => {
		action.length
			? focusEls.forEach((focusEl) => {
					// focusEl.style.backgroundColor = "orange"; // works
					action(focusEl);
			  })
			: null;
		setTimeout(function () {
			functn.length ? functn() : null;
		}, 20);
	});
};

eventHandler(edit_1);

eventHandler(edit_2);
