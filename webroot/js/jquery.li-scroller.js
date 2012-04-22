/*!
 * liScroll 1.0
 * Examples and documentation at: 
 * http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html
 * 2007-2010 Gian Carlo Mingati
 * Version: 1.0.2.1 (22-APRIL-2011)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires:
 * jQuery v1.2.x or later
 * 
 */


jQuery.fn.liScroll = function(settings) {
		settings = jQuery.extend({
		travelocity: 0.07,
        updatehook: function() { }
		}, settings);		
		return this.each(function(){

                var $strip; var stripWidth; var $mask;
                var $tickercontainer; var containerWidth; var totalTravel;
                var defTiming;

                $strip = jQuery(this);
                $strip.addClass("newsticker");
                $mask = $strip.wrap("<div class='mask'></div>");
                $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");

                function render() {


                    stripWidth = 1;
                    $strip.find("li").each(function(i){
                        stripWidth += jQuery(this, i).outerWidth(true); // thanks to Michael Haszprunar and Fabien Volpi
                    });

                    containerWidth = $strip.parent().parent().width();	//a.k.a. 'mask' width
                    $strip.width(stripWidth);
                    totalTravel = stripWidth+containerWidth;
                    defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye
                }

				function scrollnews(spazio, tempo){
                  //Update hook (jot@internetgruppen.dk)
                     settings.updatehook();
                     render();
                     spazio = totalTravel; //Hard-wire offset to totalspace. We dont' use hover/stop unhover/resume anyway
                  //----------------------------------------
				$strip.animate({left: '-='+ spazio}, tempo, "linear", function(){$strip.css("left", containerWidth); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				jQuery(this).stop();
				},
				function(){
				var offset = jQuery(this).offset();
				var residualSpace = offset.left + stripWidth;
				var residualTime = residualSpace/settings.travelocity;
				scrollnews(residualSpace, residualTime);
				});			
		});	
};