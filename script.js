
//player score display
const p1score = document.getElementById("p1score") 
const p2score = document.getElementById("p2score") 

//roll now button

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

//reset button

const rst = document.getElementById("rst")

//imgage tag

const diceimg = document.getElementById("diceimg")

//winner msg

const winner = document.getElementById("winner")
 
 
// function btn1(){

//     const randomNumber = Math.floor(Math.random()*6)+1;
//     diceimg.src = `${randomNumber}.png`;
//     p1score += randomNumber;
    
// }

 const player1 = 1;
// const player2 = 0;
const p1Score = 0;
const p2Score = 0;


//test

let score1 = 0;
let score2 = 0;
// let target = 30;


function btn11(){
    let randomNum = Math.floor(Math.random()*6)+1;
   // console.log(randomNum)
    diceimg.src = `./images/${randomNum}.png`;
    score1 += randomNum;
    p1score.innerText = score1;

    if(score1 >=30 || score2 >=30){
        console.log(winner)
        winner .innerText = "player 1 wins!"
    
        winner .innerText = "player 2 wins!"
    
    }
    
    
    
    btn1.disabled = true;
    btn2.disabled = false;
    
}



// 2nd

function btn22(){
    let randomNum = Math.floor(Math.random()*6)+1;
    diceimg.src = `./images/${randomNum}.png`;

    score2 += randomNum;
    p2score.innerText = score2;

    if(score1 >=30 || score2 >=30){
        console.log(winner)
        winner .innerText = "player 1 wins!"
    
        winner .innerText = "player 2 wins!"
    
    }
    
    

    btn1.disabled = false;
    btn2.disabled = true;

}

function reset(){
    p1score.textContent = 0;
    p2score.textContent = 0;



}
console.log(p1score)
// if(score1 >=30 || score2 >=30){
//     console.log(winner)
//     winner .innerText = "player 1 wins!"

//     winner .innerText = "player 2 wins!"

// }





