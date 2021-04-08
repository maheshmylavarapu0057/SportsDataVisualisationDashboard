points = [];
heatmapInstance=null

$(document).ready(function() { 
            $("#p2").click(function() {
								
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
			$("#cp2").click(function() {
				
							 $('#p3').attr("value", "1");
							 $('#pp3').text("Ronaldo");
							 $('#pi3').attr("src", "images/ronaldo.jpg");

            });
			
			
			
        });