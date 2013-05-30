// alert("JavaScript works!");
// String Library
var StringLibrary = function () {

	// Does a string follow a 123-456-7890 pattern like a phone number?
	// Return boolean
	var isPhoneNumUS = function (str) {
		var phoneNum= new String("123-456-7890");
		var re = /\d{3}-\d{3}-\d{4}/;
		return re.test(str);
	};

};
