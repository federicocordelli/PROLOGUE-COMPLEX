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

let scroll = 0;
let scroll1 = 0;
let scrall =0;
let scrall1=0;
let scroll2=0;
let scrall2=0;
let scroll3=0;
let scrall3=0;
let scroll4=0;
let scrall4=0;
let scroll5=0;
let scrall5=0;
let scroll6=0;

var qtestart = 0;
var q1 = 0;
var qtetimer = 5;

var qtestart1 = 0;
var q2 = 0;
var qtetimer1 = 5;

var op=0;
var op2=0;
var op3=0;
var op4=0;

var cancelButton = 0;
var cancelButton1 =0;

var win=0;
var win1=0;

var ch1 = 0;
var ch2=0;




function preload() {


  intlMed = loadFont('addons/SuisseIntl-Medium.otf');
  intlReg = loadFont('addons/SuisseIntl-Regular.otf');
  intlBol = loadFont('addons/SuisseIntl-Bold.otf');
  druk = loadFont('addons/DrukCond-Super.ttf');
  gtMono = loadFont('addons/SuisseIntlMono-Bold.otf');

  for (var i=1; i<22; i++) {
    imagesOk[i] = loadImage("addons/images1/"+i+".png");
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  var myUrl = new URL (window.location.href);
karmaPP = myUrl.searchParams.get("karmaPoints")*1;
// titanYess = myUrl.searchParams.get("ch2")*1;



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

//Button To start the QTE
buttonPP = createButton('FREE YOURSELF');
buttonPP.mouseClicked(free);
// buttonPP.position(width/2, height/2);
buttonPP.addClass('buttonUsed');

//Button To start the QTE
buttonQT = createButton('FIGHT');
buttonQT.mouseClicked(fight);
// buttonPP.position(width/2, height/2);
buttonQT.addClass('buttonUsed');


}

function draw() {
  background("#000000");
  console.log(win1);


  //variabili posizione
  var posY = ((width/2.2));
  //variabili testo
  var fontDes = gtMono;



  //
   fill('yellow');
  textAlign(CENTER);
  textFont(intlBol);
  textSize(50);
  //  text(click,width/2,50);
  // text(ch2,width/2,height-50);

  if (click===0){

    background("#001110");
    push();
    fill(lime);
    textAlign(CENTER,CENTER);
    textFont(intlBol);
    textSize(50*(frameCount/120));
    text("click to continue",width/2,height/2);
    pop();

    push();
    fill(pink);
    textAlign(CENTER,CENTER);
    textFont(intlBol);
    textSize(20);
    text("THE AENEAS PROJECT",width/2,(height/2)-300);
    textFont(intlMed);
    text('"chapter ten"',width/2,(height/2)+300);
    pop();
  }

  if (click===1){

    if (scroll>0 && scroll<windowWidth) {
      buttonPP.removeClass('button2');
      buttonPP.addClass('buttonUsed');
      buttonPP.center();

  } else if (scroll <= 0) {

  scroll=0;

  buttonPP.removeClass('button2');
  buttonPP.addClass('buttonUsed');
  buttonPP.center();

  }
   if (scroll >= windowWidth) {
     scroll = windowWidth;
     if (cancelButton===0) {
     buttonPP.removeClass('buttonUsed');
     buttonPP.addClass('button2');
     buttonPP.center();
   } else if(cancelButton===1){
     buttonPP.removeClass('button2');
     buttonPP.addClass('buttonUsed');
   }


  }

    imageMode(CENTER);
    image(imagesOk[1], (((width*2)+(width/8.95))/2)-scroll, windowHeight/2, (width*2)+(width/8.95), width/2.35);

    push();
    fill(185, 201, 144, 255-(scroll/5));
    textAlign(CENTER,CENTER);
    textFont(intlBol);
    textSize(30);
    text("SCROLL",width/2,((height-(width/2.35))/2)-50);
    pop();

push();
fill(0,0,0,op);
rect(0,0,width,height);
pop();

if(qtestart===5) {
click=2;
win=1;
  qtetimer=5;
     }
if(qtestart>0) {
  qtetimer = qtetimer - 1;

    }
    if(qtetimer=== -250) {
      qtestart = 0;
      qtetimer = 5;
      o1 = 0;
      click=2;
        }
if (qtetimer < 0) {
push();
  fill(pink);
  rectMode(CENTER)
  rect((width/2),(height/2)-400,250+qtetimer,80);
  pop();
}


push();
fill(185, 201, 144,op2);
text("click keys: ←→↓↑ ",width/2,(height/2)-80);
pop();

  }

  if (click===2) {
    if (win===1) {
      image(imagesOk[2],width/2,height/2,(width/2.35)*1.47,width/2.35);
      buttonQT.removeClass('buttonUsed');
      buttonQT.addClass('button2');
      buttonQT.center();
      if (cancelButton1===1) {
        buttonQT.removeClass('button2');
        buttonQT.addClass('buttonUsed');
      }
    } else if(win===0) {
      image(imagesOk[4],width/2,height/2,(width/2.35)*1.47,width/2.35);
    }

push();
    fill(0,0,0,op3);
    rect(0,0,width,height);
pop();

if(qtestart1===5) {
click=3;
win1=1;
  qtetimer1=5;
     }
if(qtestart1>0) {
  qtetimer1 = qtetimer1 - 1;

    }
    if(qtetimer1=== -250) {
      qtestart1 = 0;
      qtetimer1 = 5;
      o1 = 0;
      click=3;
        }
if (qtetimer1 < 0) {
push();
  fill(pink);
  rectMode(CENTER)
  rect((width/2),(height/2)-400,250+qtetimer1,80);
  pop();
}


push();
fill(185, 201, 144,op4);
text("click keys: A+B+D+C ",width/2,(height/2)-80);
pop();



  }

  if (click===3) {
    if(win1===1){
      image(imagesOk[3],width/2,height/2,(width/2.35)*1.47,width/2.35);
    } else {
      click=click+1;
    }
  }

if (click===4) {
  image(imagesOk[5],width/2,height/2,(width/2.35)*1.47,width/2.35);
}

if (click===5) {
  scrall= 1;

  push();
  fill(185, 201, 144, 255-(scroll1/5));
  textAlign(CENTER,CENTER);
  textFont(intlBol);
  textSize(30);
  text("SCROLL",width/2,((height-(width/2.35))/2)-50);
  pop();

  if (scroll1>0 && scroll<windowWidth*1.5) {

} else if (scroll1 <= 0) {

scroll1=0;

}
 if (scroll1 >= windowWidth*1.5) {
   scroll1 = windowWidth*1.5;


}
  if(win1===1) {
    image(imagesOk[6],((width/2)+((width*1.5)/2))-scroll1,height/2,(width*2.5),width/2.35);
  }else if (win1===0) {
    image(imagesOk[7],((width/2)+((width*1.5)/2))-scroll1,height/2,(width*2.5),width/2.35);
  }
}

if(click===6){
  image(imagesOk[9],width/2,height/2,(width/2.35)*1.47,width/2.35);
}

if(click===7){
  image(imagesOk[10],width/2,height/2,(width/2.35)*1.47,width/2.35);
}

if (click===8) {
  image(imagesOk[8],width/2,height/2,width,width/2.35);

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
  text("SHE'S SUFFERING... WHAT CAN YOU DO?",width/2,((height-(width/2.35))/2)+(((width/2.35)/12)*1))
  rectMode(CENTER,CENTER);
  fill(blackblu);
  rect(width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11),450,70);
  rect((width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11),550,70);
  fill(pink);
  text("try to save her life",width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  text("put an end to his suffering",(width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  pop();
}

if (click===9) {
  if (ch1===1){
image(imagesOk[11],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }else if (ch1===2){
image(imagesOk[12],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }
}

if (click===10) {
  image(imagesOk[13],width/2,height/2,(width/2.35)*1.47,width/2.35);
}

if(click===11) {
  scrall1= 1;

  push();
  fill(185, 201, 144, 255-(scroll2/5));
  textAlign(CENTER,CENTER);
  textFont(intlBol);
  textSize(30);
  text("SCROLL",width/2,((height-(width/2.35))/2)-50);
  pop();

  if (scroll2>0 && scroll2<windowWidth) {

} else if (scroll2 <= 0) {

scroll2=0;

}
 if (scroll2 >= windowWidth) {
   scroll2 = windowWidth;
}

image(imagesOk[14],(width)-scroll2,height/2,(width*2),width/2.35);

}

if(click===12) {
  image(imagesOk[15],width/2,height/2,width,width/2.35);

  scrall2= 1;

  push();
  fill(185, 201, 144, 255-(scroll3/5));
  textAlign(CENTER,CENTER);
  textFont(intlBol);
  textSize(30);
  text("SCROLL",width/2,((height-(width/2.35))/2)-50);
  pop();

  if (scroll3>0 && scroll3<windowWidth) {

} else if (scroll3 <= 0) {

scroll3=0;

}
 if (scroll3 >= windowWidth) {
   scroll3 = windowWidth;
}

image(imagesOk[19],(width)-scroll3,height/2,(width*2),width/2.35);
}

if (click===13){
  image(imagesOk[16],width/2,height/2,(width/2.35)*1.47,width/2.35);
}

if(click===14) {
  image(imagesOk[21],width/2,height/2,(width/2.35)*1.47,width/2.35);

  scrall3= 1;

  push();
  fill(185, 201, 144, 255-(scroll4/5));
  textAlign(CENTER,CENTER);
  textFont(intlBol);
  textSize(30);
  // text("SCROLL",width/2,((height-(width/2.35))/2)-50);
  pop();

  if (scroll4>0 && scroll4<windowWidth) {

} else if (scroll4 <= 0) {

scroll4=0;

}
 if (scroll4 >= windowWidth) {
   scroll4 = windowWidth;
}

//image(imagesOk[14],(width)-scroll4,height/2,(width*2),width/2.35);
}


if (click===15) {
  image(imagesOk[8],width/2,height/2,width,width/2.35);

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
  text("YOU CAN CONTACT THE SPACE MISSION, WHAT WILL YOU DO?",width/2,((height-(width/2.35))/2)+(((width/2.35)/12)*1))
  rectMode(CENTER,CENTER);
  fill(blackblu);
  rect(width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11),550,70);
  rect((width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11),550,70);
  fill(pink);
  text("send the Susy's message",width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  text("register a new message",(width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  pop();
}

if(click===16){
scrall4=1;


    if (scroll5>0 && scroll5<windowWidth) {

    } else if (scroll5 <= 0) {

    scroll5=0;

    }
    if (scroll5 >= windowWidth) {
     scroll5 = windowWidth;
    }
if (ch2===1){
  image(imagesOk[17],(width)-scroll5,height/2,(width*2),width/2.35);
}

if (ch2===2){
  image(imagesOk[18],(width)-scroll5,height/2,(width*2),width/2.35);
}

  }

if (click===17) {
  scrall5=1;


      if (scroll6>0 && scroll6<windowWidth) {

      } else if (scroll6 <= 0) {

      scroll6=0;

      }
      if (scroll6 >= windowWidth) {
       scroll6 = windowWidth;
      }

  if(ch2===1){
    image(imagesOk[20],(width)-scroll6,height/2,(width*2),width/2.35);
  }else if(ch2===2){
    click++;
  }
}

if (click===18){
  window.open("index1.html?karmaPoints=" +(karmaPP), "_self");
}

//PARENTESI FINE DRAW
}

function mouseClicked() {
  click++;
  let fs = fullscreen();
     fullscreen(!click-1);

  if (click===9){
    if(mouseX <= width/2) {
        ch1 = 1;
    }else if (mouseX > width/2){
        ch1 = 2;
    }
  }

  if (click===16){
    if(mouseX <= width/2) {
        ch2=1;
    }else if (mouseX > width/2){
        ch2=2;
        karmaPP=karmaPP+3;
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

function free() {
  click=click-5;
op = 255;
  // window.open();
}

function free() {
  click=click-1;
op = 200;
op2=255;
cancelButton=1;
qtestart = 1;
/*
buttonPP.removeClass('button2');
buttonPP.addClass('buttonUsed');
*/
  // window.open();
}

function keyPressed() {
if (keyCode === LEFT_ARROW) {
 if (qtestart === 1){
   qtestart = 2;
 } else if (qtestart>1){
   qtestart = 0;
   qtetimer = 5;
   o1 = 0;
  click=2;
 }
return false;
} else if (keyCode === RIGHT_ARROW) {
 if (qtestart === 2){
   qtestart = 3;
 }else if (qtestart!==2){
   qtestart = 0;
   qtetimer = 5;
   o1 = 0;
   click=2;
 }
return false;
} else if (keyCode === DOWN_ARROW) {
 if (qtestart === 3){
   qtestart = 4;
 }else if (qtestart!==3){
   qtestart = 0;
   qtetimer = 5;
   o1 = 0;
  click=2;
 }
return false;
} else if (keyCode === UP_ARROW) {
 if (qtestart === 4){
   qtestart = 5;
   o1 = 0;
 }else if (qtestart!==4){
   qtestart = 0;
   qtetimer = 5;
   o1 = 0;
   click=2;
 }
return false;
}
//il merda1

if (keyCode === 65) {
 if (qtestart1 === 1){
   qtestart1 = 2;
 } else if (qtestart1>1){
   qtestart1 = 0;
   qtetimer1 = 5;
   o1 = 0;
  click=3;
 }
return false;
} else if (keyCode === 66) {
 if (qtestart1 === 2){
   qtestart1 = 3;
 }else if (qtestart1!==2){
   qtestart1 = 0;
   qtetimer1 = 5;
   o1 = 0;
   click=3;
 }
return false;
} else if (keyCode === 68) {
 if (qtestart1 === 3){
   qtestart1 = 4;
 }else if (qtestart1!==3){
   qtestart1 = 0;
   qtetimer1 = 5;
   o1 = 0;
  click=3;
 }
return false;
} else if (keyCode === 67) {
 if (qtestart1 === 4){
   qtestart1 = 5;
   o1 = 0;
 }else if (qtestart1!==4){
   qtestart1 = 0;
   qtetimer1 = 5;
   o1 = 0;
   click=3;
 }
return false;
}




}

function fight() {
click=click-1;
op3=200;
op4=255;
cancelButton1=1;
qtestart1=1;
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  return false;
}

function mouseWheel(event) {
  print(event.delta);

  //move the square according to the  txtScroll += event.delta;
  scroll += event.delta;
  if (scrall===1) {
  scroll1 += event.delta;
}

if (scrall1===1){
  scroll2 += event.delta;
}

if (scrall2===1){
  scroll3 += event.delta;
}
if (scrall3===1){
  scroll4 += event.delta;
}

if (scrall4===1){
  scroll5 += event.delta;
}

if (scrall5===1){
  scroll6 += event.delta;
}
  //return false;
}

function qteborn() {
  qtestart = 1;

  buttonQ.removeClass('button2');
  buttonQ.addClass('buttonUsed');

  if(qtestart > 0 && qtestart<5) {
    q1 = 255;
}else if(qtestart===5) {
  q1 = 0;
     }

}
