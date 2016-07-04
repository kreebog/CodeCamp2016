/*
 * 
 * JSON (JavaScript Object Notation) is one of the most popular ways to organize and transmit structured data.
 * 
 * This sample story shows how you could use JSON data to organize your story and load it 
 * 	directly into a JavaScript Object.  This approach is what I used to make "adventure_advanced.js" 
 *  work with such little code.  
 * 
 */

var story = {
	"title": "A Pirate's Life", 
	"authors": {
		"name": "James Dean", 
		"name": "Jimmy Dean", 
		"name": "Jim Dean"
	}, 
	"chapters": [
		{
			"id": 0,
			"title": "On the High Seas",
			"author": "James Dean",
			"text": 
					"The sun hangs directly overhead, as bright and hot as the tip of an iron sabre fresh from the forge.  The ship's compass points due north, but your first mate, Duncan, tells you that you're running low on fresh water and that the crew is starting to worry.  <br><br>'Turn east, Captain,' he says.  Land is but a half-day's sail with this strong west wind at our backs.  We'll find water for sure... and maybe something better!'",
			"choices" : [  
				{"id": 1, "text": "Head East", "nextChapterId": 1},
				{"id": 2, "text": "Keep Sailing North", "nextChapterId": 2},
				{"id": 3, "text": "Slap Duncan", "nextChapterId": 3}
			]
		},
		{
			"id": 1,
			"title": "Heading East",
			"author": "Jimmy Dean",
			"text": 
					"You order the helmsman to turn right and head east as the brutally hot sun slowly starts to drop behind you.  True to Duncan's word, the cry of 'Land Ho!' rings out from the crow's nest just before the sun touches the water.  <br><br>Squinting through your foggy telescope, you see a lush, green coastline edged with glimmering beaches... <i>and what appears to be a city made of gold</i>.",
			"choices" : [  
				{"id": 1, "text": "Move Closer", "nextChapterId": 4},
				{"id": 2, "text": "Drop Anchor for the Night", "nextChapterId": 5},
				{"id": 3, "text": "Turn Back Now", "nextChapterId": 0}
			]
		}
	]
}
