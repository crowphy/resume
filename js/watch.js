(function(){
    var canvas,cxt;
    var cw,ch;
    window.addEventListener("load",function(){
    	var canvas=document.getElementById("watch");
    	cxt=canvas.getContext("2d");
    	canvas.width=$(window).width();
    	canvas.height=$(window).height();
        cw=parseInt(canvas.width/4);
        ch=parseInt(canvas.height/4)-30;
        console.log(ch)
        cxt.translate(cw/2+10,ch/2+10);
        drawWatch();
        //console.log(cw);
    },false);
	function drawWatch(){

        cxt.clearRect(-cw / 2,- ch / 2-20,cw+20,ch+20);
        var len=Math.min(cw,ch)/2;
        var len1=0.85*len;
        cxt.font="italic 100 12px/20px arial,sans-serif";
        cxt.fillStyle="#FFF3E4";
        cxt.textAlign="center";
        cxt.textBaseline="middle";
        for(var i=0;i<12;i++){
            var tag1=Math.PI*2*(3-i)/12;
            var tx=len*Math.cos(tag1)*0.95;
            var ty=-len*Math.sin(tag1)*0.95;
            cxt.fillText(i,tx,ty);
        }
        var d=new Date();
        var h=d.getHours();
        var m=d.getMinutes();
        var s=d.getSeconds();
        if(h>12)h=h-12;
        var hAngle=Math.PI*2*(3-(h+m/60))/12;
        var hLen=0.5*len;
        var hWidth=3;
        var hColor="black";
        drawHand(cxt,hAngle,hLen,hWidth,hColor);

        var mAngle=Math.PI*2*(15-(m+s/60))/60;
        var mLen=0.7*len;
        var mWidth=2;
        var mColor="black";
        drawHand(cxt,mAngle,mLen,mWidth,mColor);

        var sAngle=Math.PI*2*(15-s)/60;
        var sLen=0.8*len;
        var sWidth=0.8;
        var sColor="#E9296C";
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
})();