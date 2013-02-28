//alert("JavaScript works!");
//
// Warren Morris
// SDI 1302
// Project 4
//


var theLibrary = function () {
	
	
    // 1. Check phone number format
	String.prototype.checkNum = function () { //updated to include isNaN
		var result = "Bad Number";
		var num = this;
		switch(num.length){
			case 12: //111-222-3333
				var a = num.charAt(0) + num.charAt(1) + num.charAt(2);
				var b = num.charAt(4) + num.charAt(5) + num.charAt(6);
				var c = num.charAt(8) + num.charAt(9) + num.charAt(10) + num.charAt(11); 
			
				if (num.charAt(3) == '-' && num.charAt(7) == '-' && isNaN(a) == false && isNaN(b) == false && isNaN(c) == false) {
		
					result = "Good Number";
				} else {
					result = "Bad Number";
				}
				break;
			case 13: //(111)222-3333
				var a = num.charAt(1) + num.charAt(2) + num.charAt(3);
				var b = num.charAt(5) + num.charAt(6) + num.charAt(7);
				var c = num.charAt(9) + num.charAt(10) + num.charAt(11) + num.charAt(12); 
				if (num.charAt(0) == '(' && num.charAt(4) == ')' && num.charAt(8) == '-' && isNaN(a) == false && isNaN(b) == false && isNaN(c) == false) {
		
					result = "Good Number";
				} else {
					result = "Bad Number";
				} 
				break;
			case 14: //0-111-222-3333
				var a = num.charAt(0) + num.charAt(2) + num.charAt(3)+ num.charAt(4);
				var b = num.charAt(6) + num.charAt(7) + num.charAt(8);
				var c = num.charAt(10) + num.charAt(11) + num.charAt(12) + num.charAt(13); 
				if (num.charAt(1) == '-' && num.charAt(5) == '-' && num.charAt(9) == '-' && isNaN(a) == false && isNaN(b) == false && isNaN(c) == false) {
		
					result = "Good Number";
				} else {
					result = "Bad Number";
				}
				break;
			case 15: //+0-111-222-3333
				var a = num.charAt(1) + num.charAt(3) + num.charAt(4) + num.charAt(5);
				var b = num.charAt(7) + num.charAt(8) + num.charAt(9);
				var c = num.charAt(11) + num.charAt(12) + num.charAt(13) + num.charAt(14);
				if (num.charAt(0) == '+' && num.charAt(2) == '-' && num.charAt(6) == '-' && num.charAt(10) == '-' && isNaN(a) == false && isNaN(b) == false && isNaN(c) == false ) {
			
					result = "Good Number";
				} else {
					result = "Bad Number";
				}
				break;
			default:
			
		
		};

	
		return result;
	};

	// 2. Check Email
	String.prototype.isEmail = function () {
		var atSym = this.indexOf("@");
		var pSym = this.lastIndexOf("."); // some emails have more than one period, so i want the last
		var result = null;
		if (atSym != -1 && pSym != -1 && this.charAt(0) != "@" && this.charAt(this.length-1) != "." && this.charAt(this.length) != ".") {
			result = "Good Email Format";
		} else {
			result =  "Bad Email Format";
		};
		return result;
	};
	
	// 3. Check URL
	String.prototype.isURL = function () {
		var s1 = this.substring(0, 5);
		var s2 = this.substring(0, 6);
		if (s1 == 'http:' || s2 == 'https:') { //Extra credit "Boolean logic"
			return true;
		} else {
			return false;
		};
	
	};

	// 4. Set string to Proper Case(titlecase)
	String.prototype.ProperCase = function () {
		var toSplit = this.split(" ");
		var afterCased = [];
		
		for (var i=0; i < toSplit.length; i++) {  // Extra credit "loop"
			var theChars = toSplit[i].charAt(0).toUpperCase();
			afterCased.push(theChars + toSplit[i].slice(1));
		}
		return afterCased.join(" ");
	
	};
	
	// 5. Replace separator
	String.prototype.changeSeparator = function (find, fix) {
		var src = this.split(find);
		var temp = [];
		for (i=0; i < src.length; i++){
		temp.push(src[i]);
		
		}
	return temp.join(fix);
	
	}; // extra credit "arguments"
	
	// 6. Add decimal to a number
	String.prototype.decimal = function (p) {
		var num = this;
		var dPoint = num.length-p;
	
		var endNum = ""
		var addNum = p-num.length;
		
		var addWhat = "";
		if (p < num.length){
		
			endNum = [num.slice(0, dPoint), ".", num.slice(dPoint)].join("");
		} else if (p == num.length) {
			endNum = [num.slice(0, dPoint), "0.", num.slice(dPoint)].join("");
			
		} else if (p > num.length) {
			
			endNum = "Error: Decimal place is greater than the numbers length."			
		}
		return endNum;
	
	};
	
	// 7. fuzzy match
	String.prototype.fuzzyMatch = function (c,p) {
	
		var m = c*(p/100), num = this;
			if (num >= c-m && num <= c+m) {
				return true;
			} else {
				return false;		
		
		};
	};
	
	// 8. Find days between dates
	String.prototype.compairDates = function (date1, date2) {
		var dateA = new Date(date1);
		var dateB = new Date(date2);
		var days = 1000*60*60*24;
		var diff = "";
		
		// I didn't want to deal with error handeling so I made it always
		// subtract the smallest from the biggest. This way it doesn't matter which date goes in which spot.
		if (dateA > dateB) {
		diff = dateA - dateB;
		} else if (dateA < dateB) {
		diff = dateB - dateA;
		};
		
	
	return Math.floor(diff/days) + " days.";
	};
	
	// 9. string to number
	String.prototype.makeNum = function () {
		var num = this;
	
		num = 1*num;
	
		return num;
	
	};

	// 10. smallest number higher than given number
	String.prototype.higherLow = function (a, n) {
		var low = null;
		a.sort();
		for (i = 0; i < a.length; i++) {
			if (a[i] > n) {
				return a[i];
			
			};
		}
	
	};

	// 11. Total of Array
	String.prototype.arraySum = function (a) {
		//var a = this;
		var amount = 0; // extra credit "local variable/scope"
		for (i=0;i<a.length;i++) {
			amount = 1*amount;
			if (isNaN(a[i])){
			
			} else {
			
				amount += 1*a[i]; 		
			
			}
		};
		return amount; // extra credit "returns"
	
	};
	
	// 12. Sort Array by key
};

var newLib = new theLibrary(); // Call library
var testString = "2234.345"; // Test variable to check that it worked.
//
console.log("4657.324".makeNum()); // String to number
console.log(testString.makeNum()); // String to number using a variable to see that it worked.
//
console.log("1234567890".decimal(2)); // Place decimal: Good
console.log("1234567890".decimal(11)); // Place decimal: Bad
//
console.log("warren r morris".ProperCase()); // Title-case
//
console.log("11-222-3333".checkNum()); //Check bad Number
console.log("111-222-3333".checkNum()); //Check good Number
console.log("(111)222-3333".checkNum()); //Check good Number
console.log("0-111-222-3333".checkNum()); //Check good Number
console.log("+0-111-222-3333".checkNum()); //Check good Number
//
console.log("".arraySum([50, 43, "NaN" ,13])); //Total of array
//
console.log("http://test.com".isURL()); // Good HTTP
console.log("https://test.com".isURL()); // Good HTTPS
console.log("wwwtestcom".isURL()); // Bad URL
//
console.log("".compairDates("2009/31/12","2013/15/02")); // Compair dates
console.log("".compairDates("2013/15/02","2009/31/12")); // Compair dates
//
console.log("a,b,c".changeSeparator(",","/")); // Change separator
//
console.log("".higherLow([8,9,4,6,2,3],3)); // get the lowest number higher than given number
//
console.log("test@test.com".isEmail()); // Good Email
console.log("testtest.com".isEmail()); // Bad email

console.log("50".fuzzyMatch(100,50));
console.log("60".fuzzyMatch(100,20));