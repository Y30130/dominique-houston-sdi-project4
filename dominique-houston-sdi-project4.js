// alert("JavaScript works!");
// Dominique Houston
// SDI 1305
// Project 4
// Javascript Libraries

// String Library
var StringLibrary = function () {
	// Does a string follow a 123-456-7890 pattern like a phone number?
	// Return boolean
	var isPhoneNumUS = function (str) {
		var phoneNum= new String("123-456-7890");
		var result = (/\d{3}-\d{3}-\d{4}/);
		return result.test(str);
	};
	
	
	
	return {
			"isPhoneNumUS" : isPhoneNumUS, // Return Boolean Result from phone number string test
			
		};

};


// String Tests
console.log("Strings Library Execution");
console.log("");
var stringLib = StringLibrary(); // Execute String Library
console.log("Phone Number (US): " + stringLib.isPhoneNumUS("404-987-5564"));