$(window).scroll(function () {
    if ($(document).scrollTop() >= 100) {
      $('header').css('background', 'var(--header-bg-down)')
    }
    else {
      $('header').css('background', 'var(--header-bg)')
    }
  })