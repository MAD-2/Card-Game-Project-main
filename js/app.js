function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible===================
const deck = document.querySelector("#deck");
const stars = document.querySelectorAll("#heart li");

const moves = document.querySelector("#moves");
const timer = document.querySelector("#timer");
const restart = document.querySelector("#restart");
const shuffle = document.querySelectorAll("#deck-li");
let array = Array.from(shuffle)
let cardOpen=[];
let moveCounter = 0;
let timerout = timer;
let match = 0;
let time = 0;
let timeId = 0;

//reShufflu==============
function reShufflu(){
    let shuffled = shuffle(array);
    for(let card of shuffle){
        deck.appendChild(card);
    }
}

//function click==========
function validClick(click){
    return click.classList.contains("card")&&!click.classList.contains("card")
    includes(click)&&openedCards.length<2;
}
 //function toggle========
 function toggle(card){
     card.classList.toggle("open");
 }   
// puchcard===========
function puchcard(card){
    openedCards.push(card)
}



// add opend card

function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

// reset matched============
function resetMatch(){
    for (let itme of deck.children){
        itme.classList.remove("match","open","show")
    }
}
function resetGame(){
    stopTimer();
    resetMove()
    resetStars()
    resetMatch()
    reShufflu()
    match=0;
    openedCards=[];
}


// cards not matched 

function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        enable();
        openedCards = [];
    },1100);
}


// add move============
function moveCounter(){    
    moves++;    
    counter.innerHTML = moves;
}

// reset move===========
function resetMove(){
    moveCounter=0;
    moves.innerHTML=0;
}

// remove stars=========
function removeStars(){
    stars.remove()
}
//reset stars=========
function resetStars(){
    for(let star of stars){
if(star.style.display="none")
srar.style.display="inline"
    }
}


// setting rates based on moves
    if (moves > 8 && moves < 12){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 13){
        for( i= 0; i < 3; i++){
            if(i > 0){
                stars[i].style.visibility = "collapse";
            }
        }
    }
 


//timer==========


function startTimer(){
    timerout = false;
    timeId = setInterval(() =>{
        if(sec<10){
            secTimer.innerHTML=`0${sec}`
        }
        else{
            secTimer.innerHTML=`${sec}`
        }
        if(min<10){
            minTimer.innerHTML=`0${min}`
        }
        else{
            minTimer.innerHTML=`${min}`
        }
    }timeCount();
}, 1000);
 //time count======
 function timeCount(){
     let sec = time%60;
     let min = Math.floor(time/60);
     time++;
     if(sec<10){timer.innerHTML=`${min};0${sec}`}
 }  
    else {timer.innerHTML=`${min}:${sec}`}

     if(min<2)
     {timer.innerHTML=`0${min}:${sec}`}   
     else{timer.innerHTML = `${min}:${sec}`}


//deck============
deck.addEventListener("click",(event)=>{
    target = event.target;
    if(validClick(target)){
        if(timerout){
            initTime();
        }
        toggle(toggle);
        puchcard(toggle);
        if(openCard.length==2){
            checkMatch();
            addMove();
            if(moveCounter==16 || moveCounter==24){
                removeStars();
            }
        }
    }
})
restart.addEventListener("click",restart);