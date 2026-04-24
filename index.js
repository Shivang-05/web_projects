let hScore=document.getElementById("home-score")
let gScore=document.getElementById("guest-score")
let hs=0
let gs=0
function add1(){
    hs+=1
    hScore.textContent=hs
    updateHighlight();
}
function add2(){
    hs+=2
    hScore.textContent=hs
    updateHighlight();
}
function add3(){
    hs+=3
    hScore.textContent=hs
    updateHighlight();
}
function g_add2(){
    gs+=2
    gScore.textContent=gs
    updateHighlight();
}
function g_add3(){
    gs+=3
    gScore.textContent=gs
    updateHighlight();
}
function g_add1(){
    gs+=1
    gScore.textContent=gs
    updateHighlight();
}
function reset(){
    hs=0
    gs=0
    gScore.textContent=gs
    hScore.textContent=hs
    updateHighlight();
}
function updateHighlight() {
    if (hs > gs) {
        hScore.classList.add("winner");
        gScore.classList.remove("winner");
    } 
    else if (gs > hs) {
        gScore.classList.add("winner");
        hScore.classList.remove("winner");
    }
    else {
        hScore.classList.remove("winner");
        gScore.classList.remove("winner");
    }
}