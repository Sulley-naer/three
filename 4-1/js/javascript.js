$(document).ready(function () {
  $(".terminal .little .content span").click(function () {
    $(this).toggleClass("act").siblings().removeClass("act");
  });
});
