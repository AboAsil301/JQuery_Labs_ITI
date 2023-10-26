$(function () {
  $("div>span").css("color", "red");
  $("div>.myclass").css("color", "yellow");
  $(".myclass").css("color", "blue");

  /***** */

  $("#myList li:first").css("color", "red");
  $("#myList li:last").css("color", "orange");
  $("#myList li:eq(3)").css("color", "blue");

  /**** */

  $("#nav>li:lt(2)>a").css("color", "red");

  /**** */

  $("#myList2 li:eq(0), #myList2 li:gt(3)").css("color", "red");

  /**** */

  // Use an IIFE (Immediately Invoked Function Expression) to encapsulate the code
  (function () {
    // Create a closure to store animation-related variables
    let isAnimating = false;
    let currentPosition = 0;
    let currentDirection = "right";

    // Cache the image element to avoid redundant jQuery selections
    const $img = $("#div3 img");

    function animateToRight() {
      currentDirection = "right";
      $img.animate(
        { left: $("#div3").width() - $img.width() },
        1000,
        animateToLeft
      );
    }

    function animateToLeft() {
      currentDirection = "left";
      $img.animate({ left: 0 }, 1000, animateToRight);
    }

    function startAnimation() {
      if (!isAnimating) {
        isAnimating = true;
        $img.css("left", currentPosition);
        if (currentDirection == "right") {
          animateToRight();
        } else {
          animateToLeft();
        }
      }
    }

    function stopAnimation() {
      if (isAnimating) {
        isAnimating = false;
        currentPosition = parseInt($img.css("left"));
        $img.stop();
      }
    }

    // Attach event listeners after defining the functions
    $("#Animate").on("click", function () {
      startAnimation();
    });

    $("#Stop").on("click", function () {
      stopAnimation();
    });
  })(); // Immediately invoke the encapsulated function
});
