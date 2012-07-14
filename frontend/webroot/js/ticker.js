
/**
 * NewsTicker module for infoscreens SL2012
 * User: jot
 * Date: 4/21/12
 */
(function() {

    var news_items = [];
    var log_debug = console && console.log ? function(msg) { console.log.apply(console, [msg]); } : function() { };

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
