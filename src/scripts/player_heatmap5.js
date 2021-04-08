points = [];
heatmapInstance=null
datame=[];
for(var i=0;i<10;i++)
{
	datame.push([i,i,i]);
}

$(document).ready(function() { 

				var parent = document.querySelector(".price-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });
		
		
		
		
			
            $("#p2").click(function() {
							myfunction(datame);
            }); 
			$("#p3").click(function() {
				
								 var text=$("#p3").attr("value");
								 console.log("add");
								 console.log(text);
								 console.log("add");
								if (heatmapInstance==null)
								{		
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
								}
								
								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
										var p=value['pid'];
										console.log(p);
										if (p==text){
											
										//console.log(p);
									  var point=
										{
										  x : Math.floor(value['x']),
										  y : Math.floor(value['y'])-200,
										  value:1 
										};
										points.push(point)}
									});
									//console.log(points)
								var data = { 
								  max: 1, 
								  data: points 
								};
								
								heatmapInstance.setData(data);
								  });
															
								
                //$(this).fadeOut(); 
            });
			$("#p4").click(function() {
				
								 var text=$("#p4").attr("value");
								 console.log("add");
								 console.log(text);
								 console.log("add");
								if (heatmapInstance==null)
								{		
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
								}
								
								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
										var p=value['pid'];
										console.log(p);
										if (p==text){
											
										//console.log(p);
									  var point=
										{
										  x : Math.floor(value['x']),
										  y : Math.floor(value['y'])-200,
										  value:1 
										};
										points.push(point)}
									});
									//console.log(points)
								var data = { 
								  max: 1, 
								  data: points 
								};
								
								heatmapInstance.setData(data);
								  });
															
								
                //$(this).fadeOut(); 
            });
			$("#p5").click(function() {
				
								 var text=$("#p5").attr("value");
								 console.log("add");
								 console.log(text);
								 console.log("add");
								if (heatmapInstance==null)
								{		
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
								}
								
								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
										var p=value['pid'];
										console.log(p);
										if (p==text){
											
										//console.log(p);
									  var point=
										{
										  x : Math.floor(value['x']),
										  y : Math.floor(value['y'])-200,
										  value:1 
										};
										points.push(point)}
									});
									//console.log(points)
								var data = { 
								  max: 1, 
								  data: points 
								};
								
								heatmapInstance.setData(data);
								  });
															
								
                //$(this).fadeOut(); 
            });
			$("#p6").click(function() {
				
								 var text=$("#p6").attr("value");
								 console.log("add");
								 console.log(text);
								 console.log("add");
								if (heatmapInstance==null)
								{		
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
								}
								
								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
										var p=value['pid'];
										console.log(p);
										if (p==text){
											
										//console.log(p);
									  var point=
										{
										  x : Math.floor(value['x']),
										  y : Math.floor(value['y'])-200,
										  value:1 
										};
										points.push(point)}
									});
									//console.log(points)
								var data = { 
								  max: 1, 
								  data: points 
								};
								
								heatmapInstance.setData(data);
								  });
															
								
                //$(this).fadeOut(); 
            });
			$("#p7").click(function() {
				
								 var text=$("#p7").attr("value");
								 console.log("add");
								 console.log(text);
								 console.log("add");
								if (heatmapInstance==null)
								{		
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
								}
								
								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
										var p=value['pid'];
										console.log(p);
										if (p==text){
											
										//console.log(p);
									  var point=
										{
										  x : Math.floor(value['x']),
										  y : Math.floor(value['y'])-200,
										  value:1 
										};
										points.push(point)}
									});
									//console.log(points)
								var data = { 
								  max: 1, 
								  data: points 
								};
								
								heatmapInstance.setData(data);
								  });
															
								
                //$(this).fadeOut(); 
            });
			$("#p8").click(function() {
				
								 var text=$("#p8").attr("value");
								 console.log("add");
								 console.log(text);
								 console.log("add");
								if (heatmapInstance==null)
								{		
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
								}
								
								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
										var p=value['pid'];
										console.log(p);
										if (p==text){
											
										//console.log(p);
									  var point=
										{
										  x : Math.floor(value['x']),
										  y : Math.floor(value['y'])-200,
										  value:1 
										};
										points.push(point)}
									});
									//console.log(points)
								var data = { 
								  max: 1, 
								  data: points 
								};
								
								heatmapInstance.setData(data);
								  });
															
								
                //$(this).fadeOut(); 
            });
			$("#fff").click(function() {
								console.log("in ff function")
								if (heatmapInstance==null)
								{		
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
								}
								
								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
									  var point=
										{
										  x : Math.floor(value['x'])-200,
										  y : Math.floor(value['y']),
										  value:1 
										};
										points.push(point)
									});
									console.log(points)
								var data = { 
								  max: 1, 
								  data: points 
								};
								
								heatmapInstance.setData(data);
								  });
															
								
                //$(this).fadeOut(); 
            });
			$("#clear").click(function() {
				
								
							if (heatmapInstance!=null)
								{
										var canvas = heatmapInstance._renderer.canvas;
										//remove the canvas from DOM
										$(canvas).remove();
										
										heatmapInstance = null;
										//$.removeCookie('') 
								}
								points=[]
								
								

                //$(this).fadeOut(); 
            });
			
			
			function myfunction(datame)
			{
				alert(datame.length);
								if (heatmapInstance==null)
								{		
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
								}
								
								   
								  
									for(var i=0;i<10;i++)
									{
										console.log(datame[i][0]);
										console.log(datame[i][1]);
										console.log(datame[i][2]);
									  var point=
										{
										  x : datame[i][0],
										  y : datame[i][1],
										  value:datame[i][2] 
										};
										console.log(point);
										points.push(point);
									}
									
								var data = { 
								  max: 10, 
								  data: points 
								};
								
								heatmapInstance.setData(data);
								  
															
								
                //$(this).fadeOut(); 
			}
			
			
			
        });