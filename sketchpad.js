$(document).ready(function() {
    console.log( "ready!" );


    for (i=0; i<16; i++) {
      $(".grid").append('<tr class="row"></tr>');
    }

    for (i=0; i<16; i++) {
      $(".row").append('<td class="cell"></td>');
    }


    $( "#clear-grid" ).click(function() {
    $(".cell").removeClass("color");

    });

    $("#remake-grid").click(function() {
      var x=prompt("How many squares?");
      $(".grid").children('tr').remove();

      for (i=0; i<x; i++) {
        $(".grid").append('<tr class="row"></tr>');
      }

      for (i=0; i<x; i++) {
        $(".row").append('<td class="cell"></td>');
      }

      $(".cell").mouseover(function () {
        $(this).addClass("color");

      });

    });

    $(".cell").mouseover(function () {
      $(this).addClass("color");

    });


});
