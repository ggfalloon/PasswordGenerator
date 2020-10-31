// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specChar = ["%", "$", "*", "!", "@", "#", "^", "&", "*"]
var options = []


function generatePassword() {

  var charLength = prompt("How many characters would you like to include? Please choose a number between 8 - 128");
  var wantsLowerCase = confirm("Would you like to include Lowercase Characters?");
  var wantsUpperCase = confirm("Would you like to include Uppercase Characters?");
  var wantsNumbers = confirm("Would you like to include Numbers?");
  var wantsSpecialChar = confirm("Would you like to include Special Characters?");
  var password = " ";

  // Add below to options array if true
  if (wantsLowerCase) {
    options = lowerCase.concat(options)
  }
  if (wantsUpperCase) {
    options = uppperCase.concat(options)
  }
  if (wantsNumbers) {
    options = numbers.concat(options)
  }
  if (wantsSpecialChar) {
    options = specChar.concat(options)
  }

  // Loop for random characters amount
  for (var i = 0; i <= charLength; i++) {
    password = password + options[Math.floor(Math.random() * options.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);








