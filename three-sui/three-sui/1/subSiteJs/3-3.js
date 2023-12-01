$(document).ready(function () {
  $('main[class*="body"] .head .content span').click(function () {
    $(this).toggleClass("act").siblings().removeClass("act");
    qh();
  });

  function qh(pageText) {
    if (pageText !== undefined) {
      $('main[class*="body"] main').load(
        "3-3-" + pageText + ".html",
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


    let key = parseInt(sessionStorage.getItem("click"));

    if (key !== undefined) {
      // alert(key);
      $('main[class*="body"] .head .content span')
        .eq(key - 1)
        .addClass("act")
        .siblings()
        .removeClass("act");
      qh(key);
    }


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

  if (sessionStorage.getItem("high") == 0) {
    $("html").animate({
      scrollTop: $(".summary").offset().top
    });
    sessionStorage.setItem("high", "1");
  }
});
