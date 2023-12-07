$(document).ready(function () {
  $(".terminal .little .content span").click(function () {
    $(this).toggleClass("act").siblings().removeClass("act");
  });
});

function qh(pageText) {
  if (pageText !== undefined) {
    $(".terminal main").load("lawEnforcement-" + pageText + ".html", function () {
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
  let key = parseInt(sessionStorage.getItem("click"));

  if (key !== undefined) {
    $(".terminal .little .content span")
      .eq(key - 1)
      .addClass("act")
      .siblings()
      .removeClass("act");
    qh(key);
  }
});

if (sessionStorage.getItem("high") == 0) {
  $("html").animate({
    scrollTop: $(".terminal").offset().top,
  });
  sessionStorage.setItem("high", "1");
}