$(document).ready(function() {
    console.log( "ready!" );

    for (i=0; i<16; i++) {
      $(".container").append('<div class="row"></div>');
    }
    for (i=0; i<16; i++) {
          $(".row").append('<div class="square"></div>');
    }

    $(".square").mouseover(function () {
      $(this).addClass("color"); 

    });
});
