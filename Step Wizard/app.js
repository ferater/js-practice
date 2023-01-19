const steps = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var activeStep = 1;
window.onload = init();

next.addEventListener('click', () => {
    activeStep++;
    if (activeStep > steps.length) {
        activeStep = steps.length;
    }
    // console.log(activeStep)
    stepUpdate();
})

prev.addEventListener('click', () => {
    activeStep--;
    if (activeStep < 1) {
        activeStep = 1;
    }
    // console.log(activeStep);
    stepUpdate();
})


stepUpdate = () => {
    steps.forEach((step, index) => {
        if (index < activeStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    })
    init();
    const activeSteps = document.querySelectorAll('.active');
    const progresslength = ((activeSteps.length - 1) / (steps.length - 1) * 100 ) + '%';
    progress.style.width = progresslength;
}

function init(){
    if (activeStep == steps.length) {
        next.disabled = true;
    } else if(activeStep == 1){
        prev.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}