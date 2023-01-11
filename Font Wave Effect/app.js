const wave = document.querySelector('.wave');
wave.innerHTML = wave.innerText
    .split('').map((letter, index) => {
        if (letter == ' ') {
            letter = '&nbsp';
        }
        return `<span style="animation-delay: ${index * 30}ms;">${letter}</span>`;
    })
    .join('');

