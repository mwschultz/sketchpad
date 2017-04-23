$(document).ready(function() { /*Get the document ready*/
    console.log( "ready!" );

function createTable(x) { /*This is the create Table Function. It will automatically create a 16x16 table, if the user hasn't entered anything yet. */
  if (x==null) {
    for (i=0; i<16; i++) {
      $(".grid").append('<tr class="row"></tr>');
    }

    for (i=0; i<16; i++) {
      $(".row").append('<td class="cell"></td>');
    }
}

else { /*If the user has entered in a value, the table is resized to that value/*/
  for (i=0; i<x; i++) {
    $(".grid").append('<tr class="row"></tr>');
  }

  for (i=0; i<x; i++) {
    $(".row").append('<td class="cell"></td>');
  }
}
}

$("#remake-grid").click(function() { /*If the user clicks on the Remake Grid function, the table is re-created AND the add color function is called, again*/
var x=prompt("How many squares?");
$(".grid").empty(); /*This empties out all the existing cells in the table*/
createTable(x);
addColor();
});

$("#clear-grid" ).click(function() { /*This function here will CLEAR the grid (leave the grid intact, but clear out color)*/
$(".cell").css("background-color","transparent");
});


createTable(); /*Call the create Table function after page is loaded*/
addColor(); /*Call the add color function after the page is loaded*/

function addColor() { /*This is the add Color function. If the checkbox is Black, it adds black color. If not, a random color.*/
$(".cell").mouseover(function() {

if($('input[name=Fill]:checked').val() == 'Black') {

$(this).css("background-color","transparent");
$(this).css("background-color","black");}

else {
$(this).css("background-color","transparent");
var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); /*note that this is defined in the function*/
$(this).css("background-color",randomColor);}

});}




});
