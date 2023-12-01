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