class typeWriter {
    constructor(area, words, wordIndex, typingDelay, erasingDelay, newWordDelay) {
        this.area = area;
        this.words = words;
        this.wordIndex = wordIndex;
        this.typingDelay = typingDelay;
        this.erasingDelay = erasingDelay;
        this.newWordDelay = newWordDelay;
        this.isDeleting = false;
        this.word = '';
        this.delay;
    }

    type() {
        const currentIndex = this.wordIndex % this.words.length;
        const currentWord = this.words[currentIndex];
        if (!this.isDeleting && this.word.length <= currentWord.length) {
            this.delay = this.typingDelay;
            this.word += currentWord.slice(this.word.length, this.word.length + 1);
            if (this.word === currentWord) {
                this.delay = this.newWordDelay;
                this.isDeleting = true;
            }
        } else {
            if (this.word.length > 0) {
                this.delay = this.erasingDelay;
                this.word = this.word.slice(0, this.word.length - 1)
            }
            else {
                this.delay = 700;
                this.isDeleting = false
                this.wordIndex++
            }
        }
        this.area.innerHTML = this.word;
        setTimeout(() => {
            this.type();
        }, this.delay);
    }
}



const words = ["eddy gordo", "zafina", "king", "armor king", "hwoarang"];
const typeArea = document.querySelector('.type-area');
const typingDelay = 150;
const erasingDelay = 100;
const newWordDelay = 2000;
const wordIndex = 0;

const tw = new typeWriter(typeArea, words, wordIndex, typingDelay, erasingDelay, newWordDelay);
window.onload = tw.type();














// const span = document.querySelector('.type');
// let wait;
// let wordIndex = 0;
// let isDeleting = false;
// let idx = 0;

// window.onload = type();

// function type() {
//     const current = wordIndex % words.length;
//     let word = words[current];

//     if (!isDeleting) {
//         span.innerText = word.slice(0, idx);
//         idx++;
//         wait = 50;
//         if (idx >= word.length + 1) {
//             wait = 1000;
//             isDeleting = true;
//         }
//     } else {
//         idx--;
//         span.innerText = word.slice(0, idx);
//         if (idx < word.length) {
//             wait = 100;
//             if (idx < 1) {
//                 idx = 1;
//                 wait = 500;
//                 isDeleting = false;
//                 wordIndex++;
//             }
//         }
//     }
//     setTimeout(type, wait);
// }