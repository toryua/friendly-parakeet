// Assignment code here
// Password Prompt Functions


// verify that the user's value is between 8 and 128

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // present user with series of prompts for password criteria

  // prompt #1: password length
  var passwordLength = window.prompt("Input a length for your password that is between 8 and 128", "10") {
    if (passwordLength < 8) or if (passwordLength > 128) {
      window.alert("Invalid input: Password must be between 8 and 128 characters");
      else console.log passwordLength;
      
    }
  }
  
  passwordText.value = password;
  
}

// Add event listener to generate button; runs writePassword function 
generateBtn.addEventListener("click", writePassword) {
  var passwordLength = window.prompt("Input a length for your password that is between 8 and 128", "10") {
    if (passwordLength < 8) or if (passwordLength > 128) {
      window.alert("Invalid input: Password must be between 8 and 128 characters");
      else console.log passwordLength;
      
    }
  }
}






