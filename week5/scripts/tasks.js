const SPECIES = [
	"Circium edule",
	"Danthonia californica",
	"Eriophyllum lanatum",
	"Lilium columbianum",
	"Plectritis congesta",
	"Prunella vulgaris"
];

function createMenu(array) {
	if (array.length > 0) {
		
		var menu = '<strong>Species Menu:</strong>';
		menu += '<ul>';
		
		for (let i = 0; i < array.length; i++) {
			var speciesTag = "#" + (array[i].toLowerCase().replace(" ", "-"));
			menu += `<li><a href="${speciesTag}">${array[i]}</a></li>`;
			//console.log(menu);
		}
		
		menu += '</ul>';
		
		return menu;
	}
}

// check if a task has the completed class might not need but thought i did at first
// keeping for reference right now.
var isTaskCompleted = function(checkboxId) {
	var checkbox = document.getElementById(checkboxId);
	return checkbox.checked; 
}

// set span message function
function setMessage(id, message) {
	var messageBox = document.getElementById(id);
	messageBox.innerText = message;
}
// clear span message
function clearMessage(id) {
	setMessage(id, "");
}	


function toggleTask(checkbox, id, spanId) {
	var label = document.getElementById(id);
	if (checkbox.checked) {
		label.classList.add('completed'); 
		setMessage(spanId, "Complete!")
	} else {
		label.classList.remove('completed');
		clearMessage(spanId)				
	}
	
	if (checkIfAllComplete("task1", "task2", "task3", "task4", "task5")) {
		setMessage("allTasks", "All Tasks Complete!")		
	} else {
		clearMessage("allTasks")
	}
}



// loop through checkbox id's and if all are checked, add message at the top that All items are complete.
function checkIfAllComplete(...args) {
	var c = 0;
	var complete = false;
	for (let arg of args) {
		if (isTaskCompleted(arg)) {
			c+=1;
		}
	}
	if (c == args.length) {
		complete = true;
	}
	return complete;
}

function init () {
	console.log("Welcome");
	try {
		document.getElementById('species-menu').innerHTML = createMenu(SPECIES);
	}
	catch (err) {
		console.log("Note: 'species-menu' not present in this page")
	}
}


window.addEventListener('load', init);