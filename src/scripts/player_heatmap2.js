points = [];
heatmapInstance=null

$(document).ready(function() { 
            $("#p1").click(function() {
							points = [];
								if (heatmapInstance!=null)
								{
										var canvas = heatmapInstance._renderer.canvas;
										//remove the canvas from DOM
										$(canvas).remove();
										
										heatmapInstance = null;
										//$.removeCookie('') 
								}
								// now generate some random data
								else{
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
									
								
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
								}								
								
                //$(this).fadeOut(); 
            }); 
			$("#p2").click(function() {
				points = [];
								if (heatmapInstance!=null)
								{
										var canvas = heatmapInstance._renderer.canvas;
										//remove the canvas from DOM
										$(canvas).remove();
										
										heatmapInstance = null;
										//$.removeCookie('') 
								}
								else{
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
									
								//find corresponding canvas element

								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
									  var point2=
										{
										  x : Math.floor(value['x']),
										  y : Math.floor(value['y']),
										  value:1 
										};
										
										points.push(point2)
									});
									console.log(points)
								var data = { 
								  max: 1, 
								  data: points 
								};
								
								heatmapInstance.setData(data);
								  });
								}
								

                //$(this).fadeOut(); 
            });
			
        });