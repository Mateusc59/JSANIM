"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// The code on top is a refactor of the code of the bottom
//for (let i = 0; i < btnsOpenModal.length; i++)
//btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////
//Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section-1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//Creating and inserting elements
// .insertAdjacentHTML <-- add section on html with JS

const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent =
  " we use cookied for improved functionnality and qnqlytics";
message.innerHTML = `we use cookied for improved functionnality and qnqlytics <button class="btn btn--close-cookie">Got it!</button>`;
// prepend add the element at the first child of element
header.prepend(message);
// append add the element at the last child
// header.append(message);
// header.append(message.cloneNode(true));
//header.before(message);
//header.after(message);

//delete elements
const bttn = document.querySelector(".btn--close-cookie");
addEventListener("click", function () {
  message.remove();
});

//styles
message.style.backgroundColor = "skyblue";
message.style.width = "120%";
message.style.color = "white";
bttn.style.color = "white";
bttn.style.backgroundColor = "grey";

console.log(message.style.height);
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "purple");

//Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "beautiful minimalist logo";

//Non-standards don't work
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Banklist");
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c"); //not includes

//Don't use
logo.className = "jonas";

///////////////
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (event) {
  const S1coords = section1.getBoundingClientRect();
  console.log(S1coords);

  console.log(event.target.getBoundingClientRect());

  console.log("current scroll (X/Y)", window.pageXOffset, pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  /*  window.scrollTo(
    S1coords.left + window.pageXOffset,
    S1coords.top + window.pageYOffset
  ); */

  window.scrollTo({
    left: S1coords,
  });
});
