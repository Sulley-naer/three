$(document).ready(function () {
  $('main[class*="body"] .head .content span').click(function () {
    $(this).toggleClass("act").siblings().removeClass("act");
    qh();
  });

function qh(pageText) {
      if (pageText !== undefined) {
        $('main[class*="body"] main').load(
          "page-" + pageText + ".html",
          function () {
            pc();
          }
        );
      }
    }
    qh(1);
    $('main[class*="body"] .head .content span').click(function () {
      let pageText = $(this).attr("page");
      qh(pageText);
    });

$("body").ready(function () {
  let key = parseInt(sessionStorage.getItem("click"));

  if (key !== undefined) {
    // alert(key);
    $('main[class*="body"] .head .content span')
      .eq(key)
      .addClass("act")
      .siblings()
      .removeClass("act");
  }
});
//变大
$('.summary main > div .content div[class*="col-"]').mouseenter(function () {
  $(this).attr("class", "col-md-6").css("align-items", "center");
  $(this).siblings().attr("class", "col-md-3");
});

$(".summary main > div .content").mouseleave(function () {
  $(this)
    .find('div[class*="col-"]')
    .attr("class", "col-md-4")
    .css("align-items", "flex-start");
});
});