// DOM statements

var backArrow = document.getElementById("backArrow");
var forwardArrow = document.getElementById("forwardArrow");
var projectList = document.getElementById("projectsCardList")

// Event Listeners

backArrow.addEventListener("mouseover", arrowHover);
forwardArrow.addEventListener("mouseover", arrowHover);

backArrow.addEventListener("mouseout", arrowAntiHover);
forwardArrow.addEventListener("mouseout", arrowAntiHover);

backArrow.addEventListener("mouseover", scrollBack);
forwardArrow.addEventListener("mouseover", scrollForward);


// Functions

function scrollForward() {
    let position = projectList.style.left.replace("px", "");
    let cardNum = countCards();
    let maxWidth = (cardNum -3) * -440; 
    if (position > maxWidth) {
        let newPos = +position - 440;
        projectList.style.left = `${newPos}px`;
    }
}

function scrollBack() {
    let position = projectList.style.left.replace("px", "");
    if (position < 0) {
        let newPos = +position + 440;
        projectList.style.left = `${newPos}px`;
    }
}

function arrowHover() {
    this.style.textShadow = "0 2px 2px gray";
}

function arrowAntiHover() {
    this.style.textShadow = "unset";
}

function countCards() {
    let count = document.getElementsByClassName("card").length;
    return(count);
}