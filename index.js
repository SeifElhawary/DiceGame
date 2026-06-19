var dice = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
];
function play(playerIndex){
    var random = Math.floor(Math.random()*dice.length);
document.querySelectorAll(`img`)[playerIndex].setAttribute(`src`,dice[random]);
}
play(0);
play(1);





