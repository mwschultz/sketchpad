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
var x=prompt("How many squares on each side should the new canvas be? Please enter a number.");
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

$(this).css("background-color","transparent"); /*First, we set the css background color to transparent, then we add in a new color.*/
$(this).css("background-color","black");}

else {
$(this).css("background-color","transparent"); /*First, we set the css background color to transparent, then we add in a new color.*/
var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); /*The random number is included INSIDE the function, so that every mouse-over, you're getting a new random color!*/
$(this).css("background-color",randomColor);}

});}




});
