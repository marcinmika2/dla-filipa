   $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.a').fadeIn();
     }
    else
     {
      $('.a').fadeOut();
     }
 });