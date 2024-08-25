let colors=["blue","yellow","orange","grey"]; 
let graphSec1=document.querySelector(".graphs") 
let greySec2=document.querySelector(".holder") 
let doller=document.querySelector(".doller")
let percentile=document.querySelector(".percentile") 
let main=document.querySelectorAll(".main") 
let mini=document.querySelectorAll(".mini")
console.log(main,mini)
function randomGeneerator()
{
    for(let i=0; i<7; i++) { 
        let randomNumber=(Math.random()*130)+20;  
        let colorRandom=Math.floor((Math.random()*4));
        let twoRandom=Math.floor((Math.random()*4));
        let parent=document.createElement("div");
        parent.classList.add("one"); 
        let second=document.createElement("div"); 
        second.classList.add("two"); 
        parent.style.width="20px";
        parent.style.height=`${randomNumber}px`;   
        parent.style.background=`linear-gradient(${colors[colorRandom]}, ${colors[twoRandom]})`;
        graphSec1.appendChild(parent)     
}  

} 
function randomTwo()
{ 
    let doller_randomNumber=Math.floor(Math.random()*2000)+2000
doller.innerHTML=`$${doller_randomNumber}` 
doller.style.fontSize="30px" 
    let percen=(Math.random()*10)+2
    percentile.innerHTML=`${Math.round(percen)}%`
}
randomGeneerator()
randomTwo()  

function delay()
{ 
    let counteer=0; 
    main.forEach((val,index)=>{
        mini.forEach((val2,index2)=>{
            if(index===index2)
                {
                   let intravel=setInterval(()=>{ 
                    if(counteer==101) 
                        {
                            clearInterval(intravel)
                           
                        } 
                        else 
                        {
                            counteer++;   
                            let randomHeight=(Math.random()*40)+40
                            console.log(randomHeight)
                            let atti=val2.getAttribute("atti")
                            console.log(atti)
                            val2.style.backgroundColor=atti 
                            val2.style.height=`${randomHeight}px`;
                            val2.style.width="100%";
                            if(index%2==0)
                            val2.style.borderTop="2px solid #499E81" 
                            else 
                            val2.style.borderTop="2px solid #469C7F"
                        } 
                       
              
                   },15) 
                }
        })
    })
    
    
    
} 

delay()

    setInterval(()=>{ 
        
        graphSec1.innerHTML=""
        randomGeneerator()  
        counteer=0
         delay()
       randomTwo()
    },4000)  

