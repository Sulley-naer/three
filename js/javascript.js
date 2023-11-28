$("header").load("../模板/header.html");
$(".footbox").load("../模板/footer.html");

function pc() {
  $(".bi:not(:has(img))").each(function (index, item) {
    if ($(item).attr("data-size") != undefined) {
      $(item).css({
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        maxWidth: "100%",
      });
    }
    if ($(item).find("source").attr("src") != undefined) {
      console.log("传入src");
      if ($(item).attr("data-auto") != undefined) {
        autosize();
        console.log("智能宽高");
      } else {
        $(item).css(
          "background-image",
          "url(" + $(item).find("source").attr("src") + ")"
        );
        console.log("添加src");
      }
    }
    if ($(item).find("source").attr("data-bg-img") != undefined) {
      console.log("传入渐变");
      $(item).css(
        "background-image",
        $(item).find("source").attr("data-bg-img")
      );
    }
    if ($(item).find("source").attr("data-color") != undefined) {
      console.log("传入颜色");
      $(item).css(
        "background-color",
        $(item).find("source").attr("data-color")
      );
    }
    //src智能宽高
    function autosize() {
      var src, h, w;
      src = $(item).find("source").attr("src");
      if (src != undefined) {
        $(item).css("background-image", "url(" + src + ")");
        // 创建一个Image对象，用来获取图片的原始大小
        var img = new Image();
        // 把相对路径转换成绝对路径
        img.src = new URL(src, window.location.href).href;
        // 当图片加载完成后
        img.onload = function () {
          // 获取图片的原始宽度和高度
          h = img.height;
          w = img.width;
          // 把原始宽度和高度设置给picture元素，并且保持图片的比例
          $(item).css({
            width: w + "px",
            height: h + "px",
            // 设置display属性为block或inline-block
            display: "block",
          });
          //打印日志
          console.log(
            " 标签序号：" + index + " src: " + src + " 宽: " + h + " 高: " + h
          );
          console.log(item);
        };
      }
    }
  });
}

$(document).ready(function () {
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

  $(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("act");
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() >= 100) {
      $("header").css("background", "var(--header-bg-down)");
    } else {
      $("header").css("background", "var(--head-bg)");
    }
  });

  $(".swiper-slide").each(function (index, item) {
    $(item).css(
      "background-image",
      "url(" + $(item).find("source").attr("src") + ")"
    );
  });
  pc();

  //header高亮
  var path = window.location.pathname;
  if (path === "/1/index.html") {
    $(".nav-item").eq(0).addClass("act");
  } else if (path === "/2/index.html") {
    $(".nav-item").eq(1).addClass("act");
  } else if (path === "/3/index.html") {
    $(".nav-item").eq(1).addClass("act");
  } else if (path === "/4-1/index.html") {
    $(".nav-item").eq(2).addClass("act");
  } else if (path === "/4-3/index.html") {
    $(".nav-item").eq(2).addClass("act");
  } else if (path === "/friend/index.html") {
    $(".nav-item").eq(4).addClass("act");
  } else if (path === "/5/index.html") {
    $(".nav-item").eq(5).addClass("act");
  }
});
