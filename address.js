// const API_KEY = "your-api-key";
// const address = "6406 Ivy Lane, Greenbelt, MD";

// const url = `https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=<AddressValidateRequest USERID="${API_KEY}"><Address ID="0"><Address1></Address1><Address2>${address}</Address2><City></City><State></State><Zip5></Zip5><Zip4></Zip4></Address></AddressValidateRequest>`;

const addressInput = document.querySelector("#address");
const addressOutput = document.querySelector("#fixedAddress");

// addressInput.addEventListener("keyup", (e) => {
// 	const address = e.target.value;
// 	addressOutput.textContent = address;

// 	// const url = `https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=<AddressValidateRequest USERID="${API_KEY}"><Address ID="0"><Address1></Address1><Address2>${address}</Address2><City></City><State></State><Zip5></Zip5><Zip4></Zip4></Address></AddressValidateRequest>`;
// 	// fetch(url)
// 	//     .then((response) => response.text())
// 	//     .then((data) => {
// 	//     const parser = new DOMParser();
// 	//     const xmlDoc = parser.parseFromString(data, "text/xml");
// 	//     const fixedAddress = xmlDoc.getElementsByTagName("Address2")[0].childNodes[0].nodeValue;
// 	//     addressOutput.textContent = fixedAddress;
// 	//   })
// });

const dataset = [
	"101 w. simons rd",
	"101 sw. simons rd.",
	"5000 davis rd.",
	"T86-5 arnold ave.",
	"33018888 mayson lane",
	"88 san Gabriel pkwy",
	"66 1st St NW",
	"55 SE arnold-meja East way",
	"3369 arnold L East way",
	"88 E san Gabriel way",
	"88 E san-Gabriel way",
	"unit 56005 Box 4190",
	"PO BOX 100010",
	"Unit 75",
	"RR 6698",
	"HC 89956",
	"47 ANYVILLE RD NW #2",
	"7 apple rd",
];

// MAtches the PO BOX, RR, HC, Unit
// console.log(
// 	dataset.map((address) => {
// 		const regex =
// 			/^(PO BOX|RR|HC|Unit) [0-9]+|^[0-9]{1,5}( N\.| S\.| E\.| W\.| NE\.| NW\.| SE\.| SW\.)?[0-9a-zA-Z\s]+ (Ave\.|St\.|Rd\.|Blvd\.|Dr\.|Pkwy\.|Way)?( (N\.|S\.|E\.|W\.|NE\.|NW\.|SE\.|SW\.))?( North|South|East|West|NorthEast|NorthWest|SouthEast|SouthWest)?(\s?#[0-9])?$/;
// 		const test = regex.test(address);
// 		console.log(test);
// 		// const valid = regex.test(address);
// 		const result = address;
// 		const failed = [];
// 		if (!test) {
// 			failed.push(address);
// 		}
// 		return { failed };
// 	})
// );
// now test the standard addresses

// console.log(
// 	dataset.map((address) => {
// 		const regex =
// 			/(^([0])([0])(PO BOX|RR|HC|Unit) (?!\d+)([a-z,0-9,A-Z]{1,9})([0])([0]))|((^([0-9,a-z,A-Z]{0,9}[\s-])?[0-9,a-z,A-Z]{1,9})(?!(N\.|S\.|E\.|W\.|NE\.|NW\.|SE\.|SW\.)) ((?:[0-9a-zA-Z\s\.\-\']+\s){0,2}([0-9a-zA-Z\s\.\-\']?)+( Ave\.| St\.| Rd\.| Blvd\.| Dr\.| Pkwy\.| Way)?)((N\.|S\.|E\.|W\.|NE\.|NW\.|SE\.|SW\.))?( North|South| East|West|NorthEast|NorthWest|SouthEast|SouthWest)?((\s)?(#[0-9]))?([0-9]*)?$)/i;
// 		const test = regex.test(address);

// 		return { address, test };
// 	})
// );
