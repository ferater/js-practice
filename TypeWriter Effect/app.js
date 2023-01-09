const words = ["watermelon", "strawberry", "cherry"];
const span = document.querySelector('.type');
let wait;
let wordIndex = 0;
let isDeleting = false;
let idx = 0;


function type() {
    let word = words[wordIndex];

    if (!isDeleting) {
        span.innerText = word.slice(0, idx);
        idx++;
        wait = 100;
        if (idx >= word.length + 1) {
            wait = 2000;
            isDeleting = true;
        }
    }

    if (isDeleting) {
        idx--;
        span.innerText = word.slice(0, idx);
        if (idx < word.length) {
            wait = 100;
            if (idx < 1) {
                idx = 1;
                wait = 800;
                isDeleting = false;
                wordIndex++;
                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }
            }
        }
    }
    setTimeout(type, wait);
}

type();