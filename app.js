



let gameSequence=[];
let userSequence=[];
let started= false;
let h3= document.querySelector('h3');
let center = document.querySelector('#centerD h3');
let display = document.getElementById('centerD');

document.querySelector('#centerD').appendChild(center);

let pMax= document.querySelector('h1 p');
let level =0;
let btns =[ "pink","blue","orange","purple"];
         let randomIndx= Math.floor(Math.random()*3.5 );
     let  randomcolor= btns[randomIndx];
    let randombtn = document.querySelector(`.${randomcolor}`);

document.addEventListener('keypress', function() {

    if(started== false){

            console.log('the game has began');
            started= true;

             levelup();
        

          }
    
});

// just a flash fuction to be reused
function flash(btn,delay){
    
                
        btn.classList.add('flash');

        setTimeout(()=>{
             btn.classList.remove('flash');
         }, delay);
                

    }

function levelup(){
    userSequence=[];

     let randomIndx= Math.floor(Math.random()*3.5 );
     let  randomcolor= btns[randomIndx];
     randombtn = document.querySelector(`.${randomcolor}`);
    
   if (level==0){flash(randombtn,300);}
    level++;
      h3.innerHTML=`<h3></h3>`;
//    h3.innerHTML=`<h3>Level <b>${level}</b></h3>`;
    // flash(display,300);
   center.innerHTML=`Level <b>${level}</b>`;
   

    gameSequence.push(randomcolor);
    console.log(gameSequence);

    // flasing gamesequence
    flash(randombtn,300);

   

    // for(let i=0; i< gameSequence.length;i++){
    //      gameBlink=document.querySelector(`.${gameSequence[i]}`);
    //    setTimeout( flash, 500,gameBlink);
    // }


}


    //random butten chose

   
    
    // flash(randombtn);
    
    //pressing
    function btnPress(){
        let btn= this;
        // console.log("button was pressed");
        userFlash(btn);
        usercolor = btn.getAttribute("id");
        console.log(usercolor);

        userSequence.push(usercolor);
          checksAns(userSequence.length-1);


       
        
    }

 let allBtns= document.querySelectorAll('.btn');
 for(Btn of allBtns)
{  Btn.addEventListener("click", btnPress);

}
function checksAns(idx){
    
    if(gameSequence[idx] === userSequence[idx]){
        if(userSequence.length== gameSequence.length){
            setTimeout(levelup,600);
            
            
        }
    }
    else{
         document.querySelector('body').style.backgroundColor="red";
    setTimeout( ()=> {document.querySelector('body').style.backgroundColor="white"}, 500);
        reset();
    }
}

function reset(){
    started= false;
    gameSequence= [];
    userSequence=[];

    let highScore=0;
    if(level> highScore){
        highScore= level;
    }

     pMax.innerHTML= `<p>Max. Score : ${highScore}</p>`
     h3.innerHTML= `<h3>Game over, <br>press any key to play again</h3>`;
     center.innerHTML=`score: ${level}`;
    level=0;
}
function userFlash(btn){
            btn.classList.add('Uflash');

        setTimeout(()=>{
             btn.classList.remove('Uflash');
         }, 300);
            

}


