var width=screen.width;
var newWidth=screen.width - 70;
var newHeight=screen.width - 300;
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

if (width < 992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        color=document.getElementById("color").value;
        width=document.getElementById("width").value;
       last_position_of_x = e.touches[0].clientX = canvas.offsetLeft;
       last_position_of_y = e.touches[0].clientX = canvas.offsettop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_position_of_x, last_position_of_y);

        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    function clearArea(){
        ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }