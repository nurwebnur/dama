$(function () {
    $(".main_slider").each(function () {
        var $li = $("li", this);
        var $prev = $(".prev", this);
        var $next = $(".next", this);
        var $current = $(".main_slider_controls_count span", this);
        var $count = $(".main_slider_controls_count ins", this);
        var $pags = $(".main_slider_controls_pags", this);

        $li.eq(0).addClass("active");
        $count.text($li.length);
        $current.text($li.filter(".active").index() + 1);

        $li.each(function () {
            $pags.append("<span></span>");
        });

        var $pag = $($pags.find("span"));

        $pag.eq($li.filter(".active").index()).addClass("active");

        $prev.click(function () {
            var index = $li.filter(".active").index();

            if (index == 0) {
                index = $li.length;
            }

            $li.eq(index - 1)
                .addClass("active")
                .siblings()
                .removeClass("active");
            $pag.eq(index - 1)
                .addClass("active")
                .siblings()
                .removeClass("active");
            $current.text(index);
        });

        $next.click(function () {
            var index = $li.filter(".active").index();

            if (index == $li.length - 1) {
                index = -1;
            }

            $li.eq(index + 1)
                .addClass("active")
                .siblings()
                .removeClass("active");
            $pag.eq(index + 1)
                .addClass("active")
                .siblings()
                .removeClass("active");
            $current.text(index + 2);
        });

        $pag.click(function () {
            $li.eq($(this).index())
                .addClass("active")
                .siblings()
                .removeClass("active");
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active");
            $current.text($li.filter(".active").index() + 1);
        });
    });

    $(".popular_gallery").each(function () {
        var $prevImg = $(".popular_gallery_prev span", this);
        var $mainImg = $(".popular_gallery_main img", this);

        $prevImg.click(function () {
            $mainImg.eq($(this).index()).addClass("active").siblings().removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
});
