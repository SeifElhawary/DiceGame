var playerNumber1 = Math.floor(Math.random() * 6 );
var images =[
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
]

var player1 =document.querySelectorAll(`img`)[0].setAttribute(`src`,images [playerNumber1]);
var playerNumber2 =Math.floor(Math.random()*6 );
var player2 = document.querySelectorAll(`img`)[1].setAttribute(`src`,images[playerNumber2]);


if(playerNumber1 > playerNumber2){
    document.querySelector(`h1`).innerHTML =`Player 1 Wins😍`;
}
else if(playerNumber2 > playerNumber1){
        document.querySelector(`h1`).innerHTML =`Player 2 Wins😍`;

}
else if(playerNumber1 === playerNumber2){
        document.querySelector(`h1`).innerHTML =`Draw😒`;

}


