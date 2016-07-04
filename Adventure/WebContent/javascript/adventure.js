// GO ADVANCED #GA1:  Use GLOBAL_VARIABLES to identify your chapters by number to map against your various chapter arrays:  
// 	 int CHAPTER_ONE_ID = 1; 
// 
// GO SUPER-ADVANCED (#SA1):  Use an ENUMERATION to identify your chapters by number!  

var strStoryTitle = "The Title of the Story";

/* GO ADVANCED #GA2: Replace the "in-line" array declarations with an explicit declaration and use the .push() 
 * 	function to add your chapter titles. But DON'T FORGET:  Arrays are "zero-based!"
	
	var arrChapterTitles = new Array();
	arrChapterTitles.push("The Chapter Title");
 */

/* GO ADVANCED #GA3: Remove the zero-position array buffers and learn to deal with zero-based arrays! 

/* strChapterTitles is an array containing our chapter's titles
 * 
 * To make things easier to follow, we're setting the first element in the 
 * 	array to an empty string ("") pretending that it doesn't exist so that 
 * 	our ChapterID numbers match up with our actual chapter numbers... basically
 * 	pretending that our arrays are "one-based" instead of "zero-based."
 */ 

var arrStrChapterTitles = [
                     "", // intentionally left blank  
                     "The First Chapter",
					 "The Second Chapter",
					 "The Third Chapter",
					 "The Fourth Chapter",
					 "The Fifth Chapter",
					 "You're Dead :(",
					 "You've Survived :)"
];

/* strChapterBodies is an array containing the actual body of each chapter. 
 * 
 * Again, we're setting the first element in the array to an empty 
 * 	string ("") so that we can make the intChapterID values match up 
 * 	with our actual chapter numbers. 
 */ 
var arrStrChapterBodies = [
                   "", // this is the "zero" position of the array - to make the code easier to manage, we won't use it.
                   "This is the body of the FIRST chapter.  This is where the story goes, but only for chapter 1.",
                   "This is the body of the SECOND chapter.  This is where the story goes, but only for chapter 2.",
                   "This is the body of the THIRD chapter.  This is where the story goes, but only for chapter 3.",
                   "This is the body of the FOURTH chapter.  This is where the story goes, but only for chapter 4.",
                   "This is the body of the FIFTH chapter.  This is where the story goes, but only for chapter 5.",
                   "YOU HAVE DIED IN CHAPTER SIX.",
                   "Congratulations, you've reached the last chapter (seven) of this story and you're still ALIVE!!!"
];

/*
 * startStory() 
 * 
 * Should only be used when the story is first loaded or
 * if the story needs to be reset when the reader clicks "Start Over" 
 * 
 */
function startStory() {
	setStoryTitle(strStoryTitle);
	
	// To reset / start the story, we simply
	// load the first chapter (ID = 1)
	loadChapter(1);
}

/*
 * loadChapter(intChapterID) 
 * @intChapterID:  The chapter number that we want to load.
 * 
 * Loads the chapter's title and text for the chapter
 * with the given intChapterID.  
 * 
 * The prefix "int" on "intChapterID" let's us know that that
 * required parameter is a number (an integer, specifically). 
 * 
 * GO ADVANCED #GA4: Replace the IF statements with a "SWITCH" statement:
 
	switch (intChapterID) {
		case 1: 
			addChoice("SAMPLE", 2); 
			addChoice("ANOTHER SAMPLE ", 3);
			break;
		case 2: ... and so on 
	}	
 * 
 */
function loadChapter(intChapterID) {
	
	// set the chapter title
	setChapterTitle(arrStrChapterTitles[intChapterID]);
	
	// and set the chapter text
	setChapterText(arrStrChapterBodies[intChapterID]);
	
	// clear out the existing choises
	clearChoices();

	// add choices for CHAPTER 1 
	// (remember - arrays are zero-based, so "Chapter 1" is actuallyin array position 0!)
	if (intChapterID == 1) {
		addChoice("Go to Chapter 2", 2);
		addChoice("Go to Chapter 3", 3);
	} // end choices for CHAPTER 1
	
	// add choices for CHAPTER 2 
	if (intChapterID == 2) {
		addChoice("Back to Chapter 1", 1);
		addChoice("Go to Chapter 4", 4);
	}

	// add choices for CHAPTER 3 
	if (intChapterID == 3) {
		addChoice("Go to Chapter 5", 5);
		addChoice("Make a HUGE Mistake", 6);
	}

	// add choices for CHAPTER 4 
	if (intChapterID == 4) {
		addChoice("Go to the end (WIN)", 7);
		addChoice("Back to Chapter 2", 2);
	}

	// add choices for CHAPTER 5 
	if (intChapterID == 5) {
		addChoice("Make a HUGE Mistake", 6);
		addChoice("Go to the end (WIN)", 7);
	}

	// add choices for CHAPTER 6 
	if (intChapterID == 6) {
		addChoice("Oops... Start Over", 1);
	}

	// add choices for CHAPTER 7 
	if (intChapterID == 7) {
		addChoice("You won!  Play again?", 1);
	}

	
	// GO ADVANCED #GA5: Can your code handle it if an invalid intChapterID is given?  
	// 	Hint: "If ... Else" statements
	// 	Hint: If you're using "switch" - use the "default" case to handle invalid intChapterID values! 
	
}

//TODO: Promote reusability by consolidating these functions: setStoryTitle, setChapterTitle, setChapterText

/*
 * function setStoryTitle(string strStoryTitle)
 * @strStoryTitle: string containing the title of the story
 */
function setStoryTitle(strStoryTitle) {
	// The prefix "str" on the parameter variable "strStoryTitle" let
	// lets us see quickly that this variable is a string.    

	// use jQuery to find the HTML Element with the id "storyTitle" and set
	// the HTML content of the element to the strStoryTitle parameter's value
	
	$("#storyTitle").html(strStoryTitle);
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
 * Removes all choice buttons from the page.
 * 
 * GO ADVANCED #GA6: Reduce this function to a single line of code (comments don't count) 
 * 	(HINT: You have to do it without using any variables)
 * 	(Another HINT: The jQuery page of the presentation is a good example!)
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
 * @strChoiceText : The text that will appear on the button for this choice 
 * @intNextChapterId : The chapter that will be loaded if this choice button is clicked.
 * 
 */

/* GO SUPER-ADVANCED #SA2: Add support for different colored buttons using jQuery!
 * 
 * 	1) Add a string parameter to the function: strButtonColor
 *  2) Add a line to the strChioceButtonHTML string in the correct place: " style='background-color:" + strButtonColor + "'" +
 *  3) Update your addChoice function calls to provide one of the basic named color values (red, orange, blue, green, gray, black, etc...)    
 */
function addChoice(strChoiceText, intNextChapterID) {
	// use jQuery to find the HTML Element with the id "choices"
	var eleChoices = $("#choices");

	// Prebuild the choice button's HTML.  
	// 		Notice that broken strings can be split across multiple lines if you split them after a "+"
	// 		this makes the code easier to read, which is always good! 
	var strChoiceButtonHTML = "<button class='choiceButton'" + 
							  
							  " onclick='loadChapter(" + intNextChapterID + ")'>" + strChoiceText +
  							  " </button>\r\n"; 
	// Append the new choice button's HTML to the choices element on the page
	// We can do this as many times as we like to add new buttons, but if there are too 
	// many buttons, the page won't look very good.
	eleChoices.append(strChoiceButtonHTML);
}

