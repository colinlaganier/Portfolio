$(document).ready(function() {
    $("#projects-button").click(function() {
        $('html,body').animate({
            scrollTop: $("#test").offset().top
          },
          'slow');
      });
});