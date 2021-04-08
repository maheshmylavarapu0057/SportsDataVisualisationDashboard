points=[]
cnt_player=0;
heatmapInstance1=null;
heatmapInstance2=null;
datame=[];
left=0;
right=45;
var player_ref="";

for(var i=0;i<10;i++)
{
	datame.push([i,i,i]);
}

function heat_gen(player_ref,cnt_player,left,right)
{
	points=[]
	if (cnt_player==1)
	{
		if (heatmapInstance1==null)
			{		
			heatmapInstance1 = h337.create({
				container: document.querySelector('#heats'),
				radius:30  
				});
			}
			  $.getJSON("../json/player.json", function(data) {  
				
				var disc = data.slice(left*5,right*5)
				console.log(disc)
				$.each(disc, function(key, value){
					var p=value['pid'];
					console.log(p);
					if (p==player_ref){
						
						//console.log(p);
						  var point=
							{
							  x : Math.floor(value['x']),
							  y : Math.floor(value['y'])-200,
							  value:1 
							};
							points.push(point)
							
					}
				});
				//console.log(points)
			var data = { 
			  max: 1, 
			  data: points 
			};
			
			heatmapInstance1.setData(data);
			  });
	}
	
	
	
	
	
}
function heat_generate(player_ref,cnt_player,left,right)
{
	points=[]
	if (cnt_player==1)
	{
		if (heatmapInstance1==null)
			{		
			heatmapInstance1 = h337.create({
				container: document.querySelector('#heats'),
				radius:30  
				});
			}
			
			//	var test=console.log(data[0].team1.x1);
			
			  $.getJSON("../json/player.json", function(data) {  
				
				var disc = data.slice(left*5,right*5)
				console.log(disc)
				$.each(disc, function(key, value){
					var p=value['pid'];
					//console.log(p);
					if (p==player_ref){
						
						//console.log(p);
						  var point=
							{
							  x : Math.floor(value['x']),
							  y : Math.floor(value['y']),
							  value:1 
							};
							points.push(point)
							
					}
				});
				//console.log(points)
			var data = { 
			  max: 1, 
			  data: points 
			};
			
			heatmapInstance1.setData(data);
			  });
	}
	
	
	
	
	
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
				 
				  left=numberS[0].value;
				  right=numberS[1].value;
				  //console.log(numberS[0].value,numberS[1].value);
				  heat_generate(player_ref,cnt_player,left,right);
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
				  
				  left=numberS[0].value;
				  right=numberS[1].value;
				  //console.log(numberS[0].value,numberS[1].value);
				  heat_generate(player_ref,cnt_player,left,right);
				}
			  });
			
            $("#p2").click(function() {
							myfunction(datame);
            }); 
			$("#p3").click(function() {
				
								 var text=$("#p3").attr("value");
								 player_ref=text;
								 cnt_player=cnt_player+1;
								 if (cnt_player==1){
								 heat_generate(player_ref,cnt_player,left,right);
								 }
															
								
                //$(this).fadeOut(); 
            });
			$("#p4").click(function() {
				
								 var text=$("#p4").attr("value");
								 player_ref=text;
								 cnt_player=cnt_player+1;
								 if (cnt_player==1){
								 heat_generate(player_ref,cnt_player,left,right);
								 }
								
															
								
                //$(this).fadeOut(); 
            });
			$("#p5").click(function() {
				
								var text=$("#p4").attr("value");
								 player_ref=text;
								 cnt_player=cnt_player+1;
								if (cnt_player==1){
								 heat_generate(player_ref,cnt_player,left,right);
								 }
								 							
								
                //$(this).fadeOut(); 
            });
			$("#p6").click(function() {
				
								 var text=$("#p4").attr("value");
								 player_ref=text;
								 cnt_player=cnt_player+1;
								 if (cnt_player==1){
								 heat_generate(player_ref,cnt_player,left,right);
								 }
															
								
                //$(this).fadeOut(); 
            });
			$("#p7").click(function() {
				
								 var text=$("#p4").attr("value");
								 player_ref=text;
								 cnt_player=cnt_player+1;
								if (cnt_player==1){
								 heat_generate(player_ref,cnt_player,left,right);
								 }
								 							
								
                //$(this).fadeOut(); 
            });
			$("#p8").click(function() {
				
								var text=$("#p4").attr("value");
								 player_ref=text;
								 cnt_player=cnt_player+1;
								if (cnt_player==1){
								 heat_generate(player_ref,cnt_player,left,right);
								 }
								 							
								
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
				
								
							if (heatmapInstance1!=null)
								{
										var canvas = heatmapInstance1._renderer.canvas;
										//remove the canvas from DOM
										$(canvas).remove();
										
										heatmapInstance1 = null;
										//$.removeCookie('') 
								}
								
							if (heatmapInstance2!=null)
								{
										var canvas = heatmapInstance2._renderer.canvas;
										//remove the canvas from DOM
										$(canvas).remove();
										
										heatmapInstance2 = null;
										//$.removeCookie('') 
								}
								points=[]
								cnt_player=0;
								
								
								

                //$(this).fadeOut(); 
            });
			
			
			
			
			$("#sub").click(function() {
				
			  $.getJSON("../json/player.json", function(data) {  
				
				var test=console.log(data[0].team1.x1);
            });
			
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
