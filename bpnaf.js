// Country names object using 2-letter country codes to reference country name
// ISO 3166 Alpha-2 Format: [2 letter Country Code]: [Country Name]
// Sorted alphabetical by country name (special characters on bottom)
const countryListAlpha2 = {
	"":"",
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory (the)",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands (the)",
    "CF": "Central African Republic (the)",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands (the)",
    "CO": "Colombia",
    "KM": "Comoros (the)",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo (the)",
    "CK": "Cook Islands (the)",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic (the)",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (the) [Malvinas]",
    "FO": "Faroe Islands (the)",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories (the)",
    "GA": "Gabon",
    "GM": "Gambia (the)",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See (the)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic (the)",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands (the)",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands (the)",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger (the)",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands (the)",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines (the)",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation (the)",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan (the)",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands (the)",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates (the)",
    "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
    "UM": "United States Minor Outlying Islands (the)",
    "US": "United States of America (the)",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};

var industries=[
 "Accounting"
,"Adverstising"
,"Aerospace"
,"Agriculture"
,"Airline"
,"Amusemenst/ Recreation Services"
,"Appliances"
,"Architecture and Design"
,"Association"
,"Automotive"
,"Biotechnology"
,"Broadcasting/Radio/TV/Cable/Media"
,"Chemicals"
,"Computers"
,"Construction"
,"Consumer Products/ Packeged Goods"
,"Cosmetics/Soaps/Detergents/Perfumes"
,"Data Management"
,"Distribution"
,"Durable Goods"
,"Education (Higher Education)"
,"Education (K-12)"
,"Electronics"
,"Energy and Utility"
,"Engineering"
,"Entertainment"
,"Financial Services/ Banking"
,"Food/Beverage/Restaurant"
,"Forestry Products"
,"Furniture"
,"Government/Military (Federal/State)"
,"Healthcare"
,"Hospitality"
,"Instrumentation"
,"Insurance"
,"Legal Services"
,"Logistics"
,"Machinery"
,"Machinery Equipment"
,"Marketing"
,"Medical Equipment"
,"Metals"
,"Mining"
,"Non-Profit"
,"Petroleum/Oli/Gas"
,"Pharmaceutical"
,"Pipelines"
,"Printing & Publishing"
,"Professional Services/ Business Services"
,"Public Relations"
,"Pulp and Paper"
,"Railroads"
,"Real Estate"
,"Rental"
,"Research Organization"
,"Retail/Catalog/Mail Order"
,"Rubber & Plastics"
,"Security Systems"
,"Semiconductors"
,"Software"
,"Steel"
,"Stone/Glass/Clay/Concrete"
,"Telecommunication"
,"Textile"
,"Tobacco"
,"Transportation/Freight Carriers"
,"Warehousing"
,"Waste Management/Environmental"
,"Wholesale Distribution"
,"Wine & Spirit"
];

var industries_pl=[
 "Księgowość"
,"Reklama"
,"Lotnictwo i kosmonautyka"
,"Rolnictwo"
,"Linia lotnicza"
,"Usługi rozrywkowe/rekreacyjne"
,"Urządzenia"
,"Architektura i projektowanie"
,"Stowarzyszenie"
,"Motoryzacja"
,"Biotechnologia"
,"Nadawanie/Radio/Telewizja/Kable/Media"
,"Chemikalia"
,"Komputery"
,"Budowa"
,"Produkty konsumenckie/Towary pakowane"
,"Kosmetyki/Mydła/Detergenty/Perfumy"
,"Zarządzanie danymi"
,"Dystrybucja"
,"Trwałe produkty"
,"Edukacja (szkolnictwo wyższe)"
,"Edukacja (K-12)"
,"Elektronika"
,"Energia i użyteczność"
,"Inżynieria"
,"Rozrywka"
,"Usługi finansowe/bankowość"
,"Jedzenie/Napoje/Restauracja"
,"Produkty leśne"
,"Meble"
,"Rząd/wojsko (federalne/stanowe)"
,"Opieka zdrowotna"
,"Hotelarstwo"
,"Oprzyrządowanie"
,"Ubezpieczenie"
,"Usługi prawne"
,"Logistyka"
,"Maszyneria"
,"Wyposażenie maszynowe"
,"Marketing"
,"Wyposażenie medyczne"
,"Metale"
,"Górnictwo"
,"Niedochodowy"
,"Ropa naftowa/Oli/Gaz"
,"Farmaceutyczny"
,"Rurociągi"
,"Drukowanie i publikowanie"
,"Usługi profesjonalne/Usługi biznesowe"
,"Public Relations"
,"Miazga i papier"
,"Koleje"
,"Nieruchomość"
,"Wynajem"
,"Organizacja badawcza"
,"Sprzedaż detaliczna/katalog/sprzedaż wysyłkowa"
,"Guma i tworzywa sztuczne"
,"Systemy bezpieczeństwa"
,"Półprzewodniki"
,"Oprogramowanie"
,"Stal"
,"Kamień/szkło/glina/beton"
,"Telekomunikacja"
,"Włókienniczy"
,"Tytoń"
,"Transport"
,"Magazynowanie"
,"Gospodarka odpadami/środowisko"
,"Dystrybucja hurtowa"
,"Wino i alkohol"
];


var example6=`#;MyCompany;Me
M1.1;;Process 1
M1.2;;Process 2
M1.3;;Process 3
C1.1;;Process 4
C1.2;;Process 5
C1.3;;Process 6
S1.1;;Process 7
S1.2;;Process 8
S1.3;;Process 9
S1.4;;Process 10
S1.5;;Process 12
`;
