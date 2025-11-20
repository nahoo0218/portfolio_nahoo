$(document).ready(function() {
    // 既存のボタン（.self_menu_button）をクリックしたときの処理
    $('.self_menu_button').on('click', function() {
        toggleMenu(); // メニューの表示/非表示を切り替える関数を呼び出し
    });

    // 新たに追加する処理: .menu_sec_ttlをクリックしたときの処理
    $('.menu_sec_ttl').on('click', function() {
        toggleMenu(); // メニューの表示/非表示を切り替える関数を呼び出し
    });

    // メニューの表示/非表示とボタンテキストの切り替えを行う関数
    function toggleMenu() {
        // self_hidden 要素をスライドしながら表示/非表示を切り替える
        $('.self_hidden').slideToggle(400); // 400はアニメーションの速さ（ミリ秒）

        // オプション: ボタンのテキストを切り替える
        // ボタンのテキスト切り替えは、通常一つのボタンに紐づいているため、
        // どちらの要素（.self_menu_buttonまたは.menu_sec_ttl）がクリックされても
        // 影響を受けたいボタン（例: .self_menu_button内の.button）のテキストを切り替えるようにします。

        // 今回は、コードの元のロジック（クリックされた要素ではなく、常にDOM内の特定の要素を操作する）
        // に基づき、影響を受けるボタンを特定してテキストを切り替えます。
        var buttonText = $('.self_menu_button').find('.button');

        // .self_hidden が表示されているか（またはこれから表示されるか）でテキストを判断
        if ($('.self_hidden').is(':visible')) {
            // 閉じる処理（非表示になる前、つまり現在表示されている状態）
            // -> slideToggleの実行後、非表示になっている
            buttonText.text('View more');
        } else {
            // 開く処理（表示される前、つまり現在非表示の状態）
            // -> slideToggleの実行後、表示されている
            buttonText.text('Close');
        }
    }
});