$(document).ready(function () {

  $("table tbody tr:even").css("background-color", "blue");
  $("table tbody tr:odd").css("background-color", "green");
  $("table tbody tr").hover(
    //   function() {
    //     $(this).addClass("hover");
    //   }, function() {
    //     $(this).removeClass("hover");
    //   }
    // )
    function () {
      $(this).css("background-color", "red");
    },
    function () {
      $("table tbody tr:even").css("background-color", "blue");
      $("table tbody tr:odd").css("background-color", "green");
    }
  );
})