  (function(){

  var albums = [];
  var newAlbums = [];
  var albumCount = 0;
  var albumsHasBeenUpdated = false;

  var playNextAlbum = function(){
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
        console.log("master: playing image album");
        playPhotoAlbum(album, playNextAlbum);
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
