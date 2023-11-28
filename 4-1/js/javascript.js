$(document).ready(function () {
  $(".terminal .little .content span").click(function () {
    $(this).toggleClass("act").siblings().removeClass("act");
  });
});

function qh(pageText) {
  if (pageText !== undefined) {
    $(".terminal main").load("page-" + pageText + ".html", function () {
      pc();
    });
  }
}
qh(1);
$(".terminal .little .content span").click(function () {
  let pageText = $(this).attr("page");
  qh(pageText);
});

$("body").ready(function () {
  if (sessionStorage.getItem("click") == "0") {
    // alert(sessionStorage.getItem('click'))
    $(".terminal .little .content span")
      .eq(0)
      .addClass("act")
      .siblings()
      .removeClass("act");
  } else if (sessionStorage.getItem("click") == "1") {
    // alert(sessionStorage.getItem('click'))
    $(".terminal .little .content span")
      .eq(1)
      .addClass("act")
      .siblings()
      .removeClass("act");
  }
});
