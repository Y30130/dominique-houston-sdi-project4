// alert("JavaScript works!");

// Dominique Houston
// SDI 1305

// Project 4
// Javascript Libraries

// String Library
var StringLibrary = function () {

	// Does a string follow a 123-456-7890 pattern like a phone number?
	// Return boolean value
	var isPhoneNumUS = function (str) {
		var phoneNum= new String("123-456-7890");
		var re = (/\d{3}-\d{3}-\d{4}/); // (re = Regular Expression), all resources lead to this conclusion	
		return re.test(str); // Makeup: Method
	};
	
	// Does a string follow an aaa@bbb.ccc pattern like an email address?
	// Return boolean value
	var isEmail = function (str) {
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,}$/; // (re = Regular Expression), all resources lead to this conclusion
		return re.test(str); // Makeup: Method
	};
	
	// Is the string a URL? (Does it start with http: or https:?)
	// Returns boolean value
	var isURL = function (str) {
		var re = /^(?:http|https):/; // (re = Regular Expression), all resources lead to this conclusion
		return re.test(str); // Makeup: Method
	};
	
	// Title-case a string (split into words, then uppercase the first letter of each word)
	// Returns boolean value
	var splitStrUppercase = function (str) {
		var split = str.split(" ");
		var result = "";
		for (var i = 0, j = split.length; i < j; i++) {
			var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
			result = result.concat(spNew + " ");
		};
		return result;
	};
	
	// Given a string that is a list of things separated by a given string, as well as another string separator, 
	// return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
	var switchSeparator = function (str,newSep) {
		var re = /\W/g; // (re = Regular Expression), all resources lead to this conclusion
		return str.replace(re,newSep); // Makeup: Method
	};
	
	
	return {
			"isPhoneNumUS" : isPhoneNumUS, // Return Boolean Result from phone number string test
			"isEmail"      : isEmail, // Return Boolean Result from email format test
			"isURL"	       : isURL, // Return Boolean Result from URL test
			"splitStrUppercase" : splitStrUppercase, // Split String and Capitalize each First Letter
			"switchSeparator"   : switchSeparator, // Switch out separtor
	};

};


// Number Library
var NumberLibrary = function () {
	
	// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
	var formatNumto2Dec = function (num,afterDecimal) {
	return Number(num.toFixed(afterDecimal));	
	}
	
	// Find the number of hours or days difference between two dates.
	// Date format (yyyy,mm,dd)
	var compareTimeBtDates = function (date1,date2) {
		var results = [];
		var difference = (date1 > date2) ? date1.getTime() - date2.getTime(): date2.getTime() - date1.getTime();
		results[3] = difference / 1000;
		results[2] = results[3] / 60;
		results[1] = results[2] / 60;
		results[0] = results[1] / 24;
		return results;
	}
	
	// Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    var strToNum = function (num) {
		return Number(num);
    };
	
	return {
		"formatNumto2Dec" : formatNumto2Dec, // Return to help Decimal Formatting
		"compareTimeBtDates" : compareTimeBtDates, // Return to help Time Comparison
		"strToNum"           : strToNum // Return to help String to Number Function
	}
	
};

// Array Library
var ArrayLibrary = function () {

	// Find the smallest value in an array that is greater than a given number, if no value, return null
	var smallestValueInArray = function (array,num) {
		array.sort(function(a,b){return a-b;}); // Makeup: Method
		if (num >= array[0] && num < array[array.length-1]) {
				array.push(num); // Makeup: Method
				array.sort(function(a,b){return a-b;});
				var result = array[array.lastIndexOf(num) + 1];
				return result;
		} else {
			return null;
		}
	}
	
	// Find the total value of just the numbers in an array, even if some of the items are not numbers
	var totalValNumInArray = function (array) {
		var total = 0;
		for (var i = 0, j = array.length; i < j; i++) {
				if (array[i]/1 === array[i]) {
					total += array[i];
				};
		};
		return total;
	}
	
	// Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}]
	var sortKeyByValInArray = function (array,givenKey) {
		return (array.sort(function(a,b){return a[givenKey] - b[givenKey];}));
	};
	
	
	return { // Makeup: Returns
		
		"smallestValueInArray" : smallestValueInArray,
		"totalValNumInArray" : totalValNumInArray,
		"sortKeyByValInArray": sortKeyByValInArray,
	}
	
	
};

// String Tests
console.log("STRING LIBRARY EXECUTION");
var stringLib = StringLibrary(); // Execute String Library
console.log("");
console.log("Test Results from String Library Function");
console.log("Phone Number (US): " + stringLib.isPhoneNumUS("404-987-5564")); 	// Does a string follow a 123-456-7890 pattern like a phone number?
console.log("E-mail Address: "    + stringLib.isEmail("dominique@dominiquehouston.com")); 	// Does a string follow an aaa@bbb.ccc pattern like an email address?
console.log("URL: "    + stringLib.isURL("http://dominiquehouston.com/"));	// Is the string a URL? (Does it start with http: or https:?)
console.log("Title-case: " + stringLib.splitStrUppercase("britney jean spears was here"));	// Title-case a string (split into words, then uppercase the first letter of each word)
console.log("Separator Switch: " + stringLib.switchSeparator("dont stop and make it pop","/"));	// Given a string that is a list of things separated by a given string, as well as another string separator, 
console.log("");
console.log("");

// Number Tests
console.log("NUMBER LIBRARY EXECUTION");
var numberLib = NumberLibrary(); // Execute String Library
console.log("");
console.log("Test Results from String Library Function");
console.log("Format Number: " + numberLib.formatNumto2Dec(1.2345,2));	// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
var date1 = new Date(2013,1,26);
var date2 = new Date(2013,5,30);
var timeConversion = numberLib.compareTimeBtDates(date1,date2);	// Find the number of hours or days difference between two dates.
console.log("Difference in days: " + timeConversion[0] + ", in hours: " + timeConversion[1]); // Difference Output
console.log("String Conversion: " + "Blue " + numberLib.strToNum("42") + "!"); 	// Given a string version of a number such as "42", return the value as an actual Number, such as 42.
console.log("");
console.log("");

// Array Tests
console.log("ARRAY LIBRARY EXECUTION");
var arrayLib = ArrayLibrary(); // Execute String Library
console.log("");
console.log("Test Results from Array Library Function");
var numList = [11,1,90,10,12,2,4,8,5,];
console.log("Array: " + numList);
console.log("Smallest value in array: " + arrayLib.smallestValueInArray(numList,2)); 	// Find the smallest value in an array that is greater than a given number
console.log("Sum of array: " + arrayLib.totalValNumInArray(numList)); 	// Find the total value of just the numbers in an array, even if some of the items are not numbers
var arrayObjects = [{a:4},{a:2},{a:3},{a:87},{a:3},{a:1},{a:4},{a:7},{b:1},{b:5}];
console.log(arrayLib.sortKeyByValInArray(arrayObjects,"a")); // Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a"
