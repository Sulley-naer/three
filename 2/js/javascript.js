$('.navbar-toggler').click(function () {
    $('.navbar').toggleClass('act')
})

$('.banner .swiper .swiper-slide p a').click(function () { 
  // console.log($(this).index('.banner .swiper .swiper-slide p a'))
  $(this).toggleClass('act').siblings().removeClass('act')
  // 让$('.banner .container-fluid .row') 对应被点击的的第几个显示，其他的隐藏
  $('.banner .container-fluid .row').eq($(this).index('.banner .swiper .swiper-slide p a')).show().siblings().hide()
})

$('.banner .container-fluid .row div[class*="col-"]').mouseover(function () {
    $(this).children('video').css({
        display: 'block',
        opacity: 1
    })
    $(this).mouseleave(function () {
        $(this).children('video').css({
            display: 'none',
            opacity: 0
        })
    })
})

$(document).ready(function() {
  $('video').each(function() {
    $(this).on('mouseover', function() {
      this.play();
    });
    $(this).on('mouseleave', function() {
      this.pause();
    });
  });
});


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