$(".AiTechnology .navbar .nav .nav-item").on("click", function () {
  $(this)
    .children("a")
    .addClass("active")
    .parent()
    .siblings(".nav-item")
    .children("a")
    .removeClass("active");
  let pageText = $(this).attr("page");
  qh(pageText);
});

function pb() {
  let box = $(".AiTechnology .main .pictureBox>picture");
  let widthPercentage = 100 / box.length;
  box.css("width", widthPercentage + "%");
}
$(document).ready(function () {
  pb();
});

function qh(pageText) {
  if (pageText !== undefined) {
    $(".AiTechnology .main").load("5-" + pageText + ".html", function () {
      pc(),pb();
    });
    $(".programme").load("5-" + pageText + "-1.html", function () {
      pc(),pb();
    });
  }
}

qh(1);

$("body").ready(function () {
  let key = parseInt(sessionStorage.getItem("click"));

  if (key !== undefined && key !== null && key !== NaN && key !== "") {
    // alert(key);
    $(".AiTechnology .navbar .nav .nav-item")
      .eq(key)
      .children("a")
      .addClass("active")
      .parent()
      .siblings(".nav-item")
      .children("a")
      .removeClass("active");
    qh(key + 1);
  } else { 
    qh(1);
  }
});

if (sessionStorage.getItem("high") == 0) {
  $("html").animate({
    scrollTop: $(".AiTechnology").offset().top,
  });
  sessionStorage.setItem("high", "1");
}