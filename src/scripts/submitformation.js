let t1_pass=new Array(13).join('0').split('').map(parseFloat)
let t2_pass=new Array(13).join('0').split('').map(parseFloat)


var t1_gk=0;
var t1_def_row=0;
var t1_def_mid_row=0;
var t1_mid_row=0;
var t1_at_mid_row=0;
var t1_at_row=0;

var t2_gk=0;
var t2_def_row=0;
var t2_def_mid_row=0;
var t2_mid_row=0;
var t2_at_mid_row=0;
var t2_at_row=0;

var t1p1name;
var t1p2name;
var t1p3name;
var t1p4name;
var t1p5name;
var t1p6name;
var t1p7name;
var t1p8name;
var t1p9name;
var t1p10name;
var t1p11name;


var t1p1ID;
var t1p2ID;
var t1p3ID;
var t1p4ID;
var t1p5ID;
var t1p6ID;
var t1p7ID;
var t1p8ID;
var t1p9ID;
var t1p10ID;
var t1p11ID;

var t2p1name;
var t2p2name;
var t2p3name;
var t2p4name;
var t2p5name;
var t2p6name;
var t2p7name;
var t2p8name;
var t2p9name;
var t2p10name;
var t2p11name;


var t2p1ID;
var t2p2ID;
var t2p3ID;
var t2p4ID;
var t2p5ID;
var t2p6ID;
var t2p7ID;
var t2p8ID;
var t2p9ID;
var t2p10ID;
var t2p11ID;

var t1img1;
var t1img2;
var t1img3;
var t1img4;
var t1img5;
var t1img6;
var t1img7;
var t1img8;
var t1img9;
var t1img10;
var t1img11;

var t2img1;
var t2img2;
var t2img3;
var t2img4;
var t2img5;
var t2img6;
var t2img7;
var t2img8;
var t2img9;
var t2img10;
var t2img11;

let a1=zeros([6,6])
let a2=zeros([6,6])
console.log("loglogloglgoglgogogl");

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}

function content_upload1(x)
{	
	if (t1_pass[x]){
	if (x==1){
		
		document.getElementById("pp1").innerHTML=t1p1name;
		$('#p1').attr("value", t1p1ID);
	}
	if (x==2){
		
		document.getElementById("pp2").innerHTML=t1p2name;
		$('#p2').attr("value", t1p2ID);
	}
	if (x==3){
		
		document.getElementById("pp3").innerHTML=t1p3name;
		$('#p3').attr("value", t1p3ID);
	}	
	if (x==4){
		
		document.getElementById("pp4").innerHTML=t1p4name;
		$('#p4').attr("value", t1p4ID);
	}
	if (x==5){
		
		document.getElementById("pp5").innerHTML=t1p5name;
		$('#p5').attr("value", t1p5ID);
	}
	if (x==6){
		
		document.getElementById("pp6").innerHTML=t1p6name;
		$('#p6').attr("value", t1p6ID);
	}
	if (x==7){
		
		document.getElementById("pp7").innerHTML=t1p7name;
		$('#p7').attr("value", t1p7ID);
	}
	if (x==8){
		
		document.getElementById("pp8").innerHTML=t1p8name;
		$('#p8').attr("value", t1p8ID);
	}
	if (x==9 ){
		
		document.getElementById("pp9").innerHTML=t1p9name;
		$('#p9').attr("value", t1p9ID);
	}
	if (x==10 ){
		
		document.getElementById("pp10").innerHTML=t1p10name;
		$('#p10').attr("value", t1p10ID);
	}
	if (x==11){
		
		document.getElementById("pp11").innerHTML=t1p11name;
		$('#p11').attr("value", t1p11ID);
	}
	}
}

function content_upload2(x)
{	
	if (t2_pass[x-11]){
	if (x==12){
		document.getElementById("pp12").innerHTML=t2p1name;
		$('#p12').attr("value", t2p1ID);
	}
	if (x==13){
		
		document.getElementById("pp13").innerHTML=t2p2name;
		$('#p13').attr("value", t2p2ID);
	}	
	if (x==14){
		
		document.getElementById("pp14").innerHTML=t2p3name;
		$('#p14').attr("value", t2p3ID);		
	}
	if (x==15){
		document.getElementById("pp15").innerHTML=t2p4name;
		$('#p15').attr("value", t2p4ID);
	}
	if (x==16){
		document.getElementById("pp16").innerHTML=t2p5name;
		$('#p16').attr("value", t2p5ID);
	}
	if (x==17){
		document.getElementById("pp17").innerHTML=t2p6name;
		$('#p17').attr("value", t2p6ID);
	}
	if (x==18){
		document.getElementById("pp18").innerHTML=t2p7name;
		$('#p18').attr("value", t2p7ID);
	}
	if (x==19){
		document.getElementById("pp19").innerHTML=t2p8name;
		$('#p19').attr("value", t2p8ID);
	}
	if (x==20){
		document.getElementById("pp20").innerHTML=t2p9name;
		$('#p20').attr("value", t2p9ID);
	}
	if (x==21){
		document.getElementById("pp21").innerHTML=t2p10name;
		$('#p21').attr("value", t2p10ID);
	}
	if (x==22){
		document.getElementById("pp22").innerHTML=t2p11name;
		$('#p22').attr("value", t2p11ID);
	}
}
}

function image_upload1(x)
{	
	if (t1_pass[x]){
	var ts="pi"+x.toString();
	var img = document.getElementById(ts);  // $('img')[0]

	if (x==1 && t1img1){
		img.src = URL.createObjectURL(t1img1);
	}
	if (x==2 && t1img2){
		img.src = URL.createObjectURL(t1img2);
	}
	if (x==3 && t1img3){
		img.src = URL.createObjectURL(t1img3);
	}	
	if (x==4 && t1img4){
		img.src = URL.createObjectURL(t1img4);
	}
	if (x==5 && t1img5){
		img.src = URL.createObjectURL(t1img5);
	}
	if (x==6 && t1img6){
		img.src = URL.createObjectURL(t1img6);
	}
	if (x==7 && t1img7){
		img.src = URL.createObjectURL(t1img7);
	}
	if (x==8 && t1img8){
		img.src = URL.createObjectURL(t1img8);
	}
	if (x==9 && t1img9){
		img.src = URL.createObjectURL(t1img9);
	}
	if (x==10 && t1img10){
		img.src = URL.createObjectURL(t1img10);
	}
	if (x==11 && t1img11){
		img.src = URL.createObjectURL(t1img11);
	}
}
}

function image_upload2(x)
{	
	if (t2_pass[x-11]){
	var ts="pi"+x.toString();
	var img = document.getElementById(ts);  // $('img')[0]

	if (x==12 && t2img1){
		img.src = URL.createObjectURL(t2img1);
		
	}
	if (x==13 && t2img2){
		img.src = URL.createObjectURL(t2img2);
	}	
	if (x==14 && t2img3){
		img.src = URL.createObjectURL(t2img3);
	}
	if (x==15 && t2img4){
		img.src = URL.createObjectURL(t2img4);
	}
	if (x==16 && t2img5){
		img.src = URL.createObjectURL(t2img5);
	}
	if (x==17 && t2img6){
		img.src = URL.createObjectURL(t2img6);
	}
	if (x==18 && t2img7){
		img.src = URL.createObjectURL(t2img7);
	}
	if (x==19 && t2img8){
		img.src = URL.createObjectURL(t2img8);
	}
	if (x==20 && t2img9){
		img.src = URL.createObjectURL(t2img9);
	}
	if (x==21 && t2img10){
		img.src = URL.createObjectURL(t2img10);
	}
	if (x==22 && t2img11){
		img.src = URL.createObjectURL(t2img11);
	}
}
}

function gaps1()
{ var count_nrows=0;
	if (t1_gk!=0)
	{
		count_nrows+=1;
	}
	if (t1_def_row!=0)
	{
		count_nrows+=1;
	}
	if (t1_def_mid_row!=0)
	{
		count_nrows+=1;
	}
	if (t1_mid_row!=0)
	{
		count_nrows+=1;
	}
	if(t1_at_mid_row!=0)
	{
		count_nrows+=1;
	}
	if (t1_at_row!=0)
	{
		count_nrows+=1;
	}
	if (t1_gk==0)
	{
		$("#t1_gk_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		
		$("#t1_gk_line").height(wq.toString()+"%");
	}
	
	if (t1_def_row==0)
	{
		$("#t1_def_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t1_def_line").height(wq.toString()+"%");
	}
	
	if (t1_def_mid_row==0)
	{
		$("#t1_def_mid_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t1_def_mid_line").height(wq.toString()+"%");
	}
	
	if (t1_mid_row==0)
	{
		$("#t1_mid_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t1_mid_line").height(wq.toString()+"%");
	}
	
	if (t1_at_mid_row==0)
	{
		$("#t1_at_mid_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t1_at_mid_line").height(wq.toString()+"%");
	}
	
	if (t1_at_row==0)
	{
		$("#t1_at_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t1_at_line").height(wq.toString()+"%");
	}
}

function gaps2()
{ var count_nrows=0;
	if (t2_gk!=0)
	{
		count_nrows+=1;
	}
	if (t2_def_row!=0)
	{
		count_nrows+=1;
	}
	if (t2_def_mid_row!=0)
	{
		count_nrows+=1;
	}
	if (t2_mid_row!=0)
	{
		count_nrows+=1;
	}
	if(t2_at_mid_row!=0)
	{
		count_nrows+=1;
	}
	if (t2_at_row!=0)
	{
		count_nrows+=1;
	}
	if (t2_gk==0)
	{
		$("#t2_gk_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		
		$("#t2_gk_line").height(wq.toString()+"%");
	}
	
	if (t2_def_row==0)
	{
		$("#t2_def_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t2_def_line").height(wq.toString()+"%");
	}
	
	if (t2_def_mid_row==0)
	{
		$("#t2_def_mid_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t2_def_mid_line").height(wq.toString()+"%");
	}
	
	if (t2_mid_row==0)
	{
		$("#t2_mid_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t2_mid_line").height(wq.toString()+"%");
	}
	
	if (t2_at_mid_row==0)
	{
		$("#t2_at_mid_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t2_at_mid_line").height(wq.toString()+"%");
	}
	
	if (t2_at_row==0)
	{
		$("#t2_at_line").height('0%');
	}else
	{
		var wq=Math.floor(100/count_nrows);
		$("#t2_at_line").height(wq.toString()+"%");
	}
}
var i=0;
function make_template1(x)
{
	if (t1_pass[x])
	{


		var req_opt="t1opt"+x.toString();
		var req_opt_val=window[req_opt].value;
		if(req_opt_val==0)
		{
			document.getElementById("t1_gk_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==1)
		{
			document.getElementById("t1_def_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==2)
		{
			document.getElementById("t1_def_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==3)
		{
			document.getElementById("t1_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==4)
		{
			document.getElementById("t1_at_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==5)
		{
			document.getElementById("t1_at_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		
		
		


	}
}
function make_template2(x)
{

	if (t2_pass[x-11])
	{


		var req_opt="t2opt"+(x-11).toString();
		var req_opt_val=window[req_opt].value;
		if(req_opt_val==0)
		{
			document.getElementById("t2_gk_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==1)
		{
			document.getElementById("t2_def_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==2)
		{
			document.getElementById("t2_def_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==3)
		{
			document.getElementById("t2_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==4)
		{
			document.getElementById("t2_at_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
		if(req_opt_val==5)
		{
			document.getElementById("t2_at_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+x.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+x+"\"><p class=\"playername\" id=\"pp"+x+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";

		}
	}
}
function change_formation1()
{

document.getElementById("t1_gk_line").innerHTML = "";
document.getElementById("t1_def_line").innerHTML = "";
document.getElementById("t1_def_mid_line").innerHTML = "";
document.getElementById("t1_mid_line").innerHTML = "";
document.getElementById("t1_at_mid_line").innerHTML = "";
document.getElementById("t1_at_line").innerHTML = "";
var row=0;
var col=0;
//console.log(a1);
for (row=0;row<6;row++)
{	
	for (col=1;col<6;col++)
	{
		if (a1[row][col]!=0)
		{

			gaps1();
			make_template1(a1[row][col]);
			image_upload1(a1[row][col]);
			content_upload1(a1[row][col]);
		}
	}
}

	go_heatmap();
	rightclick();
}
function change_formation2()
{

document.getElementById("t2_gk_line").innerHTML = "";
document.getElementById("t2_def_line").innerHTML = "";
document.getElementById("t2_def_mid_line").innerHTML = "";
document.getElementById("t2_mid_line").innerHTML = "";
document.getElementById("t2_at_mid_line").innerHTML = "";
document.getElementById("t2_at_line").innerHTML = "";
var row=0;
var col=0;
console.log(a2);
for (row=0;row<6;row++)
{	
	for (col=1;col<6;col++)
	{
		if (a2[row][col]!=0)
		{
			gaps2();
			make_template2(a2[row][col]);
			image_upload2(a2[row][col]);
			content_upload2(a2[row][col]);
		}
	}
}
go_heatmap();
rightclick();
}
// function change_formation( t1_gk, t1_def_row, t1_def_mid_row, t1_mid_row, t1_at_mid_row, t1_at_row)
// {
// var temp1=t1_def_row;
// var temp2=t1_def_mid_row;
// var temp3=t1_mid_row;
// var temp4=t1_at_mid_row;
// var temp5=t1_at_row;
// var temp0=t1_gk;

// console.log(temp0);

// document.getElementById("t1_gk_line").innerHTML = "";
// document.getElementById("t1_def_line").innerHTML = "";
// document.getElementById("t1_def_mid_line").innerHTML = "";
// document.getElementById("t1_mid_line").innerHTML = "";
// document.getElementById("t1_at_mid_line").innerHTML = "";
// document.getElementById("t1_at_line").innerHTML = "";


// //gaps1();
// var temp=0;
// for (temp=0;temp<temp0;temp++)
// {
// 	i=i+1;
// 	//if (t1_pass[i]){
// 	document.getElementById("t1_gk_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload1(i);
// 	content_upload1(i);//}
// 	/*
// 	var ts="pi"+i.toString();
// 	var img = document.getElementById(ts);  // $('img')[0]
// 	img.src = URL.createObjectURL(t1img1); // set src to blob url
// 	*///img.onload = imageIsLoaded;
// }
// for (temp=0;temp<temp1;temp++)
// {
// 	i=i+1;
// 	//if(t1_pass[i]){
// 	document.getElementById("t1_def_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload1(i);
// 	content_upload1(i);//}
// }
// for (temp=0;temp<temp2;temp++)
// {
// 	i=i+1;
// 	//if(t1_pass[i]){
// 	document.getElementById("t1_def_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload1(i);
// 	content_upload1(i);//}
// 	}
// for (temp=0;temp<temp3;temp++)
// {
// 	i=i+1;
// 	//if(t1_pass[i]){
// 	document.getElementById("t1_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload1(i);
// 	content_upload1(i);//}
// }
// for (temp=0;temp<temp4;temp++)
// {
// 	i=i+1;
// 	//if (t1_pass[i]){
// 	document.getElementById("t1_at_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload1(i);
// 	content_upload1(i);//}
// }
// for (temp=0;temp<temp5;temp++)
// {
// 	i=i+1;
// 	//if (t1_pass[i]){
// 	document.getElementById("t1_at_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload1(i);
// 	content_upload1(i);//}
// }
// //rightclick();
// go_heatmap();

// }
	
	

// function change_formation2( t2_gk, t2_def_row, t2_def_mid_row, t2_mid_row, t2_at_mid_row, t2_at_row)
// {
// var temp0=t2_gk;
// var temp1=t2_def_row;
// var temp2=t2_def_mid_row;
// var temp3=t2_mid_row;
// var temp4=t2_at_mid_row;
// var temp5=t2_at_row;
// //var i=1;


// document.getElementById("t2_gk_line").innerHTML = "";
// document.getElementById("t2_def_line").innerHTML = "";
// document.getElementById("t2_def_mid_line").innerHTML = "";
// document.getElementById("t2_mid_line").innerHTML = "";
// document.getElementById("t2_at_mid_line").innerHTML = "";
// document.getElementById("t2_at_line").innerHTML = "";


// //gaps2();

// var temp=0;
// for (temp=0;temp<temp0;temp++)
// {
// 	i=i+1;
// 	//if (t2_pass[i-11]){
// 	document.getElementById("t2_gk_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload2(i);
// 	content_upload2(i);//}

// }
// for (temp=0;temp<temp1;temp++)
// {
// 	i=i+1;
// 	//if(t2_pass[i-11]){
// 	document.getElementById("t2_def_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload2(i);
// 	content_upload2(i);
// 	//}
// }
// for (temp=0;temp<temp2;temp++)
// {
// 	i=i+1;
// 	//if (t2_pass[i-11]){
// 	document.getElementById("t2_def_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload2(i);
// 	content_upload2(i);//}
// }
// for (temp=0;temp<temp3;temp++)
// {
// 	i=i+1;
// 	//if (t2_pass[i-11]){
// 	document.getElementById("t2_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload2(i);
// 	content_upload2(i);//}
// }
// for (temp=0;temp<temp4;temp++)
// {
// 	i=i+1;
// 	//if(t2_pass[i-11]){
// 	document.getElementById("t2_at_mid_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload2(i);
// 	content_upload2(i);//}
// }
// for (temp=0;temp<temp5;temp++)
// {
// 	i=i+1;
// 	//if(t2_pass[i-11]){
// 	document.getElementById("t2_at_line").innerHTML +="<div class = \"playerdataholder\" id=\"p"+i.toString()+"\" value=\""+0+"\"><img src=\"images/default.png\" class=\"playericon\" id=\"pi"+i+"\"><p class=\"playername\" id=\"pp"+i+"\">Lionel Messi</p><p class=\"playerpos\">(CF)</p></div>";
// 	image_upload2(i);
// 	content_upload2(i);//}
// }
// go_heatmap();
// }
			
window.addEventListener('load', function() {
  document.getElementById("t1img1").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img1=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img1);
      }
  });

  document.getElementById("t1img2").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img2=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img2);
      }
  });

  document.getElementById("t1img3").addEventListener('change', function(e) {
  
      //console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img3=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img3);
      }
  });

  document.getElementById("t1img4").addEventListener('change', function(e) {
  
   //   console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img4=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img4);
      }
  });
  document.getElementById("t1img5").addEventListener('change', function(e) {
  
      //console.log(e.target.files)
    ///console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img5=e.target.files[0];
  		//console.log("aaaaaaaaaa")
  	//	console.log(t1img5);
      }
  });
  document.getElementById("t1img6").addEventListener('change', function(e) {
  
      //console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img6=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img6);
      }
  });
  document.getElementById("t1img7").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img7=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img7);
      }
  });  
  document.getElementById("t1img8").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img8=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img8);
      }
  });
  document.getElementById("t1img9").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img9=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img9);
      }
  });

  document.getElementById("t1img10").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img10=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img10);
      }
  });

  document.getElementById("t1img11").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t1img11=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });

  document.getElementById("t2img1").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img1=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });

    document.getElementById("t2img2").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img2=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });

  document.getElementById("t2img3").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img3=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });

  document.getElementById("t2img4").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img4=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });
  document.getElementById("t2img5").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img5=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });
  document.getElementById("t2img6").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img6=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });

  document.getElementById("t2img7").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img7=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });  

  document.getElementById("t2img8").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img8=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });  
  document.getElementById("t2img9").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img9=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });

  document.getElementById("t2img10").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img10=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });

    document.getElementById("t2img11").addEventListener('change', function(e) {
  
    //  console.log(e.target.files)
    //console.log(e.target.files[0])
    
    if (e.target.files && e.target.files[0]) {
  		t2img11=e.target.files[0];
  	//	console.log("aaaaaaaaaa")
  	//	console.log(t1img11);
      }
  });
  });		


$(document).ready(function(){

		
		$("#subm").click(function(){
		

		a1=zeros([6,6])
		a2=zeros([6,6])
		t1_pass=new Array(13).join('0').split('').map(parseFloat)
		t2_pass=new Array(13).join('0').split('').map(parseFloat)

		t1p1name=document.getElementById("t1p1name").value;
		t1p2name=document.getElementById("t1p2name").value;
		t1p3name=document.getElementById("t1p3name").value;
		t1p4name=document.getElementById("t1p4name").value;
		t1p5name=document.getElementById("t1p5name").value;
		t1p6name=document.getElementById("t1p6name").value;
		t1p7name=document.getElementById("t1p7name").value;
		t1p8name=document.getElementById("t1p8name").value;
		t1p9name=document.getElementById("t1p9name").value;
		t1p10name=document.getElementById("t1p10name").value;
		t1p11name=document.getElementById("t1p11name").value;
		
		
		t1p1ID=document.getElementById("t1p1ID").value;
		t1p2ID=document.getElementById("t1p2ID").value;
		t1p3ID=document.getElementById("t1p3ID").value;
		t1p4ID=document.getElementById("t1p4ID").value;
		t1p5ID=document.getElementById("t1p5ID").value;
		t1p6ID=document.getElementById("t1p6ID").value;
		t1p7ID=document.getElementById("t1p7ID").value;
		t1p8ID=document.getElementById("t1p8ID").value;
		t1p9ID=document.getElementById("t1p9ID").value;
		t1p10ID=document.getElementById("t1p10ID").value;
		t1p11ID=document.getElementById("t1p11ID").value;
		
		t1_gk=0;
		t1_def_row=0;
		t1_def_mid_row=0;
		t1_mid_row=0;
		t1_at_mid_row=0;
		t1_at_row=0;
		

var t1opt1=document.getElementById("t1opt1").value;
if (t1opt1==0){t1_gk=t1_gk+1;}
if (t1opt1==1){t1_def_row=t1_def_row+1;}
if (t1opt1==2){t1_def_mid_row=t1_def_mid_row+1;}
if (t1opt1==3){t1_mid_row=t1_mid_row+1;}
if (t1opt1==4){t1_at_mid_row=t1_at_mid_row+1;}
if (t1opt1==5){t1_at_row=t1_at_row+1;}

var t1pos1=document.getElementById("t1pos1").value;
if (a1[t1opt1][t1pos1]==0){
	a1[t1opt1][t1pos1]=1;
	t1_pass[1]=1;
}

var t1opt2=document.getElementById("t1opt2").value;
		if (t1opt2==0){t1_gk=t1_gk+1;}
		if (t1opt2==1){t1_def_row=t1_def_row+1;}
		if (t1opt2==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt2==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt2==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt2==5){t1_at_row=t1_at_row+1;}

var t1pos2=document.getElementById("t1pos2").value;
if (a1[t1opt2][t1pos2]==0){
	a1[t1opt2][t1pos2]=2;
	t1_pass[2]=1;
}

var t1opt3=document.getElementById("t1opt3").value;
		if (t1opt3==0){t1_gk=t1_gk+1;}
		if (t1opt3==1){t1_def_row=t1_def_row+1;}
		if (t1opt3==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt3==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt3==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt3==5){t1_at_row=t1_at_row+1;}

var t1pos3=document.getElementById("t1pos3").value;
if (a1[t1opt3][t1pos3]==0){
	a1[t1opt3][t1pos3]=3;
	t1_pass[3]=1;
}
var t1opt4=document.getElementById("t1opt4").value;
		if (t1opt4==0){t1_gk=t1_gk+1;}
		if (t1opt4==1){t1_def_row=t1_def_row+1;}
		if (t1opt4==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt4==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt4==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt4==5){t1_at_row=t1_at_row+1;}

var t1pos4=document.getElementById("t1pos4").value;
if (a1[t1opt4][t1pos4]==0){
	a1[t1opt4][t1pos4]=4;
	t1_pass[4]=1;
}
var t1opt5=document.getElementById("t1opt5").value;
		if (t1opt5==0){t1_gk=t1_gk+1;}
		if (t1opt5==1){t1_def_row=t1_def_row+1;}
		if (t1opt5==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt5==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt5==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt5==5){t1_at_row=t1_at_row+1;}
var t1pos5=document.getElementById("t1pos5").value;
if (a1[t1opt5][t1pos5]==0){
	a1[t1opt5][t1pos5]=5;
	t1_pass[5]=1;
}
var t1opt6=document.getElementById("t1opt6").value;
		if (t1opt6==0){t1_gk=t1_gk+1;}
		if (t1opt6==1){t1_def_row=t1_def_row+1;}
		if (t1opt6==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt6==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt6==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt6==5){t1_at_row=t1_at_row+1;}
var t1pos6=document.getElementById("t1pos6").value;
if (a1[t1opt6][t1pos6]==0){
	a1[t1opt6][t1pos6]=6;
	t1_pass[6]=1;
}
var t1opt7=document.getElementById("t1opt7").value;
		if (t1opt7==0){t1_gk=t1_gk+1;}
		if (t1opt7==1){t1_def_row=t1_def_row+1;}
		if (t1opt7==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt7==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt7==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt7==5){t1_at_row=t1_at_row+1;}
var t1pos7=document.getElementById("t1pos7").value;
if (a1[t1opt7][t1pos7]==0){
	a1[t1opt7][t1pos7]=7;
	t1_pass[7]=1;
}
var t1opt8=document.getElementById("t1opt8").value;
		if (t1opt8==0){t1_gk=t1_gk+1;}
		if (t1opt8==1){t1_def_row=t1_def_row+1;}
		if (t1opt8==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt8==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt8==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt8==5){t1_at_row=t1_at_row+1;}
var t1pos8=document.getElementById("t1pos8").value;
if (a1[t1opt8][t1pos8]==0){
	a1[t1opt8][t1pos8]=8;
	t1_pass[8]=1;
}		
var t1opt9=document.getElementById("t1opt9").value;
		if (t1opt9==0){t1_gk=t1_gk+1;}
		if (t1opt9==1){t1_def_row=t1_def_row+1;}
		if (t1opt9==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt9==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt9==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt9==5){t1_at_row=t1_at_row+1;}
var t1pos9=document.getElementById("t1pos9").value;
if (a1[t1opt9][t1pos9]==0){
	a1[t1opt9][t1pos9]=9;
	t1_pass[9]=1;
}
var t1opt10=document.getElementById("t1opt10").value;
		if (t1opt10==0){t1_gk=t1_gk+1;}
		if (t1opt10==1){t1_def_row=t1_def_row+1;}
		if (t1opt10==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt10==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt10==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt10==5){t1_at_row=t1_at_row+1;}
var t1pos10=document.getElementById("t1pos10").value;
if (a1[t1opt10][t1pos10]==0){
	a1[t1opt10][t1pos10]=10;
	t1_pass[10]=1;
}
var t1opt11=document.getElementById("t1opt11").value;
		if (t1opt11==0){t1_gk=t1_gk+1;}
		if (t1opt11==1){t1_def_row=t1_def_row+1;}
		if (t1opt11==2){t1_def_mid_row=t1_def_mid_row+1;}
		if (t1opt11==3){t1_mid_row=t1_mid_row+1;}
		if (t1opt11==4){t1_at_mid_row=t1_at_mid_row+1;}
		if (t1opt11==5){t1_at_row=t1_at_row+1;}		
var t1pos11=document.getElementById("t1pos11").value;
if (a1[t1opt11][t1pos11]==0){
	a1[t1opt11][t1pos11]=11;
	t1_pass[11]=1;
}		
		///////////////////////////////////////////////////////////////////////
		
		t2p1name=document.getElementById("t2p1name").value;
		t2p2name=document.getElementById("t2p2name").value;
		t2p3name=document.getElementById("t2p3name").value;
		t2p4name=document.getElementById("t2p4name").value;
		t2p5name=document.getElementById("t2p5name").value;
		t2p6name=document.getElementById("t2p6name").value;
		t2p7name=document.getElementById("t2p7name").value;
		t2p8name=document.getElementById("t2p8name").value;
		t2p9name=document.getElementById("t2p9name").value;
		t2p10name=document.getElementById("t2p10name").value;
		t2p11name=document.getElementById("t2p11name").value;
		
		
		t2p1ID=document.getElementById("t2p1ID").value;
		t2p2ID=document.getElementById("t2p2ID").value;
		t2p3ID=document.getElementById("t2p3ID").value;
		t2p4ID=document.getElementById("t2p4ID").value;
		t2p5ID=document.getElementById("t2p5ID").value;
		t2p6ID=document.getElementById("t2p6ID").value;
		t2p7ID=document.getElementById("t2p7ID").value;
		t2p8ID=document.getElementById("t2p8ID").value;
		t2p9ID=document.getElementById("t2p9ID").value;
		t2p10ID=document.getElementById("t2p10ID").value;
		t2p11ID=document.getElementById("t2p11ID").value;
		
		t2_gk=0;
		t2_def_row=0;
		t2_def_mid_row=0;
		t2_mid_row=0;
		t2_at_mid_row=0;
		t2_at_row=0;
		
		
		var t2opt1=document.getElementById("t2opt1").value;
		if (t2opt1==0){t2_gk=t2_gk+1;}
		if (t2opt1==1){t2_def_row=t2_def_row+1;}
		if (t2opt1==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt1==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt1==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt1==5){t2_at_row=t2_at_row+1;}
var t2pos1=document.getElementById("t2pos1").value;
if (a2[t2opt1][t2pos1]==0){
	a2[t2opt1][t2pos1]=12;
	t2_pass[1]=1;
}
var t2opt2=document.getElementById("t2opt2").value;
		if (t2opt2==0){t2_gk=t2_gk+1;}
		if (t2opt2==1){t2_def_row=t2_def_row+1;}
		if (t2opt2==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt2==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt2==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt2==5){t2_at_row=t2_at_row+1;}
var t2pos2=document.getElementById("t2pos2").value;
if (a2[t2opt2][t2pos2]==0){
	a2[t2opt2][t2pos2]=13;
	t2_pass[2]=1;
}
var t2opt3=document.getElementById("t2opt3").value;
		if (t2opt3==0){t2_gk=t2_gk+1;}
		if (t2opt3==1){t2_def_row=t2_def_row+1;}
		if (t2opt3==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt3==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt3==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt3==5){t2_at_row=t2_at_row+1;}
var t2pos3=document.getElementById("t2pos3").value;
if (a2[t2opt3][t2pos3]==0){
	a2[t2opt3][t2pos3]=14;
	t2_pass[3]=1;
}
		var t2opt4=document.getElementById("t2opt4").value;
		if (t2opt4==0){t2_gk=t2_gk+1;}
		if (t2opt4==1){t2_def_row=t2_def_row+1;}
		if (t2opt4==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt4==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt4==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt4==5){t2_at_row=t2_at_row+1;}
var t2pos4=document.getElementById("t2pos4").value;
if (a2[t2opt4][t2pos4]==0){
	a2[t2opt4][t2pos4]=15;
	t2_pass[4]=1;
}
var t2opt5=document.getElementById("t2opt5").value;
		if (t2opt5==0){t2_gk=t2_gk+1;}
		if (t2opt5==1){t2_def_row=t2_def_row+1;}
		if (t2opt5==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt5==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt5==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt5==5){t2_at_row=t2_at_row+1;}
var t2pos5=document.getElementById("t2pos5").value;
if (a2[t2opt5][t2pos5]==0){
	a2[t2opt5][t2pos5]=16;
	t2_pass[5]=1;
}
var t2opt6=document.getElementById("t2opt6").value;
		if (t2opt6==0){t2_gk=t2_gk+1;}
		if (t2opt6==1){t2_def_row=t2_def_row+1;}
		if (t2opt6==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt6==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt6==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt6==5){t2_at_row=t2_at_row+1;}
var t2pos6=document.getElementById("t2pos6").value;
if (a2[t2opt6][t2pos6]==0){
	a2[t2opt6][t2pos6]=17;
	t2_pass[6]=1;
}
		var t2opt7=document.getElementById("t2opt7").value;
		if (t2opt7==0){t2_gk=t2_gk+1;}
		if (t2opt7==1){t2_def_row=t2_def_row+1;}
		if (t2opt7==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt7==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt7==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt7==5){t2_at_row=t2_at_row+1;}
var t2pos7=document.getElementById("t2pos7").value;
if (a2[t2opt7][t2pos7]==0){
	a2[t2opt7][t2pos7]=18;
	t2_pass[7]=1;
}
var t2opt8=document.getElementById("t2opt8").value;
		if (t2opt8==0){t2_gk=t2_gk+1;}
		if (t2opt8==1){t2_def_row=t2_def_row+1;}
		if (t2opt8==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt8==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt8==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt8==5){t2_at_row=t2_at_row+1;}
var t2pos8=document.getElementById("t2pos8").value;
if (a2[t2opt8][t2pos8]==0){
	a2[t2opt8][t2pos8]=19;
	t2_pass[8]=1;
}
var t2opt9=document.getElementById("t2opt9").value;
		if (t2opt9==0){t2_gk=t2_gk+1;}
		if (t2opt9==1){t2_def_row=t2_def_row+1;}
		if (t2opt9==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt9==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt9==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt9==5){t2_at_row=t2_at_row+1;}
var t2pos9=document.getElementById("t2pos9").value;
if (a2[t2opt9][t2pos9]==0){
	a2[t2opt9][t2pos9]=20;
	t2_pass[9]=1;
}
var t2opt10=document.getElementById("t2opt10").value;
		if (t2opt10==0){t2_gk=t2_gk+1;}
		if (t2opt10==1){t2_def_row=t2_def_row+1;}
		if (t2opt10==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt10==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt10==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt10==5){t2_at_row=t2_at_row+1;}
var t2pos10=document.getElementById("t2pos10").value;
if (a2[t2opt10][t2pos10]==0){
	a2[t2opt10][t2pos10]=21;
	t2_pass[10]=1;
}
var t2opt11=document.getElementById("t2opt11").value;
		if (t2opt11==0){t2_gk=t2_gk+1;}
		if (t2opt11==1){t2_def_row=t2_def_row+1;}
		if (t2opt11==2){t2_def_mid_row=t2_def_mid_row+1;}
		if (t2opt11==3){t2_mid_row=t2_mid_row+1;}
		if (t2opt11==4){t2_at_mid_row=t2_at_mid_row+1;}
		if (t2opt11==5)
		{
			t2_at_row=t2_at_row+1;
			
		}
var t2pos11=document.getElementById("t2pos11").value;
if (a2[t2opt11][t2pos11]==0){
	a2[t2opt11][t2pos11]=22;
	t2_pass[11]=1;
}		

		
		i=0;
		console.log(t1_pass)
		console.log(t2_pass)
		// console.log(a1)
		// for (row=0;row<6;row++)
		// {
		// 	for (col=1;col<6;col++)
		// 	{
		// 		console.log(a1[row][col]);
		// 	}
		// }
		
		//console.log(document.getElementById(eval(req)).value);

		// change_formation( t1_gk, t1_def_row, t1_def_mid_row, t1_mid_row, t1_at_mid_row, t1_at_row);
		
		// change_formation2( t2_gk, t2_def_row, t2_def_mid_row, t2_mid_row, t2_at_mid_row, t2_at_row);
		
		change_formation1();

		change_formation2();
              
		
		});
		
	});
