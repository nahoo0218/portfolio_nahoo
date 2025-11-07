
$(document).ready(function(){
  $('.visual-slider').slick({
    autoplay: true,         // 自動再生
    autoplaySpeed: 4000,    // 切り替え間隔
    arrows: false,          // 左右の矢印を非表示
    dots: false,            // 下のドットを非表示（必要ならtrue）
    fade: true,             // フェード切り替え
    speed: 800              // アニメーション速度
  });
});
