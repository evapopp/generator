// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create function to prompt user for password length
function generatePassword(){
  const length = getUserPasswordLength();
  const finalPasswordArray = getFinalPasswordArray();
  const password = assemblePassword(finalPasswordArray, length);
  const passwordText = document.querySelector("password");
  
  alert(password);
}


function assemblePassword (charPool, length){
  let password = " ";
  for (let i = 0; i < length; i++) {
    const randomNum = getRandomInt(charPool.length);
    password = password + charPool[randomNum];
    console.log(charPool)
  }
  return password;
}
 
function getUserPasswordLength(){
  let passwordLength = 0;
  while (passwordLength > 128 || passwordLength < 8){
    passwordLength = prompt("Enter your password length between 8 and 128 characters.");
  }
  return passwordLength;
}

function getFinalPasswordArray(){
  const charPoolArray = [];
  const charTypes = ["lowercase", "uppercase", "symbols", "numbers"];
  const charTypesArray = {
    lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    symbols: ["!", "@", "#", "$", "%", "^", "&", "*"],
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  }
  charTypes.forEach(handleCharType);
  function handleCharType(charType){
    const addCharType = confirm(`Would you like to include ${charType}?`);
      if(addCharType){
        charTypesArray[charType].forEach(function(char){
          charPoolArray.push(char);
        })
      }
    }
    return charPoolArray;
  }


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


// Define the criteria that password can contain 
//   (uppercase, lowercase, numbers, special characters)
// Create prompt to ask user for password length
//   Store number
// Create prompt series to ask user what to include or exclude re: the set of criteria
//   For each prompt:
//     If 'yes', function stores response
//     If 'no', function returns null
// Create function to randomize the included criteria 
// Create function that creates a string of the random criteria characters, based on length given by user
// Create alert that notifies user of the newly created string
