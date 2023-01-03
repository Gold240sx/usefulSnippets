//Regex's for address parsing
const regex =
	/^([0-9\s\.\-\/]{1,9})\s(N\.?\s|S\.?\s|E\.?\s|W\.?\s|N\.?E\.?\s|N\.?W\.?\s|S\.?E\.?\s|S\.?W\.?|North\s|South\s|East\s|West\s|NorthEast\s|NorthWest\s|SouthEast\s|SouthWest\s)?([0-9a-zA-Z\s\.\-\'\/]+)\s(ALLEE\.?|ALLEY|ALLY\.?|ALY\.?|ANEX\.?|ANNEX|ANNX\.?|ANX\.?|ARC\.?|ARCADE|AV\.?|AVE\.?|AVEN\.?|AVENU\.?|AVENUE|AVN\.?|AVNUE\.?|BAYOO\.?|BAYOU|BCH\.?|BEACH|BEND|BND\.?|BLF\.?|BLUF\.?|BLUFF|BLUFFS|BOT\.?|BTM\.?|BOTTM\.?|BOTTOM|BLVD\.?|BOUL\.?|BOULEVARD|BOULV\.?|BR\.?|BRNCH\.?|BRANCH|BRDGE\.?|BRG\.?|BRIDGE|BRK\.?|BROOK|BROOKS|BURG|BURGS|BYP\.?|BYPA\.?|BYPAS\.?|BYPASS|BYPS\.?|CAMP|CP\.?|CMP\.?|CANYN\.?|CANYON|CNYN\.?|CAPE\.?|CPE\.?|CAUSEWAY|CAUSWA\.?|CSWY\.?|CEN\.?|CENT\.?|CENTER|CENTR\.?|CENTRE\.?|CNTER\.?|CNTR\.?|CTR\.?|CENTERS|CIR\.?|CIRC\.?|CIRCL\.?|CIRCLE|CRCL\.?|CRCLE\.?|CIRCLES|CLF\.?|CLIFF|CLFS\.?|CLIFFS|CLB\.?|CLUB|COMMON|COMMONS|COR\.?|CORNER|CORNERS|CORS\.?|COURSE|CRSE\.?|COURT\.?|CT\.?|COURTS|CTS\.?|COVE|CV\.?|COVES|CREEK|CRK\.?|CRESCENT|CRES\.?|CRSENT\.?|CRSNT\.?|CREST|CROSSING|CRSSNG\.?|XING\.?|CROSSROAD|CROSSROADS|CURVE|DALE|DL\.?|DAM\.?|DM\.?|DIV\.?|DIVIDE|DV\.?|DVD\.?|DR\.?|DRIV\.?|DRIVE|DRV\.?|DRIVES|EST\.?|ESTATE|ESTATES|ESTS\.?|EXP\.?|EXPR\.?|EXPRESS\.?|EXPRESSWAY|EXPW\.?|EXPY\.?|EXT\.?|EXTENSION|EXTN\.?|EXTNSN\.?|EXTS\.?|FALL\.?|FALLS|FLS\.?|FERRY|FRRY\.?|FRY\.?|FIELD|FLD\.?|FIELDS|FLDS\.?|FLAT|FLT\.?|FLATS|FLTS\.?|FORD|FRD\.?|FORDS|FOREST|FORESTS|FRST\.?|FORG\.?|FORGE|FRG\.?|FORGES|FORK|FRK\.?|FORKS|FRKS\.?|FORT|FRT\.?|FT\.?|FREEWAY|FREEWY\.?|FRWAY\.?|FRWY\.?|FWY\.?|GARDEN|GARDN\.?|GRDEN\.?|GRDN\.?|GARDENS|GDNS\.?|GRDNS\.?|GATEWAY|GATEWY\.?|GATWAY\.?|GTWAY\.?|GTWY\.?|GLEN|GLN\.?|GLENS|GREEN\.?|GRN\.?|GREENS|GROV\.?|GROVE|GRV\.?|GROVES|HARB\.?|HARBOR|HARBR\.?|HBR\.?|HRBOR\.?|HARBORS|HAVEN|HVN\.?|HT\.?|HTS\.?|HIGHWAY|HIGHWY\.?|HIWAY\.?|HIWY\.?|HWAY\.?|HWY\.?|HILL|HL\.?|HILLS|HLS\.?|HLLW\.?|HOLLOW\.?|HOLLOWS|HOLW\.?|HOLWS\.?|INLT\.?|IS\.?|ISLAND|ISLND\.?|ISLANDS|ISLNDS\.?|ISS\.?|ISLE\.?|ISLES|JCT\.?|JCTION\.?|JCTN\.?|JUNCTION|JUNCTN\.?|JUNCTON\.?|JCTNS\.?|JCTS\.?|JUNCTIONS|KEY|KY\.?|KEYS|KYS\.?|KNL\.?|KNOL\.?|KNOLL|KNLS\.?|KNOLLS|LK\.?|LAKE|LKS\.?|LAKES|LAND\.?|LANDING|LNDG\.?|LNDNG\.?|LANE|LN\.?|LGT\.?|LIGHT|LIGHTS|LF\.?|LOAF|LCK\.?|LOCK|LCKS\.?|LOCKS|LDG\.?|LDGE\.?|LODG\.?|LODGE|LOOP|LOOPS|MALL|MNR\.?|MANOR|MANORS|MNRS\.?|MEADOW|MDW\.?|MDWS\.?|MEADOWS|MEDOWS|MEWS|MILL|MILLS|MISSN\.?|MSSN\.?|MOTORWAY|MNT\.?|MT\.?|MOUNT|MNTAIN\.?|MNTN\.?|MOUNTAIN|MOUNTIN\.?|MTIN\.?|MTN\.?|MNTNS\.?|MOUNTAINS|NCK\.?|NECK|ORCH\.?|ORCHARD|ORCHRD|OVAL|OVL\.?|OVERPASS|PARK|PRK\.?|PARKS|PARKWAY|PARKWY\.?|PKWAY\.?|PKWY\.?|PKY\.?|PARKWAYS|PKWYS\.?|PASS|PASSAGE|PATH|PATHS|PIKE|PIKES|PINE|PINES|PNES\.?|PL\.?|PLAIN|PLN\.?|PLAINS|PLNS\.?|PLAZA|PLZ\.?|PLZA\.?|POINT|PT\.?|POINTS|PTS\.?|PORT|PRT\.?|PORTS|PRTS\.?|PR\.?|PRAIRIE|PRR\.?|RAD\.?|RADIAL|RADIEL\.?|RADL\.?|RAMP|RANCH|RANCHES|RNCH\.?|RNCHS\.?|RAPID|RPD\.?|RAPIDS|RPDS\.?|REST|RST\.?|RDG\.?|RDGE\.?|RIDGE|RDGS\.?|RIDGES|RIV\.?|RIVER|RVR\.?|RIVR\.?|RD\.?|ROAD|ROADS|RDS\.?|ROUTE|ROW|RUE\.?|RUN\.?|SHL\.?|SHOAL|SHLS\.?|SHOALS|SHOAR\.?|SHORE|SHR\.?|SHOARS\.?|SHORES|SHRS\.?|SKYWAY|SPG\.?|SPNG\.?|SPRING|SPRNG\.?|SPGS\.?|SPNGS\.?|SPRINGS|SPRNGS\.?|SPUR|SPURS|SQ\.?|SQR\.?|SQRE\.?|SQU\.?|SQUARE|SQRS\.?|SQUARES|STA\.?|STATION|STATN\.?|STN\.?|STRA\.?|STRAV\.?|STRAVEN\.?|STRAVENUE|STRAVN\.?|STRVN\.?|STRVNUE\.?|STREAM|STREME\.?|STRM\.?|STREET|STRT\.?|ST\.?|STR\.?|STREETS|SMT\.?|SUMIT\.?|SUMITT\.?|SUMMIT|TER\.?|TERR\.?|TERRACE|THROUGHWAY|TRACE|TRACES|TRCE\.?|TRACK|TRACKS|TRAK\.?|TRK\.?|TRKS\.?|TRAFFICWAY|TRAIL|TRAILS|TRL\.?|TRLS\.?|TRAILER|TRLR\.?|TRLRS\.?|TUNEL\.?|TUNL\.?|TUNLS\.?|TUNNEL|TUNNELS|TUNNL\.?|TRNPK\.?|TURNPIKE|TURNPK\.?|UNDERPASS|UN\.?|UNION|UNIONS|VALLEY|VALLY|VLLY\.?|VLY\.?|VALLEYS|VLYS\.?|VDCT\.?|VIA\.?|VIADCT\.?|VIADUCT|VIEW|VW\.?|VIEWS|VWS\.?|VILL\.?|VILLAG\.?|VILLAGE|VILLG\.?|VILLIAGE|VLG\.?|VILLAGES|VLGS\.?|VILLE\.?|VL\.?|VIS\.?|VIST\.?|VISTA|VST\.?|VSTA\.?|WALK|WALKS|WALL|WY\.?|WAY|WAYS|WELL|WELLS|WLS\.?)\,?\s?\b(N\.?|S\.?|E\.?|W\.?|NE\.?|NW\.?|SE\.?|SW\.?|North|South|East|West|NorthEast|NorthWest|SouthEast|SouthWest)?\b\,?\s?\#?\s?([a-zA-Z\s\.\#]{1,7}[0-9\s\.\-\']{1,6}|[a-zA-Z]{1,1}?[0-9\s\.\-\']{1,6}?[a-zA-Z\s\.]{1,6})?$/i;
const regex2 =
	/^(P\.?O\.? BOX|R\.?R\.?|HC [0-9]{1,5} BOX|Unit|FM|Indian Rte\.?)\s([a-z,0-9,A-Z]{1,9})\s?\#?([0-9a-zA-Z\s\.\-\']{1,6})?\s?$/i;
const ruralRegex =
	/^([0-9\s\.\-\/]{1,9})\s(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|U[ST]|V[AIT]|W[AIVY])-([0-9\s\.\-\/]{1,9})/i;
const regex3 =
	/^([0-9a-zA-Z\s\.\-\']+)\,?\s\b(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming|District Of Columbia))\b\,?\s([0-9]{5,5}|[0-9]{5,5}[-]?\s?[0-9]{4,4}?)$/i;

// Constants
const addr1 = document.getElementById("Addr_1");
const addr2rNone = document.getElementById("Addr_Ln_2_None");
const lnOneAlert = document.querySelector(".ln1-input-invalid-alert");
const addNum = document.querySelector("#addNum");
const addPre = document.querySelector("#addPrefix");
const addName = document.querySelector("#addStreet");
const addStType = document.querySelector("#addStType");
const addSuf = document.querySelector("#addSuffix");
const addApt = document.querySelector("#addAppNum");
const addrLn2RadioBtns = document.querySelectorAll('input[name="Addr_Ln_2"]');
const addrLn2InputsContainer = document.querySelector("#Addr_2_Inputs_Container");
const addrLn2InputOptionsContainer = document.querySelector("#Addr_2_Input_Options_Container");
const floorQ = document.querySelector("#floor-container");
const suiteQ = document.querySelector("#suite-container");
const suiteInput = document.querySelector("#Addr_Ln_2_Suite");
const floorInput = document.querySelector("#Addr_Ln_2_Floor");
const mailsInput = document.querySelector("#Addr_Ln_2_Mailstop");
const mailstopQ = document.querySelector("#mailstop-container");
const addr3 = document.getElementById("Addr_3");
const lnThreeAlert = document.querySelector(".ln3-input-invalid-alert");
const addCity = document.querySelector("#addCIty");
const addState = document.querySelector("#addState");
const addZip = document.querySelector("#addZip");
const addCountry = document.querySelector("#addCountry");
const thisSelect = document.getElementById("bld_type_select");
const varLabel = document.querySelector("#variable_Bld_Lbl");
const varInput = document.querySelector("#Addr_Ln_2_Bld_Num");
const addBldType = document.querySelector("#addBldgType");
const addBldNum = document.querySelector("#addBldgNum");
const addBldDscr = document.querySelector("#addBldgDiscr");
const addBldDscrNum = document.querySelector("#addBldgDiscrNum");
const buildDiscInputs = document.querySelectorAll(".bldDscrInput");
const line2label = document.querySelector("#Addr_Ln_2_Lbl");
const line3label = document.querySelector("#Addr_Ln_3_Lbl");
const outputBtn = document.querySelector("#output_Btn");
const finalLn1 = document.querySelector("#address-ln-1-out");
const finalLn2 = document.querySelector("#address-ln-2-out");
const finalLn3 = document.querySelector("#address-ln-3-out");

const outputFinalResults = (e) => {
	e.preventDefault();

	//ouput variables as it relates to rexeg1
	if (regex.test(addr1.value)) {
		finalLn1.value =
			addNum.textContent +
			" " +
			`${addPre.textContent ? addPre.textContent + " " : ""}` +
			addName.textContent +
			" " +
			addStType.textContent +
			" " +
			`${addSuf.textContent ? addSuf.textContent + " " : ""}` +
			`${addApt.textContent ? addApt.textContent + " " : ""}`;
	} //ouput variables as it relates to rexeg2
	else if (regex2.test(addr1.value)) {
		finalLn1.value = addName.textContent + " " + `${addApt.textContent ? addApt.textContent + " " : ""}`;
	} else if (ruralRegex.test(addr1.value)) {
	} else {
		finalLn1.value = "Invalid Address";
	}
	console.log("yay");
};

outputBtn.addEventListener("click", outputFinalResults);

var selectedBldType = varInput;
/// GET  VALS FUNCTION
const oneSpacedInput = (input) => {
	return input.value.replace(/^\s+|\s+$|\s{2,}/g, function (match) {
		if (/^\s+|\s+$/.test(match)) {
			return ""; // Remove leading/trailing spaces
		} else {
			return " "; // Replace multiple spaces with a single space
		}
	});
};

const formattedStreetPrefix = (prefix) => {
	const formatted = prefix
		.replace(/[. ]/g, "")
		.toLowerCase()
		.replace(/^ne|northeast/, "NE")
		.replace(/^nw|northwest/, "NW")
		.replace(/^se|southeast/, "SE")
		.replace(/^sw|southwest/, "SW")
		.replace(/^north/, "N")
		.replace(/^south/, "S")
		.replace(/^east/, "E")
		.replace(/^west/, "W")
		.replace(/^n\.?/, "N")
		.replace(/^s\.?/, "S")
		.replace(/^e\.?/, "E")
		.replace(/^w\.?/, "W");
	return formatted;
};
const formatStreetName = (name) => {
	return name
		.replace(/\b[a-z]/gi, function (letter) {
			return letter.toUpperCase();
		})
		.replace(/'\b[a-z]/gi, function (letter) {
			return letter.toUpperCase();
		})
		.replace(/\s+/g, " ")
		.trim();
};

const formatStreetType = (name) => {
	return name.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

const formattedStreetSuffix = (suffix) => {
	const formatted = suffix
		.replace(/[. ]/g, "")
		.toLowerCase()
		.replace(/^ne|northeast/, "NorthEast")
		.replace(/^nw|northwest/, "NorthWest")
		.replace(/^se|southeast/, "SouthEast")
		.replace(/^sw|southwest/, "SouthWest")
		.replace(/^north/, "North")
		.replace(/^south/, "South")
		.replace(/^east/, "East")
		.replace(/^west/, "West")
		.replace(/^n\.?/, "North")
		.replace(/^s\.?/, "South")
		.replace(/^e\.?/, "East")
		.replace(/^w\.?/, "West");
	return formatted;
};

const formatttedAptNum = (aptNum) => {
	console.log({ aptNum });

	const formatted = aptNum
		? aptNum
				.replace(/[.#]/g, "")
				.toUpperCase()
				.replace(/^APT\.?[A-Z]{1,20}|APPT\.?[A-Z]{1,20}|APPARTMENT\.?[A-Z]{1,20}/, "")
				.replace(/^APT|APPT|APPARTMENT/, "")
		: null;
	return formatted;
};

const formatCItyNAme = (city) => {
	return city
		.replace(/\b[a-z]/gi, function (letter) {
			return letter.toUpperCase();
		})
		.replace(/'\b[a-z]/gi, function (letter) {
			return letter.toUpperCase();
		})
		.replace(/\s+/g, " ")
		.trim();
};

const formatStateName = (state) => {
	return state
		.toUpperCase()
		.replace(/^ALABAMA/, "AL")
		.replace(/^ALASKA/, "AK")
		.replace(/^ARIZONA/, "AZ")
		.replace(/^ARKANSAS/, "AR")
		.replace(/^CALIFORNIA/, "CA")
		.replace(/^COLORADO/, "CO")
		.replace(/^CONNECTICUT/, "CT")
		.replace(/^DELAWARE/, "DE")
		.replace(/^FLORIDA/, "FL")
		.replace(/^GEORGIA/, "GA")
		.replace(/^HAWAII/, "HI")
		.replace(/^IDAHO/, "ID")
		.replace(/^ILLINOIS/, "IL")
		.replace(/^INDIANA/, "IN")
		.replace(/^IOWA/, "IA")
		.replace(/^KANSAS/, "KS")
		.replace(/^KENTUCKY/, "KY")
		.replace(/^LOUISIANA/, "LA")
		.replace(/^MAINE/, "ME")
		.replace(/^MARYLAND/, "MD")
		.replace(/^MASSACHUSETTS/, "MA")
		.replace(/^MICHIGAN/, "MI")
		.replace(/^MINNESOTA/, "MN")
		.replace(/^MISSISSIPPI/, "MS")
		.replace(/^MISSOURI/, "MO")
		.replace(/^MONTANA/, "MT")
		.replace(/^NEBRASKA/, "NE")
		.replace(/^NEVADA/, "NV")
		.replace(/^NEW HAMPSHIRE/, "NH")
		.replace(/^NEW JERSEY/, "NJ")
		.replace(/^NEW MEXICO/, "NM")
		.replace(/^NEW YORK/, "NY")
		.replace(/^NORTH CAROLINA/, "NC")
		.replace(/^NORTH DAKOTA/, "ND")
		.replace(/^OHIO/, "OH")
		.replace(/^OKLAHOMA/, "OK")
		.replace(/^OREGON/, "OR")
		.replace(/^PENNSYLVANIA/, "PA")
		.replace(/^RHODE ISLAND/, "RI")
		.replace(/^SOUTH CAROLINA/, "SC")
		.replace(/^SOUTH DAKOTA/, "SD")
		.replace(/^TENNESSEE/, "TN")
		.replace(/^TEXAS/, "TX")
		.replace(/^UTAH/, "UT")
		.replace(/^VERMONT/, "VT")
		.replace(/^VIRGINIA/, "VA")
		.replace(/^WASHINGTON/, "WA")
		.replace(/^WEST VIRGINIA/, "WV")
		.replace(/^WISCONSIN/, "WI")
		.replace(/^WYOMING/, "WY")
		.replace(/^DISTRICT OF COLUMBIA/, "DC");
};

// const getVals = (e, mainRegx, secRegx, ThrdRgex) => {
// 	const input = e.target.value;
//
// 	if (mainRegx.test(input)) {
// 		const [fullMatch, streetNumber, streetPrefix, streetName, streetType, streetSuffix, apmtNum] = oneSpacedInput.match(regex);
// 		return { fullMatch, streetNumber, streetPrefix, streetName, streetType, streetSuffix, apmtNum, input };
// 	} else if (secRegx.test(input)) {
// 		const [fullMatch, poName, poNum] = oneSpacedInput.match(regex2);
// 		return { poName, poNum, input };
// 	} else if (ThrdRgex.test(input)) {
// 	} else {
// 		console.log("no match");
// 	}
// };

//===============================================

//===============================================

addr2rNone.addEventListener("click", (e) => {
	//check the value of addr 1 to determine if adderss or unit is described
	const oneSpacedInput = addr1.value.replace(/^\s+|\s+$|\s{2,}/g, function (match) {
		if (/^\s+|\s+$/.test(match)) {
			return ""; // Remove leading/trailing spaces
		} else {
			return " "; // Replace multiple spaces with a single space
		}
	});
	// precheck to verify if address passes  one of the regex before override
	if (oneSpacedInput.match(regex)) {
		const [fullMatch, streetNumber, streetPrefix, streetName, streetType, streetSuffix, apmtNum] = oneSpacedInput.match(regex);
		console.log("ln 87");

		// check if appatment building has value, if so, set the value of the select to the value of the apartment number
		if (addr2rNone.checked) {
			varInput.setAttribute("placeholder", "Bldg #");
			varInput.value = "";
			varLabel.textContent = "Bldg";
			thisSelect.setAttribute("value", "");
			thisSelect.style.color = "gray";
			addBldType.textContent = "";
			addBldNum.textContent = "";
			addBldDscr.textContent = "";
		} else if (apmtNum !== undefined) {
			addApt.textContent = formatttedAptNum(apmtNum);
			addBldType.textContent = "";
			addBldNum.textContent = "";
			varInput.setAttribute("placeholder", apmtNum);
			console.log(selectedBldType);
			if (selectedBldType === "apt") {
				thisSelect.value = "apt";
				varInput.value = apmtNum;
			} else if (selectedBldType === "unit") {
				thisSelect.value = "unit";
				varInput.value = apmtNum;
			} else {
				varInput.value = "";
			}
		}
	} else if (oneSpacedInput.match(regex2)) {
		console.log("ln 116");
		const [fullMatch, poName, poNum] = oneSpacedInput.match(regex2);
		const formattedPoName = poName
			.replace(/PO|P\.O\.|P\.O|P\.O\./g, "PO Box")
			.replace(/unit\.?/gi, "Unit")
			.replace(/fm\.?/gi, "FM")
			.replace(/hc|h\.c\.|H\.c|h\.C\./g, "HC");
		addName.textContent = formattedPoName;
		addApt.textContent = poNum;
		addStType.textContent = "";
		addSuf.textContent = "";
		addApt.textContent = "";
		addBldType.textContent = "";
		addBldNum.textContent = "";
		varInput.setAttribute("placeholder", "Bldg #");
		varInput.value = "";
		//
	} else if (oneSpacedInput.match(ruralRegex)) {
		const [fullMatch, StreetName, SteetNumber] = oneSpacedInput.match(ruralRegex);

		//
	} else {
		// Regex did not match
		varInput.value = "";
		console.log("no math");
		return;
	}
});

thisSelect.addEventListener("change", (e) => {
	const selectedValue = thisSelect[thisSelect.selectedIndex].value;
	thisSelect.setAttribute("value", selectedValue);
	thisSelect.style.color = "black";
	varLabel.textContent = thisSelect[thisSelect.selectedIndex].getAttribute("data-label-abr");
	varInput.setAttribute("placeholder", thisSelect[thisSelect.selectedIndex].getAttribute("data-label-abr") + " #");
	switch (selectedValue) {
		case "Apt":
			addBldType.textContent = "";
			break;
		case "Rm":
			addBldType.textContent = "";
			break;
		default:
			selectedBldType = selectedValue;
			addBldType.textContent = selectedBldType;
			break;
	}
});

varInput.addEventListener("keyup", (e) => {
	const selectedValue = thisSelect[thisSelect.selectedIndex].value;
	const input = e.target.value;
	const oneSpacedInput = input.replace(/^\s+|\s+$|\s{2,}/g, function (match) {
		if (/^\s+|\s+$/.test(match)) {
			return ""; // Remove leading/trailing spaces
		} else {
			return " "; // Replace multiple spaces with a single space
		}
	});
	varInput.addEventListener("blur", (e) => {
		if (input.length === 0 || regex2.test(oneSpacedInput)) {
			addBldNum.textContent = "";
		} else if (input.length > 0 && !regex2.test(oneSpacedInput)) {
			switch (selectedValue) {
				case "Apt":
					addApt.textContent = formatttedAptNum(apmtNum);
					addBldNum.textContent = "";
					break;
				case "Rm":
					addBldType.textContent = "";
					break;
				default:
					selectedBldType = selectedValue;
					addBldType.textContent = selectedBldType;
					addBldNum.textContent = input;
					break;
			}
		}
	});
});

buildDiscInputs.forEach((input) => {
	input.addEventListener("keyup", (e) => {
		const value = e.target.value;
		addBldDscrNum.textContent = value;
	});
});

addr3.addEventListener("keyup", (e) => {
	const input = e.target.value;
	const oneSpacedInput = input.replace(/^\s+|\s+$|\s{2,}/g, function (match) {
		if (/^\s+|\s+$/.test(match)) {
			return ""; // Remove leading/trailing spaces
		} else {
			return " "; // Replace multiple spaces with a single space
		}
	});
	addr3.addEventListener("blur", (e) => {
		if (input.length === 0 || regex3.test(oneSpacedInput)) {
			lnThreeAlert.style.display = "none";
		} else if (input.length > 0 && !regex3.test(oneSpacedInput)) {
			lnThreeAlert.style.display = "flex";
		}
	});
	if (regex3.test(oneSpacedInput)) {
		lnThreeAlert.style.display = "none";
		const [fullMatch, city, state, zip] = oneSpacedInput.match(regex3);
		addCity.textContent = formatCItyNAme(city);
		addState.textContent = formatStateName(state);
		// return zip in either 12345 or 12345-1234 format
		zip.length === 5
			? (addZip.textContent = zip)
			: (addZip.textContent = zip.replace(/[ -]/g, "").substring(0, 5) + "-" + zip.replace(/[ -]/g, "").substring(5));
		addCountry.textContent = "USA";
	} else if (oneSpacedInput.length === 0) {
		addCity.textContent = "";
		addState.textContent = "";
		addZip.textContent = "";
		addCountry.textContent = "";
	} else {
		lnThreeAlert.style.display = "flex";
	}
});

addr1.addEventListener("keyup", (e) => {
	const input = e.target.value;

	const oneSpacedInput = input.replace(/^\s+|\s+$|\s{2,}/g, function (match) {
		if (/^\s+|\s+$/.test(match)) {
			return ""; // Remove leading/trailing spaces
		} else {
			return " "; // Replace multiple spaces with a single space
		}
	});
	if (regex.test(oneSpacedInput) || regex2.test(oneSpacedInput)) {
		lnOneAlert.style.display = "none";
	} else {
		lnOneAlert.style.display = "flex";
	}

	addr1.addEventListener("blur", (e) => {
		if (oneSpacedInput.length === 0 && regex.test(oneSpacedInput) == false) {
			addNum.textContent = "";
			addPre.textContent = "";
			addName.textContent = "";
			addStType.textContent = "";
			addSuf.textContent = "";
			addApt.textContent = "";
		} else if (oneSpacedInput.length > 0 && regex.test(oneSpacedInput) == false && regex2.test(oneSpacedInput) == true) {
			if (oneSpacedInput.match(regex2)) {
				const [fullMatch, poName, poNum] = oneSpacedInput.match(regex2);
				addNum.textContent = "";
				addPre.textContent = "";
				addName.textContent = poName
					.toLowerCase()
					.replace(/po|p\.o\.|p\.o|p\.o\./g, "PO")
					.replace(/box/g, "Box")
					.replace(/unit\.?/gi, "Unit")
					.replace(/fm\.?/gi, "FM")
					.replace(/hc|h\.c\.|H\.c|h\.C\./g, "HC");
				addStType.textContent = "";
				addSuf.textContent = "";
				addApt.textContent = poNum;
			}
		} else if (oneSpacedInput.length > 0 && regex.test(oneSpacedInput) == true) {
			lnOneAlert.style.display = "none";
			if (oneSpacedInput.match(regex)) {
				const [fullMatch, streetNumber, streetPrefix, streetName, streetType, streetSuffix, apmtNum] = oneSpacedInput.match(regex);
				//remove unit and apt from list if the user already defined it
				if (apmtNum !== undefined) {
					//if the appt  num is already defined, dont allow the user to select it again
					thisSelect.options[11].setAttribute("disabled", "disabled");
					thisSelect.options[12].setAttribute("disabled", "disabled");
					thisSelect.options[13].setAttribute("disabled", "disabled");
					if (
						// if the user preselects appt num and then defines it via line 1, remove the preselection
						thisSelect[thisSelect.selectedIndex].value == "Apt" ||
						thisSelect[thisSelect.selectedIndex].value == "Unit" ||
						thisSelect[thisSelect.selectedIndex].value == "Bldg" ||
						thisSelect[thisSelect.selectedIndex].value == "Rm"
					) {
						thisSelect[thisSelect.selectedIndex].selected = false;
					}
				} else {
					// ensure the user can select a room, appt, or unit if not defined in line 1
					thisSelect.options[11].removeAttribute("disabled", "disabled");
					thisSelect.options[12].removeAttribute("disabled", "disabled");
					thisSelect.options[13].removeAttribute("disabled", "disabled");
				}
				// output the address line 1 values
				addNum.textContent = streetNumber;
				addPre.textContent = formattedStreetPrefix(streetPrefix ? streetPrefix : "");
				addName.textContent = formatStreetName(streetName);
				addStType.textContent = streetType;
				addSuf.textContent = formattedStreetSuffix(streetSuffix ? streetSuffix : "");
				addApt.textContent = formatttedAptNum(apmtNum);
			} else {
				if (apmtNum == undefined) {
					thisSelect.add(thisSelect.option[(value = "Apt")]);
					// thisSelect.add(thisSelect.option[(value = "Unit")]);
				}
				addNum.textContent = "";
				addPre.textContent = "";
				addName.textContent = poName;
				addStType.textContent = "";
				addSuf.textContent = "";
				addApt.textContent = poNum;
			}
		}
	});
});

// Line 2 Option Show / Hide

addrLn2RadioBtns.forEach((btn) =>
	btn.addEventListener("click", () => {
		const addrLn2RadioBtnSelected = document.querySelector('input[name="Addr_Ln_2"]:checked');

		if (addrLn2RadioBtnSelected.value) {
			addrLn2InputsContainer.style.display = "flex";
			addrLn2InputOptionsContainer.style.display = "flex";
		} else {
			addrLn2InputsContainer.style.display = "none";
		}

		const thisSelect = document.getElementById("bld_type_select");

		if (addrLn2RadioBtnSelected.value === "floor") {
			line2label.style.display = "flex";
			line3label.textContent = "Addr_3:";
			floorQ.style.display = "flex";
			suiteQ.style.display = "none";
			mailstopQ.style.display = "none";
			addBldDscr.textContent = "Floor";
			//Remove values of other inputs
			floorQ.querySelector('input[name="Addr_Ln_2"]').value = addBldDscrNum.textContent;
			suiteQ.querySelector('input[name="Addr_Ln_2"]').value = "";
			mailstopQ.querySelector('input[name="Addr_Ln_2"]').value = "";
		} else if (addrLn2RadioBtnSelected.value === "suite") {
			line2label.style.display = "flex";
			line3label.textContent = "Addr_3:";
			floorQ.style.display = "none";
			suiteQ.style.display = "flex";
			mailstopQ.style.display = "none";
			addBldDscr.textContent = "Suite";
			//Remove values of other inputs
			suiteQ.querySelector('input[name="Addr_Ln_2"]').value = addBldDscrNum.textContent;
			floorQ.querySelector('input[name="Addr_Ln_2"]').value = "";
			mailstopQ.querySelector('input[name="Addr_Ln_2"]').value = "";
		} else if (addrLn2RadioBtnSelected.value === "mailstop") {
			line2label.style.display = "flex";
			line3label.textContent = "Addr_3:";
			floorQ.style.display = "none";
			suiteQ.style.display = "none";
			mailstopQ.style.display = "flex";
			addBldDscr.textContent = "Mailstop";
			//Remove values of other inputs
			mailstopQ.querySelector('input[name="Addr_Ln_2"]').value = addBldDscrNum.textContent;
			floorQ.querySelector('input[name="Addr_Ln_2"]').value = "";
			suiteQ.querySelector('input[name="Addr_Ln_2"]').value = "";
		} else if (addrLn2RadioBtnSelected.value === "none") {
			varInput.setAttribute("placeholder", "Bldg #");
			varLabel.textContent = "Bldg";
			line2label.style.display = "none";
			line3label.textContent = "Addr_2:";
			addrLn2InputOptionsContainer.style.display = "none";
			addrLn2InputsContainer.style.display = "none";
			floorQ.querySelector('input[name="Addr_Ln_2"]').value = "";
			suiteQ.querySelector('input[name="Addr_Ln_2"]').value = "";
			mailstopQ.querySelector('input[name="Addr_Ln_2"]').value = "";
			addBldDscr.textContent = "";
			addBldDscrNum.textContent = "";
			addBldType.textContent = "";
			addBldNum.textContent = "";
			varInput.value = "";
			// handle the value and the selected option for the select element
			thisSelect.options[0].selected = "selected";
			thisSelect.setAttribute("value", "");
			// Applies the "-- SELECT --" text to the select element when deselected
			thisSelect.value = thisSelect.options[0].value;
			thisSelect.style.color = "#999";
		} else {
			// other is selected.
			line2label.style.display = "flex";
			line3label.textContent = "Addr_3:";
			addrLn2InputOptionsContainer.style.display = "none";
			floorQ.querySelector('input[name="Addr_Ln_2"]').value = "";
			suiteQ.querySelector('input[name="Addr_Ln_2"]').value = "";
			mailstopQ.querySelector('input[name="Addr_Ln_2"]').value = "";
			addBldDscr.textContent = "";
			addBldDscrNum.textContent = "";
		}
	})
);
//=================================================================================
//Address Ln 3//
//=================================================================================
