var feed_proxy = {
   fetch: function(callback) {
		$.ajax({
				// Remember that the server specified must either be on the same domain
				// as the infoscreen site - or the server hosting the url below must
				// send a HTTP header along the lines
				// Access-Control-Allow-Origin: *
				// url: "https://dev.dds.dk/info2012.json",
				url: "http://infobackend.dev/info",
				dataType: "json",
				crossDomain: true,
				success: function(data, textStatus, xhr) {

					if (xhr.status == "200")
						callback(data);
				}
			});
   }
};
