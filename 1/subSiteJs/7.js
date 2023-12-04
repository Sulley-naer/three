$(document).ready(function () {



//单偶颜色
  $(function () {
    $(".ability .box:even").addClass("evenbg");
    $(".ability .box:odd").addClass("oddbg");
  });

  $(".head-button").on('click',function(){
location.href = "6.html";
  })
});