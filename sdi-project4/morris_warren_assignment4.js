//alert("JavaScript works!");
//
// Warren Morris
// SDI 1302
// Project 4
//


var theLibrary = function () {
	
	
    // 1. Check phone number format
	String.prototype.checkNum = function () {
		var result = "";
		var num = this;

		if (num.length == 12) {
			if (num.charAt(3) == '-' && num.charAt(7) == '-') {
		
				result = "correct";
			} else {
				result = "wrong";
			}
		} else if (num.length == 13) {
			if (num.charAt(0) == '(' && num.charAt(4) == ')' && num.charAt(8) == '-') {
		
				result = "correct";
			} else {
				result = "wrong";
			}
		} else if (num.length == 14) {
			if (num.charAt(1) == '-' && num.charAt(5) == '-' && num.charAt(9) == '-') {
		
				result = "correct";
			} else {
				result = "wrong";
			}
		} else if (num.length == 15) {
			if (num.charAt(0) == '+' && num.charAt(2) == '-' && num.charAt(6) == '-' && num.charAt(10) == '-' ) {
			
					result = "correct";
				} else {
					result = "wrong";
				}
		} else {
		result = "wrong";
		}
		
	
		return result;
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
	
	// 9. string to number
	String.prototype.makeNum = function () {
		var num = this;
	
		num = 1*num;
	
		return num;
	
	};

};

var newLib = new theLibrary(); // Call library

console.log("4657.324".makeNum()); // String to number
console.log("1234567890".decimal(2)); // Place decimal
console.log("warren r morris".ProperCase()); // Title-case
console.log("11-222-3333".checkNum()); //Check bad Number
console.log("111-222-3333".checkNum()); //Check good Number
console.log("(111)222-3333".checkNum()); //Check good Number
console.log("0-111-222-3333".checkNum()); //Check good Number
console.log("+0-111-222-3333".checkNum()); //Check good Number
