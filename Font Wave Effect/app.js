
const span = document.querySelector('.line');
span.innerHTML = span.innerText
    .split('').map((letter, index) => {
        if (letter == ' ') {
            letter = '&nbsp';
        }
        return `<span style="animation-delay: ${index * 40}ms;">${letter}</span>`;
    })
    .join('');
