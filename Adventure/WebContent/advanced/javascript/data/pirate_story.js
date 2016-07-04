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
	"chapters": [
		{
			"id": 0,
			"title": "On the High Seas",
			"text": 
					"The sun hangs directly overhead, as bright and hot as the tip of an iron sabre fresh from the forge.  The ship's compass points due north, but your first mate, Duncan, tells you that you're running low on fresh water and that the crew is starting to worry.  <br><br>'Turn east, Captain,' he says.  Land is but a half-day's sail with this strong west wind at our backs.  We'll find water for sure... and maybe something better!'",
			"choices" : [  
				{"id": 1, "text": "Head East", "nextChapterId": 1},
				{"id": 2, "text": "Keep Sailing North", "nextChapterId": 4},
			]
		},
		{
			"id": 1,
			"title": "Heading East",
			"text": 
					"You order the helmsman to turn right and head east as the brutally hot sun slowly starts to drop behind you.  True to Duncan's word, the cry of 'Land Ho!' rings out from the crow's nest just before the sun touches the water.  <br><br>Squinting through your foggy telescope, you see a lush, green coastline edged with glimmering beaches... <i>and what appears to be a city made of gold</i>.",
			"choices" : [  
				{"id": 1, "text": "Move Closer", "nextChapterId": 2},
				{"id": 2, "text": "Drop Anchor for the Night", "nextChapterId": 3},
				{"id": 3, "text": "Turn Back Now", "nextChapterId": 0}
			]
		},
		{
			"id": 2,
			"title": "Cannon Fodder",
			"text": 
					"As you approach the golden city, the glint of the sunlight flashes from the glittering barrels of a hundred golden cannons as they turn to aim at your ship.  You order the helmsman to turn the ship around, but it's already too late.  <br><br>'Abandon ship!' you yell as your splintered, burning boat sinks into the blue waves.  You cling to the wheel as your men dive overboard... the captain always goes down with the ship.  <br><br><center>THE END</center>",
			"choices" : [  
				{"id": 1, "text": "Start Over?", "nextChapterId": 0},
			]
		},
		{
			"id": 3,
			"title": "Midnight Thunder",
			"text": 
					"The sun has nearly set and you order the men to drop anchor for the night rather than risk running aground while trying to approach the goden city in the dark.  <br><br>Later that night a tremendous BOOM awakens you from your sleep.  A huge storm has moved in while you slept and your ship's mast has been struck by lightning!  Depsite the rain and the valiant efforts of your crew, the tarred, oil-soaked wood of your hull burns like a torch.  You cling to the wheel as your men dive overboard... the captain always goes down with the ship. <br><br><center>THE END</center>",
			"choices" : [  
				{"id": 1, "text": "Start Over?", "nextChapterId": 0},
			]
		},
		{
			"id": 4,
			"title": "Meet the Fleet",
			"text": 
					"Duncan's advice hasn't been very good lately, so you decide to ignore his recommendation and keep heading north.  A few short hours later you pass through a mysterious bank of fog.  The crew becomes nervous and urges you to turn back, but you drive on and eventually the fog thins and you find yourself in clear air... and face to face with The Queen's Fleet.  <br><br>The HMS Dauntless starts to turn broadside, pointing her 24 iron cannons in your direction as the rest of the fleet fans out behind her.  The mysterious fog bank lies just to the south, maybe you could get away...",
			"choices" : [  
				{"id": 1, "text": "Turn Back South", "nextChapterId": 0},
				{"id": 2, "text": "Stay and Fight", "nextChapterId": 5},
				{"id": 3, "text": "Run West", "nextChapterId": 8},
			]
		},
		{
			"id": 5,
			"title": "Outgunned",
			"text": 
					"You turn your ship hard to port as the HSM Dauntless unleashes a hail of 12-pound, iron hail on you.  Before your cannons can be brought to bear, starboard hull is a shattered, smoking ruin.  The force of the impact has turned your bow back toward the HMS Dauntless and a sudden gust of wind fills your sails.  Your ship begins to pick up speed even as she starts taking on water, already listing to starboard...",
			"choices" : [  
				{"id": 1, "text": "Abandon Ship", "nextChapterId": 6},
				{"id": 2, "text": "Ramming Speed!", "nextChapterId": 7},
			]
		},
		{
			"id": 6,
			"title": "Shark Bait",
			"text": 
					"You realize that the only hope for any of your men is to order them to abandon ship immediately.  You give the order just before you notice that the water is teeming with the large, gray fins of a pack of great white sharks!  As your men dive into the churning waters, you cling to the wheel as the ship slowly rolls to the side.  The captain always goes down with the ship. <br><br><center>THE END</center>",
			"choices" : [  
				{"id": 1, "text": "Start Over?", "nextChapterId": 0},
			]
		},
		{
			"id": 7,
			"title": "A Watery Grave",
			"text": 
					"'RAMMING SPEED!' you cry, grabbing the wheel and keeping your ship on a collision course with the massive HMS Dauntless.  The Dauntless's cannons fire again and again as you approach, but the narrow target you present to the enemy ship makes you harder to hit.  <br><br>There's a deafening crash as your ship's ram smashes into the Dauntless's broad, barrel-shaped side.  Your ship crumples around you as your men scramble up onto the Dauntless, swords and daggers in hand as they prepare to fight for their lives.  <br><br>You grin your wicked, pirate's grin and cling to the wheel as your ship takes on water, proud to have damaged the Queen's flagship, but resigned to your doom.  After all, the captain always goes down with the ship. <br><br><center>THE END</center>",
			"choices" : [  
				{"id": 1, "text": "Start Over?", "nextChapterId": 0},
			]
		},
		{
			"id": 8,
			"title": "Whirlpool",
			"text": 
					"You turn west and race into the setting sun, hoping that the glare of the sun will make it harder for the enemy ships to take aim on you.  Your plan works, and your smaller, faster ship leaves the large, cumbersome fleet behind as you sail futher into the deep ocean.<br><br>You have no choice but to sail on into the the night, hoping to put some distance between yourself and the fleet.  Unfortunately, your lookout can't see the massive whirlpool that grabs your little ship, pulling it under so quickly that you don't even have time to order the men to abandon ship... not that it would have helped.  <br><br>Usually, it's only the captain that has to go down with the ship, but not this time... <br><br><center>THE END</center>",
			"choices" : [  
				{"id": 1, "text": "Start Over?", "nextChapterId": 0},
			]
		}
	
	]
}
