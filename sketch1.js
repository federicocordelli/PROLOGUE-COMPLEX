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
let scrall6=0;
let scroll7=0;
let scrall7=0;
let scroll8=0;

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

var titanYes=0;

var opa1=200;
var opa2=200;
var opa3=200;
var opa4=200;
var opa5=200;

var finaleA =0;
var finaleB =0;
var finaleC =0;

var finaleC1=0;
var finaleC2=0;



function preload() {


  intlMed = loadFont('addons/SuisseIntl-Medium.otf');
  intlReg = loadFont('addons/SuisseIntl-Regular.otf');
  intlBol = loadFont('addons/SuisseIntl-Bold.otf');
  druk = loadFont('addons/DrukCond-Super.ttf');
  gtMono = loadFont('addons/SuisseIntlMono-Bold.otf');

  for (var i=1; i<28; i++) {
    imagesOk[i] = loadImage("addons/images2/"+i+".png");
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

link = createA("https://www.reddit.com/r/TheAeneasProject/","reddit", "_blank");
 link.position((width/4)*2.88, (height/10)*9.55);
 link.addClass('a');

}

function draw() {
  background("#000000");
  console.log(finaleA);

  if (karmaPP===8 || karmaPP===4 || karmaPP===6 ||karmaPP===2 || karmaPP===-2 || karmaPP===0){
karmaPP = karmaPP-3;
titanYes=1;
  }



  //variabili posizione
  var posY = ((width/2.2));
  //variabili testo
  var fontDes = gtMono;
  var sizeTitle = width/20;
  var sizeTitle1 = width/18;
  var sizeSubTitle = width/50;
  var sizePar = width/75;
  var sizePar1 = width/60;
  var sizePar2 = width/90;



  //
   fill('yellow');
  textAlign(CENTER);
  textFont(intlBol);
  textSize(50);
  //  text(click,width/2,50);
  // text(karmaPP,width/2,height-50);

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
    text('"chapter eleven"',width/2,(height/2)+300);
    pop();
  }

  if (click===1){
    if (scroll>0 && scroll<windowWidth) {

  } else if (scroll <= 0) {

  scroll=0;


  }
   if (scroll >= windowWidth) {
     scroll = windowWidth;
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
  }

  if (click===2){
    if(titanYes===1){
      image(imagesOk[2],width/2,height/2,(width/2.35)*1.47,width/2.35);
    } else if(titanYes===0){
      image(imagesOk[5],width/2,height/2,(width/2.35)*1.47,width/2.35);
    }
  }
  if (click===3){
    if(titanYes===1){
      image(imagesOk[3],width/2,height/2,(width/2.35)*1.47,width/2.35);
    }else if(titanYes===0){
      image(imagesOk[6],width/2,height/2,(width/2.35)*1.47,width/2.35);
    }
  }
  if (click===4){
    if(titanYes===1){
      image(imagesOk[4],width/2,height/2,(width/2.35)*1.47,width/2.35);
    }else if(titanYes===0){
      click=5;
    }
  }
  if(click===5){
    image(imagesOk[7],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }

  if(click===6){
    image(imagesOk[8],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }

  if(click===7){
    image(imagesOk[9],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }

  if(click===8){
    image(imagesOk[10],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }

  if(click===9){
    scrall1= 1;

    push();
    fill(185, 201, 144, 255-(scroll2/5));
    textAlign(CENTER,CENTER);
    textFont(intlBol);
    textSize(30);
    text("SCROLL",width/2,((height-(width/2.35))/2)-50);
    pop();

    if (scroll2>0 && scroll2<windowWidth*1.5) {

  } else if (scroll2 <= 0) {

  scroll2=0;

  }
   if (scroll2 >= windowWidth*2) {
     scroll2 = windowWidth*2;
  }
    image(imagesOk[14],(width*1.5)-scroll2,height/2,(width)*3,width/2.35);
  }

  if(click===10){

//neutral version
    if(karmaPP<=1 && karmaPP>=-1){
    image(imagesOk[12],width/2,height/2,width,width/2.35);
    push();
    fill(0,0,0,opa1);
    rect(0,0,width/3,height);
    pop();
    push();
    fill(0,0,0,opa2);
    rect(width/3,0,width/3,height);
    pop();
    push();
    fill(0,0,0,opa3);
    rect((width/3)*2,0,width/3,height);
    pop();
if (mouseX <= width/3){
  opa1=0;
  opa2=200;
  opa3=200;
}
if (mouseX > width/3 && mouseX < (width/3)*2){
  opa2=0;
  opa1=200;
  opa3=200;
}
if (mouseX>=(width/3)*2){
  opa3=0;
  opa1=200;
  opa2=200;
}
push();
textAlign(CENTER,CENTER);
fill(lime);
textSize(textSize3);
textFont(fontDes);
text("IT'S TIME TO TAKE A DECISION, WHAT WILL YOU DO?",width/2,((height-(width/2.35))/2)+(((width/2.35)/12)*1))
rectMode(CENTER,CENTER);
fill(blackblu);
rect(width/6,((height-(width/2.35))/2)+(((width/2.35)/12)*11),450,70);
rect((width/6)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11),350,70);
rect((width/6)*5,((height-(width/2.35))/2)+(((width/2.35)/12)*11),400,70);
fill(pink);
text("rebel against Vicary",width/6,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
text("be the new leader",(width/6)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
text("bow to Vicary",(width/6)*5,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
pop();

}

//anthropocentric version
if (karmaPP>1&&karmaPP<=5){
  image(imagesOk[15],width/2,height/2,width,width/2.35);
  push();
  fill(0,0,0,opa4);
  rect(0,0,width/2,height);
  pop();
  push();
  fill(0,0,0,opa5);
  rect(width/2,0,width/2,height);
  pop();
  if(mouseX<=width/2){
    opa4=0;
    opa5=200;
  } else if(mouseX>width/2){
    opa5=0;
    opa4=200;
  }
  push();
  textAlign(CENTER,CENTER);
  fill(lime);
  textSize(textSize3);
  textFont(fontDes);
  text("IT'S TIME TO TAKE A DECISION, WHAT WILL YOU DO?",width/2,((height-(width/2.35))/2)+(((width/2.35)/12)*1))
  rectMode(CENTER,CENTER);
  fill(blackblu);
  rect(width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11),550,70);
  rect((width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11),550,70);
  fill(pink);
  text("rebel against Vicary",width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  text("be the new leader",(width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  pop();
}

//ecocentric version
if (karmaPP >= -5 && karmaPP < -1){
  image(imagesOk[15],width/2,height/2,width,width/2.35);
  push();
  fill(0,0,0,opa4);
  rect(0,0,width/2,height);
  pop();
  push();
  fill(0,0,0,opa5);
  rect(width/2,0,width/2,height);
  pop();
  if(mouseX<=width/2){
    opa4=0;
    opa5=200;
  } else if(mouseX>width/2){
    opa5=0;
    opa4=200;
  }
  push();
  textAlign(CENTER,CENTER);
  fill(lime);
  textSize(textSize3);
  textFont(fontDes);
  text("IT'S TIME TO TAKE A DECISION, WHAT WILL YOU DO?",width/2,((height-(width/2.35))/2)+(((width/2.35)/12)*1))
  rectMode(CENTER,CENTER);
  fill(blackblu);
  rect(width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11),550,70);
  rect((width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11),550,70);
  fill(pink);
  text("be the new leader",width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  text("bow to Vicary",(width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
  pop();
}
//fine click10
  }

if (click===11) {

click=12;

}

if (click===12){
  scrall7=1;

  if (scroll8>0 && scroll8<windowWidth*1.5) {

} else if (scroll8 <= 0) {

scroll8=0;

}
 if (scroll8 >= windowWidth*1.5) {
   scroll8 = windowWidth*1.5;
}
// finale antropos
if (finaleA===2||finaleA===1){
  push();
  fill(185, 201, 144, 255-(scroll8/5));
  textAlign(CENTER,CENTER);
  textFont(intlBol);
  textSize(30);
  text("SCROLL",width/2,((height-(width/2.35))/2)-50);
  pop();
  image(imagesOk[25],(width*1.25)-(scroll8),height/2,(width)*2.5,width/2.35);
}
//finale ecocentrico
if (finaleB===2||finaleB===1){
  push();
  fill(185, 201, 144, 255-(scroll8/5));
  textAlign(CENTER,CENTER);
  textFont(intlBol);
  textSize(30);
  text("SCROLL",width/2,((height-(width/2.35))/2)-50);
  pop();
  image(imagesOk[22],(width*1.25)-(scroll8),height/2,(width)*2.5,width/2.35);
}

//finale neutro
if (finaleC===1){
  push();
  fill(185, 201, 144, 255-(scroll8/5));
  textAlign(CENTER,CENTER);
  textFont(intlBol);
  textSize(30);
  text("SCROLL",width/2,((height-(width/2.35))/2)-50);
  pop();
  image(imagesOk[16],(width*1.25)-(scroll8),height/2,(width)*2.5,width/2.35);
}
}

if(click===13){
//eco
  if (finaleB===2||finaleB===1){
    click = 15;
  }
//antro
  if (finaleA===2||finaleA===1){
    click = 15;
  }
  //scelta finale neutro
  if (finaleC===1){
    image(imagesOk[15],width/2,height/2,width,width/2.35);
    push();
    fill(0,0,0,opa4);
    rect(0,0,width/2,height);
    pop();
    push();
    fill(0,0,0,opa5);
    rect(width/2,0,width/2,height);
    pop();
    if(mouseX<=width/2){
      opa4=0;
      opa5=200;
    } else if(mouseX>width/2){
      opa5=0;
      opa4=200;
    }
    push();
    textAlign(CENTER,CENTER);
    fill(lime);
    textSize(textSize3);
    textFont(fontDes);
    text("HOW WILL YOU MANAGE WILFRID?",width/2,((height-(width/2.35))/2)+(((width/2.35)/12)*1))
    rectMode(CENTER,CENTER);
    fill(blackblu);
    rect(width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11),550,70);
    rect((width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11),550,70);
    fill(pink);
    text("buy some time",width/4,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
    text("kill Wilfrid",(width/4)*3,((height-(width/2.35))/2)+(((width/2.35)/12)*11));
    pop();
  }
}

if(click===14){
  scrall6=1;

  if (scroll7>0 && scroll7<windowWidth*1.5) {

} else if (scroll7 <= 0) {

scroll7=0;

}
 if (scroll7 >= windowWidth*1.5) {
   scroll7 = windowWidth*1.5;
}

  //finale neutro 1
  if(finaleC1===1){
    push();
    fill(185, 201, 144, 255-(scroll7/5));
    textAlign(CENTER,CENTER);
    textFont(intlBol);
    textSize(30);
    text("SCROLL",width/2,((height-(width/2.35))/2)-50);
    pop();
    image(imagesOk[17],(width*1.25)-(scroll7),height/2,(width)*2.5,width/2.35);
  }

  if(finaleC2===1){
    push();
    fill(185, 201, 144, 255-(scroll7/5));
    textAlign(CENTER,CENTER);
    textFont(intlBol);
    textSize(30);
    text("SCROLL",width/2,((height-(width/2.35))/2)-50);
    pop();
    image(imagesOk[19],(width*1.25)-(scroll7),height/2,(width)*2.5,width/2.35);
  }
}

if (click===15){
  //finale antro
  if (finaleA===2||finaleA===1){
    image(imagesOk[26],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }
  //finale eco
  if (finaleB===2||finaleB===1){
    image(imagesOk[23],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }
  //finale neutro 1
  if (finaleC1===1){
    image(imagesOk[18],width/2,height/2,(width/2.35)*1.47,width/2.35);
  } //finale neutro 2
  if (finaleC2===1){
    image(imagesOk[20],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }
}

if (click===16){
  if (finaleA===2||finaleA===1){
    image(imagesOk[27],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }
  if (finaleB===2){
    image(imagesOk[24],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }

  if (finaleC1===1){
    click=17;
  }
  if (finaleC2===1){
    image(imagesOk[21],width/2,height/2,(width/2.35)*1.47,width/2.35);
  }
}




  if (click===17){

    scrall4=1;


        if (scroll5>0 && scroll5<windowWidth) {

        } else if (scroll5 <= 0) {

        scroll5=0;

        }
        if (scroll5 >= windowWidth) {
         scroll5 = windowWidth;
        }
    // karmaPP=karmaPP-6;
//anthropocentric
    if(karmaPP>0) {
      background(pink);
      push();
      fill(blackblu);
      textAlign(CENTER,CENTER);
      textSize(sizeTitle);
      textFont(intlBol);
      text("THE END",width/2,height/10);
      fill(lime);
      text("                        *",width/2,height/10);
      pop();

      push();
      fill(lime);
      textAlign(CENTER,CENTER);
      textSize(sizeSubTitle);
      textFont(intlMed);
      text("of the story, the beginning of your awareness",width/2,(height/10)*1.8);
      fill(blackblu);
      text("*                                                                                            ",width/2,(height/10)*1.8);
      pop();

      push();
      fill(blackblu);
      textAlign(CENTER,CENTER);
      textSize(sizePar);
      textFont(intlMed);
      text("You have just experienced an interactive graphic novel.\nIt was fun? Engaging? Touching? We hope so.\nBut even if it was a post apocalyptic science fiction story,\nthere is something true inside it.",width/2,(height/10)*3);
      pop();

      push();
      fill(lime);
      textAlign(CENTER,CENTER);
      textSize(sizePar);
      textFont(intlMed);
      text("The question about Invasive Alien Species,\nas ants in the 10th chapter or humans in the 11th chapter,\nis a controversial and urgent issue in our society.",width/2,(height/10)*4.2);
      pop();

      push();
      fill(blackblu);
      textAlign(CENTER,CENTER);
      textSize(sizePar1);
      textFont(intlBol);
      text("During your experience we registered your choices profiling you,\nand we are excited to reveal you that you had an (scroll to discover your behaviour)",width/2,(height/10)*5.5);
      pop();

      push();
      fill(185, 201, 144,0+scroll5);
      textAlign(CENTER,CENTER);
      textSize(sizeTitle1);
      textFont(intlBol);
      text("ANTHROPOCENTRIC BEHAVIOUR",width/2,(height/10)*6.5);
      pop();

      push();
      fill(0, 17, 16,0+scroll5);
      textAlign(CENTER,CENTER);
      textSize(sizePar2);
      textFont(intlMed);
      text("You give much more importance to human relations, individual benefits, and present questions rather than to the balance of the cosmos.\nYou would be willing to sacrifice your life for freedom.",width/2,(height/10)*7.3);
      pop();


    } else if(karmaPP<0){
      background(lime);

      push();
      fill(blackblu);
      textAlign(CENTER,CENTER);
      textSize(sizeTitle);
      textFont(intlBol);
      text("THE END",width/2,height/10);
      fill(pink);
      text("                        *",width/2,height/10);
      pop();

      push();
      fill(pink);
      textAlign(CENTER,CENTER);
      textSize(sizeSubTitle);
      textFont(intlMed);
      text("of the story, the beginning of your awareness",width/2,(height/10)*1.8);
      fill(blackblu);
      text("*                                                                                            ",width/2,(height/10)*1.8);
      pop();

      push();
      fill(blackblu);
      textAlign(CENTER,CENTER);
      textSize(sizePar);
      textFont(intlMed);
      text("You have just experienced an interactive graphic novel.\nIt was fun? Engaging? Touching? We hope so.\nBut even if it was a post apocalyptic science fiction story,\nthere is something true inside it.",width/2,(height/10)*3);
      pop();

      push();
      fill(pink);
      textAlign(CENTER,CENTER);
      textSize(sizePar);
      textFont(intlMed);
      text("The question about Invasive Alien Species,\nas ants in the 10th chapter or humans in the 11th chapter,\nis a controversial and urgent issue in our society.",width/2,(height/10)*4.2);
      pop();

      push();
      fill(blackblu);
      textAlign(CENTER,CENTER);
      textSize(sizePar1);
      textFont(intlBol);
      text("During your experience we registered your choices profiling you,\nand we are excited to reveal you that you had an (scroll to discover your behaviour)",width/2,(height/10)*5.5);
      pop();

      push();
      fill(245, 108, 99,0+scroll5);
      textAlign(CENTER,CENTER);
      textSize(sizeTitle1);
      textFont(intlBol);
      text("ECOCENTRIC BEHAVIOUR",width/2,(height/10)*6.5);
      pop();

      push();
      fill(0, 17, 16,0+scroll5);
      textAlign(CENTER,CENTER);
      textSize(sizePar2);
      textFont(intlMed);
      text("You have a global vision of the life. Nothing happens casually, and we have to preserve the cosmos we live in.\nYou would be willing to sacrifice your freedom for the collective good.",width/2,(height/10)*7.3);
      pop();
    }
    push();
    fill(blackblu);
    textAlign(CENTER,CENTER);
    textSize(sizePar2);
    textFont(intlReg);
    text("Want to discuss about your position or the position of the other users? Let's find us on",width/2,(height/10)*9);
    pop();

  }
//PARENTESI FINE DRAW
}

function mouseClicked() {
  click++;
  let fs = fullscreen();
     fullscreen(!click-1);

  if (click===11){

    //neutral version
  if(karmaPP<=1 && karmaPP >=-1){
    if (mouseX <= width/3){
    finaleA++;
    finaleB=0;
    finaleC=0;
    karmaPP=karmaPP+4;
    }
    if (mouseX > width/3 && mouseX < (width/3)*2){
    finaleC++;
    finaleA=0;
    finaleB=0;
    karmaPP=karmaPP-2;
    }
    if (mouseX>=(width/3)*2){
    finaleB++;
    finaleC=0;
    finaleA=0;
    karmaPP=karmaPP-4;
    }
  }

//anthropocentric version
if(karmaPP>1 && karmaPP <=5){
  if (mouseX <= width/2){
  finaleA++;
  finaleB=0;
  finaleC=0;
  karmaPP=karmaPP+4;
  }
  if (mouseX > width/2){
  finaleC++;
  finaleA=0;
  finaleB=0;
  karmaPP=karmaPP-2;
  }
  }
  //ecocentric version
  if(karmaPP>= -5 && karmaPP < -1){
    if (mouseX <= width/2){
    finaleA=0;
    finaleB=0;
    finaleC++;
    karmaPP=karmaPP-2;
    }
    if (mouseX > width/2){
    finaleC=0;
    finaleA=0;
    finaleB++;
    karmaPP=karmaPP-4;
    }
  }


//fine click11
  }

  if (click===14){
    if(mouseX <= width/2) {
        finaleC1++;
        finaleC2=0;
    }else if (mouseX > width/2){
        finaleC2++;
        finaleC1=0;
    }
  }

  if (click===51){
    if(mouseX <= width/2) {
        karma = karma +2;
    }else if (mouseX > width/2){
        karma = karma -2;
    }
  }

//fine click function
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

if (scrall6===1){
  scroll7 += event.delta;
}

if (scrall7===1){
  scroll8 += event.delta;
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
