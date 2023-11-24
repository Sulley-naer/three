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

let pageText = $('main[class*="body"] .head .content .act').attr("page");
function qh() {
  pageText = $('main[class*="body"] .head .content .act').attr("page");

  if (pageText == "1") {
    $('main[class*="body"] main').load("page-1.html", function () {
      // alert(pageText);
      pc();
    });
  } else if (pageText == "2") {
    $('main[class*="body"] main').load("page-2.html", function () {
      // alert(pageText);
      pc();
    });
  } else if (pageText == "3") {
    $('main[class*="body"] main').load("page-3.html", function () {
      // alert(pageText);
      pc();
    });
  } else if (pageText == "4") {
    $('main[class*="body"] main').load("page-4.html", function () {
      // alert(pageText);
      pc();
    });
  } else if (pageText == "5") {
    $('main[class*="body"] main').load("page-5.html", function () {
      // alert(pageText);
      pc();
    });
  }
}
qh();

$(document).ready(function () {
  $('main[class*="body"] .head .content span').click(function () {
    $(this).toggleClass("act").siblings().removeClass("act");
    qh();
  });
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

if (sessionStorage.getItem("high") == 0) {
  $("html").animate(
    {
      scrollTop: $("main[class*='body']").offset().top,
    },
    1000
  );
  sessionStorage.setItem("high", "1");
}
