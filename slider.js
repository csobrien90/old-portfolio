// DOM statements

var backArrow = document.getElementById("backArrow");
var forwardArrow = document.getElementById("forwardArrow");
var projectList = document.getElementById("projectsCardList")

// Event Listeners

backArrow.addEventListener("mouseover", arrowHover);
forwardArrow.addEventListener("mouseover", arrowHover);

backArrow.addEventListener("mouseout", arrowAntiHover);
forwardArrow.addEventListener("mouseout", arrowAntiHover);

backArrow.addEventListener("click", scrollBack);
forwardArrow.addEventListener("click", scrollForward);

// Functions

function scrollForward() {
    let position = projectList.style.left.replace("px", "");
    let cardNum = countCards();
    let cardWidth = 306;
    let maxWidth = (cardNum - 1) * -cardWidth; 
    if (position > maxWidth) {
        let newPos = +position - cardWidth;
        projectList.style.left = `${newPos}px`;
    }
}

function scrollBack() {
    let position = projectList.style.left.replace("px", "");
    let cardWidth = 306;
    if (position < 0) {
        let newPos = +position + cardWidth;
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