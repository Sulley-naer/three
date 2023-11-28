$(document).ready(function () {
  $(".terminal .little .content span").click(function () {
    $(this).toggleClass("act").siblings().removeClass("act");
  });
});

function qh() {
  let pageText = $(".terminal .little .content span.act").attr("page");
    $(".terminal main").load("page-"+pageText+".html", function () {
      // alert("加载完成");
      pc();
    });
}
qh();
$(".terminal .little .content span").click(function () {
  qh();
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
