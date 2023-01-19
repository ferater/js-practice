const circle = document.querySelector('.sep');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

window.onload = calc();
window.addEventListener('resize', calc);

btn.addEventListener('click', clone);

function clone() {
    const cloneCircle = circle.cloneNode(false);
    container.appendChild(cloneCircle);
    cloneCircle.classList.add('active');
    removeClone();
}

function removeClone() {
    cloneCircle.remove();
}

function calc() {
    const circleTop = circle.getBoundingClientRect().top;
    const circleRight = circle.getBoundingClientRect().right;
    circle.style.setProperty('--el-top', circleTop + 'px');
    circle.style.setProperty('--el-right', circleRight + 'px');
}