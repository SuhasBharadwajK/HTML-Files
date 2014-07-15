var clickCallBacks = jQuery.Callbacks;
var flag = 1;
$(document).ready(function starts(){
    $(".btop").click(function() {
        $(".btop").remove();
        $("#right").animate( {opacity: 0.25, left : '+=150px'},1000).fadeTo(1000,0, function() {$(this).hide()});
        $("#left").animate( {opacity: 0.25, left : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $("#bottom").animate( {opacity: 0.25, top : '+=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $("#top").animate({top: '+=200px'},2000);
        $(".buttoncontainer").append('<div class="st"></div>');
        $(".st").click(function() {
            $("#top").animate({ top: '-=150px'}, 2000);
            $("#left").fadeTo(1000,1, function() {$(this).show()}).animate({left:'+=150px'},1000);
            $("#right").fadeTo(1000,1, function() {$(this).show()}).animate({left:'-=150px'},1000, function() {$("#top").prepend('<div class="btop"></div>')});
            $("#bottom").fadeTo(1000,1, function() {$(this).show()}).animate({top:'-=150px'},1000, function() {$(".st").remove();starts();});
        });
    });
    $(".bbottom").click(function() {
        $(".bbottom").remove();
        $("#right").animate( {opacity: 0.25, left : '+=150px'},1000).fadeTo(1000,0, function() {$(this).hide()});
        $("#left").animate( {opacity: 0.25, left : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $("#top").animate( {opacity: 0.25, top : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $("#bottom").animate({top: '-=180px'},2000);
        $(".buttoncontainer").append('<div class="sb"></div>');
        $(".sb").click(function() {
            $("#bottom").animate({ top: '+=150px'}, 2000);
            $("#left").fadeTo(1000,1, function() {$(this).show()}).animate({left:'+=150px'},1000);
            $("#right").fadeTo(1000,1, function() {$(this).show()}).animate({left:'-=150px'},1000, function() {$("#bottom").prepend('<div class="bbottom"></div>')});
            $("#top").fadeTo(1000,1, function() {$(this).show()}).animate({top:'+=150px'},1000, function() {$(".sb").remove();starts();});
        });
    });
    $(".bright").click(function() {
        $(".bright").remove();
        $("#bottom").animate( {opacity: 0.25, top : '+=150px'},1000).fadeTo(1000,0, function() {$(this).hide()});
        $("#left").animate( {opacity: 0.25, left : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $("#top").animate( {opacity: 0.25, top : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $("#right").animate({left: '-=320px'}, 2000);
        $(".buttoncontainer").append('<div class="sr"></div>');
        $(".sr").click(function() {
            $("#right").animate({ left: '+=320px'}, 2000);
            $("#left").fadeTo(1000,1, function() {$(this).show()}).animate({left:'+=150px'},1000);
            $("#bottom").fadeTo(1000,1, function() {$(this).show()}).animate({top:'-=150px'},1000, function() {$("#right").prepend('<div class="bright"></div>')});
            $("#top").fadeTo(1000,1, function() {$(this).show()}).animate({top:'+=150px'},1000, function() {$(".sr").remove();starts();});
        });
    });
    $(".bleft").click(function() {
        $(".bleft").remove();
        $("#bottom").animate( {opacity: 0.25, top : '+=150px'},1000).fadeTo(1000,0, function() {$(this).hide()});
        $("#right").animate( {opacity: 0.25, left : '+=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $("#top").animate( {opacity: 0.25, top : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $("#left").animate({left: '+=320px'},2000);
        $(".buttoncontainer").append('<div class="sl"></div>');
        $(".sl").click(function() {
            $("#left").animate({ left: '-=320px'}, 2000);
            $("#right").fadeTo(1000,1, function() {$(this).show()}).animate({left:'-=150px'},1000);
            $("#bottom").fadeTo(1000,1, function() {$(this).show()}).animate({top:'-=150px'},1000, function() {$("#left").prepend('<div class="bleft"></div>')});
            $("#top").fadeTo(1000,1, function() {$(this).show()}).animate({top:'+=150px'},1000, function() {$(".sl").remove();starts();});
        });
    });
});
//http://css-tricks.com/almanac/properties/t/transition/
//http://stackoverflow.com/questions/1251300/how-to-run-two-jquery-animations-simultaneously
//http://stackoverflow.com/questions/10473572/execute-multiple-jquery-effects-on-the-same-element-in-parallel