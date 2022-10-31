/*
File Name: app.js
Name: Sravan Kumar Reddy Konudula
Id: 301237930
Date: 2nd October 2022
*/

// IIFE -- Immediately Invoked Function Expression
(function () {
    function Start() {
      console.log("App Started...");
      let deletebuttons = document.querySelectorAll(".btn-danger");
      for (button of deletebuttons) {
        button.addEventListener("click", (event) => {
          if (!confirm("Are you sure")) {
            event.preventDefault();
            // window.location.assign("/book-list");
            window.location.assign("/business-contacts-list");
          }
        });
      }
    }
    window.addEventListener("load", Start);
  })();
  