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
					left: ($arr[2]/12.8) + "%",
					top: ($arr[3]/8) + '%'
				}, 2000);
			});
			$('.screen-main span').delay(2000).fadeIn(1500);
			$('.inner a').each(function(){
				var $rel = $(this).attr('rel');
				var $arr = $rel.split(',');
				//console.log($arr[0])
				$(this).animate({
					left: ($arr[0]/12.8) + '%',
					top: ($arr[1]/8) + '%'
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
						left: ($arr[2]/12.8) + "%",
						top: ($arr[3]/8) + '%'
					}, 2000);
				});
				$('.screen-main span').delay(2000).fadeIn(1500);

			}
			else{
				
				$('.inner').eq(index - 2).find('a').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: ($arr[2]/12.8) + "%",
						top: ($arr[3]/8) + '%'
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
						left: ($arr[0]/12.8) + '%',
						top: ($arr[1]/8) + '%'
					}, 2000);
				});
				$('.screen-main span').fadeOut(500);
			}
			else{
				$('.inner').eq(index - 2).find('a').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: ($arr[0]/12.8) + '%',
						top: ($arr[1]/8) + '%'
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



window.onload=function(){
	var canvas,cxt,w,h,cnt=20,a=0,t;
	var j=-1;
	canvas=document.getElementById("circle");
	cxt=canvas.getContext("2d");

	canvas.width=$(window).width();
	canvas.height=$(window).height();
	w=canvas.width;
	h=canvas.height;
	loop();
	
	function loop(){
	    
	    drawRing();
	    drawCircle();
	    a=a+1;
	    cnt=cnt+a;
	    console.log(cnt)
	    if (cnt<=500) {
	    	t=setTimeout(loop,cnt);
	    }
	    else{
	    	clearTimeout(t);
	    }
	    
    }


	function drawCircle()
	{
		var fillColor="#FF0080";
		cxt.beginPath();
		cxt.arc(650,300,100,0,2*Math.PI,true);
		cxt.closePath();
		cxt.strokeStyle=fillColor;
		cxt.fillStyle=fillColor;
		//cxt.stroke();
		cxt.fill();
	}
	function drawRing(){
		
		var k=0;
		var t=0;
		t++;
		cxt.clearRect(0,0,1000,800);
		var color=["#A74FFF","#FF8C55","#FEDD23","#A0FF53","#3997FF","#FF60B2"];
		for(var i=0;i<5;i++){
			j++;
			k=(j)%6;
      cxt.beginPath();
      cxt.moveTo(650,300);
      cxt.lineTo(650+Math.cos((18+72*i)/180*Math.PI)*250,300-Math.sin((18+72*i)/180*Math.PI)*250);
      cxt.arc(650,300,250,(1.9-0.4*i)*Math.PI,(1.5-0.4*i)*Math.PI,true);
      cxt.lineTo(650,300);
			cxt.closePath();
			cxt.fillStyle=color[k];
			//cxt.stroke();
			cxt.fill();            
		}
	}
		
}

