// Assignment code here
// Password Prompt Functions


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  console.log("test");

  // generatePassword function will present user with series of prompts 
  // for password criteria and is located within the scope of writePassword. 
  // after the prompts are satisfied, the function will then 
  // generate the password to be called by the parent writePassword function. 


  function generatePassword() {
    console.log("generate password is called");

    // prompt #1: password length 
    function passwordLength() {
      var pLength = window.prompt("Input your desired password length (equal to or between 8 and 128)", "10");
      if (pLength >= 8 && pLength <= 128) {
        var lowercase = window.confirm("Do you want lowercase letters?");
        if (lowercase) {
          window.alert("Lowercase letters will be added to your password.");
        } else {
          window.alert("Lowercase letters will not be added to your password.");
        }

          // ask user if they want uppercase letters
          var upperCase = window.confirm("Do you want uppercase letters?");
          if (upperCase) {
            window.alert("Uppercase letters will be added to your password.");
          } else {
            window.alert("Uppercase letters will not be added to your password.");
          }

          // ask user if they want special characters
          var spChar = window.confirm("Do you want special characters?");
          if (spChar) {
            window.alert("Special characters will be added to your password.");
          } else {
            window.alert("Special characters will not be added to your password.");
          }

      } else {
        window.alert("Invalid input: Password must be between 8 and 128 characters");
        passwordLength();
      }


      var passwordText = document.querySelector("#password");




      passwordText.value = password;

        };
        passwordLength();
      }
      generatePassword();
    }
    // Add event listener to generate button; runs writePassword function 
    generateBtn.addEventListener("click", writePassword);


