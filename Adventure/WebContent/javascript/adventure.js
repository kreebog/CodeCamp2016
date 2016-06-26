var currentPageNumber = 0;	// number variable used to keep track of the page number.  This starts at zero 

/*
 * startStory() 
 * 
 * Should only be used when the story is first loaded.
 * Note: Could also be used to 'reset' the story if the user 
 * wants to start over! 
 * 
 */
function startStory() {
	setStoryTitle(story.title);
	loadChapter(0);
}


function loadChapter(chapterId) {
	setChapterTitle(story.chapters[chapterId].title);
	setChapterText(story.chapters[chapterId].text);
	
	clearChoices();
	for (x = 0; x < story.chapters[chapterId].choices.length; x++) {
		console.log ("Adding Choice " + x);
		addChoice(story.chapters[chapterId].choices[x]);
	}
	
}

//TODO: Promote reusability by consolidating these functions: setStoryTitle, setChapterTitle, setChapterText

/*
 * function setStoryTitle(string storyTitle)
 * @storyTitle: string containing the title of the story
 * 
 */
function setStoryTitle(storyTitle) {
	var element = document.getElementById("storyTitle");
	element.innerText = storyTitle;
}

/*
 * function setChapterTitle(string chapterTitle)
 * @chapterTitle: string containing the current chapter's title 
 * 
 */
function setChapterTitle(chapterTitle) {
	var element = document.getElementById("chapterTitle");
	element.innerHTML = chapterTitle;
}

/*
 * function setChapterText(string chapterText)
 * @chapterText: string containing the text of the current chapter
 * 
 */
function setChapterText(chapterText) {
	var element = document.getElementById("chapterText");
	element.innerHTML = chapterText;
}

// hides all choice buttons on the page
function clearChoices() {
	var element = document.getElementById("choices");
	element.innerHTML = "";
}

/* uses an object as an argument */
function addChoice(choice) {
	var element = document.getElementById("choices");
	element.innerHTML += "<button class='choiceButton' id='choice_" + choice.id + "' onclick='loadChapter(" + choice.nextChapterId + ")'>" + choice.text + " </button>\r\n";

}

