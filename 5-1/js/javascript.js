$(".AiTechnology .navbar .nav .nav-item").on("click", function () {
  $(this)
    .children("a")
    .addClass("active")
    .parent()
    .siblings(".nav-item")
    .children("a")
    .removeClass("active");
});

  $(document).ready(function () {
    let box = $(".AiTechnology .main .pictureBox>picture");
    let widthPercentage = 100 / box.length;
    box.css("width", widthPercentage + "%");
  });