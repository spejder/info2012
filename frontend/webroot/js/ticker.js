
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
        log_debug("Newsticker content-cache updated!");
    });

    $(function() { $("#js-news").liScroll({ updatehook: function() {
            $("#js-news").html('');
            for (var item in news_items) {
                $("#js-news").append('<li>'+ news_items[item]+ '</li>');
            }

            log_debug("Newsticker re-render");
        }});
    });
})();
