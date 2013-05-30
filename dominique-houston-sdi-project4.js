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
		var result = (/\d{3}-\d{3}-\d{4}/); // Regular Expression, all resources lead to this conclusion			
		return result.test(str);
	};
	
	// Does a string follow an aaa@bbb.ccc pattern like an email address?
	// Return boolean value
	var isEmail = function (str) {
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,}$/; // Regular Expression, all resources lead to this conclusion
		return re.test(str);
	};
	
	
	return {
			"isPhoneNumUS" : isPhoneNumUS, // Return Boolean Result from phone number string test
			"isEmail"      : isEmail, // Return Boolean Reult from email format test
			
		};

};


// String Tests
console.log("STRING LIBRARY EXECUTION");
var stringLib = StringLibrary(); // Execute String Library
console.log("");
console.log("Test Results from String Library Function");
console.log("Phone Number (US): " + stringLib.isPhoneNumUS("404-987-5564"));
console.log("E-mail Address: "    + stringLib.isEmail("dominique@dominiquehouston.com"));