/*
     Name: Patrick Little
     Date: 7/7/15
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here


window.onload = function() {
    if(Modernizr.canvas){

        var theCanvas = document.getElementById("Canvas1");
        var ctx = theCanvas.getContext("2d");
        ctx.font = "10pt Georgia";
        ctx.fillText("Canvas is supported!", 1, 290);
    }

    var theCanvas = document.getElementById("Canvas1");
    //theCanvas.width = 150;
    //theCanvas.height = 150;

    if (theCanvas) {
        //Get Context
        var ctx = theCanvas.getContext("2d");

        if (ctx) {

            //Draw Here

            //Draw a stroked Rectangle
            ctx.strokeStyle = "black";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 5;

            //Draw the rectangle
            //strokeRect(posX, posY, Width, Height)
            ctx.strokeRect(0, 0, 50, 100);
            ctx.fillRect(0, 0, 50, 100);


        }


    }


    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/


//Draw Circle here
    if(Modernizr.canvas){
        var theCanvas2 = document.getElementById("Canvas2");
        var ctx2 = theCanvas2.getContext("2d");
        ctx2.font = "10pt Georgia";
        ctx2.fillText("Canvas is supported!", 1, 290);
    }


    var theCanvas2 = document.getElementById('Canvas2');
    if (theCanvas2 && theCanvas2.getContext) {
        var ctx2 = theCanvas2.getContext("2d");
        if (ctx2) {
            ctx2.strokeStyle= "black";
            ctx2.fillStyle = "rgba(255,0,0,.5)";
            ctx2.lineWidth = 5;

            //Stroke A circle Arc
            ctx2.beginPath();
            //arc(x,y, r, sA, eA, Clockwise or counter);
            ctx2.arc(50,50, 30, 4 * Math.PI , false);
            ctx2.stroke();
            ctx2.fill();

        }
    }


    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/


//Draw Star here

    if(Modernizr.canvas){
        var theCanvas3 = document.getElementById("Canvas3");
        var ctx3 = theCanvas3.getContext("2d");
        ctx3.font = "10pt Georgia";
        ctx3.fillText("Canvas is supported!", 1, 290);
    }

    var theCanvas3 = document.getElementById('Canvas3');
    if (theCanvas3 && theCanvas3.getContext) {
        var ctx3 = theCanvas3.getContext("2d");
        if (ctx3) {
            ctx3.strokeStyle = "blue";
            ctx3.fillStyle= "red";
            ctx3.lineWidth = 5;

            //Draw an open path
            ctx3.beginPath();
            ctx3.moveTo(100,100);
            ctx3.lineTo(50,230);
            ctx3.lineTo(180,150);
            ctx3.lineTo(20,150);
            ctx3.lineTo(160,230);
            ctx3.closePath();
            ctx3.fill();
            ctx3.stroke();



        }
    }

    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/

//Draw Umbrella top here

    if(Modernizr.canvas){
        var theCanvas4 = document.getElementById("Canvas4");
        var ctx4 = theCanvas4.getContext("2d");
        ctx4.font = "10pt Georgia";
        ctx4.fillText("Canvas is supported!", 1, 290);
    }

    var theCanvas4 = document.getElementById('Canvas4');
    if (theCanvas4 && theCanvas4.getContext) {
        var ctx4 = theCanvas4.getContext("2d");
        if (ctx4) {
            ctx4.strokeStyle = "blue";
            ctx4.fillStyle = "green";
            ctx4.lineWidth = 5;

            ctx4.beginPath();
            ctx4.arc(175, 125, 120, 0, Math.PI, true);
            ctx4.bezierCurveTo(70,100, 120, 100, 130, 125);
            ctx4.bezierCurveTo(130,100, 210, 100, 210, 125);
            ctx4.bezierCurveTo(200,100, 290, 100, 295, 125);
            ctx4.closePath();
            ctx4.stroke();
            ctx4.fill();





        }
    }

    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

//Draw text here
    if(Modernizr.canvas){
        var theCanvas5 = document.getElementById("Canvas5");
        var ctx5 = theCanvas5.getContext("2d");
        ctx5.font = "10pt Georgia";
        ctx5.fillText("Canvas is supported!", 1, 290);
    }

    var theCanvas5 = document.getElementById('Canvas5');
    if (theCanvas5 && theCanvas5.getContext) {
        var ctx5 = theCanvas5.getContext("2d");
        if (ctx5) {
            var theString = "This is a cool feature!";

            //Simple text using defaults
            ctx5.fillText(theString, 90,50);

            //Style the font
            ctx5.font = "25pt Georgia";
            ctx5.fillStyle = "red";
            ctx5.fillText(theString, 60, 120);

            //Stroke and Fill Text
            ctx5.font="20pt Verdana";
            ctx5.fillStyle = "green";
            ctx5.strokeStyle = "rgba(200, 255, 0, .5)";
            ctx5.fillText(theString, 20, 220);
            ctx5.strokeText(theString, 20, 220);


        }
    }

    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

//Draw images here

    if(Modernizr.canvas){
        var theCanvas6 = document.getElementById("Canvas6");
        var ctx6 = theCanvas6.getContext("2d");
        ctx6.font = "10pt Georgia";
        ctx6.fillText("Canvas is supported!", 1, 2990);
    }

    var theCanvas6 = document.getElementById('Canvas6');
    if (theCanvas6 && theCanvas6.getContext) {
        var ctx6 = theCanvas6.getContext("2d");
        if (ctx6) {

            var  srcImg = document.getElementById("img1");

            ctx6.drawImage(srcImg, 50,50);
            ctx6.drawImage(srcImg, 1000, 1200, 1650, 544);
            ctx6.drawImage(srcImg, 650, 500, 2500, 2500,500, 2000,500, 1000 );



        }
    }

    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here
    if(Modernizr.canvas){
        var theCanvas7 = document.getElementById("Canvas7");
        var ctx7 = theCanvas7.getContext("2d");
        ctx7.font = "10pt Georgia";
        ctx7.fillText("Canvas is supported!", 1, 290);
    }

    var theCanvas7 = document.getElementById('Canvas7');
    if (theCanvas7 && theCanvas7.getContext) {
        var ctx7 = theCanvas7.getContext("2d");
        if (ctx7) {

            //Car
            ctx7.strokeStyle= "black";
            ctx7.fillStyle = "rgba(255,255,255,.5)";
            ctx7.lineWidth = 10;

            //Stroke A circle Arc
            ctx7.beginPath();
            //arc(x,y, r, sA, eA, Clockwise or counter);
            ctx7.arc(100,200, 30, 4 * Math.PI , false);
            ctx7.stroke();
            ctx7.fill();

            //Stroke A circle Arc
            ctx7.beginPath();
            //arc(x,y, r, sA, eA, Clockwise or counter);
            ctx7.arc(300,200, 30, 4 * Math.PI , false);
            ctx7.stroke();
            ctx7.fill();

            //Draw a stroked Rectangle
            ctx7.strokeStyle = "black";
            ctx7.fillStyle = "red";
            ctx7.lineWidth = 5;

            //Draw the rectangle
            //strokeRect(posX, posY, Width, Height)
            ctx7.strokeRect(50, 120, 300, 50);
            ctx7.fillRect(50, 120, 300, 50);

            //pole
            ctx7.strokeStyle = "black";
            ctx7.fillStyle = "grey";
            ctx7.lineWidth = 5;
            ctx7.strokeRect(500, 50, 10, 80);
            ctx7.fillRect(500, 50, 10, 80);

            //Sign
            ctx7.strokeStyle = "black";
            ctx7.fillStyle = "white";
            ctx7.lineWidth = 5;
            ctx7.strokeRect(480, 10, 50, 50);
            ctx7.fillRect(480, 10, 50, 50);

            var theStrings = "70mph";
            //Stroke and Fill Text
            ctx7.font="10pt Verdana";
            ctx7.fillStyle = "black";
            ctx7.strokeStyle = "rgba(0, 0, 0, .5)";
            ctx7.fillText(theStrings, 482, 42);
            ctx7.strokeText(theStrings, 482, 42);

            //billboard
            //Draw a stroked Rectangle
            ctx7.strokeStyle = "black";
            ctx7.fillStyle = "blue";
            ctx7.lineWidth = 5;

            //pole
            ctx7.strokeStyle = "black";
            ctx7.fillStyle = "grey";
            ctx7.lineWidth = 5;
            ctx7.strokeRect(870, 100, 10, 80);
            ctx7.fillRect(870, 100, 10, 80);


            //billboard
            //Draw a stroked Rectangle
            ctx7.strokeStyle = "black";
            ctx7.fillStyle = "blue";
            ctx7.lineWidth = 5;
            //Draw the rectangle sign
            //strokeRect(posX, posY, Width, Height)
            ctx7.strokeRect(700, 5, 350, 100);
            ctx7.fillRect(700, 5, 350, 100);


            //text for billboard
            var  srcImg1 = document.getElementById("img2");
            //1/11th original size
            ctx7.drawImage(srcImg1, 718, 4, 300, 98);

            ctx7.strokeStyle = "yellow";
            ctx7.fillStyle= "red";
            ctx7.lineWidth = 3;

            //Draw an open path
            ctx7.beginPath();
            ctx7.moveTo(75,130);
            ctx7.lineTo(62.5,162.5);
            ctx7.lineTo(95, 142.5);
            ctx7.lineTo(55,142.5);
            ctx7.lineTo(90,162.5);
            ctx7.closePath();
            ctx7.fill();
            ctx7.stroke();
        }
    }

}