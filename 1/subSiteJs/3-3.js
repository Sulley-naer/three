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

<<<<<<< HEAD

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
=======
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
    $(this).attr("class", "col-6").css("align-items", "center");
    $(this).siblings().attr("class", "col-3");
    if ($(window).width() < 800) {
      $('.summary main > div .content div[class*="col-"] .msgbox').hide();
    }
    $(this).find(".msgbox").show();
>>>>>>> cdfedfaefe00d2c31eb5a50a8b6c7a3075f4f83f
  });

  $(".summary main > div .content").mouseleave(function () {
    $(this)
      .find('div[class*="col-"]')
<<<<<<< HEAD
      .attr("class", "col-md-4")
      .css("align-items", "flex-start");
  });

  if (sessionStorage.getItem("high") == 0) {
    $("html").animate({
      scrollTop: $(".summary").offset().top
    });
    sessionStorage.setItem("high", "1");
=======
      .attr("class", "col-4")
      .css("align-items", "flex-start");
    if ($(window).width() < 800) {
      $('.summary main > div .content div[class*="col-"] .msgbox').hide();
    }
  });

  if (sessionStorage.getItem("high") == 0) {
    $(document).ready(function () {
      var targetElement = $(".programme main[class*='body']");
      if (targetElement.length > 0) {
        var targetOffset = targetElement.offset().top;
        // 添加一些额外的偏移量，如果需要的话
        var scrollToPosition = targetOffset + 475;
        // 执行滚动
        $("html, body").animate({ scrollTop: scrollToPosition }, 500);
      }
    });
>>>>>>> cdfedfaefe00d2c31eb5a50a8b6c7a3075f4f83f
  }
});
