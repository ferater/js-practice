import {firstActive, data} from "./data.js";
class accordion {
  constructor(accordionsParent, firstActive, data) {
    this.accordionsParent = accordionsParent;
    this.firstActive = firstActive;
    this.data = data;
    this.html = "";
  }

  init() {
    this.accordionsParent.insertAdjacentHTML("afterbegin", this.htmlMap());
    let accArray = this.accordionsParent.querySelectorAll(".person");
    accArray.forEach((item, index, arr) => {
      index == this.firstActive ? item.classList.add("active") : null;
      item.addEventListener("click", (e) => {
        this.removeActive(accArray, item);
        item.classList.toggle("active");
      });
    });
  }

  removeActive = function (arr, obj) {
    arr.forEach((item) => {
      if (item !== obj) {
        item.classList.remove("active");
      }
    });
  };

  htmlMap() {
    return (this.html = this.data
      .map((accordion) => {
        return `
      <div class="person">
      <div class="pic rounded p-rel">
      <img src="${accordion.pic}" alt="${accordion.name}" class="avatar" />
          <div class="social p-abs rounded d-grid">
          <span class="iconify icon-social x-g-center y-g-center"
          data-icon="${accordion.social}"
        ></span>
          </div>
          </div>
          <div class="detail">
          <h3>${accordion.name}</h3>
          <span class="sub-header">${accordion.slogan}</span>
          <p>${accordion.story}</p>
          </div>
          </div>`;
      })
      .join(""));
  }
}

const accordionsParent = document.querySelector(".accordion");

const app = new accordion(accordionsParent, firstActive, data);
window.onload = app.init();
