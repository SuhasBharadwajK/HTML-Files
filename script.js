$(document).ready(function() {
    $("#top").mouseenter(function() {
        $(this).animate({
            width: '+=100em',
            height: '+=100em'
        });
    });
    $("#top").mouseleave(function() {
        $(this).animate({
            width: '-=100em',
            height: '-=100em'
        });
    });
});
//http://css-tricks.com/almanac/properties/t/transition/