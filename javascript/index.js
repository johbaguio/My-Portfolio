
const arrowDown = document.querySelectorAll('.arrow-down');
const arrowUp = document.querySelectorAll('.arrow-up');
const details = document.querySelectorAll('.details');



function showAboutDetails(i) {
    details[i].classList.remove('hide');
    details[i].classList.add('animated', 'fadeIn', 'slow');
    details[i].classList.remove('fadeOut', 'fast');
    arrowUp[i].classList.remove('hide');
    arrowDown[i].classList.add('hide');
}

function hideAboutDetails(i) {
    details[i].classList.remove('fadeIn');
    details[i].classList.add('fadeOut', 'fast', 'hide');
    arrowUp[i].classList.add('hide');
    arrowDown[i].classList.remove('hide');
}