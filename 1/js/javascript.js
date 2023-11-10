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
    },
    function () {
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

$('.practice-title>p>a').click(function () { 
  $(this).addClass('active').siblings().removeClass('active')
})
