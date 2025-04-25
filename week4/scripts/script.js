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

function isSpecial() {
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
	return document.getElementById(id).value();
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
	var value = getInputValue("userName");
	
	clearMessage("usernameMesasage");
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


