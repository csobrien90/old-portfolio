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

function scrollBack() {
    projectList.style.left = "-600px";
}

function scrollForward() {
    projectList.style.left = "600px";
}

function arrowHover() {
    this.style.border = "10px solid blue";
}

function arrowAntiHover() {
    this.style.border = "unset";
}