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
	
	if (checkIfAllComplete("task1", "task2")) {
		setMessage("allTasks", "All Tasks Complete!")		
	} else {
		clearMessage("allTasks")
	}
}



// loop through checkbox id's and if all are checked, add message at the top that All items are complete.
function checkIfAllComplete(...args) {
	var c = 0;
	complete = false;
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
