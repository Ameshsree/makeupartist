$().ready(function () {
  $("input[name='image[]']").change(function () {
    $("ovv>img").css("background-color", "yellow");
    var maxAllowed = 3;
    var minAllowed = 1;
    var cnt = $("input[name='image[]']:checked").length;

    if (cnt > maxAllowed || cnt < minAllowed) {
      $(this).prop("checked", "");
      alert(
          "You can select minimum " +
          minAllowed +
          "and maximum" +
          maxAllowed +
          " only!!"
      );
      if (cnt < 0) {
        alert("Select atleast 1 to proceed");
      }
    }
  });
});
