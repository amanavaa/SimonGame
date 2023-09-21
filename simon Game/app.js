let gameseq = [];
let userseq = [];
let colo = ["rgb1" , "rgb3" , "rgb2" , "rgb4"];
let h2 = document.querySelector("h2");
let highestscore =0;
let started = false;
let level = 0;

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Game was stared");
        started = true;
    }
    levelup();
})

// function btnflask(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     }, 250);
// }

// function levelup(){
//    level++;
//    h2.innerHTML = `Level ${level}`;

//    let randindex = Math.floor(Math.random()*3);
//    let randomcolor = colo[randindex];
//    let  randbtn = document.querySelector(`.${randomcolor}`);
//    console.log(randindex);
//    console.log(randomcolor);
//    console.log(randbtn);
//    btnflask(randbtn);

// }
function btnflash(btn){
    btn.classList.add("flash");
    setInterval(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setInterval(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelup(){
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let randindex = Math.floor(Math.random()*4);
    let randomcolor = colo[randindex];
    let randbtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    btnflash(randbtn);
}
function checkAns(ind){
    // let ind = level-1;
    if(userseq[ind] === gameseq[ind]){
        if(userseq.length == gameseq.length){
            setTimeout(() => {
                levelup()
            }, 1000);

        }
    }else{
        h2.innerText = `Game over! Your score is ${level}. Prese any key to restart the game`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor ="white";
        }, 150);
        highest();
        reset();
        // level = 0;
    }
}
function highest(){
    if(highestscore< level){
        highestscore = level;
        let h3 = document.querySelector("h3");
        h3.innerHTML = `Your highest Score : ${highestscore}`;
    }else{
        let h3 = document.querySelector("h3");
        h3.innerHTML = `Your highest Score : ${highestscore}`;
    }
}
function btnpress(){
    console.log("Button was pressed")
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    // console.log(userseq);
    checkAns(userseq.length-1);
}


let allbtn = document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click" , btnpress)
}
function reset(){
    started = false;
    userseq =[];
    gameseq =[];
    level = 0;
}
highest();