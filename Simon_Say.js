let gameSeq=[];
let userSeq=[];
let colors=["yellow","red","green","purple"]

let h2=document.querySelector("h2");

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started= true;

        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash"); 
    },250);
}



function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    userSeq=[];
    let randNum=Math.floor(Math.random()*4);
    let randColor=colors[randNum];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnflash(randBtn);
}

function checkans(idx){
    console.log(`Current level is: ${level}`);
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>Press any key to continue...`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white",150
        });
        reset();
    }
}

function btnpress(){
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute("id")
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn")
for (btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}

