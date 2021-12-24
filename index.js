var colors=['images/dice1.png', "images/dice2.png", 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
function rollPvp1(){
  
  var choice1 = Math.floor(Math.random()*6);
  var choice2 = Math.floor(Math.random()*6);
  document.getElementById("first-dice-pic").src=colors[choice1];  
  document.getElementById("second-dice-pic").src=colors[choice2];
  if (choice1>choice2){
      document.querySelector('.title').innerHTML='<h1>Player 1 Wins!</h1>';
  } else if(choice1===choice2){
      document.querySelector('.title').innerHTML='<h1>It`s a draw!</h1>';

  } else if(choice1<choice2){
      document.querySelector('.title').innerHTML='<h1>Player 2 Wins!</h1>';

  }
};   
function rollSingle1(){
    var choice1 = Math.floor(Math.random()*6);
    document.getElementById("first-dice-pic").src=colors[choice1];
    document.querySelector('.title').innerHTML='<h1>You rolled:</h1>';
    
};

function rollSingle2(){
    var choice1 = Math.floor(Math.random()*6);
  var choice2 = Math.floor(Math.random()*6);
  document.getElementById("first-dice-pic").src=colors[choice1];  
  document.getElementById("second-dice-pic").src=colors[choice2];
  document.querySelector('.title').innerHTML='<h1>You rolled:</h1>';

};
function rollPvp2(){
  
    var choice1 = Math.floor(Math.random()*6);
    var choice2 = Math.floor(Math.random()*6);
    var choice3 = Math.floor(Math.random()*6);
    var choice4 = Math.floor(Math.random()*6);
    document.getElementById("first-dice-pic").src=colors[choice1];  
    document.getElementById("second-dice-pic").src=colors[choice2];
    document.getElementById("third-dice-pic").src=colors[choice3];
    document.getElementById("fourth-dice-pic").src=colors[choice4];
    if (choice1+choice2>choice3+choice4){
        document.querySelector('.title').innerHTML='<h1>Player 1 Wins!</h1>'
    } else if(choice1+choice2===choice3+choice4){
        document.querySelector('.title').innerHTML='<h1>It`s a draw!</h1>'
  
    } else if(choice1+choice2<choice3+choice4){
        document.querySelector('.title').innerHTML='<h1>Player 2 Wins!</h1>'
  
    }
  };   