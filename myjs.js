//Declear necessary variables
const ctx = canvas.getContext("2d");
let isPainting = false;
let draw_color = "black";
let draw_size = 1;
//Fix canvas size
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-100;

function start(e){
    isPainting = true;
    ctx.beginPath();
    draw(e);
}

function end(){
    isPainting = false;
    ctx.stroke();
}

function draw(e) {
    if(!isPainting) return;

    ctx.strokeStyle = draw_color;
    ctx.lineWidth = draw_size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.lineTo(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);
    ctx.stroke(); 
}
//Track mouse input/movement
canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", end);
canvas.addEventListener("mousemove", draw);
//Change color
document.querySelectorAll("#change_color > div")[0].addEventListener("click", () => { draw_color = "black"; ctx.globalCompositeOperation = "source-over"; })
document.querySelectorAll("#change_color > div")[1].addEventListener("click", () => { draw_color = "green"; ctx.globalCompositeOperation = "source-over"; })
document.querySelectorAll("#change_color > div")[2].addEventListener("click", () => { draw_color = "blue"; ctx.globalCompositeOperation = "source-over"; })
document.querySelectorAll("#change_color > div")[3].addEventListener("click", () => { draw_color = "red"; ctx.globalCompositeOperation = "source-over"; })
//Change marker size
document.querySelectorAll("#marker_size > div")[0].addEventListener("click", () => { draw_size = 1; })
document.querySelectorAll("#marker_size > div")[1].addEventListener("click", () => { draw_size = 5; })
document.querySelectorAll("#marker_size > div")[2].addEventListener("click", () => { draw_size = 15; })
//Eraser
document.querySelector("#eraser").addEventListener("click", () => { ctx.globalCompositeOperation = "destination-out"; })