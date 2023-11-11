$(document).ready(function () {
  //jq等待页面加载完时再触发js
  //全写这里面
  //移入移出product下级product-img旋转360deg
  $(".product").hover(
    function () {
      $(this)
        .children($(".product-img"))
        .children("img")
        .css("transform", "rotate(360deg)");
    },
    function () {
      $(this)
        .children($(".product-img"))
        .children("img")
        .css("transform", "rotate(0deg)");
    }
  );

  console.log($(".dropdown-menu dl dt img"));
  $(".dropdown-menu dl dt").click(function () {
    //我点击后我图片路径原本末尾是icon.png  我要改成icon-h.png
    //获取图片路径
    var img = $(".dropdown-menu dl dt img");

    var src = img.eq($(this).index("dt")).attr("src");
    console.log(src);
    //获取图片路径的最后一个点的位置
    var index = src.lastIndexOf(".");
    //获取图片路径的最后一个点后面的内容
    var suffix = src.substring(index);
    //获取图片路径的最后一个点前面的内容
    var prefix = src.substring(0, index);
    //判断图片路径的最后一个点前面的内容是否包含-h
    if (prefix.indexOf("-h") != -1) {
      //如果包含-h，就把-h替换成空
      prefix = prefix.replace("-h", "");
    } else {
      //如果不包含-h，就把图片路径的最后一个点前面的内容加上-h
      prefix = prefix + "-h";
    }
    //把图片路径的最后一个点前面的内容和最后一个点后面的内容拼接起来
    src = prefix + suffix;
    //把拼接好的图片路径赋值给图片
    img.eq($(this).index("dt")).attr("src", src);
  });

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
      $(this).find("span").eq(3).stop().animate({ height: "0%" }, 1000);
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

  $('.practice-title>p>a').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  })

  $(window).scroll(function () {
    if ($(document).scrollTop() >= 100) {
      $('header').css('background', 'var(--header-bg-down)')
    }
    else {
      $('header').css('background', 'var(--header-bg)')
    }
  })
  
  $('.navbar-toggler').click(function () {
    $('.navbar').toggleClass('act')
  })

  $(".ad").click(function () {
    $(this).toggleClass("active").siblings().removeClass("active");
    $(".at")
      .eq($(this).index(".ad"))
      .addClass("act")
      .siblings()
      .removeClass("act");
  })
})

/* $('.banner>div>div[class=left]').mouseover(function () { 
  $(this).parent().css('background', 'url(../../images/build-bgimg-l.jpg) no-repeat center center')
  $(this).mouseleave(function () {
    $(this).parent().css('background', 'url(../../images/build-bgimg.jpg) no-repeat center center')
  })
})

$('.banner>div>div[class=right]').mouseover(function () { 
  $(this).parent().css('background', 'url(../../images/build-bgimg-r.jpg) no-repeat center center')
  $(this).mouseleave(function () {
    $(this).parent().css('background', 'url(../../images/build-bgimg.jpg) no-repeat center center')
  })
})

$('.banner>div>div[class=md]').mouseover(function () { 
  $(this).parent().css('background', 'url(../../images/build-bgimg-m.jpg) no-repeat center center')
  $(this).mouseleave(function () {
    $(this).parent().css('background', 'url(../../images/build-bgimg.jpg) no-repeat center center')
  })
}) */

// 定义一个函数，接受两个参数：选择器和图片路径
function changeBackground(selector, imagePath) {
  // 为选择器绑定鼠标移入和移出事件
  $(selector).mouseover(function () {
    // 鼠标移入时，改变父元素的背景图片为指定的图片路径
    $(this).parent().css('background', 'url(' + imagePath + ') no-repeat center center');
  }).mouseleave(function () {
    // 鼠标移出时，恢复父元素的背景图片为默认的图片路径
    $(this).parent().css('background', 'url(../../images/build-bgimg.jpg) no-repeat center center');
  });
}

// 调用函数，传递不同的选择器和图片路径
changeBackground('.banner>div>div[class=left]', '../../images/build-bgimg-l.jpg');
changeBackground('.banner>div>div[class=right]', '../../images/build-bgimg-r.jpg');
changeBackground('.banner>div>div[class=md]', '../../images/build-bgimg-m.jpg');
