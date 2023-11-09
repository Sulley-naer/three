$(document).ready(function () {
  //jq等待页面加载完时再触发js
  //全写这里面
  //移入移出product下级product-img旋转360deg
  $(".product").hover(function () {
      $(this).children($(".product-img")).children('img').css("transform", "rotate(360deg)");
    },function () {
      $(this).children($(".product-img")).children('img').css("transform", "rotate(0deg)");
    }
  );

});
