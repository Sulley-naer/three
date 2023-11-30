$(document).ready(function () {
  function IBOXD() {
    $(".iBox-D-introduce,.iBox-D-apply").show();
    $(".iBox-F-introduce,.iBox-F-apply").hide();
    $("#iBox-D").find(".nav-link").removeClass("disabled");
    $("#iBox-F").find(".nav-link").addClass("disabled");
  }
  function IBOXF() {
    $(".iBox-D-introduce,.iBox-D-apply").hide();
    $(".iBox-F-introduce,.iBox-F-apply").show();
    $("#iBox-F").find(".nav-link").removeClass("disabled");
    $("#iBox-D").find(".nav-link").addClass("disabled");
  }
  $(function () {
    if (sessionStorage.getItem("iBox-F")) {
      IBOXF();
    } else {
      IBOXD();
    }
  });
  $(document).ready(function () {
    $("#iBox-D").on("click", function () {
      IBOXD();
    });
    $("#iBox-F").on("click", function () {
      IBOXF();
    });
  });
});
