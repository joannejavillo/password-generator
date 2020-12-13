// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var password = prompt ("Generate Password? Please enter length between 8-128.")
var password = confirm("Do you want to generate password?");

var passwordLength = prompt("Please enter length between 8 to 128.");

var passwordLength = ("=> 8");

if(passwordLength < 8); {
  alert ("Please key between 8 to 128");
}



  // added arrays

  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ">", "?", ",", "[", "]", ":"];
  var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // created confirm variables
  var upperCaseChar = confirm("Use upper case characters?");
  var lowerCaseChar = confirm("Use lower case characters?");
  var specialChar = confirm("Use special characters?");
  var numericChar = confirm("Use numeric characters?");