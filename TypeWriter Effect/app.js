class typeWriter {
    constructor(card, area, chars, charIndex, delay) {
        this.card = card;
        this.area = area;
        this.chars = chars;
        this.charIndex = charIndex;
        this.efectDelay = delay;
        this.isDeleting = false;
        this.word = '';
        this.delay;
    }

    type() {
        const currentIndex = this.charIndex % this.chars.length;
        const currentWord = this.chars[currentIndex].name;
        this.card.style.backgroundImage = `url('${this.chars[currentIndex].img}')`
        if (!this.isDeleting) {
            this.delay = this.efectDelay.typingDelay;
            this.word += currentWord.slice(this.word.length, this.word.length + 1);
            if (this.word === currentWord) {
                this.delay = this.efectDelay.newWordDelay;
                this.isDeleting = true;
            }
        } else {
            if (this.word.length > 0) {
                this.delay = this.efectDelay.erasingDelay;
                this.word = this.word.slice(0, this.word.length - 1)
            }
            else {
                this.delay = 500;
                this.isDeleting = false
                this.charIndex++
            }
        }
        this.area.innerHTML = this.word;
        setTimeout(() => {
            this.type();
        }, this.delay);
    }
}



const chars = [
    { name: 'eddy gordo', img: './img/eddy.webp' },
    { name: 'jin kazama', img: './img/jin.webp' },
    { name: 'kazuya mishima', img: './img/kazuya.webp' },
];
const card = document.querySelector('.card');
const typeArea = card.querySelector('.type-area');
const delay = {
    typingDelay: 150,
    erasingDelay: 50,
    newWordDelay: 2500,
}
const charIndex = 0;

const tw = new typeWriter(card, typeArea, chars, charIndex, delay);
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