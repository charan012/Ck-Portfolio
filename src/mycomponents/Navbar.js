$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 100) {
    $(".nav-menu").addClass("costum-navbar");
  } else {
    $(".nav-menu").removeClass("costum-navbar");
  }
});

$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
});
