var myStory = {
	"title":"A Pirate's Life", 
	"authors": {
		"name": "James Dean", 
		"name": "Jimmy Dean", 
		"name": "Jim Dean"
	}, 
	"chapters": [
		{
			"id": 0,
			"title": "On the High Seas",
			"text": 
					"The sun hangs directly overhead, as bright and hot as the tip of an iron sabre fresh from the forge.  The compass points due north, but your first mate, Duncan, tells you that you're running low on fresh water and that the deckhands are starting to complain.  <br><br>'Turn east, Captain,' he says.  Land is but a half-day stroll with this strong west wind at our backs.'",
			"choices" : [  
				{"id": 1, "text": "Head East", "nextChapterId": 1},
				{"id": 2, "text": "Keep Sailing North", "nextChapterId": 2},
				{"id": 3, "text": "Slap Duncan", "nextChapterId": 3}
			]
			
		},
		{
			"id": 1,
			"title": "Heading East",
			"text": 
					"You order the helmsman to turn right and head east as the brutally hot sun slowly starts to drop behind you.  True to Duncan's word, the cry of 'Land Ho!' rings out from the crow's nest just before the sun touches the water.  <br><br>Squinting through your foggy telescope, you see a lush, green coastline edged with glimmering beaches and what appears to be a city made of gold.",
			"choices" : [  
				{"id": 1, "text": "Move Closer", "nextChapterId": 4},
				{"id": 2, "text": "Drop Anchor for the Night", "nextChapterId": 5},
				{"id": 3, "text": "Turn Back Now", "nextChapterId": 0}
			]
			
		}
	]
}
