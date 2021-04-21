// tok koden fra https://thoughtbot.com/blog/pong-clone-in-javascript

//er meget ny til javascript så fikk koden fra en nettside som forklarte det.

//kommer til og leke litt med denne koden, men kommer ikke til og pushe det


var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)}

    var canvas = document.createElement('canvas');
    var width = 400;
    var height = 400;
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');

    var render = function(){
        console.log("render");
        context.fillStyle = "#FF00FF";
        context.fillRect(0, 0, width, height);
    }        
    
var step = function(){
    //update();
    render();
    console.log("hola");
    animate(step);
    }

window.onload = function() {
    console.log(canvas);
    document.body.appendChild(canvas);
    animate(step);
    };


var update = function(){
    ball.update();
}

function Paddle(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.x_speed = 0;
    this.y_speed = 0;
}

Paddle.prototype.render = function(){
    context.fillStyle = "#0000FF";
    context.fillRect(this.x, this.y, this.width, this.height);
}

var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);

function Player(){
    this.paddle = new Paddle(175, 580, 50, 10);
}

function Computer(){
    this.computer = new Paddle(175, 10, 50, 10);
}

function Ball(x, y){
    this.x = x;
    this.y = y;
    this.x_speed = 0;
    this.y_speed = 3;
}

Ball.prototype.render = function(){
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false)
    context.fillStyle = "#000000";
}

var render = function(){
    console.log("render 2")
    context.fillStyle = "#FF00FF";
    context.fillRect(0, 0, width, height);
    player.render();
    computer.render();
    ball.render();
}   