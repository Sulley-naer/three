$(document).ready(function () {
  //jq等待页面加载完时再触发js
  //全写这里面
  //移入移出product下级product-img旋转360deg
  $(".product").hover(
    function () {
      $(this)
        .find($(".product-img"))
        .find("img")
        .css("transform", "rotate(360deg)");
    },
    function () {
      $(this)
        .find($(".product-img"))
        .find("img")
        .css("transform", "rotate(0deg)");
    }
  );

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
        $(".AiTechnology-introduce").fadeOut(200);
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

  $(".practice-title>p>a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  //partner
  $(".ad").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    SwiperAd.slideTo($(this).index(".ad"));
  });
});

$(".banner>div>div").mouseenter(function (event) {
  let hdt = $(".banner .swiper-ban .swiper-pagination>span");
  mySwiper.slideTo($(this).index());

  // 阻止事件冒泡
  event.stopPropagation();
});

// 定义一个函数，接受两个参数：选择器和图片路径
function changeBackground(selector, imagePath) {
  // 保存父元素的原始背景图片
  var originalBgImage = "../images/build-bgimg.jpg";
  // 为选择器绑定鼠标移入和移出事件
  $(selector).mouseover(function () {
    // 鼠标移入时，改变父元素的背景图片为指定的图片路径
    $(this)
      .parent()
      .css("background", "url(" + imagePath + ") no-repeat center center");
  });
  /* .mouseleave(function () {
      // 鼠标移出时，恢复父元素的背景图片为默认的图片路径
      $(this)
        .parent()
        .css(
          "background",
          "url(../images/build-bgimg.jpg) no-repeat center center"
        );
    }); */
}

// 调用函数，传递不同的选择器和图片路径
changeBackground(".banner>div>div[class=left]", "../images/build-bgimg-l.jpg");
changeBackground(".banner>div>div[class=right]", "../images/build-bgimg-r.jpg");
changeBackground(".banner>div>div[class=md]", "../images/build-bgimg-m.jpg");
