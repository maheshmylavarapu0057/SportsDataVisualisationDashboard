points = [];
heatmapInstance=null;
/*
window.onload = function() {

  // minimal heatmap instance configuration
var heatmapInstance = h337.create({
  // only container is required, the rest will be defaults
  container: document.querySelector('.heatmap'),
  radius:35
  
});

// now generate some random data


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

$( "#1" ).click(function() {
   // minimal heatmap instance configuration
var heatmapInstance = h337.create({
  // only container is required, the rest will be defaults
  container: document.querySelector('.heatmap'),
  radius:35
  
});

// now generate some random data


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
});
*/

$(document).ready(function() { 
            $("#1").click(function() {
								
								// now generate some random data
								var data = { 
								  max: 1, 
								  data: [] 
								};
								if (heatmapInstance==null)
								{heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
									heatmapInstance.setData({data:[]});
								
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
								else{
								//find corresponding canvas element
								var canvas = heatmapInstance._renderer.canvas;
								//remove the canvas from DOM
								$(canvas).remove();
								
								heatmapInstance = null;
								heatmapInstance.setData({data:[]});
								
								
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
									heatmapInstance.setData({data:[]});
								
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
			$("#2").click(function() {
								
								
								var data = { 
								  max: 1, 
								  data: [] 
								};
								if (heatmapInstance==null)
								{heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
									heatmapInstance.setData({data:[]});
								
								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
									  var point=
										{
										  x : Math.floor(value['x']),
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
								else{
								//find corresponding canvas element
								var canvas = heatmapInstance._renderer.canvas;
								//remove the canvas from DOM
								$(canvas).remove();
								
								heatmapInstance = null;
								heatmapInstance.setData({data:[]});
								
								
								heatmapInstance = h337.create({
									container: document.querySelector('.heatmap'),
									radius:30  
									});
									heatmapInstance.setData({data:[]});
								
								  $.getJSON("../json/player.json", function(data) {  
								  
									$.each(data, function(key, value){
									  var point=
										{
										  x : Math.floor(value['x']),
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
			
        });