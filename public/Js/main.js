$(document).ready(function() {
        $(".stripes").animate({
            height:'100%'
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