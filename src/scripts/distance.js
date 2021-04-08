
points = []
cnt_player = 0;
heatmapInstance1 = null;
heatmapInstance2 = null;
datame = [];
left = 0;
right = 45;
var player_ref = "";
teamtype = 0;
for (var i = 0; i < 10; i++) {
    datame.push([i, i, i]);
}

$(document).ready(function () {
    $("#teamtotalpoints").click(function () {
        left = 0;
        right = 90;
        heat_generate3(left, right);
        cnt_player = 1;
    });
});


function drawCoordinates2(x1, y1, x2, y2) {
    var pointSize = 3; // Change according to the size of the point.
    var ctx = document.getElementById("gameCanvas").getContext("2d");


    ctx.fillStyle = "#ff2626"; // Red color
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

}
function drawCoordinates(x, y) {
    var pointSize = 3; // Change according to the size of the point.
    var ctx = document.getElementById("gameCanvas").getContext("2d");


    ctx.fillStyle = "#ff2626"; // Red color

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize * 3, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
}
function heat_generate3(left, right) {
    points = []
    var img = $(this).attr('css/c2.jpg');
    var canvas = document.getElementById("#gameCanvas");
    var ctx = document.getElementById("gameCanvas").getContext("2d");

    ctx.clearRect(0, 0, 14000, 20000);
    //$('#gameCanvas').css("background-image", "url('css/c2.jpg')");
    //  $("gameCanvas").css("background","url('css/messi.png')");
    //<canvas id="gameCanvas" width="1400"  height="800%" style="background:url('css/c2.jpg')">

    $.getJSON("../json/playerme.json", function (data) {

        var disc = data.slice(left * 3, right * 3)

        $.each(disc, function (key, value) {
            var x_find = "ballx";
            var y_find = "bally";
            var point =
            {
                x: Math.floor(value[x_find]),
                y: Math.floor(value[y_find]),
                value: 1
            };
            drawCoordinates(point.x, point.y);
        });
    });
}

$(document).ready(function () {
    var parent = document.querySelector(".price-slider");
    if (!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function (el) {
        el.oninput = function () {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;

            left = numberS[0].value;
            right = numberS[1].value;
            heat_generate3(left, right);
        }
    });

    numberS.forEach(function (el) {
        el.oninput = function () {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

            left = numberS[0].value;
            right = numberS[1].value;
            heat_generate3(left, right);

        }
    });
});

$(document).ready(function () {
    $("#gameCanvas").click(function (e) {
        left = 0;
        var rect = document.getElementById("gameCanvas").getBoundingClientRect();
        var x1 = (event.clientX-280)*(800/360);
        var y1 = (event.clientY-138)*(800/360);
        //var y1 = (event.clientY-rect.top)*(800/360);
        //var x1 = (event.clientX-rect.left)*(800/360);
        
        var canvas = document.getElementById("#gameCanvas");
        var ctx = document.getElementById("gameCanvas").getContext("2d");
        console.log(x1,y1);
        x=x1;
        y=y1;
        ctx.clearRect(0, 0, 14000, 20000);
        //drawCoordinates(x,y);
        $.getJSON("../json/playerme.json", function (data) {

            var disc = data.slice(left * 3, right * 3)
            prevx=prevy=curx=cury=0;
            $.each(disc, function (key, value) {
                var x_find = "ballx";
                var y_find = "bally";
                prevx=curx;
                prevy=cury;
                var point =
                {
                    x: Math.floor(value[x_find]),
                    y: Math.floor(value[y_find]),
                    value: 1
                };
                curx=point.x;
                cury=point.y;
               //console.log(Math.abs(curx-x1));
                if(Math.abs(curx-x1)<25&&Math.abs(cury-y1)<25)
                {
                 console.log("hi");  
                drawCoordinates(point.x, point.y);
                drawCoordinates(prevx, prevy);
                drawCoordinates2(prevx, prevy,point.x,point.y);

            }
            });
        });

    });
});
