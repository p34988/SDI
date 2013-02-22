//alert("JavaScript works!");

// Warren Morris
// SDI 1302
// Project 3
// More, not so fun stuff...



var  me = {
	"name": "Warren",
	"age": 28,
	"gender": "Male",
	"height": "71 inches",
	"hobbies": ["video games","listening to music"," computers"]
};

var startBool = false 

//True Random is an illusion, but this should work for this purpose
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
		
// Nested Conditional
		if (num > 4) {
		console.log("Random Number was High.");
		} else {
		console.log("Random Number was Low.");
		};
	
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
	console.log("I have spent more time on this project than I spent at work in a week.");
	console.log("In an effort to show that I'm able to learn what is going on here, this is going to just be the requirements to the best of my ability, minus the story.");
	startBool = hasStarted(startBool);
	console.log("Has started: " + startBool)
};

var loops = function () {
	
	for (var i = 0; i < 6; i++) {

		for (var k = 0, j=i; k < 3; k++) {
		console.log("Loop 1 #: " + j + "  Loop 2 #: " + k);
		};

	};	


};

console.log("Has started: " + startBool)

// Calling a function
startStory();

//Getting an array item
console.log("Randomly Chosen Array Item: " + pickArrItem(rndPick));

//returning an array
console.log (pickArrItem(null));


loops();


console.log("My name is " + me.name + ". I am a " + me.age + " year old " + me.gender + ", and I am " + me.height + " tall." );
//Not really effective use of a while loop.
while (me.age === 28){
console.log("In While Loop");
me.age = 29;
};
console.log("Out of loop");
console.log("Scratch that, I am " + me.age + " years old!");
console.log("My hobbies are: " + me.hobbies);
console.log(me);