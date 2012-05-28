
var feed_proxy = {

	fetch: function(callback) {
             callback({
						"images": [
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 1 <br/><a href=\"bla\">hithere</a>",
									          "src": "http://flab.dk/~mads/sl2012/info/imgtest/720/IMG_0204.jpg",
									      "width": "1080",
									      "height": "720",
									      },
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 2",
						  		          "src": "http://flab.dk/~mads/sl2012/info/imgtest/720/IMG_0209.jpg",
									      "width": "480",
									      "height": "720",
									      },
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 3",
									          "src": "http://flab.dk/~mads/sl2012/info/imgtest/720/IMG_0323.jpg",
									      "width": "1080",
									      "height": "720",
									      },
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 4",
									          "src": "http://flab.dk/~mads/sl2012/info/imgtest/720/IMG_1073.jpg",
									      "width": "1080",
									      "height": "720",
									      },
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 5",
									          "src": "http://flab.dk/~mads/sl2012/info/imgtest/720/IMG_1141.jpg",
									      "width": "1080",
									      "height": "720",
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


