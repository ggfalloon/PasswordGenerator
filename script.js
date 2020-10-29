var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c",]
var uppperCase = ["A", "B", "C"]
var numbers = ["1", "2", "3"]
var specChar = ["%", "$", "*"]
var options = []

function generatePassword() {
  var password = ''
  var charLength = prompt("How many characters would you like to include? Please choose a number between 8 - 128");
  var wantsLowerCase = confirm("Would you like to include lowercase characters?");
  var wantsUpperCase = confirm("Would you like to include uppercase characters?");
  var wantsNumbers = confirm("Would you like to include numbers?");
  var wantsSpecialChar = confirm("Would you like to include special characters?");

  // var noCharchosen = alert("Please choose at least one character type.");

  // add lowercase if true
  if (wantsLowerCase) {
    options = lowerCase.concat(options)
  }
  if (wantsLowerCase) {
    options = lowerCase.concat(options)
  }
  if (wantsLowerCase) {
    options = lowerCase.concat(options)
  }
  if (wantsLowerCase) {
    options = lowerCase.concat(options)
  }
  if (wantsLowerCase) {
    options = lowerCase.concat(options)
  }


  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

