const pill = document.querySelector (".pill");
const discover = document.querySelector ("#discover");

const changePosition = discover.addEventListener('mouseenter', function () {
    pill.style.padding = "16px 2px";
})

const changePositiontwo = discover.addEventListener('mouseleave', function() {
    pill.style.padding = "2px 16px";
})