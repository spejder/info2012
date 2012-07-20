  (function(){

  var albums = [];
  var newAlbums = [];
  var albumCount = 0;
  var albumsHasBeenUpdated = false;
  var singleAlbum = false;

  var playNextAlbum = function(){
    if(singleAlbum){
      // terminate single album mode if
      // - albums updated
      // - there are other albums to show (albums.length > 1)
      if(albumsHasBeenUpdated || albums.length > 1){
        singleAlbum = false;
        console.log("master: leaving single album mode");

        $('#bodytext').empty();
        $('#byline').empty();
        jQuery(".mediacurtain").fadeIn(2000,playNextAlbum);
        return;
      }
    }

    if(albumsHasBeenUpdated){
      albums = newAlbums;
      albumsHasBeenUpdated = false;
      console.log("master: updated albums");
      albumCount = 0;
    }

    console.log("master: album count: " + albumCount + " length: " + albums.length + " mod: " + albumCount % albums.length);

    if(albums.length > 0){
      var album = albums[albumCount % albums.length];

      if(album.type == "image"){
        console.log("master: playing image album, length " + album.content.length);
        if(album.content.length > 1){
          playPhotoAlbum(album, playNextAlbum);
        }else if(album.content.length == 1){
          console.log("master: album is a single image album");

          // first time we show the single album
          if(!singleAlbum){
            // clear out any existing content
            $content = $('#mediacanvas');
            $content.empty();

            // get the single image
            var img = album.content[0];

            // add the image
            $img = $('<img></img>')
               .attr({
                  src: img.src
                });
            $content.append($img);

            // set caption and byline
            $('#bodytext').html(img.caption);

            if(img.byline.length > 0){
              $('#byline').html('<b>Foto:</b> ' + img.byline);
            }else{
              $('#byline').html('');
            }

            // update fonts
            Cufon.refresh('#text-container');

            // we're now in single album mode
            singleAlbum = true;

            // lift the curtain
            jQuery(".mediacurtain").fadeOut(2000,function(){
              console.log("Single image: playing for 10 seconds then looping");
              setTimeout(playNextAlbum, 10*1000);
            });
          }else{
            // sleep for a while before we check for an update
            console.log("Single image: playing for 60 seconds, then looping again");

            setTimeout(playNextAlbum, 60*1000);
          }
        }else{
          console.log("Master: photo album rejected due to length of album " + album.content.length  + " or total number of albums " + albums.length);
          setTimeout(playNextAlbum, 10*1000);
        }
      }
      else if(album.type == "video"){
        console.log("master: playing video album");
        playVideoAlbum(album, playNextAlbum);
      }
      albumCount++;
    }
  };

  feed_subscribe_albums(function() {
    console.log("master: update detected, " + this.length);
    newAlbums = this;
    albumsHasBeenUpdated = true;

    if(albums.length === 0 ){
      console.log("master restarting slideshow");
      playNextAlbum();
    }
  });

  feed_subscribe_news(function() {
    console.log("updating ticker");
    jQuery("#marquee").html();
    $("#marquee").html('');
    for (var item in this) {
        $("#marquee").append('<span class="news-item">'+ this[item] + '</span>');
    }
    Cufon.refresh('.ticker');
  });

})();
