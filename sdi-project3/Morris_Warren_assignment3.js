//alert("JavaScript works!");

// Warren Morris
// SDI 1302
// Project 3
// More, not so fun stuff...

//True Random is an illusion, but this should work for this purpose
var startBool = false 
var rndPick = Math.floor(Math.random()*10)
var pickArrItem = function (num) {

	var sentArr = [ "Item 0",
					"Item 1",
					"Item 2",
					"Item 3",
					"Item 4",
					"Item 5",
					"Item 6",
					"Item 7",
					"Item 8",
					"Item 9"
	];
	if (num===null) {
		return sentArr;
	} else {
		return sentArr[num];
	}
};

var hasStarted = function (bool) {
	if (bool === false) {
		bool = true;
		return bool
};

};
var startStory = function () {
	console.log("I have spent more time on this project than i spent at work in a week.");
	console.log("In an effort to show that I'm able to learn what is going on here, this is going to just be the requirements to the best of my ability, minus the story.");
	startBool = hasStarted(startBool);
	console.log("Has started: " + startBool)
};




// Calling a function
console.log("Has started: " + startBool)
startStory();

//Getting an array item
console.log("Randomly Chosen Array Item: " + pickArrItem(rndPick));
console.log (pickArrItem(null));
