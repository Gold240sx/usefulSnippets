const input = document.getElementById('input');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convert');
const matchPrompt = document.getElementById("matchPrompt");

const statesAndCities = {
	"AK": [
		"Adak",
		"Akiachak",
		"Akiak",
		"Akutan",
		"Alakanuk",
		"Aleknagik",
		"Allakaket",
		"Ambler",
		"Anchorage",
		"Angoon",
		"Anvik",
		"Atka",
		"Barrow",
		"Beaver",
		"Buckland",
		"Cantwell",
		"Central",
		"Chefornak",
		"Chevak",
		"Chicken",
		"Chignik",
		"Chitina",
		"Chugiak",
		"Circle",
		"Clam Gulch",
		"Clarks Point",
		"Copper Center",
		"Craig",
		"Crooked Creek",
		"Deering",
		"Eagle",
		"Eagle River",
		"Eek",
		"Egegik",
		"Ekwok",
		"Elfin Cove",
		"Elim",
		"Emmonak",
		"Ester",
		"False Pass",
		"Galena",
		"Gambell",
		"Girdwood",
		"Glennallen",
		"Goodnews Bay",
		"Grayling",
		"Gustavus",
		"Haines",
		"Healy",
		"Holy Cross",
		"Hoonah",
		"Hooper Bay",
		"Hope",
		"Houston",
		"Hughes",
		"Huslia",
		"Hydaburg",
		"Hyder",
		"JBER",
		"Kake",
		"Kaktovik",
		"Kalskag",
		"Kaltag",
		"Karluk",
		"Kasigluk",
		"Kasilof",
		"Kiana",
		"King Cove",
		"Kipnuk",
		"Kivalina",
		"Klawock",
		"Kobuk",
		"Kongiganak",
		"Kotlik",
		"Kotzebue",
		"Koyuk",
		"Koyukuk",
		"Kwethluk",
		"Kwigillingok",
		"Larsen Bay",
		"Levelock",
		"Lower Kalskag",
		"Manokotak",
		"Marshall",
		"Mekoryuk",
		"Metlakatla",
		"Minto",
		"Moose Pass",
		"Naknek",
		"Napakiak",
		"Nenana",
		"New Stuyahok",
		"Nikolski",
		"Ninilchik",
		"Noatak",
		"Nondalton",
		"Noorvik",
		"Northway",
		"Nulato",
		"Nunam Iqua",
		"Nunapitchuk",
		"Old Harbor",
		"Ouzinkie",
		"Palmer",
		"Pelican",
		"Perryville",
		"Pilot Point",
		"Pilot Station",
		"Platinum",
		"Point Baker",
		"Point Hope",
		"Port Alsworth",
		"Port Lions",
		"Prudhoe Bay",
		"Quinhagak",
		"Red Devil",
		"Ruby",
		"Sand Point",
		"Savoonga",
		"Scammon Bay",
		"Selawik",
		"Seldovia",
		"Seward",
		"Shageluk",
		"Shaktoolik",
		"Shishmaref",
		"Shungnak",
		"Sitka",
		"Skagway",
		"Skwentna",
		"Sleetmute",
		"Soldotna",
		"Stebbins",
		"Sterling",
		"Talkeetna",
		"Tanana",
		"Teller",
		"Togiak",
		"Tununak",
		"Tyonek",
		"Unalakleet",
		"Unalaska",
		"Valdez",
		"Venetie",
		"Wainwright",
		"Wales",
		"Ward Cove",
		"Willow",
		"Wrangell",
		"Yakutat",
	]
};

function checkCityState(input) {
    const regex = /^([a-zA-Z])+[\s-]+([a-zA-Z]{2})$/;
   if (input.match(regex)) {
        const [, city, state] = input.match(regex);
        const match = Object.entries(statesAndCities).some(([stateName, cities]) => stateName === state && cities.includes(city));
        matchPrompt.textContent = "Match found!";
   } else {
        matchPrompt.textContent = "No match found.";
    }
}

    //         output.innerHTML = checkCityState(state, city);
    //      if (statesAndCities[state].includes(city)) {

    //     } else {
    //         matchPrompt.textContent = "No match found.";
    //     }
    // }
	// return Object.entries(statesAndCities).some(([stateInput, cityInput]) => {
    //     return stateName === state && cities.includes(city);
	// });

function tableToObjectAndCopyToClipboard(table) {
	let object = {};
	table.forEach((row) => {
		let state = row.split("\t")[1];
		let city = row.split("\n")[0];
		if (!object[state]) {
			object[state] = [city];
		} else {
			object[state].push(city);
		}
	});
	return JSON.stringify(object, (key, value) => {
		if (typeof key === "string") {
			return new Function("return " + key)();
		}
		return value;
	});
}

input.addEventListener("keyup", function () {
    checkCityState(input.value);
});

convertBtn.addEventListener("click", function () {
    output.innerHTML = tableToObjectAndCopyToClipboard(input.value.split("\n"));
});