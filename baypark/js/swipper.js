$(function () {
  

const swiper = new Swiper(".swiper", {
  loop: true, // ループ
  slidesPerView: 1, // 一度に表示する枚数
  speed: 5000, // ループの時間
  // スライド間の間隔を空ける (例: 50px)
  spaceBetween: 20, 
  allowTouchMove: false, // スワイプ無効
  autoplay: { //自動再生
    delay: 0, // 途切れなくループ
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },

  
        // ブレークポイント設定
        breakpoints: {
            // 画面幅が768px以下の時に適用
            // max-width: 768px の代わりに 768 をキーとして指定します
            488: {
                slidesPerView: 2, // 一度に表示する枚数を1枚にする
                spaceBetween: 10, // 必要に応じて間隔も調整すると良いでしょう
            },
            1060: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
            
        }
    });
});
