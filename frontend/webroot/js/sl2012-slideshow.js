/**
 * Image slideshow - infoscreen sl2012
 */
(function(){

  var images = [];
   var log_debug = console && console.log ? function(msg) { console.log.apply(console, [msg]); } : function() { };


  var updateSlideshow = function updateSlideshow(images){
      log_debug("updating slideshow");
      // clear out previous content
      $content = $('#picture');
      $content.empty();

      // setup the slideshow container
      $content.append('<div id="slideshow" />');
      $imgcontainer = $('#slideshow');

      // populate the container
      for(var i = 0; i < images.length; i++){
        img = images[i];

        // calculate how much to offset the image with to have it center vertically
        //var m_top = ($('#picture').height() - img.height)/2;
        var img_ratio = img.width / img.height;

        var m_left = 0 - ((($('#picture').height() * img_ratio)) - $('#picture').width())/2;

        // setup the outer div that will give us the horizontal alignment
        $div = $('<div></div>').attr('class', 'slideshowimgcontainer');

        // setup the image with its properties and append it to the div and container
        $img = $('<img></img>')
               .attr({
                // width: img.width,
                // height: img.height,
                src: img.src,
                alt: img.caption
                });
       // $img.css('marginTop', m_top);
       //
        // center the image
        $img.css('marginLeft', m_left);
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

      // start the slideshow
      $imgcontainer.cycle({
        after: function onAfter(curr, next, opts) {
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
                 Cufon.refresh('#bodytext');
                 Cufon.refresh('#byline');

                 $('#bodytext').ellipsis();
                }
      });
    }

  //Subscribe to image feed
    feed_subscribe_images(function() {
        updateSlideshow(this.images);
        log_debug("Slideshow content fetched");
    });

  // startup
  $(document).ready(function() {
    log_debug("Slideshow doc ready invoked");
    updateSlideshow([]);
  });

})();
