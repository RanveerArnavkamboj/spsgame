      let you=0
      let ci=0
      let userchoice="" 
      let compchoice=""  
      let yp=document.querySelector(".you")
      let cp=document.querySelector(".comp")
      let msg=document.querySelector(".msg")
      let rock=document.querySelector(".rock")
       let paper=document.querySelector(".paper")
 let scissors=document.querySelector(".scissors")
 rock.addEventListener("click",()=>{
   userchoice="rock"
   rock.classList.add("imgs")
   c()
   res()
 })
 paper.addEventListener("click",()=>{
   userchoice="paper"
   paper.classList.add("imgs")
    c()
   res()
 })
scissors.addEventListener("click",()=>{
   userchoice="scissors"
     scissors.classList.add("imgs")
   c()
   res()
 })
 function c(){
choices=["rock","paper","scissors"]
i=Math.floor(Math.random()*3)
compchoice=choices[i]
msg.textContent=compchoice
}
function res(){
  if (userchoice==compchoice){
    msg.textContent="draw"
    msg.classList.add("draw")
  }
  else if(userchoice=="rock"&&compchoice=="scissors"){
    msg.textContent=`you won`
    yp.textContent=you+=1
      msg.classList.remove("draw")
    msg.classList.add("win")
  }
    else if(userchoice=="rock"&&compchoice=="paper"){
    msg.textContent=`you lose`
  cp.textContent=ci+=1
    msg.classList.remove("draw")
 msg.classList.remove("win")
      msg.classList.add("lose")
  }
     else if(userchoice=="paper"&&compchoice=="rock"){
    msg.textContent=`you won`
    yp.textContent=you+=1
  msg.classList.remove("draw")
      msg.classList.add("win")
  }
   else if(userchoice=="paper"&&compchoice=="scissors"){
    msg.textContent=`you lose`
      cp.textContent=ci+=1
  msg.classList.remove("draw")
       msg.classList.remove("win")
      msg.classList.add("lose")
  }
   else if(userchoice=="scissors"&&compchoice=="paper"){
    msg.textContent=`you won`
  yp.textContent=you+=1
  msg.classList.remove("draw")
  msg.classList.add("win")
  }
   else if(userchoice=="scissors"&&compchoice=="rock"){
    msg.textContent=`you lose`
    cp.textContent=ci+=1
  msg.classList.remove("draw")
    msg.classList.remove("win")
    msg.classList.add("lose")
  }
     }
