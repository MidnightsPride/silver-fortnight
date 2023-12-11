// Assignment code here
function generatePassword () {
var lowercaselet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaselet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ['~', '!','@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var possibleCharacters = [];
// Create array for uppercase
// Create array for lowercase
// create array for numbers
// create array for symbols

var passwordLength = prompt('How many characters would you like in your password?');
  if ((passwordLength < 8) && (passwordLength > 128)) {
  alert('Your password must be at least 8 and no more than 128 characters');
} else if (isNaN(passwordLength)) {
  passwordLength = prompt('Must be a valid number');
}
else (
  alert("Your password will be " + passwordLength + " characters long")
)

var addLowercase = confirm('Click Ok to include lowercase letters');
var addUppercase = confirm('Click Ok to include uppercase letters');
var addNumbers = confirm('Click Ok to include numbers');
var addSymbols = confirm('Click Ok to include symbols');

if (addLowercase === false && addUppercase === false && addNumbers === false && addSymbols === false) {
  return "Please select at least one character type"
}

if (addLowercase) {
  possibleCharacters = possibleCharacters.concat(lowercaselet);
}
if (addUppercase) {
  possibleCharacters = possibleCharacters.concat(uppercaselet);
}
if (addSymbols) {
  possibleCharacters = possibleCharacters.concat(symbols);
}
if (addNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
}

let newPassword = ''
for (let i = 0; i < passwordLength; i++) {
let rng =[Math.floor(Math.random() * possibleCharacters.length)];
newPassword = newPassword + possibleCharacters[rng];
}
return newPassword;
// prompt user for password length
// prompt user for if they want lowercase and store in a boolean
// prompt user for if they want uppercase and store in a boolean
// prompt user for if they want numbers and store in a boolean
// prompt user for if they want symbols/special characters and store in a boolean

// Add together any array that they wanted to include based on the true/false values of the booleans into it's own array
// Create a combined Array
// if lowercase is true then add lowercase to combined array
// if uppercare is true then add uppercase to combined array
// if number is true then add number to combined array
// if symbol is true then add symbol to combined array

// Randomize Array and pull amount of elements out of it and put it in the password variable
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);