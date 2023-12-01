$(".banner .swiper .swiper-slide p a").click(function () {
  // console.log($(this).index('.banner .swiper .swiper-slide p a'))
  $(this).toggleClass("act").siblings().removeClass("act");
  // 让$('.banner .container-fluid .row') 对应被点击的的第几个显示，其他的隐藏
  $(".banner .container-fluid .row")
    .eq($(this).index(".banner .swiper .swiper-slide p a"))
    .show()
    .siblings()
    .hide();
});

$('.banner .container-fluid .row div[class*="col-"]').mouseover(function () {
  $(this)
    .children("video")
    .stop()
    .css({
      display: "block",
      transition: "none",
    })
    .animate(
      {
        opacity: 1,
      },
      500
    );
  $(this).mouseleave(function () {
    $(this)
      .children("video")
      .stop()
      .animate(
        {
          opacity: 0,
        },
        300,
        function () {
          $(this).css({
            display: "none",
            transition: "none",
          });
        }
      );
  });
});

$(document).ready(function () {
  $("video").each(function () {
    $(this).on("mouseover", function () {
      this.play();
    });
    $(this).on("mouseleave", function () {
      this.pause();
    });
  });
});
