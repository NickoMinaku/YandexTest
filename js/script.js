$(document).ready(function(){
    $(window).resize(function(){
        if($(window).width() <= 600){
            $('#pictures').slick({
                variableWidth: true,
                slidesToShow: 1,
                infinite: false
            });
        }
        else {
            $('#pictures').slick("unslick");
        }
    })
    if($(window).width() <= 600){
        $('#pictures').slick({
            variableWidth: true,
            slidesToShow: 1,
            infinite: false
        });
        $('#pictures').slick("setPosition");
    }
    else {
        $('#pictures').slick("unslick");
    }
});