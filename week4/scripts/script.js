var REQUIRED_PASSWORD_CHARACTERS = "!@#&*%+=^?";

function isLower(character) {
	return character >= "a" && character <= "z";
}
 
function isUpper(character) {
	return character >= "A" && character <= "Z";
}

function isDigit(character) {
	return character >= "0" && character <= "9";
}

function isValidUsernameCharacter(character) {
		return isLower(character) || isUpper(character) || isDigit(character);
}

function isSpecial(character) {
	return REQUIRED_PASSWORD_CHARACTERS.indexOf(character) >= 0;
}

function setMessage(id, message) {
	var messageBox = document.getElementById(id);
	messageBox.innerText = message;
}

function clearMessage(id) {
	setMessage(id, "");
}

function getInputValue(id) {
	return document.getElementById(id).value;
}

function checkUsernameRequirements(value) {
	if (value == "") {
		setMessage("userNameMessage", "Username must be one or more alphanumeric characters.")
	}
	for(var counter = 0; counter < value.length; counter++) {
		var character = value.charAt(counter)
		if(!isValidUsernameCharacter(character)) {
			setMessage("userNameMessage", "Character '" + character + "' is invalid.");
		}
	}
}

function checkPasswordRequirements(value) {
	var hasUpper = false;
	var hasLower = false;
	var hasRequired = false;
	var hasDigit = false;
	
	for (var counter = 0; counter < value.length; counter++) {
		var character = value.charAt(counter);
		
		if (isUpper(character)) {
			hasUpper = true;
		} else if (isDigit(character)) {
			hasDigit = true;
		} else if (isSpecial(character)) {
			hasRequired = true;
		}
	}
	if (!hasUpper) {
		setMessage("passwordMessage", "Password must have at least one upper case letter.");
	} else if (!hasDigit) {
		setMessage("passwordMessage", "Password must have at least one digit.");
	} else if (!hasRequired) {
		setMessage("passwordMessage", "Password must have at least one character from '" + REQUIRED_PASSWORD_CHARACTERS + "'.");
	}
}

function validateUsername() {
	var value = getInputValue("username");
	
	clearMessage("userNameMessage");
	checkUsernameRequirements(value);
}

function validatePassword() {
	var value = getInputValue("password");
	
	clearMessage("passwordMessage");
	validateLength(value);
	checkPasswordRequirements(value);
}

function validateLength(value, lengthRequirement = 8) {
	if (value == "") {
		setMessage("passwordMessage", "Password must be at least 8 characters, with at least"
			+ " 1 upper-case, 1 number, and 1 character from '" + REQUIRED_PASSWORD_CHARACTERS + "'.");
	}
	
	if (value.length < lengthRequirement) {
		setMessage("passwordMessage", "Password must be at least " + lengthRequirement + " characters.");
	}
} 


window.addEventListener("load", function() {
	document.getElementById("username").addEventListener("input", validateUsername);
	document.getElementById("password").addEventListener("input", validatePassword);
})





//anonymous functions

var x = function () {
	console.log("hii")
}

// the call with x();
// cant call it until after it is defined. non-anonymous functions are avcailable anywhere. 
// use if defining functions in conditionals. 

// nested functions!

function createAFunction() {
	var innerFunction = function() {
		console.log("my inner function");
	};
	return innerFunction;
}

// the doubl;e ()() creates it then calls it.
createAFunction()()


// closure
function createCounterFunctions() {
	var count = 0;
	
	incrementCounter = function () {
		count++;
	}
	
	decrementCounter = function () {
		count--;
	}
	
	getCounter = function () {
			return count;
	}

}

createCounterFunctions()
getCounter()
incrementCounter()
getCounter()

// recursion (example dom)

function factorial(n) {
	if (n <= 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}


// factorial(6)




