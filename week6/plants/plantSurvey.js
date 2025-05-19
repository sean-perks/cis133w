console.log("plant survey")

function createSurveyQuestions() {
	var questions = [];
	
	var q1 = new ShortAnswerQuestion("Species", "What is the species name?");
	var q2 = new MultipleChoiceQuestionOther("Growh Form", "What growth form is the plant?", ["Forb", "Graminoid", "Shrub", "Tree"]);
	var q3 = new MultipleSelectQuestionOther("Phenology", "What is the current phenology?", ["Vegetative/Dormant", "Bud Set", "Bud Break", "Flowering", "Fruiting", "Immature Seed", "Ripe Seed", "Shatter"]);
	var q4 = new MultipleSelectQuestion("Love", "How much do you love this plant?", ["Favorite plant on earth", "eh", "it's chill", "uggo", "magnificent"])
	var q5 = new MultipleChoiceQuestion("Population", "How many individuals are present?", ["1", "< 10", "10 - 30", "31 - 50", "51 - 80", "81 - 120", "> 120"])
	var q6 = new ShortAnswerQuestion("Notes", "Add additional notes here.")
	
	var allQuestions = [q1, q2, q3, q4, q5, q6];
	
	for (var counter = 0; counter < allQuestions.length; counter++) {
		allQuestions[counter].number = counter + 1;
	}
	
	var s1 = new QuestionSection("Plant Observation", [q1, q2, q4, q6]);
	
	var s2 = new QuestionSection("Plant Stage - Population", [q3, q5]);
	
	var allSections = [s1, s2];
	
	for (var counter = 0; counter < allSections.length; counter++) {
		allSections[counter].number = counter + 1;
	}
	
	return new Survey("", [s1, s2]);
}

