//Project to set up a grid to make Pixel Art

//define variables
var height, width, color;


//Call makeGrid when the grid height and width are submitted
$('#sizePicker').submit(function (event){
    event.preventDefault();
    height=$('#inputHeight').val();
    width=$('#inputWidth').val();
    makeGrid(height,width);
})

//Set up the grid "canvas" as a table
function makeGrid(height,width) {
    //remove grid before creating a new one if one exists
    $('tr').remove(); 
    for (let i = 1; i <= height; i++) {
        $('#pixelCanvas').append('<tr id=table' + i+'></tr>')
        for (let j = 1; j <= width; j++) {
            $('#table' + i).append('<td></td>')
        }
    }
    //Add color when clicked & remove if clicked again
    $('td').click(function addColor() {
        color=$('#colorPicker').val();
        
        //"this" keyword refers to an object which is executing the current bit of javascript code
        if ($(this).attr('style')){
            $(this).removeAttr('style')
       }    else{
           $(this).attr('style', 'background-color:' + color);
       }
    })
}
