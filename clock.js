
/**
 * Clock module for infoscreens SL2012
 * User: jot
 * Date: 4/21/12
 */
(function() {

    //Html container to put time in :)
    var clock;

    var update = function() {

        //Get current time
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();

        //Format output
        h=zeropad(h);
        m=zeropad(m);
        s=zeropad(s);

        //Set html container content
        clock.innerHTML=h+":"+m+":"+s;
    }

    var zeropad = function(i) {
        return i < 10 ? "0" + i : i;
    }

    //Subscribe JQuery onload event
    $(function() {
        clock = document.getElementById('clock');
        var t=setInterval(update,500);
        update();
    });


})();
