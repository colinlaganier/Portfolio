$(document).ready(function() {
    $(".stripes-title").animate({
        height: $("#title-height").height()
    },
    'slow');
});

$(window).on('resize', function(){
    if ( $("#title-height").height() != $(".stripes-title").height()){
        $(".stripes-title").animate({
            height: $("#title-height").height()
        },"slow");
    }
});