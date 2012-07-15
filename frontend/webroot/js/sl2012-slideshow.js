/**
 * Image slideshow - infoscreen sl2012
 */
(function(){

  var images = [];
   var log_debug = console && console.log ? function(msg) { console.log.apply(console, [msg]); } : function() { };

   // hack for now that it is attached to the window
  window.playPhotoAlbum = function playPhotoAlbum(images, callback){

      log_debug("playing photo album " + images.title + " with duration " + images.duration);

      // clear out previous content
      $content = $('#mediacanvas');
      $content.empty();

      // setup the slideshow container
      $content.append('<div id="slideshow" />');

      $imgcontainer = $('#slideshow');
      $imgcontainer.hide();

      // populate the container
      for(var i = 0; i < images.content.length; i++){
        img = images.content[i];

        // setup the outer div that will give us the horizontal alignment
        $div = $('<div></div>');

        // setup the image with its properties and append it to the div and container
        $img = $('<img></img>')
               .attr({
                src: img.src,
                alt: img.caption
                });

        $div.append($img);

        // add caption
        $cap = $('<div></div>').html(img.caption);
        $cap.addClass('caption');
        $div.append($cap);

        // add byline
        $byline = $('<div></div>').html(img.byline);
        $byline.addClass('byline');
        $div.append($byline);

        $imgcontainer.append($div);
      }

      // hide all images
      $('#slideshow > div').hide();
      // show the first one
      $('#slideshow > div:first').show();

      // then let the container show
      $imgcontainer.show();


      var timeout = 10 * 1000;

      if(images.duration > 0){
        timeout = images.duration * 1000;
      }

      // start the slideshow
        console.log("photo: fadeout + start");
        jQuery(".mediacurtain").fadeOut(2000,function(){
          $imgcontainer.cycle({
            after: function onAfter(curr, next, opts) {
                      // Todo - prerender this with cufon and show()/hide()
                      // function that updates the caption and byline
                     var caption = $(next).find('.caption').html();
                     var byline = $(next).find('.byline').html();

                     $('#bodytext').html(caption);

                     if(byline.length > 0){
                      $('#byline').html('<b>Foto:</b> ' + byline);
                     }else{
                      $('#byline').html('');
                     }

                     $('#bodytext').ellipsis();

                     // update fonts
                     Cufon.refresh('#text-container');
                    },
            nowrap: true,
            end: function wrapupSlideshow(options){
              console.log("photo: fading out and invoking callback");
              jQuery(".mediacurtain").fadeIn(2000, callback);
              $('#byline').html('');
              $('#bodytext').html('');
            },
            timeout: timeout,
            speed: 2000

          })});

    };

})();
