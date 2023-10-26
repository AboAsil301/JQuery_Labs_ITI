// /*********************Day2 *********************************** */

$(function () {
  // Use an IIFE (Immediately Invoked Function Expression) to encapsulate the code
  (function () {

    // Event delegation for selecting <li> elements
    $("#div1 ul").on("click", "li", function () {
      $(this).toggleClass("selected");
    });

    // Functionality for the ">>" button
    $("#input1").on("click", function () {
      $("#div1 ul li.selected").appendTo("#div2 ul");
    });

    // Adding a new item to the first list
    $("#input3").on("click", function () {
      var newItem = $("#input2").val();
      if (newItem) {
        $("#div1 ul").append("<li>" + newItem + "</li>");
        $("#input2").val("");
      }
    });


  })(); // Immediately invoke the encapsulated function
}); // End of
