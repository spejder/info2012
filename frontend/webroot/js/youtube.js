google.load("swfobject", "2.1");

/*
 * Chromeless player has no controls.
 */

// This function is called when an error is thrown by the player
function onPlayerError(errorCode) {
  // TODO, advance to next album
  alert("An error occured of type:" + errorCode);
}

// This function is called when the player changes state
function onPlayerStateChange(newState) {
  // TODO, advance to next album on state = 0
  if(newState == 0){
    gotoNext();
  }
}

// This function is automatically called by the player once it loads
function onYouTubePlayerReady(playerId) {
  $('slideshowimgcontainer')
  ytplayer = document.getElementById("ytPlayer");
  // This causes the updatePlayerInfo function to be called every 250ms to
  // get fresh data from the player
  setInterval(updatePlayerInfo, 250);
  updatePlayerInfo();
  ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
  ytplayer.addEventListener("onError", "onPlayerError");
  //Load an initial video into the player
  ytplayer.cueVideoById("B_cBAiZh1zE");
}

// The "main method" of this sample. Called when someone clicks "Run".
function loadPlayer() {
  // Lets Flash from another domain call JavaScript
  var params = { allowScriptAccess: "always" };
  // The element id of the Flash embed
  var atts = { id: "ytPlayer" };
  var videoes = ['B_cBAiZh1zE', 'oquGdcq9PbE'];

  // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
  swfobject.embedSWF("http://www.youtube.com/apiplayer?" +
                     "version=3&enablejsapi=1&playerapiid=player1",
                     "videoDiv", "600", "400", "9", null, null, params, atts);
}
function _run() {
  loadPlayer();
}
google.setOnLoadCallback(_run);
