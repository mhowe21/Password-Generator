// Assignment code here

//global items
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const specialChars = [" ", "!", "#", "$", "%", "&", "\'", "\\", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]


//logic functions
function generatePassword(passwordLength) {
  let passwordArray = []

  // local copy of the items to not affect the global variables. Likely change this later. 
  let num = numeric
  let alphaU = alphaUpper
  let special = specialChars
  // let passwordLength = passwordLength

  //checkbox status
  let alphabeticBool = document.getElementById("letters").checked
  let symoblicBool = document.getElementById("symbols").checked

  if (alphabeticBool == true) {

    num = num.concat(alphaU)
  }
  if (symoblicBool == true) {

    num = num.concat(special)
  }  

  for (i = 0; i < passwordLength; i++) {
    let randomItem = num[Math.floor(Math.random() * num.length)];
    passwordArray.push(randomItem)

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