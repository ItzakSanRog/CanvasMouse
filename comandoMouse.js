//Elements
var canvasObj = document.getElementById("lienzo");
var dibujo = canvasObj.getContext("2d");
var limpiarLienzo = document.getElementById("limpiarLienzo");
var grosorInput = document.getElementById("grosorInput");
var radioNegro = document.getElementById("radioNegro");
var radioNaranja = document.getElementById("radioNaranja");
var radioRosa = document.getElementById("radioRosa");

//EventListeners
canvasObj.addEventListener("mousedown",mouseDrawDown)
canvasObj.addEventListener("mousemove",mouseDraw)
limpiarLienzo.addEventListener("click",limpiar);

//Code
var grosor
var color ="black";
var xActual= canvasObj.width/2;
var yActual= canvasObj.height/2;

function mouseDrawDown(event){
    grosor = grosorInput.value;
    xActual = event.layerX;
    yActual = event.layerY;

    if(radioNegro.checked){
        color="black";
    }
    if(radioNaranja.checked){
        color="#ef941c";
    }
    if(radioRosa.checked){
        color="#fc2ddd";
    }
}
function mouseDraw(event){
    if(event.buttons==1){
        dibujarLinea(color,xActual,yActual,event.layerX, event.layerY)
        xActual = event.layerX;
        yActual = event.layerY;
    }

}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    dibujo.beginPath();
    dibujo.lineWidth = grosor;
    dibujo.strokeStyle = color;
    dibujo.moveTo(x_inicial, y_inicial);
    dibujo.lineTo(x_final, y_final);
    dibujo.stroke();
    dibujo.closePath();
}

function limpiar(){
    dibujo.clearRect(0, 0, canvasObj.width, canvasObj.height);
    dibujo.restore();
    xActual= canvasObj.width/2;
    yActual= canvasObj.height/2;
}