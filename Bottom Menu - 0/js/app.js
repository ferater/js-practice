import linkHtml from './generateLinks.js';

const nav = document.querySelector('.nav ul');
nav.insertAdjacentHTML('afterbegin', linkHtml);

const links = document.querySelectorAll('.link');
const sep = document.querySelector('.sep');
const sepWidth = sep.getBoundingClientRect().width;

const a = links.forEach(link => {
    link.addEventListener('click', () => {
        activateLink(link)
    })
})

const activateLink = (link) => {
    links.forEach((item, index) => {
        if (item != link) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
            sep.style.transform = `translateX(${sepWidth * (index)}px)`;
        }
    })
}