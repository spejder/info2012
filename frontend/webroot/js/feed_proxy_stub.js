
var feed_proxy = {

	fetch: function(callback) {
             callback({
						"images": [
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 1",
									          "src": "http://flab.dk/~mads/sl2012/info/imgtest/adapted/IMG_0204.jpg",
									      "width": "1144",
									      "height": "763",
									      },
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 2",
						  		          "src": "http://flab.dk/~mads/sl2012/info/imgtest/adapted/IMG_0209.jpg",
									      "width": "547",
									      "height": "820",
									      },
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 3",
									          "src": "http://flab.dk/~mads/sl2012/info/imgtest/adapted/IMG_0323.jpg",
									      "width": "1144",
									      "height": "763",
									      },
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 4",
									          "src": "http://flab.dk/~mads/sl2012/info/imgtest/adapted/IMG_1073.jpg",
									      "width": "1144",
									      "height": "763",
									      },
									      {
									          "author": "MHD",
									          "description": "Beskrivelse 5",
									          "src": "http://flab.dk/~mads/sl2012/info/imgtest/adapted/IMG_1141.jpg",
									      "width": "1144",
									      "height": "763",
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


