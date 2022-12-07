const item = document.querySelector(".item");

var wrap = (function (item, id) {
	wrapper = document.createElement("div");
	// wrapper.setAttribute("id", `${id}`);
	// console.log(item);
	// item.insertAdjacentElement("beforebegin", wrapper);
	// // Non-working auto id something to
	// var id = document.querySelector(`${id}`);
	// window.id = id;
	// return wrapper.appendChild(item);
})(window);

// console.log(window.id);

setTimeout(wrap(item, "item-added"), 1000);
