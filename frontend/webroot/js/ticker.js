(function() {
    var news_items = [];

    //Subscribe to news feed
    feed_subscribe_news(function() {
        news_items = this.news;
        $(".ticker").html('');
            for (var item in news_items) {
                $(".ticker").append('<p>'+ news_items[item]+ '</p>');
            }

            log_debug("Newsticker re-render");
        Cufon.refresh('.ticker');
        $('marquee').marquee('ticker');
        log_debug("Newsticker content-cache updated!");
    });


})();
