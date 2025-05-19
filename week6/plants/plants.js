console.log("sup plant nerds")


// name of class
// constructor for question objects
// call with var q1 = new Question()
// "Functions are objects in JS, and objects have methods" 
function Question(title, text) {
	// THIS inside an object is like a local variable whose value is the object that you are running the onject/method on.
	// seelms like self in python
	this.title = title;
	this.text = text;
	// METHOD is a function that is on an object as property
	// below is a method!
	this.toHTML = function() {
		var result = "";
		result += '<h3>' + this.number + ". " + this.title + "</h3>\n"
		result += "<p>" + this.text + "</p>\n";
	
		return result;
	};
	
	this.getAnswers = function() {
		return {};
	};
	
}


// INHERITENCE
/*
many options to do this. Simplest is used here. 
  .call can be used on functions/objects
super class/ parent class: Question 

child class/ sub-class: multipleChoiceQuestion
	Inherets everything defined in Question (parent class)

*/

function MultipleChoiceQuestion(title, text, options) {
	// calls question and makes inherits from it. 
	Question.call(this, title, text);
	// SUPER to get inheritence from questions to use below
	var superToHTML = this.toHTML;
	
	this.toHTML = function() {
		// uses new name but is actually from Questions
		var result = superToHTML.call(this);
		
		result += '<ol id="' + title + '" type="a">\n';
		for (var counter = 0; counter < options.length; counter++) {
			result += '<li><input type="radio" name="' + title + '" value="' + options[counter] + '">' + 
			options[counter] + '</li>\n';
		}
		result += "</ol>\n";
		return result;
	};
	this.getAnswers = function() {
		var answers = {};
		var inputs = document.getElementById(title).getElementsByTagName("input");
		
		for (var counter = 0;counter < inputs.length; counter++) {
			answers[inputs[counter].value] = inputs[counter].checked;
		}
		
		return answers;
	};
}

function MultipleChoiceQuestionOther(title, text, options) {
	// calls question and makes inherits from it. 
	MultipleChoiceQuestion.call(this, title, text, options);
	
	// SUPER to get inheritence from questions to use below
	var superToHTML = this.toHTML;
	var superGetAnswers = this.getAnswers;
	
	this.toHTML = function() {
		// uses new name but is actually from Questions
		var result = superToHTML.call(this);
		
		result += '<p>Other: <input id="' + title + '_other" type="text" name="Other"></p>\n';
		return result;
	};
	
	this.getAnswers = function() {
		var answers = superGetAnswers.call(this);
		var input = document.getElementById(title + "_other");
		answers["Other"] = input.value;
		
		return answers;
	}
}


function MultipleSelectQuestion(title, text, options) {
	// calls question and makes inherits from it. 
	Question.call(this, title, text);
	// SUPER to get inheritence from questions to use below
	var superToHTML = this.toHTML;
	
	this.toHTML = function() {
		// uses new name but is actually from Questions
		var result = superToHTML.call(this);
		
		result += '<ol id="' + title + '" type="a">\n';
		for (var counter = 0; counter < options.length; counter++) {
			result += '<li><input type="checkbox" name="' + title + '" value="' + options[counter] + '">' + 
			options[counter] + '</li>\n';
			
		}
		result += "</ol>\n";
		return result;
	};
	
	this.getAnswers = function() {
		var answers = {};
		var inputs = document.getElementById(title).getElementsByTagName("input");
		
		for (var counter = 0; counter < inputs.length; counter++) {
			answers[inputs[counter].value] = inputs[counter].checked;
		}
		
		return answers;
	};
}

function MultipleSelectQuestionOther(title, text, options) {
	// calls question and makes inherits from it. 
	MultipleSelectQuestion.call(this, title, text, options);
	// SUPER to get inheritence from questions to use below
	var superToHTML = this.toHTML;
	var superGetAnswers = this.getAnswers;
	
	this.toHTML = function() {
		// uses new name but is actually from Questions
		var result = superToHTML.call(this);
		
		result += '<p>Other: <input id="' + title + '_other" type="text" name="Other"></p>\n';
		return result;
	};
	
	this.getAnswers = function() {
		var answers = superGetAnswers.call(this);
		var input = document.getElementById(title + "_other");
		answers["Other"] = input.value;
		
		return answers;
	}
}

function ShortAnswerQuestion(title, text) {
	// calls question and makes inherits from it. 
	Question.call(this, title, text);
	// SUPER to get inheritence from questions to use below
	var superToHTML = this.toHTML;
	
	this.toHTML = function() {
		// uses new name but is actually from Questions
		var result = superToHTML.call(this);
	
		result += '<p>Enter here: <input id="' + title + '" type="text" name="' + title +  '"></p>\n';
	
		return result;
	};
	
	this.getAnswers = function() {
		var answers = {};
		
		var input  = document.getElementById(title);
		
		answers[title] =  input.value;
		
		return answers;
	}
	
} 

// holds questions
// When you have many dif implementations for the same interface (like toHTML) it is polymorphism. many shapes
//
function QuestionSection(title, questions) {
	this.title = title;
	this.toHTML = function () {
		var result = '<h2 class="title">Section ' + this.number + ": " + title + "</h2>";
		for (var counter = 0; counter < questions.length; counter++) {
			result += questions[counter].toHTML();
		}
		return result;
	};
	
	this.getAnswers = function() {
		var answers = {};
		
		for (var counter = 0; counter < questions.length; counter++) {
			answers[questions[counter].title] = questions[counter].getAnswers();
			
		}
		
		return answers
	};
}

function Survey(title, sections) {
	this.toHTML = function () {
		var result = '<h1 class="title">' + title + "</h1>\n";
		for (var counter = 0; counter < sections.length; counter++) {
			result += sections[counter].toHTML();
		}
		
		result += '<input id="submit" type="button" value="SUBMIT">\n';
		return result;
	};
	
	this.getAnswers = function() {
		var answers = {};
		
		for (var counter = 0; counter < sections.length; counter++) {
			answers[sections[counter].title] = sections[counter].getAnswers();
			
		}
		
		return answers
	};
	

}


window.addEventListener("load", function () {
	var survey = createSurveyQuestions();
	function submit() {
		console.log("Answers submited");
		var answers = survey.getAnswers();
		var form = document.createElement('form');
		form.method = 'POST';
		form.action = 'submit_survey.php';
		form.innerHTML = '<input type="hidden" name="answers" value="' + encodeURIComponent(JSON.stringify(answers)) + '">';
		document.getElementsByTagName('body')[0].appendChild(form);
		form.submit();
	}
	document.getElementById("survey").innerHTML = survey.toHTML();
	document.getElementById("submit").addEventListener("click", submit);
});