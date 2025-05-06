VALUES = ["big", "booty", "hoe"];


function stringValue(value) {
	return value;
}

function generateHeader()  {
	return "<tr><th>Value</th>\r\n"
}

function generateRow (value) {
	return "<tr><td>" + stringValue(value) + "</td>"                             
}

function generateTable() {
	table = "<table\r\n>";
	table += generateHeader();
	
	for (var counter = 0; counter < VALUES.length; counter++) {
		table += "   " + generateRow(VALUES[counter]);
	}
	table += "</table>\r\n";	
	return table;
}


function init () {
	console.log("welcome to week 5");
	document.getElementById('table1').innerHTML = generateTable();
}

window.addEventListener('load', init);
