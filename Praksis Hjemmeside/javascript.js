// tok koden fra https://thoughtbot.com/blog/pong-clone-in-javascript

//er meget ny til javascript så fikk koden fra en nettside som forklarte det.

//kommer til og leke litt med denne koden, men kommer ikke til og pushe det

var aminate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)}

    var canvas = document.createElement;
    var width = 400;
    var height = 400;
    canvas.width = width;
    canvas.height = height;

    window.onload = function() {
        document.body.appendChild(canvas);
        animate(step);
      };

        var step(){
            update();
            render();
            animate(step);
        }


        var update = function(){

        }
