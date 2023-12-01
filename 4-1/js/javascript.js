$(".AiTechnology .navbar .nav .nav-item").on("click", function () {
  $(this)
    .children("a")
    .addClass("active")
    .parent()
    .siblings(".nav-item")
    .children("a")
    .removeClass("active");
});
