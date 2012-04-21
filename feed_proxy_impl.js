var feed_proxy = {
   fetch: function(callback) {
                $.ajax({
                            url: feed_source,
                            dataType: "json",
                            crossDomain: true, //We might have to set this to true at a later time
                            success: function(data) {
                                
                                if (xhr.statusCode == "200")
									callback(data);
                            }
                        });
   }
};
