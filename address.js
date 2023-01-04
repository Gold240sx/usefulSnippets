//Regex's for address parsing
const regex =
	/^([0-9\s\.\-\/]{1,9})\s(N\.?\s|S\.?\s|E\.?\s|W\.?\s|N\.?E\.?\s|N\.?W\.?\s|S\.?E\.?\s|S\.?W\.?|North\s|South\s|East\s|West\s|NorthEast\s|NorthWest\s|SouthEast\s|SouthWest\s)?([0-9a-zA-Z\s\.\-\'\/]+)\s(ALLEE\.?|ALLEY|ALLY\.?|ALY\.?|ANEX\.?|ANNEX|ANNX\.?|ANX\.?|ARC\.?|ARCADE|AV\.?|AVE\.?|AVEN\.?|AVENU\.?|AVENUE|AVN\.?|AVNUE\.?|BAYOO\.?|BAYOU|BCH\.?|BEACH|BEND|BND\.?|BLF\.?|BLUF\.?|BLUFF|BLUFFS|BOT\.?|BTM\.?|BOTTM\.?|BOTTOM|BLVD\.?|BOUL\.?|BOULEVARD|BOULV\.?|BR\.?|BRNCH\.?|BRANCH|BRDGE\.?|BRG\.?|BRIDGE|BRK\.?|BROOK|BROOKS|BURG|BURGS|BYP\.?|BYPA\.?|BYPAS\.?|BYPASS|BYPS\.?|CAMP|CP\.?|CMP\.?|CANYN\.?|CANYON|CNYN\.?|CAPE\.?|CPE\.?|CAUSEWAY|CAUSWA\.?|CSWY\.?|CEN\.?|CENT\.?|CENTER|CENTR\.?|CENTRE\.?|CNTER\.?|CNTR\.?|CTR\.?|CENTERS|CIR\.?|CIRC\.?|CIRCL\.?|CIRCLE|CRCL\.?|CRCLE\.?|CIRCLES|CLF\.?|CLIFF|CLFS\.?|CLIFFS|CLB\.?|CLUB|COMMON|COMMONS|COR\.?|CORNER|CORNERS|CORS\.?|COURSE|CRSE\.?|COURT\.?|CT\.?|COURTS|CTS\.?|COVE|CV\.?|COVES|CREEK|CRK\.?|CRESCENT|CRES\.?|CRSENT\.?|CRSNT\.?|CREST|CROSSING|CRSSNG\.?|XING\.?|CROSSROAD|CROSSROADS|CURVE|DALE|DL\.?|DAM\.?|DM\.?|DIV\.?|DIVIDE|DV\.?|DVD\.?|DR\.?|DRIV\.?|DRIVE|DRV\.?|DRIVES|EST\.?|ESTATE|ESTATES|ESTS\.?|EXP\.?|EXPR\.?|EXPRESS\.?|EXPRESSWAY|EXPW\.?|EXPY\.?|EXT\.?|EXTENSION|EXTN\.?|EXTNSN\.?|EXTS\.?|FALL\.?|FALLS|FLS\.?|FERRY|FRRY\.?|FRY\.?|FIELD|FLD\.?|FIELDS|FLDS\.?|FLAT|FLT\.?|FLATS|FLTS\.?|FORD|FRD\.?|FORDS|FOREST|FORESTS|FRST\.?|FORG\.?|FORGE|FRG\.?|FORGES|FORK|FRK\.?|FORKS|FRKS\.?|FORT|FRT\.?|FT\.?|FREEWAY|FREEWY\.?|FRWAY\.?|FRWY\.?|FWY\.?|GARDEN|GARDN\.?|GRDEN\.?|GRDN\.?|GARDENS|GDNS\.?|GRDNS\.?|GATEWAY|GATEWY\.?|GATWAY\.?|GTWAY\.?|GTWY\.?|GLEN|GLN\.?|GLENS|GREEN\.?|GRN\.?|GREENS|GROV\.?|GROVE|GRV\.?|GROVES|HARB\.?|HARBOR|HARBR\.?|HBR\.?|HRBOR\.?|HARBORS|HAVEN|HVN\.?|HT\.?|HTS\.?|HIGHWAY|HIGHWY\.?|HIWAY\.?|HIWY\.?|HWAY\.?|HWY\.?|HILL|HL\.?|HILLS|HLS\.?|HLLW\.?|HOLLOW\.?|HOLLOWS|HOLW\.?|HOLWS\.?|INLT\.?|IS\.?|ISLAND|ISLND\.?|ISLANDS|ISLNDS\.?|ISS\.?|ISLE\.?|ISLES|JCT\.?|JCTION\.?|JCTN\.?|JUNCTION|JUNCTN\.?|JUNCTON\.?|JCTNS\.?|JCTS\.?|JUNCTIONS|KEY|KY\.?|KEYS|KYS\.?|KNL\.?|KNOL\.?|KNOLL|KNLS\.?|KNOLLS|LK\.?|LAKE|LKS\.?|LAKES|LAND\.?|LANDING|LNDG\.?|LNDNG\.?|LANE|LN\.?|LGT\.?|LIGHT|LIGHTS|LF\.?|LOAF|LCK\.?|LOCK|LCKS\.?|LOCKS|LDG\.?|LDGE\.?|LODG\.?|LODGE|LOOP|LOOPS|MALL|MNR\.?|MANOR|MANORS|MNRS\.?|MEADOW|MDW\.?|MDWS\.?|MEADOWS|MEDOWS|MEWS|MILL|MILLS|MISSN\.?|MSSN\.?|MOTORWAY|MNT\.?|MT\.?|MOUNT|MNTAIN\.?|MNTN\.?|MOUNTAIN|MOUNTIN\.?|MTIN\.?|MTN\.?|MNTNS\.?|MOUNTAINS|NCK\.?|NECK|ORCH\.?|ORCHARD|ORCHRD|OVAL|OVL\.?|OVERPASS|PARK|PRK\.?|PARKS|PARKWAY|PARKWY\.?|PKWAY\.?|PKWY\.?|PKY\.?|PARKWAYS|PKWYS\.?|PASS|PASSAGE|PATH|PATHS|PIKE|PIKES|PINE|PINES|PNES\.?|PL\.?|PLAIN|PLN\.?|PLAINS|PLNS\.?|PLAZA|PLZ\.?|PLZA\.?|POINT|PT\.?|POINTS|PTS\.?|PORT|PRT\.?|PORTS|PRTS\.?|PR\.?|PRAIRIE|PRR\.?|RAD\.?|RADIAL|RADIEL\.?|RADL\.?|RAMP|RANCH|RANCHES|RNCH\.?|RNCHS\.?|RAPID|RPD\.?|RAPIDS|RPDS\.?|REST|RST\.?|RDG\.?|RDGE\.?|RIDGE|RDGS\.?|RIDGES|RIV\.?|RIVER|RVR\.?|RIVR\.?|RD\.?|ROAD|ROADS|RDS\.?|ROUTE|ROW|RUE\.?|RUN\.?|SHL\.?|SHOAL|SHLS\.?|SHOALS|SHOAR\.?|SHORE|SHR\.?|SHOARS\.?|SHORES|SHRS\.?|SKYWAY|SPG\.?|SPNG\.?|SPRING|SPRNG\.?|SPGS\.?|SPNGS\.?|SPRINGS|SPRNGS\.?|SPUR|SPURS|SQ\.?|SQR\.?|SQRE\.?|SQU\.?|SQUARE|SQRS\.?|SQUARES|STA\.?|STATION|STATN\.?|STN\.?|STRA\.?|STRAV\.?|STRAVEN\.?|STRAVENUE|STRAVN\.?|STRVN\.?|STRVNUE\.?|STREAM|STREME\.?|STRM\.?|STREET|STRT\.?|ST\.?|STR\.?|STREETS|SMT\.?|SUMIT\.?|SUMITT\.?|SUMMIT|TER\.?|TERR\.?|TERRACE|THROUGHWAY|TRACE|TRACES|TRCE\.?|TRACK|TRACKS|TRAK\.?|TRK\.?|TRKS\.?|TRAFFICWAY|TRAIL|TRAILS|TRL\.?|TRLS\.?|TRAILER|TRLR\.?|TRLRS\.?|TUNEL\.?|TUNL\.?|TUNLS\.?|TUNNEL|TUNNELS|TUNNL\.?|TRNPK\.?|TURNPIKE|TURNPK\.?|UNDERPASS|UN\.?|UNION|UNIONS|VALLEY|VALLY|VLLY\.?|VLY\.?|VALLEYS|VLYS\.?|VDCT\.?|VIA\.?|VIADCT\.?|VIADUCT|VIEW|VW\.?|VIEWS|VWS\.?|VILL\.?|VILLAG\.?|VILLAGE|VILLG\.?|VILLIAGE|VLG\.?|VILLAGES|VLGS\.?|VILLE\.?|VL\.?|VIS\.?|VIST\.?|VISTA|VST\.?|VSTA\.?|WALK|WALKS|WALL|WY\.?|WAY|WAYS|WELL|WELLS|WLS\.?)\,?\s?\b(N\.?|S\.?|E\.?|W\.?|NE\.?|NW\.?|SE\.?|SW\.?|North|South|East|West|NorthEast|NorthWest|SouthEast|SouthWest)?\b\,?\s?\#?\s?([a-zA-Z\s\#]{1,6}[0-9\s\.\-\']{1,6}|[a-zA-Z]{1,1}?[0-9\s\.\-\']{1,6}?[a-zA-Z\s\.]{1,6})?$/i;
const regex2 =
	/^(P\.?O\.? BOX|R\.?R\.?|HC [0-9]{1,5} BOX|Unit|FM|Indian Rte\.?)\s([a-z,0-9,A-Z]{1,9})\s?\#?([0-9a-zA-Z\s\.\-\']{1,6})?\s?$/i; //example: PO BOX 1234
const ruralRegex =
	/^([0-9\s\.\-\/]{1,9})\s(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|U[ST]|V[AIT]|W[AIVY])-([0-9\s\.\-\/]{1,9})/i; //example: 5656 TX-56
const regex3 =
	/^([0-9a-zA-Z\s\.\-\']+)\,?\s\b(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming|District Of Columbia))\b\,?\s([0-9]{5,5}|[0-9]{5,5}[-]?\s?[0-9]{4,4}?)$/i;

// Constants
const addr1 = document.getElementById("Addr_1");
const addr2rNone = document.getElementById("Addr_Ln_2_None");
const lnOneAlert = document.querySelector(".ln1-input-invalid-alert");
const addRowCount = document.querySelector("#addRowCount");
const addNum = document.querySelector("#addNum");
const addPre = document.querySelector("#addPrefix");
const addName = document.querySelector("#addStreet");
const addStType = document.querySelector("#addStType");
const addrPostStType = document.querySelector("#addPostStType");
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

const getRowCount = (number) => {
	let RowCount = number;
	//add a row if street name is filled
	if (addName.textContent.length) {
		RowCount = RowCount + 1;
	}
	//add a row if any of the row 2 inputs are filled
	if (addBldType.textContent.length) {
		RowCount = RowCount + 1;
	} else if (addBldDscr.textContent.length || addBldDscrNum.textContent.length) {
		RowCount = RowCount + 1;
	}
	//add a row if the city is filled (ln 3)
	if (addCity.textContent.length) {
		RowCount = RowCount + 1;
	}
	return RowCount;
};

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
			`${addStType.textContent ? addStType.textContent + " " : ""}` +
			`${addSuf.textContent ? addSuf.textContent + " " : ""}` +
			`${addApt.textContent ? addApt.textContent + " " : ""}`;
	} //ouput variables as it relates to rexeg2
	else if (regex2.test(addr1.value)) {
		finalLn1.value = addName.textContent + " " + `${addApt.textContent ? addApt.textContent + " " : ""}`;
	} else if (ruralRegex.test(addr1.value)) {
		finalLn1.value = addr1.value;
	} else {
		// finalLn1.value = "Invalid Address";
	}

	if (getRowCount(0) === 0) {
		finalLn1.value = "Invalid Address";
		finalLn2.value = "Invalid Address";
		finalLn3.value = "Invalid Address";
	} else if (getRowCount(0) === 1) {
		if (addName.textContent) {
			return;
		} else if (addCity.textContent.length) {
			console.log("line 3");
			finalLn2.value = addCity.textContent + ", " + addState.textContent + " " + addZip.textContent;
		} else if (addBldType.textContent) {
			console.log("line 3");
			addBldDscr && addBldNum
				? (finalLn2.value =
						addBldType.textContent +
						" " +
						addBldNum.textContent +
						", " +
						addBldDscr.textContent +
						" " +
						addBldDscrNum.textContent)
				: (finalLn2.value = addBldType.textContent + " " + addBldNum.textContent + " ");
		}
		finalLn3.value = "";
		// finalLn3.placeholder = "";
	} else if (getRowCount(0) === 2) {
		if (addName.textContent) {
			finalLn2.value = `${
				addCity.textContent.length
					? addCity.textContent + ", " + addState.textContent + " " + addZip.textContent
					: addBldDscr && addBldNum
					? addBldType.textContent + " " + addBldNum.textContent + ", " + addBldDscr.textContent + " " + addBldDscrNum.textContent
					: addBldType.textContent + " " + addBldNum.textContent
			}`.trim();
			finalLn3.value = "";
		} else if (addCity.textContent.length) {
			finalLn2.value =
				addBldType.textContent +
				" " +
				addBldNum.textContent +
				", " +
				`${addBldDscr && addBldNum ? addBldDscr.textContent + " " + addBldDscrNum.textContent : ""}`.trim();
			finalLn3.value = addCity.textContent + ", " + addState.textContent + " " + addZip.textContent;
		}
	} else if (getRowCount(0) === 3) {
		finalLn2.value =
			addBldType.textContent +
			" " +
			addBldNum.textContent +
			" " +
			`${addBldDscr && addBldNum ? addBldDscr.textContent + " " + addBldDscrNum.textContent : ""}`.trim();
		finalLn3.value = addCity.textContent + ", " + addState.textContent + " " + addZip.textContent;
		// THIS IS WHERE ENABLING THE SUBMIT BUTTON WOULD BE
	}
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
		.replace(/^ne|northeast/, "N.E.")
		.replace(/^nw|northwest/, "N.W.")
		.replace(/^se|southeast/, "S.E.")
		.replace(/^sw|southwest/, "S.W.")
		.replace(/^north/, "N.")
		.replace(/^south/, "S.")
		.replace(/^east/, "E.")
		.replace(/^west/, "W.")
		.replace(/^n\.?/, "N.")
		.replace(/^s\.?/, "S.")
		.replace(/^e\.?/, "E.")
		.replace(/^w\.?/, "W.");
	return formatted;
};
const formatStreetName = (name) => {
	return name
		.toLowerCase()
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
	const condensedArrayFull = {
		alley: { full: "ALLEY", abbr: ["ALLEE", "ALY", "ALLY"], postal: "ALY" },
		anex: { full: "ANEX", abbr: ["ANNEX", "ANNX", "ANX"], postal: "ANX" },
		arcade: { full: "ARCADE", abbr: ["ARC"], postal: "ARC" },
		avenue: { full: "AVENUE", abbr: ["AVE", "AV", "AVEN", "AVENU", "AVN", "AVNU"], postal: "AVE" },
		bayou: { full: "BAYOU", abbr: ["BAYOO", "BYU"], postal: "BYU" },
		beach: { full: "BEACH", abbr: ["BCH"], postal: "BCH" },
		bend: { full: "BEND", abbr: ["BND"], postal: "BND" },
		bluff: { full: "BLUFF", abbr: ["BLF", "BLUF"], postal: "BLF" },
		bluffs: { full: "BLUFFS", abbr: ["BLFS", "BLUFS"], postal: "BLFS" },
		bottom: { full: "BOTTOM", abbr: ["BTM", "BOTTM", "BOT"], postal: "BTM" },
		boulevard: { full: "BOULEVARD", abbr: ["BLVD", "BOUL", "BOULV"], postal: "BLVD" },
		branch: { full: "BRANCH", abbr: ["BR", "BRNCH"], postal: "BR" },
		bridge: { full: "BRDGE", abbr: ["BRG", "BRDGE", "BRDG"], postal: "BRG" },
		brook: { full: "BROOK", abbr: ["BRK"], postal: "BRK" },
		brooks: { full: "BROOKS", abbr: ["BRKS"], postal: "BRKS" },
		burg: { full: "BURG", abbr: ["BG"], postal: "BG" },
		burgs: { full: "BURGS", abbr: ["BGS"], postal: "BGS" },
		bypass: { full: "BYPASS", abbr: ["BYPA", "BYPAS", "BYP", "BYPS"], postal: "BYP" },
		camp: { full: "CAMP", abbr: ["CP", "CMP"], postal: "CP" },
		canyon: { full: "CANYON", abbr: ["CANYN", "CNYN"], postal: "CYN" },
		cape: { full: "CAPE", abbr: ["CPE"], postal: "CPE" },
		causeway: { full: "CAUSEWAY", abbr: ["CAUSWA", "CSWY"], postal: "CSWY" },
		center: { full: "CENTER", abbr: ["CEN", "CENT", "CENTR", "CENTRE", "CNTER", "CNTR", "CTR"], postal: "CTR" },
		centers: { full: "CENTERS", abbr: ["CENS", "CENTS", "CENTRS", "CENTRES", "CNTERS", "CNTRS", "CTRS"], postal: "CTRS" },
		circle: { full: "CIRCLE", abbr: ["CIR", "CIRC", "CIRCL", "CIRCLE", "CRCL", "CRCLE"], postal: "CIR" },
		circles: { full: "CIRCLES", abbr: ["CIRS", "CIRCS", "CIRCLS", "CRCLS", "CRCLES"], postal: "CIRS" },
		cliff: { full: "CLIFF", abbr: ["CLF", "CLFF"], postal: "CLF" },
		cliffs: { full: "CLIFFS", abbr: ["CLFS"], postal: "CLFS" },
		club: { full: "CLUB", abbr: ["CLB"], postal: "CLB" },
		common: { full: "COMMON", abbr: ["CMN", "CMMN"], postal: "CMN" },
		commons: { full: "COMMONS", abbr: ["CMNS", "CMMNS"], postal: "CMNS" },
		corner: { full: "CORNER", abbr: ["COR"], postal: "COR" },
		corners: { full: "CORNERS", abbr: ["CORS"], postal: "CORS" },
		course: { full: "COURSE", abbr: ["CRSE"], postal: "CRSE" },
		court: { full: "COURT", abbr: ["CT"], postal: "CT" },
		courts: { full: "COURTS", abbr: ["CTS"], postal: "CTS" },
		cove: { full: "COVE", abbr: ["CV"], postal: "CV" },
		coves: { full: "COVES", abbr: ["CVS"], postal: "CVS" },
		creek: { full: "CREEK", abbr: ["CRK"], postal: "CRK" },
		crescent: { full: "CRESCENT", abbr: ["CRES", "CRSENT", "CRSNT"], postal: "CRES" },
		crest: { full: "CREST", abbr: ["CRST"], postal: "CRST" },
		crossing: { full: "CROSSING", abbr: ["CRSSNG", "CRSNG", "XING"], postal: "XING" },
		crossroad: { full: "CROSSROAD", abbr: ["XRD", "CRSRD"], postal: "XRD" },
		crossroads: { full: "CROSSROADS", abbr: ["XRDS", "CRSRDS"], postal: "XRDS" },
		curve: { full: "CURVE", abbr: ["CURV"], postal: "CURV" },
		dale: { full: "DALE", abbr: ["DL"], postal: "DL" },
		dam: { full: "DAM", abbr: ["DM"], postal: "DM" },
		divide: { full: "DIVIDE", abbr: ["DIV", "DV", "DVD"], postal: "DV" },
		drive: { full: "DRIVE", abbr: ["DR", "DRIV", "DRV"], postal: "DR" },
		drives: { full: "DRIVES", abbr: ["DRS", "DRIVS", "DRVS"], postal: "DRS" },
		estate: { full: "ESTATE", abbr: ["EST", "ESTAT"], postal: "EST" },
		estates: { full: "ESTATES", abbr: ["ESTS", "ESTATS"], postal: "ESTS" },
		expressway: { full: "EXPRESSWAY", abbr: ["EXP", "EXPR", "EXPW", "EXPY", "EXPRESS"], postal: "EXPY" },
		extension: { full: "EXTENSION", abbr: ["EXT", "EXTN", "EXTNSN", "EXTSN"], postal: "EXT" },
		extensions: { full: "EXTENSIONS", abbr: ["EXTS", "EXTNS", "EXTNSNS", "EXTSNS"], postal: "EXTS" },
		fall: { full: "FALL", abbr: ["FALL"], postal: "FALL" },
		falls: { full: "FALLS", abbr: ["FALLS", "FLS"], postal: "FLS" },
		ferry: { full: "FERRY", abbr: ["FRY", "FRRY"], postal: "FRY" },
		field: { full: "FIELD", abbr: ["FLD"], postal: "FLD" },
		fields: { full: "FIELDS", abbr: ["FLDS"], postal: "FLDS" },
		flat: { full: "FLAT", abbr: ["FLT"], postal: "FLT" },
		flats: { full: "FLATS", abbr: ["FLTS"], postal: "FLTS" },
		ford: { full: "FORD", abbr: ["FRD"], postal: "FRD" },
		fords: { full: "FORDS", abbr: ["FRDS"], postal: "FRDS" },
		forest: { full: "FOREST", abbr: ["FRST", "FORESTS"], postal: "FRST" },
		forge: { full: "FORGE", abbr: ["FRG", "FORG"], postal: "FRG" },
		forges: { full: "FORGES", abbr: ["FRGS"], postal: "FRGS" },
		fork: { full: "FORK", abbr: ["FRK"], postal: "FRK" },
		forks: { full: "FORKS", abbr: ["FRKS"], postal: "FRKS" },
		fort: { full: "FORT", abbr: ["FT", "FRT"], postal: "FT" },
		freeway: { full: "FREEWAY", abbr: ["FWY", "FRWY", "FRWY", "FRWAY", "FREEWY"], postal: "FWY" },
		garden: { full: "GARDEN", abbr: ["GARDN", "GRDN", "GRDEN"], postal: "GDN" },
		gardens: { full: "GARDENS", abbr: ["GARDNS", "GRDNS", "GRDENS"], postal: "GDNS" },
		gateway: { full: "GATEWAY", abbr: [" GTWY", "GTWAY", "GATWAY", "GATEWY"], postal: "GTWY" },
		glen: { full: "GLEN", abbr: ["GLN"], postal: "GLN" },
		glens: { full: "GLENS", abbr: ["GLNS"], postal: "GLNS" },
		green: { full: "GREEN", abbr: ["GRN"], postal: "GRN" },
		greens: { full: "GREENS", abbr: ["GRNS"], postal: "GRNS" },
		grove: { full: "GROVE", abbr: ["GRV", "GROV"], postal: "GRV" },
		groves: { full: "GROVES", abbr: ["GRVS"], postal: "GRVS" },
		harbor: { full: "HARBOR", abbr: ["HARB", "HARBR", "HBR", "HRBR", "HRBOR"], postal: "HBR" },
		harbors: { full: "HARBORS", abbr: ["HARBS", "HARBRS", "HBRS", "HRBRS", "HRBORS"], postal: "HBRS" },
		haven: { full: "HAVEN", abbr: ["HVN"], postal: "HVN" },
		heights: { full: "HEIGHTS", abbr: ["HTS", "HT"], postal: "HTS" },
		highway: { full: "HIGHWAY", abbr: ["HIGHWY", "HWY", "HWAY", "HIWY", "HWAY"], postal: "HWY" },
		hill: { full: "HILL", abbr: ["HL"], postal: "HL" },
		hills: { full: "HILLS", abbr: ["HLS"], postal: "HLS" },
		hollow: { full: "HOLLOW", abbr: ["HOLW", "HOLLOWS", "HLLW", "HOLWS"], postal: "HOLW" },
		inlet: { full: "INLET", abbr: ["INLT"], postal: "INLT" },
		island: { full: "ISLAND", abbr: ["ISLND", "IS"], postal: "IS" },
		islands: { full: "ISLANDS", abbr: ["ISS", "ISLNDS"], postal: "ISS" },
		isle: { full: "ISLE", abbr: ["ISLES"], postal: "ISLE" },
		junction: { full: "JUNCTION", abbr: ["JCT", "JCTION", "JCTN", "JUNCTN", "JUNCTON"], postal: "JCT" },
		junctions: { full: "JUNCTIONS", abbr: ["JCTNS", "JCTS", "JCTIONS", "JUNCTNS", "JUNCTONS"], postal: "JCTS" },
		key: { full: "KEY", abbr: ["KY"], postal: "KY" },
		keys: { full: "KEYS", abbr: ["KYS"], postal: "KYS" },
		knoll: { full: "KNOLL", abbr: ["KNL", "KNOL"], postal: "KNL" },
		knolls: { full: "KNOLLS", abbr: ["KNLS"], postal: "KNLS" },
		lake: { full: "LAKE", abbr: ["LK"], postal: "LK" },
		lakes: { full: "LAKES", abbr: ["LKS"], postal: "LKS" },
		land: { full: "LAND", abbr: ["LAND", "LD"], postal: "LAND" },
		landing: { full: "LANDING", abbr: ["LNDG", "LNDNG"], postal: "LNDG" },
		lane: { full: "LANE", abbr: ["LN"], postal: "LN" },
		light: { full: "LIGHT", abbr: ["LGT"], postal: "LGT" },
		lights: { full: "LIGHTS", abbr: ["LGTS"], postal: "LGTS" },
		loaf: { full: "LOAF", abbr: ["LF"], postal: "LOAF" },
		lock: { full: "LOCK", abbr: ["LCK"], postal: "LCK" },
		locks: { full: "LOCKS", abbr: ["LCKS"], postal: "LCKS" },
		lodge: { full: "LODGE", abbr: ["LDG"], postal: "LDG" },
		loop: { full: "LOOP", abbr: ["LOOPS"], postal: "LOOP" },
		mall: { full: "MALL", abbr: ["MALL"], postal: "MALL" },
		manor: { full: "MANOR", abbr: ["MNR"], postal: "MNR" },
		manors: { full: "MANORS", abbr: ["MNRS"], postal: "MNRS" },
		meadow: { full: "MEADOW", abbr: ["MEDOW", "MDW"], postal: "MDW" },
		meadows: { full: "MEADOWS", abbr: ["MEDOWS", "MDWS"], postal: "MDWS" },
		mews: { full: "MEWS", abbr: ["MWS"], postal: "MEWS" },
		mill: { full: "MILL", abbr: ["ML"], postal: "ML" },
		mills: { full: "MILLS", abbr: ["MLS"], postal: "MLS" },
		mission: { full: "MISSION", abbr: ["MSN", "MISSN", "MSSN"], postal: "MSN" },
		mountain: { full: "MOUNTAIN", abbr: ["MTN", "MNTAIN", "MNTN", "MOUNTIN", "MTAIN", "MTIN"], postal: "MTN" },
		mountains: { full: "MOUNTAINS", abbr: ["MTNS", "MNTAINS", "MNTNS", "MOUNTINS", "MTAINS", "MTINS"], postal: "MTNS" },
		neck: { full: "NECK", abbr: ["NCK"], postal: "NCK" },
		orchard: { full: "ORCHARD", abbr: ["ORCH", "ORCHRD"], postal: "ORCH" },
		oval: { full: "OVAL", abbr: ["OVL"], postal: "OVAL" },
		overpass: { full: "OVERPASS", abbr: ["OPAS"], postal: "OPAS" },
		park: { full: "PARK", abbr: ["PRK"], postal: "PARK" },
		parks: { full: "PARKS", abbr: ["PRKS"], postal: "PARK" },
		parkway: { full: "PARKWAY", abbr: ["PARKWY", "PKWAY", "PKWY", "PKY"], postal: "PARKS" },
		parkways: { full: "PARKWAYS", abbr: ["PARKWYS", "PKWAYS", "PKWYS", "PKYS"], postal: "PKWY" },
		pass: { full: "PASS", abbr: ["PASS"], postal: "PASS" },
		passage: { full: "PASSAGE", abbr: ["PSSG", "PSGE", "PASSG", "PASSGE", "PSSGE"], postal: "PSGE" },
		path: { full: "PATH", abbr: ["PATHS"], postal: "PATH" },
		pike: { full: "PIKE", abbr: ["PIKES"], postal: "PIKE" },
		pine: { full: "PINE", abbr: ["PNE"], postal: "PNE" },
		pines: { full: "PINES", abbr: ["PNES"], postal: "PNES" },
		place: { full: "PLACE", abbr: ["PL"], postal: "PL" },
		plain: { full: "PLAIN", abbr: ["PLN"], postal: "PLN" },
		plains: { full: "PLAINS", abbr: ["PLNS"], postal: "PLNS" },
		plaza: { full: "PLAZA", abbr: ["PLZ", "PLZA"], postal: "PLZ" },
		point: { full: "POINT", abbr: ["PT"], postal: "PT" },
		points: { full: "POINTS", abbr: ["PTS"], postal: "PTS" },
		port: { full: "PORT", abbr: ["PRT"], postal: "PRT" },
		ports: { full: "PORTS", abbr: ["PRTS"], postal: "PRTS" },
		prairie: { full: "PRAIRIE", abbr: ["PRAIRIE", "PRR", "PR"], postal: "PR" },
		radial: { full: "RADIAL", abbr: ["RADIEL", "RADL", "RAD"], postal: "RADL" },
		ramp: { full: "RAMP", abbr: ["RAMP"], postal: "RAMP" },
		ranch: { full: "RANCH", abbr: ["RANCHES", "RNCH", "RNCHS"], postal: "RNCH" },
		rapid: { full: "RAPID", abbr: ["RPD"], postal: "RPD" },
		rapids: { full: "RAPIDS", abbr: ["RPDS"], postal: "RPDS" },
		rest: { full: "REST", abbr: ["RST"], postal: "RST" },
		ridge: { full: "RIDGE", abbr: ["RDGE", "RDG"], postal: "RDG" },
		ridges: { full: "RIDGES", abbr: ["RDGS"], postal: "RDGS" },
		river: { full: "RIVER", abbr: ["RIV", "RVR", "RIVR"], postal: "RIV" },
		road: { full: "ROAD", abbr: ["RD"], postal: "RD" },
		roads: { full: "ROADS", abbr: ["RDS"], postal: "RDS" },
		route: { full: "ROUTE", abbr: ["RTE"], postal: "RTE" },
		row: { full: "ROW", abbr: ["ROW"], postal: "ROW" },
		rue: { full: "RUE", abbr: ["RUE"], postal: "RUE" },
		run: { full: "RUN", abbr: ["RUN"], postal: "RUN" },
		shoal: { full: "SHOAL", abbr: ["SHL", "SHOL"], postal: "SHL" },
		shoals: { full: "SHOALS", abbr: ["SHLS", "SHOLS"], postal: "SHLS" },
		shore: { full: "SHORS", abbr: ["SHOAR", "SHR"], postal: "SHR" },
		shores: { full: "SHORES", abbr: ["SHOARS", "SHRS"], postal: "SHRS" },
		skyway: { full: "SKYWAY", abbr: ["SKYWY"], postal: "SKWY" },
		spring: { full: "SPRING", abbr: ["SPNG", "SPRNG", "SPG", "SPRG"], postal: "SPG" },
		springs: { full: "SPRINGS", abbr: ["SPNGS", "SPRNGS", "SPGS", "SPRGS"], postal: "SPRGS" },
		spur: { full: "SPUR", abbr: ["SPUR"], postal: "SPUR" },
		spurs: { full: "SPURS", abbr: ["SPURS"], postal: "SPURS" },
		square: { full: "SQUARE", abbr: ["SQ", "SQR", "SQRE", "SQU"], postal: "SQ" },
		squares: { full: "SQRS", abbr: ["SQS", "SQRS", "SQRES", "SQUS"], postal: "SQS" },
		station: { full: "STATION", abbr: ["STA", "STATN", "STN"], postal: "STA" },
		stravenue: { full: "STRAVENUE", abbr: ["STRA", "STRAV", "STRAVEN", "STRAVN", "STRVN", "STRVNUE"], postal: "STRA" },
		stream: { full: "STREAM", abbr: ["STREME", "STRM"], postal: "STRM" },
		street: { full: "STREET", abbr: ["STRT", "ST", "STR"], postal: "ST" },
		streets: { full: "STREETS", abbr: ["STS", "STRTS", "STRS"], postal: "STS" },
		summit: { full: "SUMMIT", abbr: ["SUMIT", "SUMITT", "SMT"], postal: "SMT" },
		terrace: { full: "TERRACE", abbr: ["TER", "TERR"], postal: "TER" },
		throughway: { full: "THROUGHWAY", abbr: ["THRUWAY", "THWAY", "TRWY"], postal: "TRWY" },
		trace: { full: "TRACE", abbr: ["TRACES", "TRCE"], postal: "TRCE" },
		track: { full: "TRACK", abbr: ["TRACKS", "TRAK", "TRK", "TRKS"], postal: "TRAK" },
		trafficway: { full: "TRAFFICWAY", abbr: ["TRFY", "TRFFCWY", "TRAFFWY", "TRAFWAY", "TRFWAY"], postal: "TRFY" },
		trail: { full: "TRAIL", abbr: ["TRAILS", "TRL", "TRLS"], postal: "TRL" },
		trailer: { full: "TRAILER", abbr: ["TRAILERS", "TRLR", "TRLRS"], postal: "TRLR" },
		tunnel: { full: "TUNNEL", abbr: ["TUNL", "TUNLS", "TUNEL", "TUNNELS", "TUNNL"], postal: "TUNL" },
		turnpike: { full: "TURNPIKE", abbr: ["TPKE", "TRNPKE", "TURNPK", "TRNPK"], postal: "TPKE" },
		underpass: { full: "UNDERPASS", abbr: ["UPAS"], postal: "UPAS" },
		union: { full: "UNION", abbr: ["UN"], postal: "UN" },
		unions: { full: "UNIONS", abbr: ["UNS"], postal: "UNS" },
		valley: { full: "VALLEY", abbr: ["VALLY", "VLLY", "VLY"], postal: "VLY" },
		valleys: { full: "VALLEYS", abbr: ["VLYS"], postal: "VLYS" },
		viaduct: { full: "VIADUCT", abbr: ["VIA", "VIADCT", "VDCT", "VDUCT"], postal: "VIA" },
		view: { full: "VIEW", abbr: ["VW"], postal: "VW" },
		views: { full: "VIEWS", abbr: ["VWS"], postal: "VWS" },
		village: { full: "VILLAGE", abbr: ["VILLAG", "VILL", "VILLG", "VILLIAGE", "VLG", "VILG"], postal: "VLG" },
		villages: { full: "VILLAGES", abbr: ["VILLAGS", "VILLS", "VILLGS", "VILLIAGES", "VLGS", "VILGS"], postal: "VLGS" },
		ville: { full: "VILLE", abbr: ["VL"], postal: "VL" },
		vista: { full: "VISTA", abbr: ["VIST", "VIS", "VST", "VSTA"], postal: "VIS" },
		walk: { full: "WALK", abbr: ["WALK"], postal: "WALK" },
		walks: { full: "WALKS", abbr: ["WALKS"], postal: "WALKS" },
		wall: { full: "WALL", abbr: ["WALL"], postal: "WALL" },
		way: { full: "WAY", abbr: ["WY"], postal: "WAY" },
		ways: { full: "WAYS", abbr: ["WYS"], postal: "WAYS" },
		well: { full: "WELL", abbr: ["WL"], postal: "WL" },
		wells: { full: "WELLS", abbr: ["WLS"], postal: "WLS" },
	};

	function getFullStreetType(str) {
		for (const streetType in condensedArrayFull) {
			const { full, abbr, postal } = condensedArrayFull[streetType];
			if (abbr.includes(str) || full === str) {
				return { full, postal };
			}
		}
		return null;
	}

	//Assign full street name to variable
	const fullStreetType = getFullStreetType(name.toUpperCase()).full;
	const postal = getFullStreetType(name.toUpperCase()).postal;
	// Format street name
	const fullStTypeFormatted = fullStreetType.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase().replace(/[. ]/g, "");
	});
	return { fullStTypeFormatted, postal };
};

const formattedStreetSuffix = (suffix) => {
	const formatted = suffix
		.replace(/[. ]/g, "")
		.toLowerCase()
		.replace(/^ne|northeast/, "North East")
		.replace(/^nw|northwest/, "North West")
		.replace(/^se|southeast/, "South East")
		.replace(/^sw|southwest/, "South West")
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
	const formatted = aptNum
		? aptNum
				.replace(/[.#]/g, "")
				.toUpperCase()
				.replace(/^APT\.?[A-Z]{1,20}|APPT\.?[A-Z]{1,20}|APPARTMENT\.?[A-Z]{1,20}/, "")
				.replace(/^APT|APPT|APPARTMENT/, "")
		: null;
	return formatted;
};

function convertToRoman(input) {
	// Convert the input string to a number
	const num = Number(input);
	console.log(num);

	// Check if the input is a number and is below 50
	if (isNaN(num) || num >= 50) {
		console.log(num);
		return input;
	}

	// Create an array of Roman numerals for the digits below 50
	const romanNumerals = [
		"I",
		"II",
		"III",
		"IV",
		"V",
		"VI",
		"VII",
		"VIII",
		"IX",
		"X",
		"XI",
		"XII",
		"XIII",
		"XIV",
		"XV",
		"XVI",
		"XVII",
		"XVIII",
		"XIX",
		"XX",
		"XXI",
		"XXII",
		"XXIII",
		"XXIV",
		"XXV",
		"XXVI",
		"XXVII",
		"XXVIII",
		"XXIX",
		"XXX",
		"XXXI",
		"XXXII",
		"XXXIII",
		"XXXIV",
		"XXXV",
		"XXXVI",
		"XXXVII",
		"XXXVIII",
		"XXXIX",
		"XL",
		"XLI",
		"XLII",
		"XLIII",
		"XLIV",
		"XLV",
		"XLVI",
		"XLVII",
		"XLVIII",
		"XLIX",
	];

	// Return the Roman numeral equivalent of the number
	return romanNumerals[num - 1];
}

const formatCItyNAme = (city) => {
	return city
		.toLowerCase()
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
			addRowCount.textContent = getRowCount(0);
		} else if (apmtNum !== undefined) {
			addApt.textContent = formatttedAptNum(apmtNum);
			addBldType.textContent = "";
			addBldNum.textContent = "";
			varInput.setAttribute("placeholder", apmtNum);
			console.log(selectedBldType);
			addRowCount.textContent = getRowCount(0);
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
		addRowCount.textContent = getRowCount(0);
		const [fullMatch, poName, poNum] = oneSpacedInput.match(regex2);
		const formattedPoName = poName
			.replace(/PO|P\.O\.|P\.O|P\.O\./g, "P.O. Box")
			.replace(/unit\.?/gi, "Unit")
			.replace(/fm\.?/gi, "FM")
			.replace(/hc|h\.c\.|H\.c|h\.C\./g, "HC");
		addName.textContent = formatStreetName(formattedPoName);
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
		console.log("rural");
		addRowCount.textContent = getRowCount(0);
		const [fullMatch, StreetName, SteetNumber] = oneSpacedInput.match(ruralRegex);
		addName.textContent = formatStreetName(StreetName);
		addApt.textContent = SteetNumber;
		//
	} else {
		// Regex did not match
		varInput.value = "";
		console.log("no math");
		return;
	}
	addRowCount.textContent = getRowCount(0);
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
	addRowCount.textContent = getRowCount(0);
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
					addBldNum.textContent = convertToRoman(input);
					break;
			}
		}
	});
	addRowCount.textContent = getRowCount(0);
});

buildDiscInputs.forEach((input) => {
	input.addEventListener("keyup", (e) => {
		const value = e.target.value;
		addBldDscrNum.textContent = value;
		addRowCount.textContent = getRowCount(0);
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
		addRowCount.textContent = getRowCount(0);
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
	addRowCount.textContent = getRowCount(0);
});

addr1.addEventListener("keyup", (e) => {
	const input = e.target.value;
	addRowCount.textContent = getRowCount(0);

	const oneSpacedInput = input.replace(/^\s+|\s+$|\s{2,}/g, function (match) {
		if (/^\s+|\s+$/.test(match)) {
			return ""; // Remove leading/trailing spaces
		} else {
			return " "; // Replace multiple spaces with a single space
		}
	});
	if (regex.test(oneSpacedInput) || regex2.test(oneSpacedInput) || ruralRegex.test(oneSpacedInput)) {
		lnOneAlert.style.display = "none";
		addRowCount.textContent = getRowCount(0);
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
			addrPostStType.textContent = "";
			addRowCount.textContent = getRowCount(0);
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
			addRowCount.textContent = getRowCount(0);
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
				addStType.textContent = formatStreetType(streetType).fullStTypeFormatted;
				addrPostStType.textContent = formatStreetType(streetType).postal;
				addSuf.textContent = formattedStreetSuffix(streetSuffix ? streetSuffix : "");
				addApt.textContent = formatttedAptNum(apmtNum);
			} else {
				if (apmtNum == undefined) {
					thisSelect.add(thisSelect.option[(value = "Apt")]);
					thisSelect.add(thisSelect.option[(value = "Unit")]);
				}
				addNum.textContent = "";
				addPre.textContent = "";
				addName.textContent = poName;
				addStType.textContent = "";
				addSuf.textContent = "";
				addApt.textContent = poNum;
			}
			addRowCount.textContent = getRowCount(0);
		} else if (oneSpacedInput.length > 0 && ruralRegex.test(oneSpacedInput) == true) {
			// console.log("rural");
			const [fullMatch, StreetName, StreetNumber, HWNum] = oneSpacedInput.match(ruralRegex);
			addName.textContent = StreetName;
			addApt.textContent = StreetNumber + "-" + HWNum;
			addRowCount.textContent = getRowCount(0);
		}
	});
	addRowCount.textContent = getRowCount(0);
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
			addRowCount.textContent = getRowCount(0);
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
		addRowCount.textContent = getRowCount(0);
	})
);
