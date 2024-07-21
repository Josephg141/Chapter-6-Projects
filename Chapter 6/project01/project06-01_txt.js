"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Joseph Gjelaj
      Date:   7/21/24

      Filename: project06-01.js
*/
let submitButton = document.getElementById('submitButton');
let pwd = document.getElementById('pwd');
let pwd2 = document.getElementById('pwd2');


submitButton.addEventListener('click', function(event) {
    
      if (!pwd.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
          
          alert("Your password must be at least 8 characters with at least one letter and one number");
          event.preventDefault(); 
      } else if (pwd.value !== pwd2.value) {
          // Passwords do not match
          alert("Your passwords must match");
          event.preventDefault(); 
      } else {

      }
  });
  
