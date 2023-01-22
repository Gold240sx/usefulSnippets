//Regex's for address parsing
const regex =
	/^([0-9\s\.\-\/]{1,9})\s(N\.?\s|S\.?\s|E\.?\s|W\.?\s|N\.?E\.?\s|N\.?W\.?\s|S\.?E\.?\s|S\.?W\.?|North\s|South\s|East\s|West\s|NorthEast\s|NorthWest\s|SouthEast\s|SouthWest\s)?([0-9a-zA-Z\s\.\-\'\/]+)\s(ALLEE\.?|ALLEY|ALLY\.?|ALY\.?|ANEX\.?|ANNEX|ANNX\.?|ANX\.?|ARC\.?|ARCADE|AV\.?|AVE\.?|AVEN\.?|AVENU\.?|AVENUE|AVN\.?|AVNUE\.?|BAYOO\.?|BAYOU|BCH\.?|BEACH|BEND|BND\.?|BLF\.?|BLUF\.?|BLUFF|BLUFFS|BOT\.?|BTM\.?|BOTTM\.?|BOTTOM|BLVD\.?|BOUL\.?|BOULEVARD|BOULV\.?|BR\.?|BRNCH\.?|BRANCH|BRDGE\.?|BRG\.?|BRIDGE|BRK\.?|BROOK|BROOKS|BURG|BURGS|BYP\.?|BYPA\.?|BYPAS\.?|BYPASS|BYPS\.?|CAMP|CP\.?|CMP\.?|CANYN\.?|CANYON|CNYN\.?|CAPE\.?|CPE\.?|CAUSEWAY|CAUSWA\.?|CSWY\.?|CEN\.?|CENT\.?|CENTER|CENTR\.?|CENTRE\.?|CNTER\.?|CNTR\.?|CTR\.?|CENTERS|CIR\.?|CIRC\.?|CIRCL\.?|CIRCLE|CRCL\.?|CRCLE\.?|CIRCLES|CLF\.?|CLIFF|CLFS\.?|CLIFFS|CLB\.?|CLUB|COMMON|COMMONS|COR\.?|CORNER|CORNERS|CORS\.?|COURSE|CRSE\.?|COURT\.?|CT\.?|COURTS|CTS\.?|COVE|CV\.?|COVES|CREEK|CRK\.?|CRESCENT|CRES\.?|CRSENT\.?|CRSNT\.?|CREST|CROSSING|CRSSNG\.?|XING\.?|CROSSROAD|CROSSROADS|CURVE|DALE|DL\.?|DAM\.?|DM\.?|DIV\.?|DIVIDE|DV\.?|DVD\.?|DR\.?|DRIV\.?|DRIVE|DRV\.?|DRIVES|EST\.?|ESTATE|ESTATES|ESTS\.?|EXP\.?|EXPR\.?|EXPRESS\.?|EXPRESSWAY|EXPW\.?|EXPY\.?|EXT\.?|EXTENSION|EXTN\.?|EXTNSN\.?|EXTS\.?|FALL\.?|FALLS|FLS\.?|FERRY|FRRY\.?|FRY\.?|FIELD|FLD\.?|FIELDS|FLDS\.?|FLAT|FLT\.?|FLATS|FLTS\.?|FORD|FRD\.?|FORDS|FOREST|FORESTS|FRST\.?|FORG\.?|FORGE|FRG\.?|FORGES|FORK|FRK\.?|FORKS|FRKS\.?|FORT|FRT\.?|FT\.?|FREEWAY|FREEWY\.?|FRWAY\.?|FRWY\.?|FWY\.?|GARDEN|GARDN\.?|GRDEN\.?|GRDN\.?|GARDENS|GDNS\.?|GRDNS\.?|GATEWAY|GATEWY\.?|GATWAY\.?|GTWAY\.?|GTWY\.?|GLEN|GLN\.?|GLENS|GREEN\.?|GRN\.?|GREENS|GROV\.?|GROVE|GRV\.?|GROVES|HARB\.?|HARBOR|HARBR\.?|HBR\.?|HRBOR\.?|HARBORS|HAVEN|HVN\.?|HT\.?|HTS\.?|HIGHWAY|HIGHWY\.?|HIWAY\.?|HIWY\.?|HWAY\.?|HWY\.?|HILL|HL\.?|HILLS|HLS\.?|HLLW\.?|HOLLOW\.?|HOLLOWS|HOLW\.?|HOLWS\.?|INLT\.?|IS\.?|ISLAND|ISLND\.?|ISLANDS|ISLNDS\.?|ISS\.?|ISLE\.?|ISLES|JCT\.?|JCTION\.?|JCTN\.?|JUNCTION|JUNCTN\.?|JUNCTON\.?|JCTNS\.?|JCTS\.?|JUNCTIONS|KEY|KY\.?|KEYS|KYS\.?|KNL\.?|KNOL\.?|KNOLL|KNLS\.?|KNOLLS|LK\.?|LAKE|LKS\.?|LAKES|LAND\.?|LANDING|LNDG\.?|LNDNG\.?|LANE|LN\.?|LGT\.?|LIGHT|LIGHTS|LF\.?|LOAF|LCK\.?|LOCK|LCKS\.?|LOCKS|LDG\.?|LDGE\.?|LODG\.?|LODGE|LOOP|LOOPS|MALL|MNR\.?|MANOR|MANORS|MNRS\.?|MEADOW|MDW\.?|MDWS\.?|MEADOWS|MEDOWS|MEWS|MILL|MILLS|MISSN\.?|MSSN\.?|MOTORWAY|MNT\.?|MT\.?|MOUNT|MNTAIN\.?|MNTN\.?|MOUNTAIN|MOUNTIN\.?|MTIN\.?|MTN\.?|MNTNS\.?|MOUNTAINS|NCK\.?|NECK|ORCH\.?|ORCHARD|ORCHRD|OVAL|OVL\.?|OVERPASS|PARK|PRK\.?|PARKS|PARKWAY|PARKWY\.?|PKWAY\.?|PKWY\.?|PKY\.?|PARKWAYS|PKWYS\.?|PASS|PASSAGE|PATH|PATHS|PIKE|PIKES|PINE|PINES|PNES\.?|PL\.?|PLAIN|PLN\.?|PLAINS|PLNS\.?|PLAZA|PLZ\.?|PLZA\.?|POINT|PT\.?|POINTS|PTS\.?|PORT|PRT\.?|PORTS|PRTS\.?|PR\.?|PRAIRIE|PRR\.?|RAD\.?|RADIAL|RADIEL\.?|RADL\.?|RAMP|RANCH|RANCHES|RNCH\.?|RNCHS\.?|RAPID|RPD\.?|RAPIDS|RPDS\.?|REST|RST\.?|RDG\.?|RDGE\.?|RIDGE|RDGS\.?|RIDGES|RIV\.?|RIVER|RVR\.?|RIVR\.?|RD\.?|ROAD|ROADS|RDS\.?|ROUTE|ROW|RUE\.?|RUN\.?|SHL\.?|SHOAL|SHLS\.?|SHOALS|SHOAR\.?|SHORE|SHR\.?|SHOARS\.?|SHORES|SHRS\.?|SKYWAY|SPG\.?|SPNG\.?|SPRING|SPRNG\.?|SPGS\.?|SPNGS\.?|SPRINGS|SPRNGS\.?|SPUR|SPURS|SQ\.?|SQR\.?|SQRE\.?|SQU\.?|SQUARE|SQRS\.?|SQUARES|STA\.?|STATION|STATN\.?|STN\.?|STRA\.?|STRAV\.?|STRAVEN\.?|STRAVENUE|STRAVN\.?|STRVN\.?|STRVNUE\.?|STREAM|STREME\.?|STRM\.?|STREET|STRT\.?|ST\.?|STR\.?|STREETS|SMT\.?|SUMIT\.?|SUMITT\.?|SUMMIT|TER\.?|TERR\.?|TERRACE|THROUGHWAY|TRACE|TRACES|TRCE\.?|TRACK|TRACKS|TRAK\.?|TRK\.?|TRKS\.?|TRAFFICWAY|TRAIL|TRAILS|TRL\.?|TRLS\.?|TRAILER|TRLR\.?|TRLRS\.?|TUNEL\.?|TUNL\.?|TUNLS\.?|TUNNEL|TUNNELS|TUNNL\.?|TRNPK\.?|TURNPIKE|TURNPK\.?|UNDERPASS|UN\.?|UNION|UNIONS|VALLEY|VALLY|VLLY\.?|VLY\.?|VALLEYS|VLYS\.?|VDCT\.?|VIA\.?|VIADCT\.?|VIADUCT|VIEW|VW\.?|VIEWS|VWS\.?|VILL\.?|VILLAG\.?|VILLAGE|VILLG\.?|VILLIAGE|VLG\.?|VILLAGES|VLGS\.?|VILLE\.?|VL\.?|VIS\.?|VIST\.?|VISTA|VST\.?|VSTA\.?|WALK|WALKS|WALL|WY\.?|WAY|WAYS|WELL|WELLS|WLS\.?)\,?\s?\b(N\.?|S\.?|E\.?|W\.?|NE\.?|NW\.?|SE\.?|SW\.?|North|South|East|West|NorthEast|NorthWest|SouthEast|SouthWest)?\b\,?\s?\#?\s?([a-zA-Z\s\#]{1,6}[0-9\s\.\-\']{1,6}|[a-zA-Z]{1,1}?[0-9\s\.\-\']{1,6}?[a-zA-Z\s\.]{1,6})?$/i;
const regex2 =
	/^(P\.?O\.? BOX|R\.?R\.?|HC [0-9]{1,5} BOX|Unit|FM|Indian Rte\.?)\s([a-z,0-9,A-Z]{1,9})\s?\#?([0-9a-zA-Z\s\.\-\']{1,6})?\s?$/i; //example: PO BOX 1234
const ruralRegex =
	/^([0-9\s\.\-\/]{1,9})\s(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|U[ST]|V[AIT]|W[AIVY])-([0-9\s\.\-\/]{1,9})/i; //example: 5656 TX-56
const regex3 =
	/^([0-9a-zA-Z\s\.\-\']+)\,?\s\b(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming|District Of Columbia))\b\,?\s([0-9]{5,5}|[0-9]{5,5}[-]?\s?[0-9]{4,4}?)$/i;

const ParsedDataEntry = {
    addressNum: "",
    addressPrefix: "",
    addressStreetName: "",
    addressStreetType: "",
    addressPostStType: "",
    addressSuffix: "",
    addressAptNum: "",
    addressCity: "",
    addressState: "",
    addressZip: "", 
    addressCountry: "",
    addressLn1: "",
    addressLn2: "",
    addressLn3: "",
};

const copyBtn = document.getElementById("copy-button");
copyBtn.addEventListener("click", function () {
	var rows = document.querySelectorAll("table tr");
	console.log(rows);
	var originalTexts = [];
	var rowData = Array.from(rows)
		.map(function (row) {
			var originalRowTexts = [];
			var rowTexts = Array.from(row.children)
				.map(function (cell) {
					var originalText = cell.textContent;
					originalRowTexts.push(originalText);
					return originalText;
				})
				.join("\t");
			originalTexts.push(originalRowTexts);
			return rowTexts;
		})
		.join("\n");
	navigator.clipboard.writeText(rowData).then(
		function () {
			/* clipboard successfully set */
			alert("Copied!");
			//add back the commas in the original format
			for (var i = 0; i < originalTexts.length; i++) {
				var rowTexts = originalTexts[i];
				for (var j = 0; j < rowTexts.length; j++) {
					var cell = rows[i].children[j];
					cell.textContent = rowTexts[j];
				}
			}
		},
		function () {
			/* clipboard write failed */
			alert("Failed!");
		}
	);
});

document.getElementById("paste-button").addEventListener("click", function (e) {
	const input = document.querySelector("#pasteInput");
	// get pasted data
	var pastedData = input.value;
	// split the pasted data into rows
	var rows = pastedData.split("\n");
	// loop through rows and create table rows and cells
	var table = document.querySelector("#results-table");
	// select all rows except for the first one (the header row)
	// var prevRows = table.querySelectorAll("tr:not(:first-child)"); //not header row
    var prevRows = table.querySelectorAll("tr");

	// loop through rows and remove them from the table
	for (var i = 0; i < prevRows.length; i++) {
		prevRows[i].remove();
	}
	// table.setAttribute("class", "display nowrap table table-striped table-sm table-hover table-active");
	for (var i = 0; i < rows.length; i++) {
		var cells = rows[i].split("\t");
		var row = document.createElement("tr");
		for (var j = 0; j < cells.length; j++) {
			var cell = document.createElement("td");
			cell.innerHTML = cells[j];
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	// add the table to the DOM
	document.body.appendChild(table);
});