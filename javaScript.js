let gameseq=[];
let userseq=[];
let color=["yellow","red","purple","green"];
let start= false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    
    if(start == false ){
    start= true;
    console.log("game start");
    levelup();
    }
})

function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*4);
    let col=color[random];  
    console.log(col);
   // flash(col);
     let rancolor=document.querySelector(`.${col}`);
    gameseq.push(col);
    console.log(gameseq);
    setTimeout(flash(rancolor),300);
    
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500) ;
}

function check(index){
    if(userseq[index] == gameseq[index]){
        if(userseq.length==gameseq.length){
            levelup();
        }
       
    }else{
        h3.innerHTML=` Game Over! Your score is<b> ${level} </b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },300);

        level=0;
        start= false;
        gameseq=[];
        userseq=[];
    }
}

function btnpress(){
    let btn=this;    
    let user=btn.getAttribute("id");
    console.log(user);
   userseq.push(user);
    console.log(userseq);
    flash(btn);
   check(userseq.length-1); 
}
let btns= document.querySelectorAll(".btn")
for(btn of btns){
    btn.addEventListener("click",btnpress);

}


