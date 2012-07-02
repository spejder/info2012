
var feed_proxy = {

	fetch: function(callback) {
             callback({
							"albums":
							[
								{
									"type": "image"
									"title": "Billeder fra fredag"
									"content":
										[
											{
							          "byline": "MHD",
							          "caption": "Beskrivelse 1",
							          "src": "http://flab.dk/~mads/sl2012/info/imgtest/adapted/IMG_0204.jpg",
									      "width": "1144",
									      "height": "763"
								      },
								      {
							          "byline": "MHD",
							          "caption": "Beskrivelse 5",
							          "src": "http://flab.dk/~mads/sl2012/info/imgtest/adapted/IMG_1141.jpg",
									      "width": "1144",
									      "height": "763"
								      }
										]
								},
								{
									"type": "video"
									"title": "Alle timelapses"
									"content":
										[
											{
							          "byline": "MHD",
							          "caption": "En video",
							          "src": "pkDKzLUrJ5U",
								      },
								      {
							          "byline": "MHD",
							          "caption": "En anden video",
							          "src": "pkDKuLUrJ58",
								      }
										]
								},
								{
									"type": "image"
									"title": "Billeder fra mandag"
									"content":
										[
											{
							          "byline": "MHD",
							          "caption": "Beskrivelse 3",
							          "src": "http://flab.dk/~mads/sl2012/info/imgtest/adapted/IMG_0204.jpg",
									      "width": "1144",
									      "height": "763",
								      },
								      {
							          "byline": "MHD",
							          "caption": "Beskrivelse 4",
							          "src": "http://flab.dk/~mads/sl2012/info/imgtest/adapted/IMG_1141.jpg",
							      		"width": "1144",
								     	 "height": "763",
								      }
										]
								},
						  ],
							"news": ["newsstring1", "newsstring2"],
						});
           }
}


