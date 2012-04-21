
/**
 * Main Model for infoscreens SL2012
 * User: jot
 * Date: 4/21/12
 */

(function() {

    var image_subscribers = [];
    var video_subscribers = [];
    var news_subscribers = [];
    var mode_subscribers = [];

	var cache;

    window.feed_subscribe_images = function(callback) {
        subscribe(callback, image_subscribers);
    }

    window.feed_subscribe_video = function(callback) {
        subscribe(callback, video_subscribers);
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
					if (data.images.toString() != cache.images.toString()) notify(image_subscribers, data);
					if (data.video.toString() != cache.video.toString()) notify(video_subscribers, data);
					if (data.news.toString() != cache.news.toString()) notify(news_subscribers, data);
					if (data.mode.toString() != cache.mode.toString()) notify(mode_subscribers, data);
				} else {
					notify(image_subscribers, data);
					notify(video_subscribers, data);
					notify(news_subscribers, data);
					notify(mode_subscribers, data);
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
    }

    var notify = function(receivers, dataObj) {
       for (var s in receivers)
            receivers[s].apply(dataObj);
    }

    //Run fetch at document load
    $(setInterval(window.feed_fetch_data, 5000));
    
})();
