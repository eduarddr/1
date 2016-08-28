$(document).ready(function() {
  $(".htmlBubbles").removeClass("htmlBubbles");
  $(".htmlBubbles").removeClass("htmlBubbles");
  setTimeout(function () {
    $('#skills').waypoint(function(){
      $(".htmlBubbles").addClass("htmlBubbles");
      $(".htmlBubbles").addClass("htmlBubbles");
    });
  }, 4000);
});
