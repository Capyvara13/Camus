const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const mobileBars = document.getElementById("mobileBars");
const rightSide = document.getElementById("rightSide");
const buttons = document.getElementById("buttons");

var isClicked = false;

for (let i = 0; i < document.styleSheets.length; i++) {
    const sheet = document.styleSheets[i];
    if (sheet.href && sheet.href.includes("LadingStyle.css")) {
      console.log("Folha de estilo encontrada:", sheet);
      console.log("Executando script para menu.")

      function clickAniMenu() {
        if (!isClicked) {
            if (window.innerWidth <= 768 && window.innerWidth > 425) {
                document.documentElement.style.setProperty("--Bar2Width", "6vw");
                bar1.style.transform = "rotate(50deg)";
                bar1.style.top = "3.1vh";
                bar2.style.width = "0";
                bar3.style.transform = "rotate(-50deg)";
                bar3.style.top = "-0.8vh";
            } else if (window.innerWidth <= 425) {
                bar1.style.transform = "rotate(50deg)";
                bar1.style.top = "2.8vh";
                bar2.style.width = "0";
                bar3.style.transform = "rotate(-50deg)";
                bar3.style.top = "-0vh";
                
                document.documentElement.style.setProperty("--Bar2Width", "8vw");
            }
            bar1.classList.remove("bar1AnC");
            bar2.classList.remove("bar2AnC");
            bar3.classList.remove("bar3AnC");
    
            bar1.classList.add("bar1AnO");
            bar2.classList.add("bar2AnO");
            bar3.classList.add("bar3AnO");
    
            rightSide.style.bottom = "0";
    
            console.log("click aberto");
        } else if (isClicked) {
            if (window.innerWidth <= 768 && window.innerWidth > 425) {
                bar1.style.transform = "rotate(0deg)";
                bar1.style.top = "1vh";
                bar2.style.width = "6vw";
                bar3.style.transform = "rotate(0deg)";
                bar3.style.top = "1vh";
            } else if (window.innerWidth <= 425) {
                bar1.style.transform = "rotate(0deg)";
                bar1.style.top = "1vh";
                bar2.style.width = "10vw";
                bar3.style.transform = "rotate(0deg)";
                bar3.style.top = "1vh";
            }
            bar1.classList.remove("bar1AnO");
            bar2.classList.remove("bar2AnO");
            bar3.classList.remove("bar3AnO");
    
            bar1.classList.add("bar1AnC");
            bar2.classList.add("bar2AnC");
            bar3.classList.add("bar3AnC");
    
            rightSide.style.bottom = "100vh";
    
            console.log("click fechado");
        }
    
        isClicked = !isClicked;
    }
    } else {
        console.log("Folha de estilo 'LadingStyle.css' não foi encontrada!")
    }
  }


mobileBars.addEventListener("click", clickAniMenu); 