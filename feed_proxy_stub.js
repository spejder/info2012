
var feed_proxy = {

	fetch: function(callback) {
             callback({
						"images": [
									{
									"author": "MHD", 
									"description": "Beskrivelse", 
									"url": "a.jpeg"
									}
								], 
						"news": [
						"newsstring1", 
						"newsstring2"
						], 
						"video": [
						"http://youtube.com/?v=ABCDEF24325"
						],
                        "mode": "normal"
						});
           }
}
