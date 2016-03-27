var startpox=0;
var startposy=0;
var linenum = 600;
var playset = 0;
var spectrum = 0;

var scene1button;
var fft;
var playset=0;
var waveform=0; 
var posx=0;
var tall=200;
var tallspeed=1;
var wavelist=[];
var boat;
var boatposy;
var boatposx=-50;
var easing=0.1;
var sun1angle=0;
var sun2angle=0;

var time=0;
var bkc=250;
var bkcspeed=3;
var sceneset=0;
var drake;
var pika;
var spg;
var spgdrag=false;
var spritelist=[];
var draglist=[false,false,false,false];
var inter=0;
var interspeed=0;
var music=0;
var playset=0;
var eqheight=0;
var eqavg=0;
var eqcount=0;


var slider;
var sliderVal;
var bubbles=[];
var input;
var button;
var pasttime;
var savedtime;

var input;
var video;
var CW=1920/2;
var CH=1080/2;

var canvas;

var shapeslist=[];
var a1=0;
var shapecount=1;
var astrofall;
var astrofallsizerate=0;
var astrofallangle=0;
var astroalpha=0;

function setup() {
  fft = new p5.FFT();
  canvas = createCanvas(1920/2,1080/2);
  // canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);
  // canvas.hide();
  scene1button = select("#scene1");
  scene2button = select("#scene2");
  // scene1button.position(100,100);
  canvas.parent("canvas1");
  scene3button = select("#scene3");
  scene4button = select("#scene4");
  scene5button = select("#scene5");
  homebutton = select("#home");
  // scene1button.position(windowWidth/2-width/2+200, windowHeight/2-height/2-100);
  // scene2button.position(windowWidth/2-width/2+300, windowHeight/2-height/2-100);
  // scene3button.position(windowWidth/2-width/2+400, windowHeight/2-height/2-100);
  // scene4button.position(windowWidth/2-width/2, windowHeight/2+height/2-100);
  // homebutton.position(windowWidth/2-width/2+100, windowHeight/2+height/2-100);
  // scene5button.position(windowWidth/2-width/2+200, windowHeight/2+height/2-100);
  scene1button.mouseClicked(a);
  scene2button.mouseClicked(b);
  scene3button.mouseClicked(c);
  scene4button.mouseClicked(d);
  homebutton.mouseClicked(e);
  scene5button.mouseClicked(f);
  scene1button.mouseOver(changeColor1);
  scene1button.mouseOut(revertColor1);
  scene2button.mouseOver(changeColor2);
  scene2button.mouseOut(revertColor2);
  scene3button.mouseOver(changeColor3);
  scene3button.mouseOut(revertColor3);
  scene4button.mouseOver(changeColor4);
  scene4button.mouseOut(revertColor4);
  scene5button.mouseOver(changeColor5);
  scene5button.mouseOut(revertColor5);
  homebutton.mouseOver(changeColorhome);
  homebutton.mouseOut(revertColorhome);
  
  sun1angle=PI-PI/5;
  sun2angle=1;
  
  drakesprite = createSprite(width/2,height/2,100,100);
  drakesprite.addAnimation("drake",drake);
  mileysprite = createSprite(random(100,width-100),height-50,100,100);
  mileysprite.addAnimation("miley",miley);
  baconsprite = createSprite(random(100,width-100),height-50,100,100);
  baconsprite.addAnimation("bacon",bacon);
  pikasprite = createSprite(random(100,width-100),height-30,100,100);
  pikasprite.addAnimation("pika",pika);
  spgsprite = createSprite(random(100,width-100),height-30,100,100);
  spgsprite.addAnimation("spg",spg);
  spritelist=[spgsprite,pikasprite,baconsprite,mileysprite];
  
  savedtime = millis();
  for (var i=0; i<200; i++){
    bubbles[i]=new Bubble1(random(width), random(height));
  }
  
  video = createCapture(VIDEO);
  video.hide();
  
  input = new p5.AudioIn();
  input.start();
}
var scene1color='#ffd55f';
var scene2color='#ffd55f';
var scene3color='#ffd55f';
var scene4color='#ffd55f';
var scene5color='#ffd55f';
var homecolor='#ffd55f';
var overcolor='#c0c0c0';

function changeColor1(){
  scene1button.style('background-color',overcolor);
}
function changeColor2(){
  scene2button.style('background-color',overcolor);
}
function changeColor3(){
  scene3button.style('background-color',overcolor);
}
function changeColor4(){
  scene4button.style('background-color',overcolor);
}
function changeColor5(){
  scene5button.style('background-color',overcolor);
}
function changeColorhome(){
  homebutton.style('background-color',overcolor);
}
function revertColor1(){
  scene1button.style('background-color',scene1color);
}
function revertColor2(){
  scene2button.style('background-color',scene2color);
}
function revertColor3(){
  scene3button.style('background-color',scene3color);
}
function revertColor4(){
  scene4button.style('background-color',scene4color);
}
function revertColor5(){
  scene5button.style('background-color',scene5color);
}
function revertColorhome(){
  homebutton.style('background-color',homecolor);
}

// function windowResized() {
//   // position canvas in middle of screen
//   scene2button.position(0,0);
//   canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);
// }

function preload(){
  music = loadSound("focus.mp3");
  astrofall = loadImage("astrofall.png");
  boat = loadImage("boat.gif");
  drake = loadAnimation("assets/drake1.png","assets/drake2.png","assets/drake3.png","assets/drake4.png","assets/drake5.png","assets/drake6.png");
  pika = loadAnimation("assets/pika1.png","assets/pika2.png","assets/pika3.png","assets/pika4.png");
  spg = loadAnimation("assets/spg1.png","assets/spg2.png","assets/spg3.png","assets/spg4.png","assets/spg5.png","assets/spg6.png","assets/spg7.png","assets/spg8.png","assets/spg9.png","assets/spg10.png","assets/spg11.png","assets/spg12.png","assets/spg13.png","assets/spg14.png","assets/spg15.png","assets/spg16.png","assets/spg17.png");
  bacon = loadAnimation("assets/bacon1.png","assets/bacon2.png","assets/bacon3.png","assets/bacon4.png","assets/bacon5.png","assets/bacon6.png","assets/bacon7.png","assets/bacon8.png","assets/bacon9.png","assets/bacon10.png","assets/bacon11.png","assets/bacon12.png","assets/bacon13.png","assets/bacon14.png","assets/bacon15.png","assets/bacon16.png","assets/bacon17.png",
                        "assets/bacon18.png","assets/bacon19.png","assets/bacon20.png","assets/bacon21.png","assets/bacon22.png","assets/bacon23.png","assets/bacon24.png","assets/bacon25.png","assets/bacon26.png","assets/bacon27.png","assets/bacon28.png","assets/bacon29.png","assets/bacon30.png");
  miley = loadAnimation("assets/miley1.png","assets/miley2.png","assets/miley3.png","assets/miley4.png","assets/miley5.png","assets/miley6.png","assets/miley7.png","assets/miley8.png","assets/miley9.png","assets/miley10.png","assets/miley11.png","assets/miley12.png","assets/miley13.png","assets/miley14.png","assets/miley15.png","assets/miley16.png","assets/miley17.png",
                        "assets/miley18.png","assets/miley19.png","assets/miley20.png","assets/miley21.png","assets/miley22.png","assets/miley23.png","assets/miley24.png","assets/miley25.png","assets/miley26.png","assets/miley27.png","assets/miley28.png","assets/miley29.png","assets/miley30.png" ,"assets/miley31.png" ,"assets/miley32.png" ,"assets/miley33.png" ,"assets/miley34.png",
                        "assets/miley35.png","assets/miley36.png","assets/miley37.png","assets/miley38.png","assets/miley39.png","assets/miley40.png","assets/miley41.png","assets/miley42.png","assets/miley43.png","assets/miley44.png","assets/miley45.png","assets/miley46.png","assets/miley47.png","assets/miley48.png","assets/miley49.png","assets/miley50.png","assets/miley51.png","assets/miley52.png","assets/miley53.png","assets/miley54.png");
}

function mousePressed(){
  if(sceneset==0 && dist(mouseX,mouseY,startposx,startposy)<100){
    playmusic();
  }
  if(sceneset==2){
  for(var i=0;i<draglist.length;i++){
    if(dist(mouseX,mouseY,spritelist[i].position.x,spritelist[i].position.y)<50 ){
    // console.log(spritelist[i].mouseIsPressed);
    // if (spritelist[i].mouseIsPressed) {
      draglist[i]=true;
      break;
    }
  }
  }
  if(sceneset==3){
   background(random(200,255),random(0,20),random(100,200));
   //blendMode(DIFFERENCE);
   }
}

function mouseMoved(){
  if(sceneset==3){
  bubbles.push(new Bubble1(mouseX, mouseY));
  }
}

function changebackground(){
   //bubbles.splice(0,10);
   if(sceneset==3){
   background(random(200,255),random(0,20),random(100,200));
   blendMode(DIFFERENCE);
   }
  }  

function mouseReleased(){
  if(draglist[3]==true && spritelist[3].position.y<=height-100 ){
    spritelist[3].position.y=100;
  }
  for(var i=0;i<draglist.length;i++){
    draglist[i]=false;
  }
}

function playmusic(){
  if(playset==0){
    music.play();
    playset=1;
  }
}

function draw() {
  
  //print(sceneset);
  startposx=width/2;
  startposy=height/2;
  time=millis();
  //print(pasttime);
  pasttime=millis()-savedtime;
  if(pasttime>=3000 && sceneset==3){
    changebackground();
    savedtime = millis();
  }
  
  if(sceneset==0){
    scene1button.style('background-color',scene1color);
    scene2button.style('background-color',scene2color);
    scene3button.style('background-color',scene3color);
    scene4button.style('background-color',scene4color);
    homebutton.style('background-color','#CFCBDB');
    scene5button.style('background-color',scene5color);
    ellipse(startposx,startposy,100,100);
    background(0);
    waveform = fft.waveform();
    spectrum = fft.analyze();
    push();
    noStroke();
    translate(width / 2, height / 2);
    rectMode(CENTER);
    blendMode(SCREEN);
    for (var i = 0; i < waveform.length; i++) {
      //fill(i/10+100,mouseX/15+80,mouseY/10+140,150);
      var angle = TWO_PI;
      rotate(angle / waveform.length);
      var length = map(waveform[i], -1, 1, 1, 100);
      var length2 = map(spectrum[i], 0, 255, 0, 500);
      if (i % 5 == 0) {
        fill(i / 5+30, i / 8 + mouseX / 18, mouseY / 6 + 90, 100);
        rect(0, 120, 4, 10+length2 * 2.6);
        // fill(mouseX / 15 + 30, i / 10 + 100, mouseY / 10 + 140, 50);
        // rect(0,200,1,length*1.2);//用一個就好了？
      }
    }
    pop();
  }
  
  switch(sceneset){
    case 1:
    waveboat();
    scene1button.style('background-color',overcolor);
    scene2button.style('background-color',scene2color);
    scene3button.style('background-color',scene3color);
    scene4button.style('background-color',scene4color);
    homebutton.style('background-color',homecolor);
    scene5button.style('background-color',scene5color);
    break;
    
    case 2:
    gifdance();
    scene1button.style('background-color',scene1color);
    scene2button.style('background-color',overcolor);
    scene3button.style('background-color',scene3color);
    scene4button.style('background-color',scene4color);
    homebutton.style('background-color',homecolor);
    scene5button.style('background-color',scene5color);
    break;
    
    case 3:
    bubbledraw();
    scene1button.style('background-color',scene1color);
    scene2button.style('background-color',scene2color);
    scene3button.style('background-color',overcolor);
    scene4button.style('background-color',scene4color);
    homebutton.style('background-color',homecolor);
    scene5button.style('background-color',scene5color);
    break;
    
    case 4:
    volumevideo();
    scene1button.style('background-color',scene1color);
    scene2button.style('background-color',scene2color);
    scene3button.style('background-color',scene3color);
    scene4button.style('background-color',overcolor);
    homebutton.style('background-color',homecolor);
    scene5button.style('background-color',scene5color);
    break;
    
    case 5:
    astrofall1();
    scene1button.style('background-color',scene1color);
    scene2button.style('background-color',scene2color);
    scene3button.style('background-color',scene3color);
    scene4button.style('background-color',scene4color);
    homebutton.style('background-color',homecolor);
    scene5button.style('background-color',overcolor);
    break;
  }
  
    //button
  scene1button.mouseOver(changeColor1);
  scene1button.mouseOut(revertColor1);
  scene2button.mouseOver(changeColor2);
  scene2button.mouseOut(revertColor2);
  scene3button.mouseOver(changeColor3);
  scene3button.mouseOut(revertColor3);
  scene4button.mouseOver(changeColor4);
  scene4button.mouseOut(revertColor4);
  scene5button.mouseOver(changeColor5);
  scene5button.mouseOut(revertColor5);
  homebutton.mouseOver(changeColorhome);
  homebutton.mouseOut(revertColorhome);
  
}

function a(){
  sceneset=1;
}
function b(){
  sceneset=2;
}
function c(){
  sceneset=3;
}
function d(){
  sceneset=4;
}
function e(){
  sceneset=0;
}
function f(){
  sceneset=5;
}

function fish(){
  background(bkc);
  bkc -= 3;
  time = millis();
  noStroke();
  if (playset == 0) {
    music.play();
    playset = 1;
    // push();
    // fill(0);
    // rect(0,0,width,height);
    // pop();
  }
  //ellipse(posx,100,10,10);
  posx += 5;
  waveform = fft.waveform();
  spectrum = fft.analyze();
  // //print(waveform[0]);
  var millisecond = floor(millis());
  var timer = millisecond % 200;
  // print(timer);
  if (timer > 0 && timer < 100) {
    wavelist.push(new wave());
  }
  for (var i = 0; i < wavelist.length; i++) {
    push();
    //fill(220, 230, 20);
    blendMode(DIFFERENCE);
    imageMode(CENTER);
    //boatposy=wavelist[0].posy+(wavelist[0].sizey)*0.8+90;
    image(boat, boatposx, wavelist[0].posy + (wavelist[0].sizey) * 0.8 + 80, 110, 40);
    image(boat, boatposx - 40, wavelist[0].posy + (wavelist[0].sizey) * 0.8 + 20, 150, 50);
    image(boat, boatposx - 100, wavelist[0].posy + (wavelist[0].sizey) * 0.8, 70, 20);
    image(boat, boatposx - 120, wavelist[0].posy + (wavelist[0].sizey) * 0.8 - 30, 70, 20);
    // if (time >= 6000) {
      boatposx = mouseX;
    //   //boatposx += (mouseX-boatposx)*easing;
    // } else {
    //   boatposx += 1;
    // }
    //ellipse(posx,470,100,100);
    //print(boatposy);
    pop();
    //print(wavelist.length);

    wavelist[i].display1();
    if (wavelist[i].wavealpha2 <= 0) {
      wavelist.splice(i, 3);
    }
  }
}

function waveboat(){
  background(bkc);
  if (playset == 0) {
    music.play();
    playset = 1;
  }
  bkc-=bkcspeed;
  if(bkc<20 || bkc>250){
    bkcspeed=bkcspeed*-1;
    print(bkcspeed);
  }
  noStroke();
  //ellipse(posx,100,10,10);
  posx+=5;
  waveform = fft.waveform();
  // print(waveform[0]);
  var millisecond = floor(millis());
  var timer = millisecond%500;
  // print(timer);
  if(timer>0 && timer<100){
    wavelist.push(new wave());
  }
  for(var i=0;i<wavelist.length;i++){
 
    
    push();
    fill(220,230,20);
    blendMode(REPLACE);
    imageMode(CENTER);
    //boatposy=wavelist[0].posy+(wavelist[0].sizey)*0.8+90;
    //image(boat,boatposx,wavelist[0].posy+(wavelist[0].sizey)*0.75+65,150,150);
    if(time>=6000){
      boatposx=mouseX;
    //boatposx += (mouseX-boatposx)*easing;
    }else{
      boatposx+=2;
    }
    //ellipse(posx,470,100,100);
    //print(boatposy);
    pop();
    //print(wavelist.length);
    
    wavelist[i].display1();
    if(wavelist[i].wavealpha2<=0){
      wavelist.splice(i,1);
    }
  }
  blendMode(REPLACE);
  //blendMode(MULTIPLY);
  fill(255,200,50,80);
  sun1angle+=PI/300;
  sun2angle+=PI/300;
  var sun1posx=width/2+sin(sun1angle)*1000;
  ellipse(sun1posx,920+cos(sun1angle)*800,220,220);
  fill(255,150,50,80);
  ellipse(sun1posx,920+cos(sun1angle)*800,220,220);
  if(sun1angle>PI+PI/5){
    sun1angle=PI-PI/5;
  }
  // fill(255,150,50,80);
//  ellipse(sun2posx,920+cos(sun1angle)*800,220,220);
  // fill(255,100,50,80);
  // ellipse(700,130,220,220);
  //print(wavelist.length);
  // blendMode(REPLACE);
  // fill(255,0,0,255);
  // ellipse(100,300,30,30);
  // tall-=tallspeed;
  // if(tall<100 || tall>200){
  //   tallspeed=tallspeed*-1;
  // }
}

function gifdance() {
  background(205);
  if (playset == 0) {
    music.play();
    playset = 1;
  }
  if(time<=3000){
    drakesprite.animation.stop();
  }else{
    drakesprite.animation.play();
  }
  eqheight = fft.analyze(); 
  eqcount=0;
  for(var i=0;i<eqheight.length;i++){
    //interspeed=eqheight[i];
    eqcount+=eqheight[i];
    //map
  }
  eqavg=eqcount/eqheight.length;
  interspeed=map(eqavg,0,150,0,1);

  push();
  noStroke();
  rectMode(CENTER);
  var wallc1 = color(121,231,246);
  var wallc2 = color(230,121,231);
  // inter+=interspeed;
  // if(inter>1 || inter<0){
  //   interspeed=interspeed*-1;
  // }
  //用線條寫 然後小山漸層如何？恩？
  //然後travel在地上
  for(var i=0;i<250;i++){
    push();
    var inter=map(i*interspeed*1.5,0,250,0,1);
    var c = lerpColor(wallc1,wallc2,inter);
    stroke(c);
    line(width/2-250,i,width/2+250,i);
    pop();
  }
  // var wallc = lerpColor(wallc1,wallc2,interspeed);
  // fill(wallc);
  // rect(width/2,0,500,500);
  beginShape();
  fill(74,153,164);
  quad(width/2-250,250,0,height,width,height,width/2+250,250);
  fill(100,200,210);
  quad(0,0,0,height,width/2-250,250,width/2-250,0);
  quad(width,height,width/2+250,250,width/2+250,0,width,0);
  fill(250,200,0);
  quad(52,height-(60*250)/(width/2-250),35,height-(40*250)/(width/2-250),width-35,height-(40*250)/(width/2-250),width-52,height-(60*250)/(width/2-250));
  endShape();
  pop();
  textFont("Helvetica");
  textAlign(CENTER);
  textSize(20);
  text("Drake is so lonely.",width/2,500/4+10);
  for(var select=0;select<spritelist.length;select++){
    if(spritelist[select].position.y>=height-100){
      spritelist[select].animation.stop();
    }else{
      spritelist[select].animation.play();
    }
    if(draglist[select]==true){ //把drag存進數列，也可以用for寫
      spritelist[select].position.x=mouseX;
      spritelist[select].position.y=mouseY;
     }
  }

  //animation(drake,width/2,height/2+30);
  //animation(pika,mouseX,mouseY);
  //animation(spg,100,100);
  // if(drake.getFrame()==drake.getLastFrame()){
  // drake.changeFrame(20);
  // }
  drawSprites();
}

function bubbledraw() {
  //print(savedtime);
  if (playset == 0) {
    music.play();
    playset = 1;
  }
  
  for(var i=0; i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
    //新畫的超過一百個才消?
    //點擊換顏色
    if (bubbles.length>200){
      bubbles.splice(i,3);//(index, how many)
    }
  }
}

function Bubble1(x,y){
  this.x=x;
  this.y=y;
  this.dia=random(10,50);
  
  this.display=function(){
    noStroke();
    fill(mouseX/3+30,mouseY/3+30,mouseY/2+50,50);
    ellipse(this.x,this.y,this.dia,this.dia);
  }
  this.move=function(){
    this.x=this.x+random(-1,1);
    this.y=this.y+random(-1,1);
  }
    
}
  
function volumevideo(){
  var vol = input.getLevel();
  //console.log(vol);
  if (playset == 0) {
    music.play();
    playset = 1;
  }
    if (vol > 0.0002) {

    background(5 + vol * 1000, 5 + vol * 900, vol * 1000, 40 + vol * 1000);
    fill(random(0, 200), random(0, 100), random(0, 60 + vol * 900), random(1, 255));
    }

  push();
  scale(0.7);
  bubble();
  pop()
  
  push();
  translate(650,0)
  scale(0.7);
  bubble();
  pop()
  
  push();
  translate(260 ,50)
  scale(0.8);
  bubbleB();
  pop()
}

function bubble() {
  var vol = input.getLevel();
  //console.log(vol);
  
  blendMode(REPLACE);

  if (vol > 0.0002) {

    noStroke();
    ellipse(random(CH/2-100, CH/2), random(CH/2+80, CH/2+130), 5 + vol * 1360, 5 + vol * 1360);
    //ellipse(random(40,150+vol*700), random(70,100+vol*700), 10+vol*500, 10+vol*500);
  }
}

function bubbleB() {
  var vol = input.getLevel();
  //console.log(vol);
  
  blendMode(REPLACE);

  imageMode(CENTER);
  image(video, 140, 80, vol * 1500, vol * 1000);
  image(video, 140, 470, vol * 1500, vol * 1000);
  image(video, 400, 80, vol * 1500, vol * 1000);
  image(video, 400, 470, vol * 1500, vol * 1000);
  image(video, 140, 300, vol * 1500, vol * 1000);
  image(video, 400, 300, vol * 1500, vol * 1000);

  if (0.18 > vol > 0) {

    background(0 + vol * 950, 0 + vol * 950, 0 + vol * 950, 10 + vol * 1000);
    fill(random(10, 200), random(0, 50), 60 + vol * 1000, random(10, 180));
    noStroke();
    // Draw an ellipse with size based on volume
    //frameRate(5000);
    ellipse(random(160, 340), random(160, 340), 5 + vol * 1300, 5 + vol * 1300);
    //ellipse(random(40,150+vol*700), random(70,100+vol*700), 10+vol*500, 10+vol*500);
  } else if (vol >= 0.18) {
    blendMode(ADD);
    // frameRate(5000);
    background(255, 200);
    fill(random(10, 200), 40, 60 + vol * 1000, random(50, 200));
    noStroke();
    // Draw an ellipse with size based on volume
    //frameRate(5000);
     ellipse(random(CH/2-100, CH/2), random(CH/2+80, CH/2+130), 5 + vol * 1360, 5 + vol * 1360);
  }
}

function snap() {
  image(video, 500, 0, 100, 100);
}

function astrofall1() {
  if (playset == 0) {
    music.play();
    playset = 1;
  }
  background(255,80);
  if(a1==0){
  for(var i=0;i<shapecount;i++){
    shapeslist.push(new shapes());
  }
  a1=1;
  }
  
  //dark to lighter
  if(shapeslist.length>0){

    for(var i=0;i<shapeslist.length;i++){
      //shapeslist[shapeslist.length-1].display1();
      shapeslist[i].display1();
      //print(shapeslist[shapeslist.length-1].radius);
      //print(shapeslist.length-1);
      if(shapeslist[shapeslist.length-1].radius>100){
        //shapecount+=1;
        a1=0;
      }
    if(shapeslist.length>=2){
      if(shapeslist[i].radius>300){
        //splice(shapeslist,i,1);
        shapeslist.splice(i,1);
        // print(shapeslist[0]);
        // print(shapeslist.length);
      }
    }
    //print(shapeslist[i].radius);
    }
  }
  translate(width/2,height/2);
  astrofallangle+=0.01;
  rotate(astrofallangle);
  imageMode(CENTER);

  //tint(astroalpha);
  image(astrofall,0,0,astrofall.width*2/(astrofallsizerate),astrofall.height*2/(astrofallsizerate));

  astrofallsizerate+=0.1;
  if(astrofallsizerate>100){
    astrofallsizerate=0;
  }
}