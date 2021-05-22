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
forwardArrow.addEventListener("mouseover", scrollForward)

backArrow.addEventListener("mouseout", stopScroll);
forwardArrow.addEventListener("mouseout", stopScroll)

// Functions

function scrollForward() {
    repeater=setInterval(slide, 1);
    function slide() {
        let maxWidth = (countCards() - 1) * -350;
        let position = projectList.style.left.replace("px", "");
        if (position > maxWidth) {
            let newPos = +position - 3; 
            projectList.style.left = `${newPos}px`;
        }
    }
}

function scrollBack() {
    repeater=setInterval(slide, 1);
    function slide() {
        let maxWidth = 0;
        let position = projectList.style.left.replace("px", "");
        if (position < maxWidth) {
            let newPos = +position + 3; 
            projectList.style.left = `${newPos}px`;
        }
    }
}

function stopScroll() {
    clearInterval(repeater);
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