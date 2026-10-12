'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    try { localStorage.setItem("theme", "light_theme"); } catch (e) { /* storage blocked */ }
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    try { localStorage.setItem("theme", "dark_theme"); } catch (e) { /* storage blocked */ }
  }

});

/**
 * check & apply last time selected theme (or the system preference)
 */

let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (e) { /* storage blocked */ }

const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

if (savedTheme === "light_theme" || (!savedTheme && prefersLight)) {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}



/**
 * language (uz / en / ru)
 */

const langSelect = document.querySelector("[data-lang-select]");

applyLang(getLang());

langSelect.addEventListener("change", function () { applyLang(this.value); });



/**
 * toast for demo links, buttons and the contact form
 */

const toast = document.querySelector("[data-toast]");
let toastTimer;

const showToast = function (message) {
  toast.textContent = message;
  toast.classList.add("active");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { toast.classList.remove("active"); }, 3000);
}

document.querySelectorAll("[data-demo]").forEach(function (el) {
  el.addEventListener("click", function (event) {
    event.preventDefault();
    showToast(t("demo"));
  });
});

const contactForm = document.querySelector("[data-contact-form]");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  contactForm.reset();
  showToast(t("sent"));
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
