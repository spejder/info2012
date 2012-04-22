var feed_proxy = {
   fetch: function(callback) {
		$.ajax({
				url: "https://dev.dds.dk/info2012.json",
				dataType: "json",
				crossDomain: true,
				success: function(data, textStatus, xhr) {
					
					if (xhr.status == "200")
						callback(data);
				}
			});
   }
};
