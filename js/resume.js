$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: ['#0075D1', '#C2E5FF', '#66CC00', '#E9E9E9', '#969696', '#0179FE'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu',
		afterRender: function(){
			$('.screen-main p').each(function(){
				var $rel = $(this).attr('rel');
				var $arr = $rel.split(',');
				$(this).animate({
					left: $arr[2] + 'px',
					top: $arr[3] + 'px'
				}, 2000);
			});
			$('.screen-main span').delay(2000).fadeIn(1500);
			$('.inner a').each(function(){
				var $rel = $(this).attr('rel');
				var $arr = $rel.split(',');
				//console.log($arr[0])
				$(this).animate({
					left: $arr[0] + 'px',
					top: $arr[1] + 'px'
				},0);
			});
			$('.photo').animate({width: "0",height: "0"}, 0);
			$('.future span').delay(400).fadeIn(5000);
		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.screen-main p').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: $arr[2] + 'px',
						top: $arr[3] + 'px'
					}, 2000);
				});
				$('.screen-main span').delay(2000).fadeIn(1500);

			}
			else{
				
				$('.inner').eq(index - 2).find('a').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: $arr[2] + 'px',
						top: $arr[3] + 'px'
					}, 1000);
				});		
				$('.photo').delay(900).animate({width: "302px",height: "380px"}, 1500);
				$('.end_word').delay(400).fadeIn(1000);
				$('.thanks').delay(1400).fadeIn(1000);
			}
		},
		onLeave: function(index, direction){
			if(index == 1){
				$('.screen-main p').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: $arr[0] + 'px',
						top: $arr[1] + 'px'
					}, 2000);
				});
				$('.screen-main span').fadeOut(500);
			}
			else{
				$('.inner').eq(index - 2).find('a').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: $arr[0] + 'px',
						top: $arr[1] + 'px'
					}, 1000);
				});
				$('.photo').animate({width: "0",height: "0"}, 500);
				$('.future span').fadeOut(500);
			}
				

		}
	});
	
	$('.paster').hover(function(){
		$(".name", this).stop().animate({left:'325px'},{queue:false,duration:300});
	}, function() {
		$(".name", this).stop().animate({left:'0px'},{queue:false,duration:300});
	});
});


var canvas,cxt,w,h;
window.onload=function(){
	canvas=document.getElementById("circle");
	cxt=canvas.getContext("2d");

	canvas.width=$(window).width();
	canvas.height=$(window).height();
	w=canvas.width;
	h=canvas.height;
	//cxt.translate(w/2+10,h/2+10);
    drawRing(cxt);
    drawCircle(cxt);
    drawWatch();

	function drawCircle(cxt)
	{
		var fillColor="#FF0080";
		cxt.beginPath();
		cxt.arc(650,300,100,0,2*Math.PI,true);
		cxt.closePath();
		cxt.strokeStyle=fillColor;
		cxt.fillStyle=fillColor;
		cxt.stroke();
		cxt.fill();
	}
	function drawRing(cxt){
		var color=["#A74FFF","#FF8C55","#FEDD23","#A0FF53","#3997FF"];
		for(var i=0;i<5;i++){
			//var fillColor="#8080FF";
			cxt.save();
	        cxt.beginPath();
	        cxt.moveTo(650,300);
	        cxt.lineTo(650+Math.cos((18+72*i)/180*Math.PI)*250,300-Math.sin((18+72*i)/180*Math.PI)*250);
            cxt.arc(650,300,250,(1.9-0.4*i)*Math.PI,(1.5-0.4*i)*Math.PI,true);
            cxt.lineTo(650,300);
			cxt.closePath();
			cxt.strokeStyle=color[i];
			cxt.fillStyle=color[i];
			cxt.stroke();
			cxt.fill();            
			cxt.restore();			
		}

	}

	function drawWatch(){

        cxt.clearRect(-w / 2,- h / 2,w,h);
        var len=Math.min(w,h)/2;
        var len1=0.85*len;
        cxt.font="30px Georgia";
        cxt.fillStyle="black";
        cxt.textAlign="center";
        cxt.textBaseline="middle";
        for(var i=0;i<12;i++){
            var tag1=Math.PI*2*(3-i)/12;
            var tx=len*Math.cos(tag1);
            var ty=-len*Math.sin(tag1);
            cxt.fillText(i,tx,ty);
        }
        var d=new Date();
        var h=d.getHours();
        var m=d.getMinutes();
        var s=d.getSeconds();
        if(h>12)h=h-12;
        var hAngle=Math.PI*2*(3-(h+m/60))/12;
        var hLen=0.5*len;
        var hWidth=4;
        var hColor="black";
        drawHand(cxt,hAngle,hLen,hWidth,hColor);

        var mAngle=Math.PI*2*(15-(m+s/60))/60;
        var mLen=0.7*len;
        var mWidth=3;
        var mColor="black";
        drawHand(cxt,mAngle,mLen,mWidth,mColor);

        var sAngle=Math.PI*2*(15-s)/60;
        var sLen=0.8*len;
        var sWidth=1;
        var sColor="#CC0033";
        drawHand(cxt,sAngle,sLen,sWidth,sColor);

        setTimeout(drawWatch,1000);
    }

    function drawHand(cxt,angle,length,width,color){
        var x=length*Math.cos(angle);
        var y=-length*Math.sin(angle);
        cxt.strokeStyle=color;
        cxt.lineWidth=width;
        cxt.lineCap="round";
        cxt.beginPath();
        cxt.moveTo(0,0);
        cxt.lineTo(x,y);
        cxt.stroke();
    }		
}