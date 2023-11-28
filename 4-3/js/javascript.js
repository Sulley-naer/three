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


$(document).ready(function () {
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
    }
  );
  sessionStorage.setItem("high", "1");
}

$(document).ready(function () {
  //隐藏子元素
  $(function () {
    $(".AiTechnology-introduce").hide();
  });
  //隐藏span
  function AiTechnologyIntroduceBorderNone() {
    $(".AiTechnology-introduce-border")
      .children("span")
      .eq(0)
      .stop()
      .animate({ width: "0%" }, 800);
    $(".AiTechnology-introduce-border")
      .children("span")
      .eq(1)
      .stop()
      .animate({ width: "0%" }, 800);
    $(".AiTechnology-introduce-border")
      .children("span")
      .eq(2)
      .stop()
      .animate({ height: "0%" }, 800);
    $(".AiTechnology-introduce-border")
      .children("span")
      .eq(3)
      .stop()
      .animate({ height: "0%" }, 800);
  }
  //缓慢显示span
  function AiTechnologyIntroduceBorderBlock() {
    $(".AiTechnology-introduce-border")
      .children("span")
      .eq(0)
      .stop()
      .animate({ width: "100%" }, 1000);
    $(".AiTechnology-introduce-border")
      .children("span")
      .eq(1)
      .stop()
      .animate({ width: "100%" }, 1000);
    $(".AiTechnology-introduce-border")
      .children("span")
      .eq(2)
      .stop()
      .animate({ height: "100%" }, 1000);
    $(".AiTechnology-introduce-border")
      .children("span")
      .eq(3)
      .stop()
      .animate({ height: "100%" }, 1000);
  }
  $(".AiTechnology-img").hover(
    function () {
      $(this).children("p").css("color", "var(--text-gray-hover)");
      var src = $(this).children("img").attr("src");
      var index = src.lastIndexOf(".");
      var suffix = src.substring(index);
      var prefix = src.substring(0, index);
      if (prefix.indexOf("-h") != -1) {
        prefix = prefix.replace("-h", "");
      } else {
        prefix = prefix + "-h";
      }
      var src = prefix + suffix;
      $(this).children("img").attr("src", src);
      $(this).css(
        "background",
        "linear-gradient(160deg,rgb(16,52,117),rgb(33,67,193))"
      );
      $(".AiTechnology-img").click(function () {
        $(this).find('div[class="AiTechnology-introduce"').css("opacity", "1");
        $(".AiTechnology-introduce").stop().fadeOut(200);
        $(this).children(".AiTechnology-introduce").stop().fadeIn(200);
        $(this).find("span").eq(0).stop().animate({ width: "100%" }, 1000);
        $(this).find("span").eq(1).stop().animate({ width: "100%" }, 1000);
        $(this).find("span").eq(2).stop().animate({ height: "100%" }, 1000);
        $(this).find("span").eq(3).stop().animate({ height: "100%" }, 1000);
      });
    },
    function () {
      $(this).find("span").eq(0).stop().animate({ width: "0%" }, 1000);
      $(this).find("span").eq(1).stop().animate({ width: "0%" }, 1000);
      $(this).find("span").eq(2).stop().animate({ height: "0%" }, 1000);
      $(this)
        .find("span")
        .eq(3)
        .stop()
        .animate({ height: "0%" }, 1000, function () {
          $(this).parents("div[class='AiTechnology-introduce']").hide();
        });
      $(this)
        .find("div[class='AiTechnology-introduce']")
        .animate({ opacity: 0 }, 1000);
      $(this).children("p").css("color", "var(--text-gray)");
      $(this).css(
        "background",
        "linear-gradient(160deg,rgba(16,52,117,.8),rgba(33,67,193,.8))"
      );
      var src = $(this).children("img").attr("src");
      var index = src.lastIndexOf(".");
      var suffix = src.substring(index);
      var prefix = src.substring(0, index);
      if (prefix.indexOf("-h") != -1) {
        prefix = prefix.replace("-h", "");
      } else {
        prefix = prefix + "-h";
      }
      var src = prefix + suffix;
      $(this).children("img").attr("src", src);
    }
  );
});
