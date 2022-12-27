// const API_KEY = "your-api-key";
// const address = "6406 Ivy Lane, Greenbelt, MD";

// const url = `https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=<AddressValidateRequest USERID="${API_KEY}"><Address ID="0"><Address1></Address1><Address2>${address}</Address2><City></City><State></State><Zip5></Zip5><Zip4></Zip4></Address></AddressValidateRequest>`;

const addressInput = document.querySelector("#address");
const addressOutput = document.querySelector("#fixedAddress");

addressInput.addEventListener("keyup", (e) => {
	const address = e.target.value;
	addressOutput.textContent = address;

	// const url = `https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=<AddressValidateRequest USERID="${API_KEY}"><Address ID="0"><Address1></Address1><Address2>${address}</Address2><City></City><State></State><Zip5></Zip5><Zip4></Zip4></Address></AddressValidateRequest>`;
	// fetch(url)
	//     .then((response) => response.text())
	//     .then((data) => {
	//     const parser = new DOMParser();
	//     const xmlDoc = parser.parseFromString(data, "text/xml");
	//     const fixedAddress = xmlDoc.getElementsByTagName("Address2")[0].childNodes[0].nodeValue;
	//     addressOutput.textContent = fixedAddress;
	//   })
});
