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



function preload() {

  intlMed = loadFont('addons/SuisseIntl-Medium.otf');
  intlReg = loadFont('addons/SuisseIntl-Regular.otf');
  intlBol = loadFont('addons/SuisseIntl-Bold.otf');
  druk = loadFont('addons/DrukCond-Super.ttf');

  for (var i=1; i<48; i++) {
    imagesOk[i] = loadImage("addons/images/"+i+".png");
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  //Button To HOME
 button = createButton('HOME');
 button.position(width-200, 70);
 button.mouseClicked(homy);
 button.addClass('button');

 //Button To back
button = createButton('BACK');
button.position(200, 70);
button.mouseClicked(backy);
button.addClass('button');

//Button To choice1.1
buttonC1e1 = createButton('SIDE WITH THE GOVERNMENT');
buttonC1e1.position(300, (height/2)-200);
buttonC1e1.mouseClicked(choicy1e1);
buttonC1e1.addClass('buttonUsed');

//Button To choice1.2
buttonC1e2 = createButton('SIDE WITH THE PEOPLE');
buttonC1e2.position(width-600, (height/2)-200);
buttonC1e2.mouseClicked(choicy1e2);
buttonC1e2.addClass('buttonUsed');

//Button To choice2.1
buttonC2e1 = createButton('SIDE WITH VICARY');
buttonC2e1.position(300, (height/2)-200);
buttonC2e1.mouseClicked(choicy2e1);
buttonC2e1.addClass('buttonUsed');

//Button To choice2.2
buttonC2e2 = createButton('SIDE WITH WILFRID');
buttonC2e2.position(width-600, (height/2)-200);
buttonC2e2.mouseClicked(choicy2e2);
buttonC2e2.addClass('buttonUsed');

//Button To choice3.1
buttonC3e1 = createButton('STAY BEHIND THE SCENES');
buttonC3e1.position(300, (height/2)-200);
buttonC3e1.mouseClicked(choicy3e1);
buttonC3e1.addClass('buttonUsed');

//Button To choice3.2
buttonC3e2 = createButton('BE THE NEW LEADER');
buttonC3e2.position(width-600, (height/2)-200);
buttonC3e2.mouseClicked(choicy3e2);
buttonC3e2.addClass('buttonUsed');

}

function draw() {
  background("black");
  console.log(timer1);

  fill('yellow');
  textAlign(CENTER);
  textFont(intlBol);
  textSize(50);
  // text(click,width/2,50);
  // text(karma,width/2,height-50);

  if (click===0){
    push();
    fill('yellow');
    textAlign(CENTER);
    textFont(intlBol);
    textSize(100);
    text("click to start",width/2,height/2);
    pop();
  }

  if (click===1){

    imageMode(CENTER);
    image(imagesOk[1], windowWidth/2, windowHeight/2, width, width/2.35);

    push();
    rectMode(CENTER,CENTER);
    fill('yellow');
    rect(width/2,height/2,900,70);
    pop();

    push();
    fill('black');
    textAlign(CENTER,CENTER);
    textFont(intlMed);
    textSize(20);
    text("Earth, a barren, hostile wasteland. It is the result of millions of years of human occupation.",width/2,height/2);
    pop();
  }

  if (click===2){

    imageMode(CENTER);
    image(imagesOk[2], windowWidth/2, windowHeight/2, width, width/2.35);

    push();
    rectMode(CENTER,CENTER);
    fill('yellow');
    rect(width/2,height/2,600,100);
    pop();

    push();
    fill('black');
    textAlign(CENTER,CENTER);
    textFont(intlMed);
    textSize(20);
    text("Life as it once was exists only in the stories of the survivors \nand echoes in the remains of their now abandoned cities, \nnow sad witnesses to the undisputed dominance of nature.",width/2,height/2);
    pop();
  }

  if (click===3){

    imageMode(CENTER);
    image(imagesOk[3], windowWidth/2, windowHeight/2, width, width/2.35);

    push();
    rectMode(CENTER,CENTER);
    fill('yellow');
    rect(width/2,height/2,700,140);
    pop();

    push();
    fill('black');
    textAlign(CENTER,CENTER);
    textFont(intlMed);
    textSize(20);
    text("Humans are unwelcome guests, nomads of their own lands, \nsubmitted to the species they themselves have created. \nFaced with the inevitable, the only thing left for them to do is to survive. \nSome have found their strength in sharing, founding different tribes.",width/2,height/2);
    pop();
  }

  if (click===4){

    imageMode(CENTER);
    image(imagesOk[4], windowWidth/2, windowHeight/2, width, width/2.35);

    push();
    rectMode(CENTER,CENTER);
    fill('yellow');
    rect(width/2,height/2,500,100);
    pop();

    push();
    fill('black');
    textAlign(CENTER,CENTER);
    textFont(intlMed);
    textSize(20);
    text("Others have abandoned everything, \nknowing that they can only trust themselves \nin a world that has proved to be too merciless.",width/2,height/2);
    pop();
  }

  if (click===5){

    imageMode(CENTER);
    image(imagesOk[5], windowWidth/2, windowHeight/2, width, width/2.35);

    push();
    rectMode(CENTER,CENTER);
    fill('yellow');
    rect(width/2,height/2,500,100);
    pop();

    push();
    fill('black');
    textAlign(CENTER,CENTER);
    textFont(intlMed);
    textSize(20);
    text("Others have abandoned everything, \nknowing that they can only trust themselves \nin a world that has proved to be too merciless.",width/2,height/2);
    pop();
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

    push();
    rectMode(CENTER,CENTER);
    fill('yellow');
    rect(width/2,height/2,900,70);
    pop();

    push();
    fill('black');
    textAlign(CENTER,CENTER);
    textFont(intlMed);
    textSize(30);
    text("Away from here, a new life, a new hope, Mycenae.",width/2,height/2);
    pop();
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

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,600,70);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("Another land, abundant and flourishing, but just as threatening.",width/2,height/2);
  pop();
}

if (click===8){

  imageMode(CENTER);
  image(imagesOk[7], windowWidth/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,700,140);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("A group of people, the chosen ones, have a new chance, \na chance to atone for their mistakes. \nUnder the guidance of one individual, a new colony is founded \nwithin a containment dome to protect themselves \nfrom the hostile environment they have invaded.",width/2,height/2);
  pop();
}

if (click===9){

  imageMode(CENTER);
  image(imagesOk[8], windowWidth/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,700,80);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("The fear of repeating the mistakes of the past echoes \nin the choices of the new government.",width/2,height/2);
  pop();
}

if (click===10){

  imageMode(CENTER);
  image(imagesOk[9], windowWidth/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,700,80);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("The life of each individual is finely calculated and organized, \nrobbed of all individual choice, constantly under observation.",width/2,height/2);
  pop();
}

if (click===11){

  imageMode(CENTER);
  image(imagesOk[10], windowWidth/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,700,90);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("The people, locked up and deprived of all freedom, \nbegin to wonder who the real enemy is, the one outside the walls \nor the one they walk alongside every day.",width/2,height/2);
  pop();
}

if (click===12){

  imageMode(CENTER);
  image(imagesOk[11], windowWidth/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,700,140);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("Some families have the privilege of contributing \nto the survival of the species, leaving their children, \nselected as prodigies and recruited for a special government program \nfor the training and education of tomorrow's leaders and scientists.",width/2,height/2);
  pop();
}

if (click===13){

  imageMode(CENTER);
  image(imagesOk[12], windowWidth/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,700,140);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("The best scientists and governors of Mycenae \ncome from that Institute. \nIt takes sacrifice, dedication and reasoning to carry on \none's shoulders the fate of the entire human race.",width/2,height/2);
  pop();
}

if (click===14){

  imageMode(CENTER);
  image(imagesOk[13], windowWidth/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,700,140);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("The best scientists and governors of Mycenae \ncome from that Institute. \nIt takes sacrifice, dedication and reasoning to carry on \none's shoulders the fate of the entire human race.",width/2,height/2);
  pop();
}


if (click===15){

  imageMode(CENTER);
  image(imagesOk[13], windowWidth/2, windowHeight/2, width, width/2.35);

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

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,900,70);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(30);
  text("Sometimes, being a leader is not a choice. It’s about surviving.",width/2,height/2);
  pop();
}

if (click===16) {

  imageMode(CENTER);
  image(imagesOk[13], windowWidth/2, windowHeight/2, width, width/2.35);

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

    push();
    rectMode(CENTER,CENTER);
    fill('yellow');
    rect(width/2,height/2,900,70);
    pop();

    push();
    fill('black');
    textAlign(CENTER,CENTER);
    textFont(intlMed);
    textSize(30);
    text("Sometimes, being a leader is not a choice. It’s about surviving.",width/2,height/2);
    pop();
}

if (click===17) {
  imageMode(CENTER);
  image(imagesOk[15], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,600,70);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("And when it comes to surviving, every choice is legitimate.",width/2,height/2);
  pop();
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
  image(imagesOk[18], width/2, windowHeight/2, width, width/2.35);
}

if (click===21) {

  imageMode(CENTER);
  image(imagesOk[19], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,600,100);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("In a world ruled by the most primitive instincts, \none has to choose his alliances wisely, \nand know who his enemies are;",width/2,height/2);
  pop();
}

if (click===22) {

  imageMode(CENTER);
  image(imagesOk[20], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,600,100);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("In a world ruled by the most primitive instincts, \none has to choose his alliances wisely, \nand know who his enemies are;",width/2,height/2);
  pop();
}

if (click===23) {

  imageMode(CENTER);
  image(imagesOk[21], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,800,70);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("‘cause a good strategy makes the difference between life and death.",width/2,height/2);
  pop();
}

if (click===24){

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

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,1000,70);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(30);
  text("Sometimes even the tiniest spark is enough to trigger a revolution...",width/2,height/2);
  pop();
}

if (click===25) {

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
/*
push();
rectMode(CENTER,CENTER);
fill('yellow');
rect(width/2,height/2,600,70);
pop();

push();
fill('black');
textAlign(CENTER,CENTER);
textFont(intlMed);
textSize(20);
text("Sometimes even the tiniest spark is enough to trigger a revolution...",width/2,height/2);
pop();
*/
}
if (click===26) {
  imageMode(CENTER);
  image(imagesOk[23], width/2, windowHeight/2, width, width/2.35);
  push();
}

if (click===27) {
  imageMode(CENTER);
  image(imagesOk[24], width/2, windowHeight/2, width, width/2.35);
}

if (click===28) {
  imageMode(CENTER);
  image(imagesOk[25], width/2, windowHeight/2, width, width/2.35);
}

if (click===29) {
  imageMode(CENTER);
  image(imagesOk[26], width/2, windowHeight/2, width, width/2.35);
}

if (click===30) {
  imageMode(CENTER);
  image(imagesOk[27], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,600,100);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("...And some other times that single spark \nis capable of instilling the deepest of the doubts.",width/2,height/2);
  pop();
}

if (click===31) {
  imageMode(CENTER);
  image(imagesOk[28], width/2, windowHeight/2, width, width/2.35);
}

if (click===32) {
  imageMode(CENTER);
  image(imagesOk[29], width/2, windowHeight/2, width, width/2.35);

    push();
    rectMode(CENTER,CENTER);
    fill('yellow');
    rect(width/2,height/2,1000,100);
    pop();

    push();
    fill('black');
    textAlign(CENTER,CENTER);
    textFont(intlMed);
    textSize(20);
    text("One leak is enough to destroy an entire, perfect system; \nand when the external threat penetrated inside the dome, chaos ensued.",width/2,height/2);
    pop();
}

if (click===33) {
  imageMode(CENTER);
  image(imagesOk[30], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,1000,100);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("One leak is enough to destroy an entire, perfect system; \nand when the external threat penetrated inside the dome, chaos ensued.",width/2,height/2);
  pop();
}

if (click===34) {
  imageMode(CENTER);
  image(imagesOk[31], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,1000,100);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("One leak is enough to destroy an entire, perfect system; \nand when the external threat penetrated inside the dome, chaos ensued.",width/2,height/2);
  pop();
}

if (click===35) {
  imageMode(CENTER);
  image(imagesOk[32], width/2, windowHeight/2, width, width/2.35);

  buttonC1e1.removeClass('buttonUsed');
  buttonC1e1.addClass('button');
  buttonC1e2.removeClass('buttonUsed');
  buttonC1e2.addClass('button');

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
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,1000,100);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("But it is in the darkest of the moments that people \nmust choose between what is right and what is necessary.",width/2,height/2);
  pop();
}

if (click===36) {
  imageMode(CENTER);
  image(imagesOk[33], width/2, windowHeight/2, width, width/2.35);
}

if (click===37) {
  imageMode(CENTER);
  image(imagesOk[34], width/2, windowHeight/2, width, width/2.35);
}

if (click===38) {
  imageMode(CENTER);
  image(imagesOk[35], width/2, windowHeight/2, width, width/2.35);
}

if (click===39) {
  imageMode(CENTER);
  image(imagesOk[36], width/2, windowHeight/2, width, width/2.35);
}

if (click===40) {
  imageMode(CENTER);
  image(imagesOk[37], width/2, windowHeight/2, width, width/2.35);
}

if (click===41) {
  imageMode(CENTER);
  image(imagesOk[38], width/2, windowHeight/2, width, width/2.35);
}

if (click===42) {
  imageMode(CENTER);
  image(imagesOk[39], width/2, windowHeight/2, width, width/2.35);
}

if (click===43) {
  imageMode(CENTER);
  image(imagesOk[40], width/2, windowHeight/2, width, width/2.35);
}

if (click===44) {
  imageMode(CENTER);
  image(imagesOk[41], width/2, windowHeight/2, width, width/2.35);
}

if (click===45) {
  imageMode(CENTER);
  image(imagesOk[32], width/2, windowHeight/2, width, width/2.35);

  buttonC2e1.removeClass('buttonUsed');
  buttonC2e1.addClass('button');
  buttonC2e2.removeClass('buttonUsed');
  buttonC2e2.addClass('button');

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
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,1000,100);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("When the line between right and necessary is blurred, \nwhat will be your choice?",width/2,height/2);
  pop();
}

if (click===46) {
  imageMode(CENTER);
  image(imagesOk[42], width/2, windowHeight/2, width, width/2.35);
}

if (click===47) {
  imageMode(CENTER);
  image(imagesOk[32], width/2, windowHeight/2, width, width/2.35);

  buttonC3e1.removeClass('buttonUsed');
  buttonC3e1.addClass('button');
  buttonC3e2.removeClass('buttonUsed');
  buttonC3e2.addClass('button');

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
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,1000,100);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(20);
  text("When all hope seems lost, \nwill you fight for your beliefs?",width/2,height/2);
  pop();
}

if (click===48) {
  imageMode(CENTER);
  image(imagesOk[43], width/2, windowHeight/2, width, width/2.35);
}

if (click===49) {
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

        push();
        rectMode(CENTER,CENTER);
        fill('yellow');
        rect(width/2,height/2,1000,70);
        pop();

        push();
        fill('black');
        textAlign(CENTER,CENTER);
        textFont(intlMed);
        textSize(30);
        text("Take your time to make the right decisions,",width/2,height/2);
        pop();
        }
}

if (click===50) {
  imageMode(CENTER);
  image(imagesOk[45], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,1000,120);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(30);
  text("because every choice echoes in your own path, \nand in that of others.",width/2,height/2);
  pop();
}

if (click===51) {
  imageMode(CENTER);
  image(imagesOk[46], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,1000,120);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(30);
  text("When you’re facing those consequences \nand your time comes to fight for your destiny",width/2,height/2);
  pop();
}

if (click===52) {
  imageMode(CENTER);
  image(imagesOk[47], width/2, windowHeight/2, width, width/2.35);

  push();
  rectMode(CENTER,CENTER);
  fill('yellow');
  rect(width/2,height/2,1000,70);
  pop();

  push();
  fill('black');
  textAlign(CENTER,CENTER);
  textFont(intlMed);
  textSize(40);
  text("Will you take that last call?",width/2,height/2);
  pop();
}

if (click===53) {
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
}
//PARENTESI FINE DRAW
}

function mouseClicked() {
  click++;
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

function choicy1e1() {
  karma = karma +1;
  buttonC1e1.removeClass('button');
  buttonC1e1.addClass('buttonUsed');
  buttonC1e2.removeClass('button');
  buttonC1e2.addClass('buttonUsed');
}

function choicy1e2() {
  karma = karma -1;
  buttonC1e1.removeClass('button');
  buttonC1e1.addClass('buttonUsed');
  buttonC1e2.removeClass('button');
  buttonC1e2.addClass('buttonUsed');
}

function choicy2e1() {
  karma = karma +2;
  buttonC2e1.removeClass('button');
  buttonC2e1.addClass('buttonUsed');
  buttonC2e2.removeClass('button');
  buttonC2e2.addClass('buttonUsed');
}

function choicy2e2() {
  karma = karma -2;
  buttonC2e1.removeClass('button');
  buttonC2e1.addClass('buttonUsed');
  buttonC2e2.removeClass('button');
  buttonC2e2.addClass('buttonUsed');
}

function choicy3e1() {
  karma = karma +2;
  buttonC3e1.removeClass('button');
  buttonC3e1.addClass('buttonUsed');
  buttonC3e2.removeClass('button');
  buttonC3e2.addClass('buttonUsed');
}

function choicy3e2() {
  karma = karma -2;
  buttonC3e1.removeClass('button');
  buttonC3e1.addClass('buttonUsed');
  buttonC3e2.removeClass('button');
  buttonC3e2.addClass('buttonUsed');
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  return false;
}
