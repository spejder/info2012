
/**
 * Main Model for infoscreens SL2012
 * User: jot
 * Date: 4/21/12
 */

(function() {

    var album_subscribers = [];
    var news_subscribers = [];
    var mode_subscribers = [];

	var cache;

    window.feed_subscribe_albums = function(callback) {
        subscribe(callback, album_subscribers);
    }

    window.feed_subscribe_news = function(callback) {
        subscribe(callback, news_subscribers);
    }

    window.feed_subscribe_mode = function(callback) {
        subscribe(callback, mode_subscribers);
    }

	window.feed_fetch_data = function() {

		feed_proxy.fetch(function(data) {

			//Feed proxy can return false if content fetch failed
			if (data) {
				if (cache) {
					if (data.albums.toString() != cache.albums.toString()) notify(album_subscribers, data.albums);
					if (data.news.toString() != cache.news.toString()) notify(news_subscribers, data.news);
				} else {
					notify(album_subscribers, data.albums);
					notify(news_subscribers, data.news);
				}

				//Update cache
				cache = data;
			}
		});
    }

    var subscribe = function(callback, collection) {
       if (typeof(callback) != "function")
            throw "Argument to feed_subscribe must be a callback function";

       collection.push(callback);
    };

    var notify = function(receivers, dataObj) {
       for (var s in receivers)
            receivers[s].apply(dataObj);
    };

    //Run fetch at document load
    $(setInterval(window.feed_fetch_data, 5000));

    //Reload page every 12 hours
    var reloadFrequency = 12 * 60 * 60 * 1000;

    var pageReload = function() {
      log_debug("Reloading page...");
      window.location.reload();
    };

    $(setInterval(pageReload, reloadFrequency));

})();
