function wave(){
  
this.tall=200;
this.tallspeed=1;
this.posy=700; //650
this.yspeed=1;
this.wavealpha=70;
this.wavealpha2=255;
this.sizey=0;

  //display
  this.display1 = function(){
  
  for(var i=0;i<waveform.length;i++){ //all as an object. push into array to change pos and scale
    fill(180-i*0.05,150+i*0.05,100,this.wavealpha);
    //fill(180-i*0.05,200,180+i*0.05,50);
    if(i%7==0){
    push();
    //blendMode(DIFFERENCE);
    //rect(i*0.7,500,40,waveform[i]*150-300);
    pop();
    //rect(i*0.7+100,500+i*0.03,40,waveform[i]*150-250);
    //color or opacity changed by the boats position?
    //blendMode(DIFFERENCE);
    blendMode(DIFFERENCE);
    // ellipse(i*0.7+140,500-0.015*i,400,waveform[i]*150-420);
    this.sizey=waveform[i]*random(170)-542;
    ellipse(i*3+random(10,30),this.posy-this.yspeed,400,this.sizey);//NOBK
    blendMode(SCREEN);
    fill(180-i*0.05,200,180+i*0.05,this.wavealpha2);
    // ellipse(i*0.7,500+i*0.03+random(10),300,waveform[i]*150-400);
    //ellipse(i*0.7+140,500+random(20)-0.015*i,400,waveform[i]*150-420);
    ellipse(i*3+random(30,50),this.posy+random(30)-this.yspeed,400,waveform[i]*random(170)-540); //NOBK
    // rect(i*0.7,700,20,this.tall-height);
    // this.tall-=waveform[i]*4;
    }
  }
  this.yspeed+=5;
  this.wavealpha-=3;
  this.wavealpha2-=6;
  if(this.wavealpha<=0){
    this.wavealpha=0;
  }
  if(this.wavealpha2<=0){
    this.wavealpha2=0;
  }
  }
}