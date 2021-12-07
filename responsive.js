var playing=false;
var score;
var action;
var timeremaining;
var Id1;
var correctans;
var i;
var correctposition;
//if we click on start/reset button
document.getElementById("startreset").onclick=

function(){

  if(playing==true)
  {
    //if we are playing
      location.reload();
  }

  else{

//if we are not playing
//set score to 0

playing=true;

       score=0;
       document.getElementById("scorevalue").innerHTML=score;
       //show countdown box
       document.getElementById("timeremaining").style.display="block";
       
       timeremaining=60;
       document.getElementById("timeremainingvalue").innerHTML=timeremaining;
       //hide gameover
       document.getElementById("gameover").style.display="none";
       //change button to reset
 document.getElementById("startreset").innerHTML="Reset Game";

 //countdown

 startcountdown();

 //generate new q & a

 generateqa();
  }
}

for(i=1;i<5;i++){
  document.getElementById("box"+i).onclick=function(){
    // check if we are playing
    if(playing==true)
    {
      if(this.innerHTML==correctans){
  score++;
  document.getElementById("scorevalue").innerHTML=score;
  
  //hide wrong box;
  document.getElementById("wrong").style.display="none";
  document.getElementById("correct").style.display="block";
    setTimeout(function(){
      document.getElementById("correct").style.display="none";
    },1000);
    generateqa();
  
      }
      else{//if wrong answer
        document.getElementById("correct").style.display="none"
        document.getElementById("wrong").style.display="block";
         setTimeout(function(){
            document.getElementById("wrong").style.display="none";
          },1000);
      }
    }
  }
}



function startcountdown(){
action=setInterval(function(){
timeremaining -=1;
document.getElementById("timeremainingvalue").innerHTML=timeremaining;
if(timeremaining==0)// means game over
{
  stopcountdown();
  document.getElementById("gameover").style.display="block";
  document.getElementById("gameover").innerHTML= "<p>Game Over!</p><p>Your Score is "+score+"</p>";
  //hide("timeremaining");
  document.getElementById("timeremaining").style.display="none";
  document.getElementById("correct").style.display="none";
  document.getElementById("wrong").style.display="none";
  //hide("correct");
 // hide("wrong");
  playing=false;
  document.getElementById("startreset").innerHTML="Start Game";

}
},1000)
}


//functions
function stopcountdown(){
clearInterval(action);
}


/*function hidden(){//to hide elements
  document.getElementById("Id1").style.display="none";
}
function show(Id1){//to show elements
  document.getElementById("Id1").style.display="block";
}*/


// to generate multiple answers and questions
function generateqa(){
var x =1+Math.round(9*Math.random());
var y =1+Math.round(9*Math.random());
correctans=x*y;
document.getElementById("question").innerHTML=x +"X"+ y;
correctposition =1+Math.round(3*Math.random());
document.getElementById("box"+correctposition).innerHTML=correctans;                 //fills one box with correct answer


// fill remaining box with randome numbers
var answer = [correctans];
for(i=1;i<5;i++){

  if(i !==correctposition ){
    var wronganwer;
  
    do{
      wronganwer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
         }while(answer.indexOf(wronganwer)>-1)
document.getElementById("box"+i).innerHTML=wronganwer;
answer.push(wronganwer);
  }
}
}