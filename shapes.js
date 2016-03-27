shapes = function(){
  this.radius=10;
  this.circleside= floor(map(mouseY,0,height,3,10))+1;
  //this.circleside = 3;
  this.angle=2*PI/this.circleside;
  this.x;
  this.y;
  this.radiusspeed=2;
  this.gray=0;
  
  this.display1= function(){
    push();
    translate(width/2,height/2);
    
    this.radius+=this.radiusspeed; //being called too many times?
    if(this.radius>500){
      this.radius=501;
    }
    this.gray+=1.5;
    strokeWeight(10);
    stroke(this.gray,180);
    noFill();
    beginShape();
    // for(var j=0;j<10;j++){
    for(var i=0;i<=this.circleside;i++){
      this.x = 0 + cos(this.angle*i) * (this.radius);//angle問題
      this.y = 0 + sin(this.angle*i) * (this.radius);
      vertex(this.x, this.y);
      //print(this.radius);
    }
    // }
    endShape();
    pop();
    }
}