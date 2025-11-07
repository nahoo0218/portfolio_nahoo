$(function () {
  $(".slider")
    .on("init", function () {
      // 最初のスライドにアニメーション付与
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    .slick({
      autoplay: true,
      fade: true,            // ← フェード切替にする
      arrows: false,
      speed: 2000,
      autoplaySpeed: 4000,
      pauseOnFocus: false,
      pauseOnHover: false,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(".slick-slide").removeClass("add-animation");
      $('.slick-slide[data-slick-index="' + nextSlide + '"]').addClass("add-animation");
    });
});