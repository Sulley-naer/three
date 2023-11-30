function qh(pageText) {
  if (pageText !== undefined) {
    $(".objectives").load(
      "objective_page/page-"+pageText+".html",
      function () {
        pc();
      }
    );
    $(".AiTechnology").load(
      "AiTechnology_page/page-" + pageText + ".html",
      function () {
        pc();
      }
    );
  }
}
qh(1);
//AI跳转
/* $("body").ready(function () {
  let key = parseInt(sessionStorage.getItem("click"));
  if (key !== undefined) {
    qh(key);
  }
});
 */