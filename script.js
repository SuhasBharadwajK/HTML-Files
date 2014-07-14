$(document).ready(function() {
//    $(".top").mouseenter(function() {
//        $(this).animate({
//            width: '+=100em',
//            height: '+=100em'
//        });
//    });
//    $(".top").mouseleave(function() {
//        $(this).animate({
//            width: '-=100em',
//            height: '-=100em'
//        });
//    });
    $(".top").click(function() {
        //$(".right").animate({ right : '-=500px'},3000, function() { $(this).fadeOut() {400, ease ,function() {$(this).hide()}}});
        //$(".right").fadeOut(3000,"linear", function() { $(this).animate({right:'-=500px'},3000)});
        //$(".right").hide().show("fade", {},  {duration:1200}).effect("bounce", { times:3 },  { duration:400}).dequeue();
        //$(".right").fadeOut
        $(".right").animate( {opacity: 0.25, left : '+=150px'},1000).fadeTo(1000,0, function() {$(this).hide()});
            
            //.animate( {opacity: 0.25, right: '-=150px', /*height: "toggle"*/});
            
        $(".left").animate( {opacity: 0.25, left : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $(".bottom").animate( {opacity: 0.25, top : '+=150px'}, 1000).queue(function() { $(this).fadeTo(1000,0,function() {$(this).hide()})}).dequeue();
        $(this).animate({top: '+=150px'},2000);
    });
    $(".bottom").click(function() {
       $(".right").animate( {opacity: 0.25, left : '+=150px'},1000).fadeTo(1000,0, function() {$(this).hide()});
        $(".left").animate( {opacity: 0.25, left : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $(".top").animate( {opacity: 0.25, top : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $(this).animate({top: '-=180px'},2000);
    });
    $(".right").click(function() {
       $(".bottom").animate( {opacity: 0.25, top : '+=150px'},1000).fadeTo(1000,0, function() {$(this).hide()});
        $(".left").animate( {opacity: 0.25, left : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $(".top").animate( {opacity: 0.25, top : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $(this).animate({left: '-=320px'},2000);
    });
    $(".left").click(function() {
       $(".bottom").animate( {opacity: 0.25, top : '+=150px'},1000).fadeTo(1000,0, function() {$(this).hide()});
        $(".right").animate( {opacity: 0.25, left : '+=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $(".top").animate( {opacity: 0.25, top : '-=150px'}, 1000).fadeTo(1000,0,function() {$(this).hide()});
        $(this).animate({left: '+=320px'},2000);
    });
    $("#showall").click(function() {
        $(".top").animate({ top: '-=150px'}, 2000);
        $(".left").fadeTo(1000,1, function() {$(this).show()}).animate({left:'+=150px'},1000);
        $(".right").show();
        $(".bottom").show();
    });
//    $(".right").click(function() {
//        $(this).hide();
//    });
//    $(".left").click(function() {
//        $(".right").show();
//    });
});
//http://css-tricks.com/almanac/properties/t/transition/
//http://stackoverflow.com/questions/1251300/how-to-run-two-jquery-animations-simultaneously
//http://stackoverflow.com/questions/10473572/execute-multiple-jquery-effects-on-the-same-element-in-parallel