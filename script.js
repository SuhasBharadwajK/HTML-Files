$(document).ready(function() {
//    $("#top").mouseenter(function() {
//        $(this).animate({
//            width: '+=100em',
//            height: '+=100em'
//        });
//    });
//    $("#top").mouseleave(function() {
//        $(this).animate({
//            width: '-=100em',
//            height: '-=100em'
//        });
//    });
    $("#top").click(function() {
        //$("#right").animate({ right : '-=500px'},3000, function() { $(this).fadeOut() {400, ease ,function() {$(this).hide()}}});
        //$("#right").fadeOut(3000,"linear", function() { $(this).animate({right:'-=500px'},3000)});
        //$("#right").hide().show("fade", {},  {duration:1200}).effect("bounce", { times:3 },  { duration:400}).dequeue();
        //$("#right").fadeOut
        $("#right")
            .animate( {opacity: 0.25, right : '-=150px'},1000)
            //.animate( {opacity: 0.25, right: '-=150px', /*height: "toggle"*/});
            .fadeTo(1000,0, function() {$(this).hide()});
        $("#left")
            .animate( {opacity: 0.25, right : '-=150px', 1000)
    });
    $("#right").click(function() {
        $(this).hide();
    });
    $("#left").click(function() {
        $("#right").show();
    });
});
//http://css-tricks.com/almanac/properties/t/transition/
//http://stackoverflow.com/questions/1251300/how-to-run-two-jquery-animations-simultaneously
//http://stackoverflow.com/questions/10473572/execute-multiple-jquery-effects-on-the-same-element-in-parallel