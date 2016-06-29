/*
 * startStory() 
 * 
 * Should only be used when the story is first loaded or
 * if the story needs to be reset when the reader clicks "Start Over" 
 * 
 */
function startStory() {
	setStoryTitle(story.title);
	
	// To reset / start the story, we simply
	// load the first chapter (ID = 0)
	loadChapter(0);
}

/*
 * Loads the chapter's title and text for the chapter
 * with the given intChapterID.  
 * 
 * The prefix "int" on "intChapterID" let's us know that that
 * required parameter is a number (an integer, specifically). 
 * 
 * 
 */
function loadChapter(intChapterID) {
	
	// set the chapter title
	setChapterTitle(story.chapters[intChapterID].title);
	
	// and set the chapter text
	setChapterText(story.chapters[intChapterID].text);
	
	// clear out the existing choises
	clearChoices();
	
	// then load the choices for the current chapter onto the page
	for (var intChoicesPos = 0; intChoicesPos < story.chapters[intChapterID].choices.length; intChoicesPos++) {
		addChoice(story.chapters[intChapterID].choices[intChoicesPos]);
	}
	
}

//TODO: Promote reusability by consolidating these functions: setStoryTitle, setChapterTitle, setChapterText

/*
 * function setStoryTitle(string strStoryTitle)
 * @strStoryTitle: string containing the title of the story
 */
function setStoryTitle(strStoryTitle) {
	// The prefix "str" on the parameter variable "strStoryTitle" let
	// lets us see quickly that this variable is a string.    
	// The "ele" prefix indicates an element within the HTML Document. 

	// use jQuery to find the HTML Element with the id "storyTitle"
	var eleStoryTitle = $("#storyTitle");
	
	// and set the HTML of that element to the string parameter "strStoryTitle" 
	eleStoryTitle.html(strStoryTitle);
}

/*
 * function setChapterTitle(string strChapterTitle)
 * @strChapterTitle: string containing the current chapter's title 
 */
function setChapterTitle(strChapterTitle) {
	// use jQuery to find the HTML Element with the id "chapterTitle"
	var eleChapterTitle = $("#chapterTitle");

	// and set the HTML of that element to the string parameter "strChapterTitle" 
	eleChapterTitle.html(strChapterTitle);
}

/*
 * function setChapterText(string strChapterText)
 * @strChapterText: string containing the text of the current chapter
 */
function setChapterText(strChapterText) {
	// use jQuery to find the HTML Element with the id "chapterText"
	var eleChapterText = $("#chapterText");

	// and set the HTML of that element to the string parameter "strChapterText" 
	eleChapterText.html(strChapterText);
}

/*
 * Removes all choice buttons from the page
 */  
function clearChoices() {
	// use jQuery to find the HTML Element with the id "choices"
	var eleChoices = $("#choices");
	
	// and clear it out by setting it to an empty string:  ""
	eleChoices.html("");
}

/*
 * Add a choice to the page by appending (adding onto the end) HTML tags
 * to the choices HTML element.
 * 
 * @choice - an object represntation of a JSON data structure:
 * 		id: Number indicating choice ID
 * 		text: The text of the choice to be displayed on the screen
 * 		nextChapterId: The idea of the chapter that the choice will lead to
 */
function addChoice(choice) {
	// use jQuery to find the HTML Element with the id "choices"
	var eleChoices = $("#choices");

	// Prebuild the choice button's HTML.  
	// 		Notice that broken strings can be split across multiple lines...
	// 		this makes the code easier to read, which is always good! 
	var strChoiceButtonHTML = "<button class='choiceButton' id='choice_" + choice.id + 
							  "' onclick='loadChapter(" + choice.nextChapterId + ")'>" + choice.text + 
							  " </button>\r\n"; 
	// Wppend the new choice button's HTML to the choices element on the page
	// We can do this as many times as we like to add new buttons, but if there are too 
	// many buttons, the page won't look very good.
	eleChoices.append(strChoiceButtonHTML);
}

