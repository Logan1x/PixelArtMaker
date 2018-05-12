$(".makeGrid").click(function(e) {
    e.preventDefault(); //stops default action on every page load.
    removeTable();
    let row = $("#inputHeight").val(); //capturing height
    let column = $("#inputWeight").val(); //capturing weight
    for (var i = 0; i < row; i++) {
    $("#pixelCanvas").append("<tr></tr>");
    // add table rows
    for (var j = 0; j < column; j++) {
    $("#pixelCanvas")
    .children()
    .last()
    .append("<td></td>");
    //add table data
    }
    }
   });

//color capturing
$("#pixelCanvas").on("click", "td", function() {
    let pickcolor = $("#colorPicker").val();
    $(this).css("background-color", pickcolor);
   });