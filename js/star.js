var star=function(){
	this.x;
	this.y;
	this.picNo;
}
star.prototype.init=function(){
	this.x=Math.random()*w;
	this.y=Math.random()*h*0.6;
	this.picNo=Math.floor(Math.random()*7);
}
star.prototype.update=function(){
	this.picNo++;
	this.picNo%=7;
}
star.prototype.draw=function(){
	cxt.drawImage(starPic,this.picNo*7,0,7,7,this.x, this.y,7,7);
	//console.log(this.picNo);
}
function drawStars(){

	for(var i=0;i<num;i++){
		stars[i].update();
		stars[i].draw();
	}

}