// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Criteria for generating password
function generatePassword() {

  var length = prompt("length of password?");
  if (length < 8 || length > 128) {
    alert("invalid length");
    return "";
  }

// Get parameters from user
  var upperCase = confirm("Do you want to include upper case?");
  var lowerCase = confirm("Do you want to include lower case?");
  var numeric = confirm("Do you want to include numbers?");
  var symbols = confirm("Do you want to include special characters?");

  if (!upperCase && !lowerCase && !numeric && !symbols) {
    alert("You must select characters"); 
    return"";
  }

//Arrays
  var availChars = "";
  if (upperCase){
    availChars +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerCase){
    availChars +="abcdefghijklmnopqrstuvwxyz";
  }
  if (numeric){
    availChars +="0123456789";
  }
 if (symbols){
   availChars +="!@#$%^&*()-+=?<>";
 }
  //console.log(availChars);

 var password ="";
 for (var i=0; i<length; i++){
   var randnum= Math.floor(Math.random() * availChars.length);
   console.log(randnum);
   password += availChars [randnum];
 }
return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  



  
