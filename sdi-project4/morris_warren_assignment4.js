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

// 4. Set string to Proper Case(titlecase)
String.prototype.ProperCase = function () {
	var toSplit = this.split(" ");
	var afterCased = [];
	
	for (var i=0; i < toSplit.length; i++) {
		var theChars = toSplit[i].charAt(0).toUpperCase();
		afterCased.push(theChars + toSplit[i].slice(1));
	}
	return afterCased.join(" ");

};

// 6. Add decimal to a number
String.prototype.decimal = function (p) {
	var num = this;
	var dPoint = num.length-p;

	var endNum = [num.slice(0, dPoint), ".", num.slice(dPoint)].join("");
	
	return endNum;

};



