var myfacts = document.getElementById("facts");

function changeColor(){
  myfacts.style.color = "green";
}

function changeBack(){
  myfacts.style.color = "purple";
}

myfacts.onmouseover = changeColor;
myfacts.onmouseout = changeBack;

console.log(myfacts);

//---------------------------------------------------------------------------
var mytitle = document.getElementById("title");

function changeColor2(){
  mytitle.style.color = "#641E16";
}

function changeBack2(){
  mytitle.style.color = "#008080";
}

mytitle.onmouseover = changeColor2;
mytitle.onmouseout = changeBack2;

//---------------------------------------------------------------------------

var myhead = document.getElementById("head");

function changeColor3(){
  myhead.style.color = "#641E16";
}

function changeBack3(){
  myhead.style.color = "#008080";
}

myhead.onmouseover = changeColor3;
myhead.onmouseout = changeBack3;
