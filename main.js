// main.js

if (window.location.pathname.includes("index.html")) {
  const btn = document.getElementById("goOrder");
  if (btn) {
    btn.addEventListener("click", () => {
      localStorage.setItem("newPrice", "₹239");
      localStorage.setItem("newTotal","₹308");
      window.location.href = "order.html";
    });
  }
}

if (window.location.pathname.includes("order.html")) {
  const price = document.getElementById("price");
  const total=document.getElementById("total");
  const newTotal=localStorage.getItem("newTotal");
  const newPrice = localStorage.getItem("newPrice");
  if (price && newPrice) {
    price.innerHTML = newPrice;
    total.innerHTML=newTotal;
    localStorage.removeItem("newTotal");
     localStorage.removeItem("newPrice");
  }
    
  
}

if (window.location.pathname.includes("index.html")) {
  const btn1 = document.getElementById("goOrder1");
  if (btn1) {
    btn1.addEventListener("click", () => {
      localStorage.setItem("newPrice1", "₹499");
       localStorage.setItem("newTotal","₹568");
      window.location.href = "order.html";
    });
  }
}

if (window.location.pathname.includes("order.html")) {
  const price = document.getElementById("price");
    const total=document.getElementById("total");
  const newTotal=localStorage.getItem("newTotal");
  const newPrice1 = localStorage.getItem("newPrice1");
  if (price && newPrice1) {
    price.innerHTML = newPrice1;
    total.innerHTML=newTotal;
    localStorage.removeItem("newTotal");
     localStorage.removeItem("newPrice1");
  }
}
if (window.location.pathname.includes("index.html")) {
  const btn2 = document.getElementById("goOrder2");
  if (btn2) {
    btn2.addEventListener("click", () => {
      localStorage.setItem("newPrice2", "₹369");
      localStorage.setItem("newTotal","₹438");
      window.location.href = "order.html";
    });
  }
}

if (window.location.pathname.includes("order.html")) {
  const price = document.getElementById("price");
   const total=document.getElementById("total");
  const newTotal=localStorage.getItem("newTotal");
  const newPrice2 = localStorage.getItem("newPrice2");
  if (price && newPrice2) {
    price.innerHTML = newPrice2;
     total.innerHTML=newTotal;
    localStorage.removeItem("newTotal");
     localStorage.removeItem("newPrice2");
  }
}
if (window.location.pathname.includes("index.html")) {
  const btn3 = document.getElementById("goOrder3");
  if (btn3) {
    btn3.addEventListener("click", () => {
      localStorage.setItem("newPrice3", "₹249");
      localStorage.setItem("newTotal","₹318");
      window.location.href = "order.html";
    });
  }
}

if (window.location.pathname.includes("order.html")) {
  const price = document.getElementById("price");
    const total=document.getElementById("total");
  const newTotal=localStorage.getItem("newTotal");
  const newPrice3 = localStorage.getItem("newPrice3");
  if (price && newPrice3) {
    price.innerHTML = newPrice3;
     total.innerHTML=newTotal;
    localStorage.removeItem("newTotal");
     localStorage.removeItem("newPrice3");
  }
}
if (window.location.pathname.includes("index.html")) {
  const btn4 = document.getElementById("goOrder4");
  if (btn4) {
    btn4.addEventListener("click", () => {
      localStorage.setItem("newPrice4", "₹549");
      localStorage.setItem("newTotal","₹618");
      window.location.href = "order.html";
    });
  }
}

if (window.location.pathname.includes("order.html")) {
  const price = document.getElementById("price");
    const total=document.getElementById("total");
  const newTotal=localStorage.getItem("newTotal");
  const newPrice4 = localStorage.getItem("newPrice4");
  if (price && newPrice4) {
    price.innerHTML = newPrice4;
        total.innerHTML=newTotal;
    localStorage.removeItem("newTotal");
     localStorage.removeItem("newPrice4");
  }
}
