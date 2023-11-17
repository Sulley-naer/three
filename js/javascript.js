$(window).scroll(function () {
  if ($(document).scrollTop() >= 100) {
    $("header").css("background", "var(--header-bg-down)");
  } else {
    $("header").css("background", "var(--header-bg)");
  }
});

$(document).ready(function () {
  $(".bi").each(function (index, item) {
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
});
