$(window).on("load", function () {
  ($preloader = $(".preloader")), ($loader = $preloader.find(".preloader"));
  $loader.fadeOut();
  $preloader.delay(1100).fadeOut("slow");
});
