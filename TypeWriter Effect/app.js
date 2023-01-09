const words = ["watermelon", "strawberry", "cherry", "patato", "tomato",  "Dead Man's Finger"];
const span = document.querySelector('.type');
let wait;
let wordIndex = 0;
let isDeleting = false;
let idx = 0;


function type() {
    const current = wordIndex % words.length;
    let word = words[current];

    if (!isDeleting) {
        span.innerText = word.slice(0, idx);
        idx++;
        wait = 50;
        if (idx >= word.length + 1) {
            wait = 1000;
            isDeleting = true;
        }
    } else {
        idx--;
        span.innerText = word.slice(0, idx);
        if (idx < word.length) {
            wait = 100;
            if (idx < 1) {
                idx = 1;
                wait = 500;
                isDeleting = false;
                wordIndex++;
            }
        }
    }
    setTimeout(type, wait);
}

type();