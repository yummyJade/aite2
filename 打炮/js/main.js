var hhh = document.getElementById('mycanvas').getContext("2d"); 
var i=0;
var timer;
var timer2;
var timer3;
var gg=false;
hhh.beginPath();
mycanvas.width=1100;
mycanvas.height=500;
var screenin=document.getElementById("screen");
var bump=false;
screenin.value=0;
//画炮台
function drawbattery(){
	hhh.beginPath();	
	hhh.moveTo(400,250);
	hhh.lineTo(Math.cos((i*15)/180*Math.PI)*70+400,-Math.sin((i*15)/180*Math.PI)*70+250);
	hhh.lineWidth=30;
	hhh.lineCap="miter";
	hhh.strokeStyle="#d4bba7";
	hhh.stroke();
	hhh.closePath();
	//其实反了
	hhh.beginPath();
	hhh.fillStyle = "#291e1a";
	hhh.lineWidth = "8";
	hhh.arc(400,250,25,0,2*Math.PI);
	hhh.fill();
	hhh.closePath();
}
document.onkeydown=function(event){
if(event.keyCode==65){

	i=i+1;
	drawbattery();
}
else if(event.keyCode==68){
	i=i-1;
	drawbattery();
}
else if(event.keyCode==74)
	realfire();
else if(event.keyCode==75)
	yy();
}
function battery(obj){
	//炮台
	if(obj.innerHTML=="left")
		i=i+1;
	else if(obj.innerHTML=="right")
		i=i-1;

	drawbattery();
};
var j=0;
var ball=[];
//小球骚操作
//画球
function drawball(){
	for(var j=0;j<ball.length;j++)
	{
		hhh.fillStyle="#3c1323";
		hhh.beginPath();
		hhh.arc(ball[j].x,ball[j].y,8,0,2*Math.PI,true);
		hhh.closePath();
		hhh.fill();
	}
	
}
function realfire(){
	
	ball[j++]={x:Math.cos((i*15)/180*Math.PI)*70+400,y:-Math.sin((i*15)/180*Math.PI)*70+250,vy:-Math.sin((i*15)/180*Math.PI)*5,vx:Math.cos((i*15)/180*Math.PI)*3,g:0.01};
	var balla=ball[j];
	clearInterval(timer2);
	timer2=setInterval(
	function(){
		for(var j=0;j<ball.length;j++)
		{
		//碰到四面八方
		if(ball[j].y+ball[j].vy<-8)
			ball[j].vy=-ball[j].vy*0.7;
		if(ball[j].x+ball[j].vx<-8)
			ball[j].vx=-ball[j].vx*0.7;
		if(ball[j].x+ball[j].vx>mycanvas.width-8)
			ball[j].vx=-ball[j].vx*0.7;
		if(ball[j].y+ball[j].vy>mycanvas.height-8)
        	ball[j].vy=-ball[j].vy*0.7;
		ball[j].x+=ball[j].vx;
		ball[j].y+=ball[j].vy;
		ball[j].vy+=ball[j].g;
		
	}
}	
,10);
};
//方块骚操作
var smallblocks=[];
var k=0;
//来个随机数把
function ranran(){
	if(Math.random()>0.5)
		return(	Math.random()*120+37);
	else
		return(	Math.random()*120+350);

}
//画小方块
function drawblock(){
	for(var k=0;k<smallblocks.length;k++)
	{
		hhh.beginPath();
		hhh.moveTo(smallblocks[k].x,smallblocks[k].y);
		hhh.lineTo(smallblocks[k].x+50,smallblocks[k].y);
		hhh.lineWidth="50";
		hhh.strokeStyle="#984d54";
		hhh.stroke();
		hhh.closePath();

	}
}
function yy(){
		clearInterval(timer);
	if(bump==true){
		k--;
		bump=false;
	}
	smallblocks[k++]={x:0,y:ranran()};
	timer=setInterval(
	function(){	
		for(var k=0;k<smallblocks.length;k++){
			smallblocks[k].x+=0.5;
		  for(var j=0;j<ball.length;j++)
		{
			if(bump==false && (ball[j].x+ball[j].vx+8>smallblocks[k].x+0.5 && ball[j].x+ball[j].vx<smallblocks[k].x+0.5+50) && (ball[j].y+ball[j].vy+8>smallblocks[k].y && ball[j].y+ball[j].vy<smallblocks[k].y+50) ){
				screenin.value=(screenin.value-0)+1;
				smallblocks.splice(k,1);
				hhh.strokeStyle="white";
				bump=true;
				yy();
			}

		}
		if(smallblocks[k].x>mycanvas.width+50 && bump==false && gg==false){
		alert("你的成绩为"+screenin.value);
		gg=true;
		screenin.value=0;
		window.location.reload();
}
		}
	}
	,10);};
	timer3=setInterval(
	function all(){
	hhh.clearRect(0,0,mycanvas.width,mycanvas.height);
	drawblock();
	drawbattery();
	drawball();
},10);
