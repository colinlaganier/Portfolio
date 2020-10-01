$(document).ready(function() {
    // if ($( window ).width()<600px){
    // }
    console.log($( window .css( "width" )));
    
    $(".stripes").animate({
        height:'100%'
    },
    'slow');
    $(".stripes-title-main").animate({
        height: $("#title-height").height()
    },
    'slow');

    $("#projects-button").click(function() {
        $('html,body').animate({
            scrollTop: $("#placeholder").offset().top
          },
          'slow');
      });

    // $(".warning-background").click(function() {
    //     $(".phone-warning").hide()
    //     console.log("closing popup")
    // })
});