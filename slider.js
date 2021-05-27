const buttonBack = document.getElementById('scrollBack');
const buttonForward = document.getElementById('scrollForward');

var scrollTest;

buttonBack.addEventListener("mouseover", scrollBack);
buttonForward.addEventListener("mouseover", scrollForward);

buttonBack.addEventListener("mouseout", stopScroll);
buttonForward.addEventListener("mouseout", stopScroll);


function scrollBack() {
    scrollTest = setInterval(scroll, 1)
    function scroll() {
    document.getElementById('projectsCardList').scrollLeft -= 3;
}
};

function scrollForward() {
    scrollTest = setInterval(scroll, 1)
    function scroll() {
    document.getElementById('projectsCardList').scrollLeft += 3;
}
};

function stopScroll() {
    clearInterval(scrollTest);
}