jQuery(function($){
    // Sticky Header
    $(window).scroll(function() {
      if ($(this).scrollTop() > 120){
        $('#primary-nav').addClass("sticky-nav");
      }
      else{
        $('#primary-nav').removeClass("sticky-nav");
      }
  });
});