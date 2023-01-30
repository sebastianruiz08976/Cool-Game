/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let attack = document.querySelector(".attack");
let retreat = document.querySelector(".retreat");
let retreatScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");
let attackScreen = document.querySelector(".option-one-screen");
let next = document.querySelector(".next");
let go = document.querySelector(".Go");
let stop = document.querySelector(".Stop");
let leave = document.querySelector(".Leave");
let leaveScreen = document.querySelector(".leaveScreen")
let goScreen = document.querySelector(".goScreen")



attack.onclick=function(){
  title.style.display="none";
  storyOpening.style.display="none";
  attackScreen.style.display="block";
}
  
retreat.onclick=function(){
  title.style.display="none";
  storyOpening.style.display="none";
  retreatScreen.style.display="block";
}
next.onclick=function(){
  storyOpening.style.display="none";
  attackScreen.style.display="none";
  storyOpening.style.display="none";
  title.style.display="none";
  optionOneEnd.style.display="block";
}
stop.onclick=function(){
  attackScreen.style.display="none";
  storyOpening.style.display="none";
  title.style.display="none";
  optionTwoEnd.style.display="block";
}
go.onclick=function(){
  storyOpening.style.display="none";
  attackScreen.style.display="none";
  storyOpening.style.display="none";
  title.style.display="none";
  retreatScreen.style.display="none";
  goScreen.style.display="block";
}

leave.onclick=function(){
  storyOpening.style.display="none";
  attackScreen.style.display="none";
  storyOpening.style.display="none";
  title.style.display="none";
  retreatScreen.style.display="none";
  leaveScreen.style.display="block";

}
  


