$(document).ready(function() {
    $('#first').mouseenter(function() {
        $(this).animate({
            width: '+=100em'
            height: '+=100em'
        });
    });
    $('#first').mouseleave(function() {
        $(this).animate({
            width: '-=100em'
            height: '-=100em'
        });
    });
});