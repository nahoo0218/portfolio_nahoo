$(function () {
    $(window).on("scroll", function () {
        // 💡 画面幅が768pxよりも大きい場合（つまり769px以上）のみ実行 💡
        if ($(window).width() > 768) {
            
            // 元のスクロール処理
            if ($(this).scrollTop() > 700) {
                $(".menu").css('top', '0');
            } else {
                $(".menu").css('top', '-300px');
            }
            
        } 
        // 768px以下の場合は、この処理全体がスキップされます
    });
});