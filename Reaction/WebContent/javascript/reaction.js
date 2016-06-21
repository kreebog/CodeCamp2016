// global variabls?  
var clickedTime; 
var createdTime; 
var reactionTime;
var maxTimeBetweenRounds = 2500; // in milliseconds
var maxShapeSize = 200; // in pixels
var minShapeSize = 50; // in pixels

// Generate Random Color 
function getRandomColor() {
	var colors = ["red", "green", "blue"];
	var colorNum = Math.floor(Math.random() * colors.length);
	return colors[colorNum];
}

// Create different boxes with random time	
function drawShape(){

	var delay = Math.floor(Math.random() * maxTimeBetweenRounds);
	console.log("Delay: " + delay);

	setTimeout(function() {
		// choose shape at random
		if (Math.random() > 0.5) {
			document.getElementById("box").style.borderRadius = "100px";
		}else {
			document.getElementById("box").style.borderRadius = "0";
		}
		
		var top=Math.random();
		top=top*300;
	
		var left=Math.random();
		left=left*500;
		
		var shapeSize = Math.floor(Math.random() * maxShapeSize) + minShapeSize;
		console.log("Size: " + shapeSize);
		
		var shape = document.getElementById("box");
		shape.style.top = top + "px";
		shape.style.left = left + "px";
		shape.style.backgroundColor = getRandomColor();
		shape.style.height = shapeSize + "px";
		shape.style.width = shapeSize + "px";
		shape.style.display = "block";
		
		/* old version - worth showing? 
		document.getElementById("box").style.top=top+"px";
		document.getElementById("box").style.left=left+"px";
		document.getElementById("box").style.backgroundColor=getRandomColor();
		document.getElementById("box").style.display="block";
		*/ 
		createdTime=Date.now();
	}, delay);	
}

document.getElementById("box").onclick=function() {
	clickedTime=Date.now();
	reactionTime=(clickedTime-createdTime)/1000;
	document.getElementById("time").innerHTML=reactionTime;
	this.style.display="none";
	drawShape();
}

drawShape();