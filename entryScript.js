function fading() {
    $('#page').css("animation","fadeIn .7s ease-in-out");
    $('.link').click(function(event) {
      event.preventDefault();
      newLocation = $(this).attr("href");
      if(window.location!=newLocation){
        $('#page').css("animation","fadeOut .7s ease-in-out");
        setTimeout(function(){
            window.location = newLocation;
          }, 540);
      }
    });
  };