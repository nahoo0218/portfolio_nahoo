$(document).ready(function() {
  // ボタンをクリックしたときの処理
  $('#toggleButton').on('click', function() {
    // self_hidden 要素をスライドしながら表示/非表示を切り替える
    $('.self_hidden').slideToggle(400); // 400はアニメーションの速さ（ミリ秒）

    // オプション: ボタンのテキストを切り替える
    var buttonText = $(this).find('.button');
    if ($('.self_hidden').is(':visible')) {
      // 閉じる処理（非表示になる前、つまり現在表示されている状態）
      buttonText.text('View more');
    } else {
      // 開く処理（表示される前、つまり現在非表示の状態）
      buttonText.text('Close');
    }
  });
});