<<<<<<< HEAD
function qh(pageText) {
  if (pageText !== undefined) {
    $(".objectives").load(
      "objective_page/7-"+pageText+".html",
      function () {
        pc();
      }
    );
    $(".AiTechnology").load(
      "AiTechnology_page/7-" + pageText + ".html",
      function () {
        pc();
      }
    );
  }
}
qh(1);
=======
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
>>>>>>> cdfedfaefe00d2c31eb5a50a8b6c7a3075f4f83f
