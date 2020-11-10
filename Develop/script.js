// Assignment code here

//global var
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChars = [" ", "!", "#", "$", "%", "&", "\'", "\\", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]


//logic functions
function generatePassword(passwordLength) {
  let passwordArray = []
  // let passwordLength = passwordLength

  //checkbox status
  let alphabeticBool = document.getElementById("numeric").checked
  let symoblicBool = document.getElementById("symbols").checked


  for (i = 0; i < passwordLength; i++) {
    let number = Math.floor(Math.random() * 10)
    passwordArray.push(number)

  }


  let password = passwordArray.join("")
  return password

}

// DOM
// show value slider number
var rangeValue = document.getElementById("password-length-slidebar")
rangeValue.oninput = function () {
  var slideVal = rangeValue.value

  document.getElementById("slide-length").innerHTML = slideVal

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  let rangeValue = document.getElementById("password-length-slidebar").value
  let password = generatePassword(rangeValue);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);