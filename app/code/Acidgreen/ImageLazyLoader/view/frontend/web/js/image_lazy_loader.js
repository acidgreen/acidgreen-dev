require([
    'jquery'
], function($){
	"use strict";
  
  
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom - 200;
    };

    $(window).on("load scroll",function(e) {
        $.each($('img'), function() {
            if ($(this).attr('data-src') && $(this).isInViewport()) {
                var source = $(this).data('src');
                $(this).attr('src', source);
                $(this).removeAttr('data-src');
            }
        });
    });
    $(window).on("scroll",function(e) {
        $(".banner-carousel").removeAttr("style");
    });
});
