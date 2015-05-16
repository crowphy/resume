function check(){
	var bt=document.getElementById("bt");
	var key=event.keyCode;
	if(key==13)
	bt.click();
}

var name,password;
function resume()
{
name=$('#name').val();
password=$('#password').val();
if(name="crowphy" && password==654321)
{
	window.location.href='html/resume.html';
}
else
{
	alert("密码错误！")
}
}
$(document).ready(function(){
    if ($.cookie("rempwd")=="true") {
        $("#rempwd").attr("rempwd",true);
        $("#name").val($.cookie("name"));
        $("#password").val($.cookie("password"));

    }
});
function setCookie(){
    var check=document.getElementById("rempwd").checked
    if (check==true) {
        name=$("#name").val();
        password=$("#password").val();
        console.log(name+"er"+password);
        $.cookie("rempwd","true",{expires:1});
        $.cookie("name",name,{expires:1});
        $.cookie("password",password,{expires:1})
    }
}
function test(){
    console.log(document.getElementById("rempwd").checked)
}
var canvas,cxt;

var w;
var h;

var starPic = new Image();

var stars = [];
var num = 50;

window.onload=function(){
	canvas=document.getElementById("background");
	cxt=canvas.getContext("2d");

    
	canvas.width=$(window).width();
	canvas.height=$(window).height();
    w=canvas.width;
    h=canvas.height;

    starPic.src = "images/star.png";
    //console.log(starPic);
    for (var i = 0; i < num; i++) {
        stars[i] = new star();
        stars[i].init();
    }

    

    gameLoop();
    
    function gameLoop() {
        window.setTimeout(gameLoop,150);
        drawSky(cxt);
        fillMoon(cxt,2,1000,100,60,20);
        drawLand(cxt);
        drawStars();
    }
    
    function drawSky(cxt)
    {
        for(var i=0;i<5;i++){
    	cxt.save();
	    var skyColor=cxt.createLinearGradient(0,canvas.height,0,0);
	    skyColor.addColorStop(1,'rgba(52,30,80,1)');
        skyColor.addColorStop(0.4,'rgba(53,63,120,0.8)');
	    skyColor.addColorStop(0,'rgba(108,77,94,1)');
	    cxt.fillStyle=skyColor;
	    cxt.fillRect(0,0,canvas.width,canvas.height);
	    cxt.restore();
        }
    }
    
    function fillMoon(cxt,d,x,y,R,rot)
    {
    	cxt.save();
    	cxt.translate(x,y);
    	cxt.rotate(rot*Math.PI/180);
    	cxt.scale(R,R);
    	pathMoon(cxt,d);
    	cxt.fillStyle="#FFFF9B";
    	cxt.fill();
    	cxt.restore();
    }
    function pathMoon(cxt,d)
    {
    	cxt.save();
    	cxt.beginPath();
    	cxt.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
    	cxt.moveTo(0,-1);
    	cxt.arcTo(d,0,0,1,dis(0,-1,d,0)/d);
    	cxt.restore();
    }
    function dis(x1,y1,x2,y2)
    {
    	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    }
    function drawLand(cxt)
    {
    	cxt.save();
    	cxt.beginPath();
    	cxt.moveTo(0,canvas.height*0.75);
    	cxt.bezierCurveTo(canvas.height*0.65,canvas.height*0.55,canvas.height*0.75,canvas.height,canvas.width,canvas.height*0.8);
    	cxt.lineTo(canvas.width,canvas.height);
    	cxt.lineTo(0,canvas.height);
    	cxt.closePath();
    	var landColor=cxt.createLinearGradient(0,canvas.height,0,0);
    	landColor.addColorStop(0,'#030');
    	landColor.addColorStop(1,'#580');
    	cxt.fillStyle=landColor;
    	cxt.fill();
    	cxt.restore();
    }
} 

