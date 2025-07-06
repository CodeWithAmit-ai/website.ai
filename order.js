  const checkbox = document.getElementById("myCheckbox");
  const text = document.getElementById("text");
  const t2=document.getElementById("t2");
  const t3=document.getElementById("t3");
  const button = document.getElementById("myButton");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      text.innerHTML = "Amit Majumdar +91 9907651881 ";
      t2.innerHTML="parghata,nabodiganto club, north 24 porgonas"
      t3.innerHTML="pin-743426"
      button.style.display = "inline";
      
    } else {
      text.innerHTML ="HOME";
      t2.innerHTML="";
      t3.innerHTML="";
        button.style.display = "none";
    }
  });
  const checkbox1 = document.getElementById("myCheckbox1");
  const text1 = document.getElementById("text1");
  const t21=document.getElementById("t21");
  const t31=document.getElementById("t31");
  const button1 = document.getElementById("myButton1");

  checkbox1.addEventListener("change", () => {
    if (checkbox1.checked) {
      text1.innerHTML = "Amit Majumdar +91 9883624779 ";
      t21.innerHTML="Matribhavan,Barboria Medical Hall,Barasat 1 subdistric, North 24 porgonas"
      t31.innerHTML="pin-700121"
      button1.style.display = "inline";
      
    } else {
      text1.innerHTML ="AWAY";
      t21.innerHTML="";
      t31.innerHTML="";
      button1.style.display = "none";
    }
  });
  /*const newPrice = localStorage.getItem("newPrice");

    if (newPrice) {
      document.getElementById("price").innerHTML = newPrice;
      localStorage.removeItem("newPrice");
    }*/

   

