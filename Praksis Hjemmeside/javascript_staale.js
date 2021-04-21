// tok koden fra https://thoughtbot.com/blog/pong-clone-in-javascript

//er meget ny til javascript så fikk koden fra en nettside som forklarte det.

//kommer til og leke litt med denne koden, men kommer ikke til og pushe det

var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)}

//    var aminate = function(callback) {
//        window.setTimeout(callback, 1000/60)
//    }

    var canvas = document.createElement('canvas');
    //var canvas = document.getElementById('pong');
    var width = 400;
    var height = 400;
    console.log(canvas);
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');

//console.log(animate);

var step = function(){
    //context.fillStyle = "#FF00FF";
    //context.fillRect(0, 0, width, height);
    //update();
    render();
    }

window.onload = function() {
    console.log(canvas);
    document.body.appendChild(canvas);

    animate(step);
    };

var render = function(){
    console.log("render");
    context.fillStyle = "#FF00FF";
    context.fillRect(0, 0, width, height);
}        
    


var update = function(){

}

