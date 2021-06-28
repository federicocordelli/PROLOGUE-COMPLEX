var click = 0;
var startingTimer1 = 0;
var timer1 = 0;
var startingTimer2 = 0;
var timer2 = 0;
var startingTimer3 = 0;
var timer3 = 0;
var startingTimer4 = 0;
var timer4 = 0;
var startingTimer5 = 0;
var timer5 = 0;
var startingTimer6 = 0;
var timer6 = 0;
var startingTimer7 = 0;
var timer7 = 0;
var imagesOk = [];
var o1 = 0;
var o2 = 0;
var karma = 0;
var end = 0;
//variabili dei testi
var pink = '#f56c63';
var blackblu = "#001110";
var lime = '#b9c990';
var textSize1 = 20;
var textSize2 = 25;
var textSize3 = 30;





function preload() {


  intlMed = loadFont('addons/SuisseIntl-Medium.otf');
  intlReg = loadFont('addons/SuisseIntl-Regular.otf');
  intlBol = loadFont('addons/SuisseIntl-Bold.otf');
  druk = loadFont('addons/DrukCond-Super.ttf');
  gtMono = loadFont('addons/SuisseIntlMono-Bold.otf');

  for (var i=1; i<52; i++) {
    imagesOk[i] = loadImage("addons/images/"+i+".png");
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  var myUrl = new URL (window.location.href);
   karmaPoints = myUrl.searchParams.get("karma")*1;


  //Button To HOME
 button = createButton('HOME');
 button.position(200, ((((height-(width/2.35))/2)+(width/2.35))+70));
 button.mouseClicked(homy);
 button.addClass('button1');

 //Button To back
button = createButton('BACK');
button.position(200, ((((height-(width/2.35))/2))-70));
button.mouseClicked(backy);
button.addClass('button');


}

function draw() {
  background("#000000");
  console.log(karma);


  //variabili posizione
  var posY = ((width/2.2));
  //variabili testo
  var fontDes = gtMono;

  //
   fill('yellow');
  textAlign(CENTER);
  textFont(intlBol);
  textSize(50);
   // text(click,width/2,50);
  // text(karma,width/2,height-50);

  if (click===0){

    background("#001110");
    push();
    fill(pink);
    textAlign(CENTER,CENTER);
    textFont(intlBol);
    textSize(50*(frameCount/120));
    text("click to start",width/2,height/2);
    pop();

    push();
    fill(lime);
    textAlign(CENTER,CENTER);
    textFont(intlBol);
    textSize(20);
    text("THE AENEAS PROJECT",width/2,(height/2)-300);
    textFont(intlMed);
    text('"prologue"',width/2,(height/2)+300);
    pop();
  }

  if (click===1){

    imageMode(CENTER);
    image(imagesOk[1], windowWidth/2, windowHeight/2, width, width/2.35);

  }

  if (click===2){

    imageMode(CENTER);
    image(imagesOk[2], windowWidth/2, windowHeight/2, width, width/2.35);
  }

  if (click===3){

    imageMode(CENTER);
    image(imagesOk[3], windowWidth/2, windowHeight/2, width, width/2.35);
  }

  if (click===4){

    imageMode(CENTER);
    image(imagesOk[4], windowWidth/2, windowHeight/2, width, width/2.35);
  }

  if (click===5){

    imageMode(CENTER);
    image(imagesOk[5], windowWidth/2, windowHeight/2, width, width/2.35);

  }

  if (click===6){

    imageMode(CENTER);
    image(imagesOk[5], windowWidth/2, windowHeight/2, width, width/2.35);

if (timer1>= -(width/2)) {
    startingTimer1 = 1;
    if (startingTimer1===1){
      timer1 = timer1 - 12;
      push();
      // rectMode(CENTER,CENTER);
      // fill('red');
      // rect(((width/4)*6)+timer1,height/2,width,height);
      imageMode(CENTER);
      image(imagesOk[6], ((width/4)*6)+timer1, windowHeight/2, width, width/2.35);
      pop();
    }
  }
     if (timer1 <= -(width/2)) {
      startingTimer1 = 2;
      if (startingTimer1===2){
        push();
        // rectMode(CENTER,CENTER);
        // fill('red');
        // rect(((width/4)*4),height/2,width,height);
        imageMode(CENTER);
        image(imagesOk[6], ((width/4)*4), windowHeight/2, width, width/2.35);
        pop();
      }
    }


  }

if (click===7) {

  imageMode(CENTER);
  image(imagesOk[5], windowWidth/2, windowHeight/2, width, width/2.35);

  if (timer2>= -(width/2)) {
      startingTimer2 = 1;
      if (startingTimer2===1){
        timer2 = timer2 - 12;
        push();
        // rectMode(CENTER,CENTER);
        // fill('red');
        // rect(((width/4)*4)+timer2,height/2,width,height);
        imageMode(CENTER);
        image(imagesOk[6], ((width/4)*4)+timer2, windowHeight/2, width, width/2.35);
        pop();
      }
    }
       if (timer2 <= -(width/2)) {
        startingTimer2 = 2;
        if (startingTimer2===2){
          push();
          // rectMode(CENTER,CENTER);
          // fill('red');
          // rect(width/2,height/2,width,height);
          imageMode(CENTER);
          image(imagesOk[6], width/2, windowHeight/2, width, width/2.35);
          pop();
        }
      }


}

if (click===8){

  imageMode(CENTER);
  image(imagesOk[7], windowWidth/2, windowHeight/2, width, width/2.35);


}

if (click===9){

  imageMode(CENTER);
  image(imagesOk[8], windowWidth/2, windowHeight/2, width, width/2.35);
}

if (click===10){

  imageMode(CENTER);
  image(imagesOk[9], windowWidth/2, windowHeight/2, width, width/2.35);
}

if (click===11){

  imageMode(CENTER);
  image(imagesOk[10], windowWidth/2, windowHeight/2, width, width/2.35);
}

if (click===12){

  imageMode(CENTER);
  image(imagesOk[11], windowWidth/2, windowHeight/2, width, width/2.35);
}

if (click===13){

  imageMode(CENTER);
  image(imagesOk[12], windowWidth/2, windowHeight/2, width, width/2.35);
}



if (click===14){

  imageMode(CENTER);
  image(imagesOk[12], windowWidth/2, windowHeight/2, width, width/2.35);

if (timer3<= (width/2)) {
  startingTimer3 = 1;
  if (startingTimer3===1){
    timer3 = timer3 + 12;
    push();
    // rectMode(CENTER,CENTER);
    // fill('blue');
    // rect(-((width/2))+timer3,height/2,width,height);
    imageMode(CENTER);
    image(imagesOk[14], -((width/2))+timer3, windowHeight/2, width, width/2.35);
    pop();
  }
}
   if (timer3 >= (width/2)) {
    startingTimer3 = 2;
    if (startingTimer3===2){
      push();
      // rectMode(CENTER,CENTER);
      // fill('blue');
      // rect(0,height/2,width,height);
      imageMode(CENTER);
      image(imagesOk[14], 0, windowHeight/2, width, width/2.35);
      pop();
    }
  }

}

if (click===15) {

  imageMode(CENTER);
  image(imagesOk[12], windowWidth/2, windowHeight/2, width, width/2.35);

if (timer4<= (width/2)) {
    startingTimer4 = 1;
    if (startingTimer4===1){
      timer4 = timer4 + 12;
      push();
      // rectMode(CENTER,CENTER);
      // fill('blue');
      // rect((0)+timer4,height/2,width,height);
      imageMode(CENTER);
      image(imagesOk[14], (0)+timer4, windowHeight/2, width, width/2.35);
      pop();
    }
  }
     if (timer4 >= (width/2)) {
      startingTimer4 = 2;
      if (startingTimer4===2){
        push();
        // rectMode(CENTER,CENTER);
        // fill('blue');
        // rect(width/2,height/2,width,height);
        imageMode(CENTER);
        image(imagesOk[14], width/2, windowHeight/2, width, width/2.35);
        pop();
      }
    }

}

if (click===16) {
  imageMode(CENTER);
  image(imagesOk[48], width/2, windowHeight/2, width, width/2.35);

}

if (click===17) {
  imageMode(CENTER);
  image(imagesOk[15], width/2, windowHeight/2, width, width/2.35);

}

if (click===18) {
  imageMode(CENTER);
  image(imagesOk[16], width/2, windowHeight/2, width, width/2.35);
}

if (click===19) {
  imageMode(CENTER);
  image(imagesOk[17], width/2, windowHeight/2, width, width/2.35);
}

if (click===20) {
  imageMode(CENTER);
  image(imagesOk[49], width/2, windowHeight/2, width, width/2.35);
}

if (click===21) {
  imageMode(CENTER);
  image(imagesOk[18], width/2, windowHeight/2, width, width/2.35);
}

if (click===22) {

  imageMode(CENTER);
  image(imagesOk[19], width/2, windowHeight/2, width, width/2.35);

}

if (click===23) {

  imageMode(CENTER);
  image(imagesOk[20], width/2, windowHeight/2, width, width/2.35);

}

if (click===24) {

  imageMode(CENTER);
  image(imagesOk[21], width/2, windowHeight/2, width, width/2.35);

}

if (click===25){

  imageMode(CENTER);
  image(imagesOk[21], windowWidth/2, windowHeight/2, width, width/2.35);

if (timer5>= -(width/2)) {
  startingTimer5 = 1;
  if (startingTimer5===1){
    timer5 = timer5 - 12;
    push();
    // rectMode(CENTER,CENTER);
    // fill('red');
    // rect(((width/4)*6)+timer1,height/2,width,height);
    imageMode(CENTER);
    image(imagesOk[22], ((width/4)*6)+timer5, windowHeight/2, width, width/2.35);
    pop();
  }
}
   if (timer5 <= -(width/2)) {
    startingTimer5 = 2;
    if (startingTimer5===2){
      push();
      // rectMode(CENTER,CENTER);
      // fill('red');
      // rect(((width/4)*4),height/2,width,height);
      imageMode(CENTER);
      image(imagesOk[22], ((width/4)*4), windowHeight/2, width, width/2.35);
      pop();
    }
  }
}

if (click===26) {

imageMode(CENTER);
image(imagesOk[21], windowWidth/2, windowHeight/2, width, width/2.35);

if (timer6>= -(width/2)) {
    startingTimer6 = 1;
    if (startingTimer6===1){
      timer6 = timer6 - 12;
      push();
      // rectMode(CENTER,CENTER);
      // fill('red');
      // rect(((width/4)*4)+timer2,height/2,width,height);
      imageMode(CENTER);
      image(imagesOk[22], ((width/4)*4)+timer6, windowHeight/2, width, width/2.35);
      pop();
    }
  }
     if (timer6 <= -(width/2)) {
      startingTimer6 = 2;
      if (startingTimer6===2){
        push();
        // rectMode(CENTER,CENTER);
        // fill('red');
        // rect(width/2,height/2,width,height);
        imageMode(CENTER);
        image(imagesOk[22], width/2, windowHeight/2, width, width/2.35);
        pop();
      }
    }

}
if (click===27) {
  imageMode(CENTER);
  image(imagesOk[23], width/2, windowHeight/2, width, width/2.35);
  push();
}

if (click===28) {
  imageMode(CENTER);
  image(imagesOk[24], width/2, windowHeight/2, width, width/2.35);
}

if (click===29) {
  imageMode(CENTER);
  image(imagesOk[25], width/2, windowHeight/2, width, width/2.35);
}

if (click===30) {
  imageMode(CENTER);
  image(imagesOk[26], width/2, windowHeight/2, width, width/2.35);
}

if (click===31) {
  imageMode(CENTER);
  image(imagesOk[27], width/2, windowHeight/2, width, width/2.35);

}

if (click===32) {
  imageMode(CENTER);
  image(imagesOk[28], width/2, windowHeight/2, width, width/2.35);
}

if (click===33) {
  imageMode(CENTER);
  image(imagesOk[29], width/2, windowHeight/2, width, width/2.35);

}

if (click===34) {
  imageMode(CENTER);
  image(imagesOk[30], width/2, windowHeight/2, width, width/2.35);

}

if (click===35) {
  imageMode(CENTER);
  image(imagesOk[31], width/2, windowHeight/2, width, width/2.35);

}

if (click===36) {
  imageMode(CENTER);
  image(imagesOk[32], width/2, windowHeight/2, width, width/2.35);
/*
  buttonC1e1.removeClass('buttonUsed');
  buttonC1e1.addClass('button');
  buttonC1e2.removeClass('buttonUsed');
  buttonC1e2.addClass('button');
*/
  if(mouseX <= width/2) {
    o1=0;
    o2=200;
  }else if (mouseX > width/2){
    o1=200;
    o2=0;
  }
  push();
  rectMode(CENTER,CENTER);
  fill(0,0,0,o1);
  rect(0,height/2,width,height);
  pop();

  push();
  rectMode(CENTER,CENTER);
  fill(0,0,0,o2);
  rect(width,height/2,width,height);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(lime);
  textSize(textSize3);
  textFont(fontDes);
  text("AND YOU? WHICH SIDE WILL YOU JOIN?",width/2,((height-(width/2.35))/2)+(((width/2.35)/12)*1))
  rectMode(CENTER,CENTER);
  fill(blackblu);
  rect(width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11),450,70);
  rect((width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11),500,70);
  fill(pink);
  text("side with the people",width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  text("side with the government",(width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  pop();

}

if (click===37) {
  imageMode(CENTER);
  image(imagesOk[33], width/2, windowHeight/2, width, width/2.35);
}

if (click===38) {
  imageMode(CENTER);
  image(imagesOk[34], width/2, windowHeight/2, width, width/2.35);
}

if (click===39) {
  imageMode(CENTER);
  image(imagesOk[35], width/2, windowHeight/2, width, width/2.35);
}

if (click===40) {
  imageMode(CENTER);
  image(imagesOk[36], width/2, windowHeight/2, width, width/2.35);
}

if (click===41) {
  imageMode(CENTER);
  image(imagesOk[37], width/2, windowHeight/2, width, width/2.35);
}

if (click===42) {
  imageMode(CENTER);
  image(imagesOk[38], width/2, windowHeight/2, width, width/2.35);
}

if (click===43) {
  imageMode(CENTER);
  image(imagesOk[39], width/2, windowHeight/2, width, width/2.35);
}

if (click===44) {
  imageMode(CENTER);
  image(imagesOk[40], width/2, windowHeight/2, width, width/2.35);
}

if (click===45) {
  imageMode(CENTER);
  image(imagesOk[50], width/2, windowHeight/2, width, width/2.35);
}

if (click===46) {
  imageMode(CENTER);
  image(imagesOk[51], width/2, windowHeight/2, width, width/2.35);
}

if (click===47) {
  imageMode(CENTER);
  image(imagesOk[41], width/2, windowHeight/2, width, width/2.35);
}

if (click===48) {
  imageMode(CENTER);
  image(imagesOk[32], width/2, windowHeight/2, width, width/2.35);

/*
  buttonC2e1.removeClass('buttonUsed');
  buttonC2e1.addClass('button');
  buttonC2e2.removeClass('buttonUsed');
  buttonC2e2.addClass('button');
*/
  if(mouseX <= width/2) {
    o1=0;
    o2=200;
  }else if (mouseX > width/2){
    o1=200;
    o2=0;
  }
  push();
  rectMode(CENTER,CENTER);
  fill(0,0,0,o1);
  rect(0,height/2,width,height);
  pop();

  push();
  rectMode(CENTER,CENTER);
  fill(0,0,0,o2);
  rect(width,height/2,width,height);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(lime);
  textSize(textSize3);
  textFont(fontDes);
  text("WHO WILL BE YOUR ALLY?",width/2,((height-(width/2.35))/2)+(((width/2.35)/12)*1));
  rectMode(CENTER,CENTER);
  fill(blackblu);
  rect(width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11),400,70);
  rect((width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11),400,70);
  fill(pink);
  text("side with Wilfrid",width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  text("side with Vicary",(width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  pop();

}

if (click===49) {
  imageMode(CENTER);
  image(imagesOk[42], width/2, windowHeight/2, width, width/2.35);
}

if (click===50) {
  imageMode(CENTER);
  image(imagesOk[32], width/2, windowHeight/2, width, width/2.35);
/*
  buttonC3e1.removeClass('buttonUsed');
  buttonC3e1.addClass('button');
  buttonC3e2.removeClass('buttonUsed');
  buttonC3e2.addClass('button');
*/
  if(mouseX <= width/2) {
    o1=0;
    o2=200;
  }else if (mouseX > width/2){
    o1=200;
    o2=0;
  }
  push();
  rectMode(CENTER,CENTER);
  fill(0,0,0,o1);
  rect(0,height/2,width,height);
  pop();

  push();
  rectMode(CENTER,CENTER);
  fill(0,0,0,o2);
  rect(width,height/2,width,height);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(lime);
  textSize(textSize3);
  textFont(fontDes);
  text("PEOPLE NEED A LEADER! WHAT WILL YOU DO?",width/2,((height-(width/2.35))/2)+(((width/2.35)/12)*1));
  rectMode(CENTER,CENTER);
  fill(blackblu);
  rect(width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11),450,70);
  rect((width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11),400,70);
  fill(pink);
  text("stay behind the scenes",width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  text("be the new leader",(width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  pop();

}

if (click===51) {
  imageMode(CENTER);
  image(imagesOk[43], width/2, windowHeight/2, width, width/2.35);
}

if (click===52) {
  imageMode(CENTER);
  image(imagesOk[43], width/2, windowHeight/2, width, width/2.35);

  if (timer7>= -(width)) {
      startingTimer7 = 1;
      if (startingTimer7===1){
        timer7 = timer7 - 12;
        push();
        // rectMode(CENTER,CENTER);
        // fill('red');
        // rect(((width/4)*4)+timer2,height/2,width,height);
        imageMode(CENTER);
        image(imagesOk[44], (-(width/2))-timer7, windowHeight/2, width, width/2.35);
        pop();
      }
    }
       if (timer7 <= -(width)) {
        startingTimer7 = 2;
        if (startingTimer7===2){
          push();
          // rectMode(CENTER,CENTER);
          // fill('red');
          // rect(width/2,height/2,width,height);
          imageMode(CENTER);
          image(imagesOk[44], width/2, windowHeight/2, width, width/2.35);
          pop();
        }

        }
}

if (click===53) {
  imageMode(CENTER);
  image(imagesOk[45], width/2, windowHeight/2, width, width/2.35);

}

if (click===54) {
  imageMode(CENTER);
  image(imagesOk[46], width/2, windowHeight/2, width, width/2.35);

}

if (click===55) {
  imageMode(CENTER);
  image(imagesOk[47], width/2, windowHeight/2, width, width/2.35);

}

if (click===56) {
window.open("index0.html?karmaPoints=" +(karma), "_self");

/*
  end = 1;
}

if (end===1) {
  // fill('yellow');
  // textAlign(CENTER);
  // textFont(intlBol);
  // textSize(50);
  // text("DAJE",width/2,height/2);
  if (karma < 0) {
    fill('yellow');
    textAlign(CENTER);
    textFont(intlBol);
    textSize(50);
    text("ECOCENTRIC POINT OF VIEW",width/2,height/2);
  } else if (karma > 0) {
    fill('yellow');
    textAlign(CENTER);
    textFont(intlBol);
    textSize(50);
    text("ANTHROPOCENTRIC POINT OF VIEW",width/2,height/2);
  }
  */
}


//PARENTESI FINE DRAW
}

function mouseClicked() {
  click++;
  let fs = fullscreen();
     fullscreen(!click-1);

  if (click===37){
    if(mouseX <= width/2) {
        karma = karma +1;
    }else if (mouseX > width/2){
        karma = karma -1;
    }
  }

  if (click===49){
    if(mouseX <= width/2) {
        karma = karma +2;
    }else if (mouseX > width/2){
        karma = karma -2;
    }
  }

  if (click===51){
    if(mouseX <= width/2) {
        karma = karma +2;
    }else if (mouseX > width/2){
        karma = karma -2;
    }
  }
}

function homy() {
  // document.location.reload();
  window.open("https://federicocordelli.github.io/HOME-COMPLEX/");
  // window.open();
}

function backy() {
  click=click-2;
  // window.open();
}


function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  return false;
}
