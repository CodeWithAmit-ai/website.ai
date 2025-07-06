let btn=document.querySelector(".btn");
let turn1=1;
 btn.addEventListener("mouseover",()=>{
    if(turn1){
  document.querySelector(".btn").innerText="START";
  turn1=0;
    }
    else{
        document.querySelector(".btn").innerText="ORDER NOW";
        turn1=1;
    }
 });
 let buy=document.querySelector(".buy");
 buy.addEventListener("click",()=>{
   window.location.href="order.html";
 });

  /*  document.getElementById("goOrder").addEventListener("click", () => {
    
      localStorage.setItem("newPrice", "₹239");
      window.location.href = "order.html";
    });*/
    
 
  