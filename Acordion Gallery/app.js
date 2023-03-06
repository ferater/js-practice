const accordion = document.querySelector(".accordion");
const activeFirts = 1;
const personData = [
  {
    name: "Nina WILLIAMS",
    slogan: "Silent Assain",
    story:
      "Nina Williams (ニーナ・ウィリアムズ Nīna Wiriamuzu?) is a cold-blooded Irish assassin that made her first appearance in the original...",
    pic: "./img/nina.jpg",
  },
  {
    name: "Gary LEE",
    slogan: "Product Designer at Figma",
    story:
      "A product designer is responsible for exploring product problems, developing design solutions that solve these problems and implementing ...",
    pic: "./img/jin.png",
  },
  {
    name: "Kazuya MISHIMA",
    slogan: "Pathetic",
    story:
      "The son of worldwide conglomerate Mishima Zaibatsu CEO Heihachi Mishima, Kazuya seeks revenge against his father",
    pic: "./img/kazuya.webp",
  },
  {
    name: "Anna WILLIAMS",
    slogan: "The Sister",
    story:
      "Anna Williams (アンナ・ウィリアムズ An'na Wiriamuzu?) is a character in the Tekken series. She was introduced in the first Tekken game as the younger..",
    pic: "./img/anna.png",
  },
  {
    name: "KING",
    slogan: "Silent Assain",
    story:
      "King (キング Kingu?) is a title that two characters have taken in the Tekken series. Even though there have been two...",
    pic: "./img/king.jpg",
  },
];

const personHtml = personData
  .map((person, index) => {
    return `
    <div class="person  p-rel">
        <div class="pic rounded">
            <img src="${person.pic}" alt="${person.name}" class="avatar" />
            </div>
            <div class="social p-abs rounded">
            <span class="iconify icon-star x-g-center y-g-end"
            data-icon="ic:round-star-rate"
          ></span>
            </div>
        <div class="detail">
            <h3>${person.name}</h3>
            <span class="sub-header">${person.slogan}</span>
            <p>${person.story}</p>
        </div>
    </div>`;
  })
  .join("");

window.onload = accordion.insertAdjacentHTML("afterbegin", personHtml);
const accordions = document.querySelectorAll(".person");

accordions.forEach((item, index) => {
  index == activeFirts ? item.classList.add("active") : null;
  item.addEventListener("click", (e) => {
    removeActive(item);
    item.classList.toggle("active");
  });
});

const removeActive = function (it) {
  accordions.forEach((item) => {
    if (item !== it) {
      item.classList.remove("active");
    }
  });
};
