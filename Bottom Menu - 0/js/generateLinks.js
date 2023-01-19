import linkItems from '../api/linkItems.json' assert {type: 'json'};

const linkHtml = linkItems.map(link => {
    return `<li class="link"><a href="${link.href}"><span class="icon"><ion-icon name="${link.iconName}"></ion-icon></span><span class="text">${link.linkText}</span></a></li>`
}).join('');

export default linkHtml;