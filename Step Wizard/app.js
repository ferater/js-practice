const steps = document.querySelectorAll('.circle');
// console.log(steps);
const prev = document.querySelector('.prev');
// console.log(prev);
const next = document.querySelector('.next');
// console.log(next);

var activeStep = 1;


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
        if (steps.length == activeStep) {
            next.disabled = true;
            prev.disabled = false;
        } else if(activeStep <= 1) {
            next.disabled = false;
        }
    })
}