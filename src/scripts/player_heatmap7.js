points = []
cnt_player = 0;
heatmapInstance1 = null;
heatmapInstance2 = null;
datame = [];
left = 0;
right = 45;
var player_ref = "";
teamtype=0;
for (var i = 0; i < 10; i++) {
	datame.push([i, i, i]);
}


function heat_generate2(teamtype,cnt_player, left, right) {
	points = []
	console.log("hisg")
	if (cnt_player == 1) {
		if (heatmapInstance1 == null) {
			heatmapInstance1 = h337.create({
				container: document.querySelector('#heats'),
				radius: 30
			});
		}

		//	var test=console.log(data[0].team1.x1);

		$.getJSON("../json/playerme.json", function (data) {

			var disc = data.slice(left * 3, right * 3)
			if(teamtype==0)
			{
			i=1;
			j=22;
			}
			if(teamtype==1)
			{
				i=1;
				j=11;
			}
			if(teamtype==2)
			{
				i=12;
				j=22;
			}
			for (i; i <= j; i++) {
				$.each(disc, function (key, value) {
					var x_find = "x" + String(i);
					var y_find = "y" + String(i);
					/*
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
							
					}*/
					var point =
					{
						x: Math.floor(value[x_find]),
						y: Math.floor(value[y_find]),
						value: 1
					};
					points.push(point)
				});
			}
			//console.log(points)
			var data = {
				max: 1,
				data: points
			};
			console.log("asf");


			heatmapInstance1.setData(data);
		});
	}





}




function heat_generate(player_ref, cnt_player, left, right) {
	points = []
	if (cnt_player == 1) {
		if (heatmapInstance1 == null) {
			heatmapInstance1 = h337.create({
				container: document.querySelector('#heats'),
				radius: 30
			});
		}

		//	var test=console.log(data[0].team1.x1);

		$.getJSON("../json/playerme.json", function (data) {

			var disc = data.slice(left * 3, right * 3)
			console.log(disc)
			$.each(disc, function (key, value) {
				var x_find = "x" + player_ref;
				var y_find = "y" + player_ref;
				/*
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
						
				}*/
				var point =
				{
					x: Math.floor(value[x_find]),
					y: Math.floor(value[y_find]),
					value: 1
				};
				points.push(point)
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


function go_heatmap() {



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
			//console.log(numberS[0].value,numberS[1].value);
			heat_generate(player_ref, cnt_player, left, right);
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
			//console.log(numberS[0].value,numberS[1].value);
			heat_generate(player_ref, cnt_player, left, right);
		}
	});

	$("#p1").click(function () {
		var text = $("#p1").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}
	});
	$("#p2").click(function () {
		var text = $("#p2").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}
	});
	$("#p3").click(function () {

		var text = $("#p3").attr("value");
		player_ref = text;

		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p4").click(function () {

		var text = $("#p4").attr("value");
		player_ref = text;

		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}



		//$(this).fadeOut(); 
	});
	$("#p5").click(function () {

		var text = $("#p4").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}

		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p6").click(function () {

		var text = $("#p4").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p7").click(function () {

		var text = $("#p4").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p8").click(function () {

		var text = $("#p4").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});

	$("#p9").click(function () {

		var text = $("#p9").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});

	$("#p10").click(function () {

		var text = $("#p10").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});

	$("#p11").click(function () {

		var text = $("#p11").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p12").click(function () {

		var text = $("#p12").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p13").click(function () {

		var text = $("#p13").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p14").click(function () {

		var text = $("#p14").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p15").click(function () {

		var text = $("#p15").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p16").click(function () {

		var text = $("#p16").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p17").click(function () {

		var text = $("#p17").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p18").click(function () {

		var text = $("#p18").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p19").click(function () {

		var text = $("#p19").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p20").click(function () {

		var text = $("#p20").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p21").click(function () {

		var text = $("#p21").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});
	$("#p22").click(function () {

		var text = $("#p22").attr("value");
		player_ref = text;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate(player_ref, cnt_player, left, right);
		}


		//$(this).fadeOut(); 
	});


	$("#clear").click(function () {


		if (heatmapInstance1 != null) {
			var canvas = heatmapInstance1._renderer.canvas;
			//remove the canvas from DOM
			$(canvas).remove();

			heatmapInstance1 = null;
			//$.removeCookie('') 
		}

		if (heatmapInstance2 != null) {
			var canvas = heatmapInstance2._renderer.canvas;
			//remove the canvas from DOM
			$(canvas).remove();

			heatmapInstance2 = null;
			//$.removeCookie('') 
		}
		points = []
		cnt_player = 0;




		//$(this).fadeOut(); 
	});


	$("#teamheatmap").click(function () {
		console.log("hii");
		teamtype=0;
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		if (cnt_player == 1) {
			heat_generate2(teamtype,cnt_player, left, right);
		}




		//$(this).fadeOut(); 
	});



	$("#teamheatmap1").click(function () {
		console.log("hii");
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		teamtype=1;
		if (cnt_player == 1) {
			heat_generate2(teamtype,cnt_player, left, right);
		}




		//$(this).fadeOut(); 
	});



	$("#teamheatmap2").click(function () {
		console.log("hii");
		if (cnt_player == 0) {
			cnt_player = cnt_player + 1;
		}
		teamtype=2;
		if (cnt_player == 1) {
			heat_generate2(teamtype,cnt_player, left, right);
		}




		//$(this).fadeOut(); 
	});


}
