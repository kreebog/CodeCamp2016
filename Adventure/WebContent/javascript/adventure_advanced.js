/*
 * startStory() 
 * 
 * Should only be used when the story is first loaded or
 * if the story needs to be reset when the reader clicks "Start Over" 
 * 
 */
function startStory() {
	
	// set the story title on the page
	$("#storyTitle").html(story.title);
	
	// To reset / start the story, we simply
	// load the first chapter (ID = 0) ... Chapter 1 == intChapterID 0 ?? Yep! I ain't afraid of zero-based arrays!
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
	$("#chapterTitle").html(story.chapters[intChapterID].title);
	
	// and set the chapter text
	$("#chapterText").html(story.chapters[intChapterID].text);
	
	// clear out the existing choises
	$("#choices").html("");
	
	// then load the choices for the current chapter onto the page
	for (var intChoicesPos = 0; intChoicesPos < story.chapters[intChapterID].choices.length; intChoicesPos++) {
		addChoice(story.chapters[intChapterID].choices[intChoicesPos]);
	}
	
}

/*
 * Add a choice to the page by appending (adding onto the end) HTML tags
 * to the choices HTML element.
 * 
 * @choice - an object represntation of a JSON data structure:
 * 		choice.id: Number indicating choice ID
 * 		choice.text: The text of the choice to be displayed on the screen
 * 		choice.nextChapterId: The idea of the chapter that the choice will lead to
 */
function addChoice(choice) {
	// use jQuery to find the HTML Element with the id "choices"
	var eleChoices = $("#choices");

	// Prebuild the choice button's HTML.
	//
	// Notice that broken strings can be split across multiple lines...
	// 	this makes the code easier to read, which is always good! 
	var strChoiceButtonHTML = "<button class='choiceButton' id='choice_" + choice.id + 
							  "' onclick='loadChapter(" + choice.nextChapterId + ")'>" + choice.text + 
							  " </button>\r\n"; 

	// Append the new choice button's HTML to the choices element on the page
	// 	We can do this as many times as we like to add new buttons, but if there are too 
	// 	many buttons, the page won't look very good.
	eleChoices.append(strChoiceButtonHTML);
}

