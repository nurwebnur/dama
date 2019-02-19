$(function() {
    $(".main_slider").each(function() {
        var $li = $("li", this);
        var $prev = $(".prev", this);
        var $next = $(".next", this);

        $li.eq(0).addClass("active");

        $prev.click(function() {
            var index = $li.filter(".active").index();

            if (index == 0) {
                index = $li.length;
            }

            $li.eq(index - 1)
                .addClass("active")
                .siblings()
                .removeClass("active");
        });

        $next.click(function() {
            var index = $li.filter(".active").index();

            if (index == $li.length - 1) {
                index = -1;
            }

            $li.eq(index + 1)
                .addClass("active")
                .siblings()
                .removeClass("active");
        });
    });
});
