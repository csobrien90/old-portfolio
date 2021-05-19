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
    let newPos = +position - 300;
    projectList.style.left = `${newPos}px`;
}

function scrollBack() {
    let position = projectList.style.left.replace("px", "");
    let newPos = +position + 300;
    projectList.style.left = `${newPos}px`;
}

function arrowHover() {
    this.style.border = "10px solid blue";
}

function arrowAntiHover() {
    this.style.border = "unset";
}