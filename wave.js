function wave(){
  
this.tall=200;
this.tallspeed=1;
this.posy=700; //650
this.yspeed=1;
this.wavealpha=30;
this.wavealpha2=205;
this.sizey=0;

  //display
  this.display1 = function(){
  
  for(var i=0;i<waveform.length;i++){ //all as an object. push into array to change pos and scale
    //fill(180-i*0.05,150+i*0.05,100,this.wavealpha);
    //fill(180-i*0.05,200,180+i*0.05,50);
    if(i%20==0){
    push();
   //blendMode(DIFFERENCE);
    //rect(i*0.7,500,40,waveform[i]*150-300);
    pop();
    //rect(i*0.7+100,500+i*0.03,40,waveform[i]*150-250);
    //color or opacity changed by the boats position?
    //blendMode(DIFFERENCE);
    //blendMode(REPLACE);
    //this.wavesize=map(spectrum,0,255,0,200);
    // ellipse(i*0.7+140,500-0.015*i,400,waveform[i]*150-420);
    this.sizey=waveform[i]*random(170)-442;
    ellipse(i*3+random(10,30),this.posy-this.yspeed,400,this.sizey);//NOBK
    stroke(216,226,mouseX/25+mouseY/15+200,150);
    strokeWeight(2)
    //fill(216,229,242,70);
  
    // fill(180-i*0.05,200,180+i*0.05,this.wavealpha2);
    // ellipse(i*0.7,500+i*0.03+random(10),300,waveform[i]*150-400);
    //ellipse(i*0.7+140,500+random(20)-0.015*i,400,waveform[i]*150-420);
   // ellipse(i*2+random(20,60),this.posy+random(60)-this.yspeed,50,random(40,60)); //NOBK
    // rect(i*0.7,700,20,this.tall-height);
    // this.tall-=waveform[i]*4;
    }
  }
  this.yspeed+=15;
  this.wavealpha-=2.5;
  this.wavealpha2-=5;
  if(this.wavealpha<=0){
    this.wavealpha=0;
  }
  if(this.wavealpha2<=0){
    this.wavealpha2=0;
  }
  }
}