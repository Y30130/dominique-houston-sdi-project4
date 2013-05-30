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
		return re.test(str);
	};
	
	// Does a string follow an aaa@bbb.ccc pattern like an email address?
	// Return boolean value
	var isEmail = function (str) {
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,}$/; // (re = Regular Expression), all resources lead to this conclusion
		return re.test(str);
	};
	
	// Is the string a URL? (Does it start with http: or https:?)
	// Returns boolean value
	var isURL = function (str) {
		var re = /^(?:http|https):/; // (re = Regular Expression), all resources lead to this conclusion
		return re.test(str);
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
		return str.replace(re,newSep);
	};
	
	
	return {
			"isPhoneNumUS" : isPhoneNumUS, // Return Boolean Result from phone number string test
			"isEmail"      : isEmail, // Return Boolean Result from email format test
			"isURL"	       : isURL, // Return Boolean Result from URL test
			"splitStrUppercase" : splitStrUppercase, // Split String and Capitalize each First Letter
			"switchSeparator"   : switchSeparator, // Switch out separtor
	};

};


// String Tests
console.log("STRING LIBRARY EXECUTION");
var stringLib = StringLibrary(); // Execute String Library
console.log("");
console.log("Test Results from String Library Function");
console.log("Phone Number (US): " + stringLib.isPhoneNumUS("404-987-5564"));
console.log("E-mail Address: "    + stringLib.isEmail("dominique@dominiquehouston.com"));
console.log("URL: "    + stringLib.isURL("http://dominiquehouston.com/"));
console.log("Title-case: " + stringLib.splitStrUppercase("britney jean spears was here"));
console.log("Separator Switch: " + stringLib.switchSeparator("dont stop and make it pop","/"));