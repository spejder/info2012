/**
 * Clock module for infoscreens SL2012
 * User: jot
 * Date: 4/21/12
 */
(function() {
  google.load("swfobject", "2.1");

  var videoNo = 0;
  var currentAlbum;
  var completeCallback;

  // attach to window until we get a way of registering this at load
  window.playVideoAlbum = function(album, callback){
        currentAlbum = album;
        completeCallback = callback;

        if(album.content.length > videoNo){
            loadPlayer();
        }else{
            videoNo = 0;
            completeCallback();
        }
  };

  function playNext(){
    console.log("video: playnext invoked");
    if(currentAlbum.content.length > videoNo){
      console.log("video: playing " +  videoNo + ": " + currentAlbum.content[videoNo].src);

      var video = currentAlbum.content[videoNo];
      ytplayer.cueVideoById(video.src);

       $('#bodytext').html(video.caption);

       if(video.byline.length > 0){
        $('#byline').html('<b>Video:</b> ' + video.byline);
       }else{
        $('#byline').html('');
       }

       // update fonts
       Cufon.refresh('#text-container');

      ytplayer.playVideo();
      videoNo++;
    }else{
        console.log("video: no more videoes, unloading");

        $('#byline').html('');
        $('#bodytext').html('');

        unloadPlayer();
        videoNo = 0;
    }
  }

  function unloadPlayer(){
      unloadPlayerStep1();
  }

  function unloadPlayerStep1(){
      console.log("video: fading");
      jQuery(".mediacurtain").fadeIn(2000, unloadPlayerStep2);
  }

  function unloadPlayerStep2(){
      swfobject.removeSWF("ytPlayer");
      console.log("player onloaded, invoking callback");
      completeCallback();

  }
  // This function is called when an error is thrown by the player
  window.onPlayerError = function(errorCode) {
    alert("An error occured of type:" + errorCode);
    playNext();
  }

  // This function is called when the player changes state
  window.onPlayerStateChange = function(newState) {
    if(newState == 0){
      console.log("video: advacing to next video");
      playNext();
    }
  };

  // This function is automatically called by the player once it loads
  window.onYouTubePlayerReady = function(playerId) {
    ytplayer = document.getElementById("ytPlayer");

    // register event listeners
    ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
    ytplayer.addEventListener("onError", "onPlayerError");
    //Load an initial video into the player

    // we're ready to go, lift the curtain and start playing
    console.log("fading out curtain");
    jQuery(".mediacurtain").fadeOut(2000, playNext);
  };

  // load youtube player behind the curtain
  function loadPlayer() {
    console.log("video: loading");

    // Lets Flash from another domain call JavaScript
    var params = { allowScriptAccess: "always" };

    // The element id of the Flash embed
    var atts = { id: "ytPlayer"};

    // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
    var canvas = jQuery("#mediacanvas");
    canvas.html('');
    canvas.append('<div id="videoholder"></div>');

    swfobject.embedSWF("http://www.youtube.com/apiplayer?" +
                       "version=3&enablejsapi=1&playerapiid=player1",
                       "videoholder", canvas.width(), canvas.height(), "9", null, null, params, atts);
    // when the player as loaded it will invoke our onYouTubePlayerReady function.
  }


})();