const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const mobileBars = document.getElementById("mobileBars");
const rightSide = document.getElementById("rightSide");
const buttons = document.getElementById("buttons");

var isClicked = false;

function clickAniMenu() {
    if (!isClicked) {
        bar1.classList.remove("bar1AnC");
        bar2.classList.remove("bar2AnC");
        bar3.classList.remove("bar3AnC");

        bar1.classList.add("bar1AnO");
        bar2.classList.add("bar2AnO");
        bar3.classList.add("bar3AnO");
        bar1.style.transform = "rotate(50deg)";
        bar1.style.top = "3vh";
        bar2.style.width = "0";
        bar3.style.transform = "rotate(-50deg)";
        bar3.style.top = "-0.8vh";

        rightSide.style.bottom = "0";

        console.log("click aberto");
    } else if (isClicked) {
        bar1.classList.remove("bar1AnO");
        bar2.classList.remove("bar2AnO");
        bar3.classList.remove("bar3AnO");

        bar1.classList.add("bar1AnC");
        bar2.classList.add("bar2AnC");
        bar3.classList.add("bar3AnC");
        bar1.style.transform = "rotate(0deg)";
        bar1.style.top = "1vh";
        bar2.style.width = "6vw";
        bar3.style.transform = "rotate(0deg)";
        bar3.style.top = "1vh";

        rightSide.style.bottom = "100vh";

        console.log("click fechado");
    }

    isClicked = !isClicked;
}

mobileBars.addEventListener("click", clickAniMenu); 