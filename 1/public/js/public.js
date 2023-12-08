$("header").load("../public/public-site/header.html");
$(".footbox").load("../public/public-site/footer.html");

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
  $(".dropdown-menu li").on("mouseenter", function () {
    $(this).find("dt").css("color", "#fff");
    var src = $(this).find("img").attr("src");
    var index = src.lastIndexOf(".");
    var suffix = src.substring(index);
    var prefix = src.substring(0, index);
    if (prefix.indexOf("-h") != -1) {
      //如果包含-h，就把-h替换成空
      prefix = prefix.replace("-h", "");
    } else {
      prefix = prefix + "-h";
    }
    src = prefix + suffix;
    $(this).find("img").attr("src", src);
    $(this)
      .find("dd")
      .hover(
        function () {
          $(this).css("color", "#ffffffcc");
        },
        function () {
          $(this).css("color", "#9f9f9f");
        }
      );
  });
  $(".dropdown-menu li").on("mouseleave", function () {
    $(this).find("dt").css("color", "#9f9f9f ");
    var src = $(this).find("img").attr("src");
    var index = src.lastIndexOf(".");
    var suffix = src.substring(index);
    var prefix = src.substring(0, index);
    if (prefix.indexOf("-h") != -1) {
      prefix = prefix.replace("-h", "");
    } else {
      prefix = prefix + "-h";
    }
    src = prefix + suffix;
    $(this).find("img").attr("src", src);
  });

  $(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("act");
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() >= 100) {
      $("header,.dropdown-menu").css("background", "var(--header-bg-down)");
    } else {
      $("header,.dropdown-menu").css("background", "#0000009a");
    }
  });

  $(".swiper-slide").each(function (index, item) {
    $(item).css(
      "background-image",
      "url(" + $(item).find("source").attr("src") + ")"
    );
  });
  pc();

  // 获取所有的 <img> 元素
  var imgElements = document.querySelectorAll("img");

  // 遍历每个 <img> 元素并将其 draggable 属性设置为 false
  imgElements.forEach(function (imgElement) {
    imgElement.draggable = false;
  });
});
