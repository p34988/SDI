//alert("JavaScript works!");
//
// Warren Morris
// SDI 1302
// Project 4
//


var theLibrary = function () {
	
	var checkPhone = function () {
		
	
	}




};

// Set string to Proper Case(titlecase)
String.prototype.ProperCase = function () {
	var toSplit = this.split(" ");
	var afterCased = [];
	
	for (var i=0; i < toSplit.length; i++) {
		var theChars = toSplit[i].charAt(0).toUpperCase();
		afterCased.push(theChars + toSplit[i].slice(1));
	}
	return afterCased.join(" ");

};


console.log("warren morris is awesome".ProperCase());