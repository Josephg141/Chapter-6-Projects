"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Joseph Gjelaj
      Date:   7-21-24

      Filename: project06-02.js
*/

document.addEventListener('DOMContentLoaded', function() {

  });
  

document.addEventListener('DOMContentLoaded', function() {

      let allSelect = document.querySelectorAll('form#govLinks select');
      

      allSelect.forEach(function(select) {

          select.addEventListener('change', function(evt) {

              let linkURL = evt.target.value;
              

              let newWin = window.open(linkURL);
              

              if (newWin) {
                  newWin.focus();
              }
          });
      });
  });
  
