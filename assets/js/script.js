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
    var passwordCharacters = [];


    // prompt #1: password length 
    function passwordInput() {
      var pLength = window.prompt("Input your desired password length (equal to or between 8 and 128)", "10");
      if (pLength >= 8 && pLength <= 128) {
        var lowercase = window.confirm("Do you want lowercase letters?");
        if (lowercase) {
          window.alert("Lowercase letters will be added to your password.");
          var loCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
          console.log(loCase);
          passwordCharacters = passwordCharacters.concat(loCase);
          console.log(passwordCharacters);
        } else {
          window.alert("Lowercase letters will not be added to your password.");
        }

          // ask user if they want uppercase letters
          var upperCase = window.confirm("Do you want uppercase letters?");
          if (upperCase) {
            window.alert("Uppercase letters will be added to your password.");
            var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            passwordCharacters = passwordCharacters.concat(upCase);
            console.log(passwordCharacters);
          } else {
            window.alert("Uppercase letters will not be added to your password.");
          }

          // ask user if they want special characters
          var specialChar = window.confirm("Do you want special characters?");
          if (specialChar) {
            window.alert("Special characters will be added to your password.");
            var spChar = ["%", "!", "$", "#", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ".", "?", "@", "[", "]"]; 
            passwordCharacters = passwordCharacters.concat(spChar);
            console.log(passwordCharacters);
          } else {
            window.alert("Special characters will not be added to your password.");
          }

          // ask user if they want numberss
          var numbers = window.confirm("Do you want numbers?");
          if (numbers) {
            window.alert("Numberss will be added to your password.");
            var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 
            passwordCharacters = passwordCharacters.concat(num);
            console.log(passwordCharacters);
          } else {
            window.alert("Numbers will not be added to your password.");
          }



          

            



      } else {
        window.alert("Invalid input: Password must be between 8 and 128 characters");
        passwordInput();
      }


      var passwordText = document.querySelector("#password");
      var passwordIndex;

      for (let i =0; i < pLength; i++) {
        var maxValue = passwordCharacters.length;
        var minValue = 0;
        function getPassword() {
           passwordIndex = Math.floor(Math.random() * (maxValue - minValue +1) + minValue); 
        }
        console.log(passwordIndex);
        getPassword();
      }


      passwordText.value = password;

        };
        passwordInput();
      }
      generatePassword();
    }
    // Add event listener to generate button; runs writePassword function 
    generateBtn.addEventListener("click", writePassword);


