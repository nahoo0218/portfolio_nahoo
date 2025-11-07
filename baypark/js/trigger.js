$(function () {
  // スクロールアニメーションを実行する関数
  function scrollAnimation() {
    // .js-text-animateクラスを持つすべての要素をループ処理
    $(".js-text-animate").each(function () {
      // 要素のページ上部からの位置を取得
      let position = $(this).offset().top;
      // 現在のスクロール位置を取得
      let scroll = $(window).scrollTop();
      // ウィンドウの高さを取得
      let windowHeight = $(window).height();

      // スクロール位置が要素の位置から200px手前になったら
      if (scroll > position - windowHeight + 200) {
        // is-activeクラスを追加してアニメーションを開始
        $(this).addClass('is-active');
      }
    });
  }

  // ページロード時にスクロールイベントを一度実行
  // これにより、画面内に最初から表示されている要素もアニメーションが実行されます
  $(window).on('load scroll', function () {
    scrollAnimation();
  });
});