$(function() {
    $(window).on('load scroll', function() {
        $('.animation').each(function() {
            //ターゲットの位置を取得
            var target = $(this).offset().top;
            //スクロール量を取得
            var scroll = $(window).scrollTop();
            //ウィンドウの高さを取得
            var height = $(window).height();
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - height) {
                //クラスを付与
                $(this).addClass('active');
            }
        });
    });
});

// トグル
$(function() {
    $('.toggle_switch').on('click', function() {
        // $(this).toggleClass('open');
        // $(this).next('.toggle_contents').slideToggle();
        $(".toggle_switch").not(this).removeClass("open");
        //クリックしたquestion以外の全てのopenを取る

        $(".toggle_switch").not(this).next().slideUp(300);
        //クリックされたquestion以外のanswerを閉じる

        $(this).toggleClass("open");
        //thisにopenクラスを付与

        $(this).next().slideToggle(300);
        //thisのcontentを展開、開いていれば閉じる
    });
});

// スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});