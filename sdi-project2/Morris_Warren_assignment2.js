//alert("JavaScript works!");

/*
//
// Warren Morris
// SDI 1302
// Project 2 
//
*/


var guitarModel = "Ibanez",
	stringNumbers = [1,2,3,4,5,6],
	standardTuning = ["E","A","D","G","B","e"],
	dTuning = ["D","A","D","G","B","e"]
	isTuned = false,
	untunedCount = stringNumbers.length,
	guitarInHand = false

;

var sayIt = function (logWhat) { 
	console.log( logWhat ); 
};

var guitarInHandCheck = function () {
	if (guitarInHand === false){
		guitarInHand = true; 
		sayIt("I picked up the " + guitarModel + ". It is time to check the tuning.");
	}else{
		sayIt("Guitar is already in my hands. Now it is time to check the tuning.");  
	}
}

var tuneGuitar = function ( stringCount ) {
	if (stringCount < 1) {
sayIt("The guitar is already tuned, just play it!");
	} else {

	}
}

guitarInHandCheck()

