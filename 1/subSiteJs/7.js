$(document).ready(function () {
function qh(pageText) {
  if (pageText !== undefined) {
    //顶部
    $(".objectives").load(
      "7-" + pageText +"-"+pageText+ ".html",
      function () {
        pc();
      }
      );
      $(".AiTechnology").load(
        //body
      "7-"+pageText+".html",
      function () {
        pc();
      }
    );
      $(".brief").load(
        //foot
        "7-footBrief-" + pageText + ".html",
        function () {
          pc();
        }
      );
  }
}
qh(2);



});