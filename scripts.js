$(document).mousemove(function(e) {
    $("#follow").css({
        left: e.pageX,
        top: e.pageY
    });
});

const buttonClose = document.querySelector('.close');
buttonClose.addEventListener('click', function(event) {
    const windowForm = document.querySelector('.window');
    windowForm.classList.toggle('active');
});

const buttonClick = document.querySelector('.button');
buttonClick.addEventListener('click', function(event) {
    const windowForm = document.querySelector('.window');
    windowForm.classList.toggle('active');
});
