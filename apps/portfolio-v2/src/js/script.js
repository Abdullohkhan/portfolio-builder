import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import Typed from "typed.js";
import AOS from "aos";
import { applyLang, getLang, t } from "./i18n.js";

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Language (uz / en / ru)
   */
  applyLang(getLang());
  on("change", "[data-lang-select]", function () {
    applyLang(this.value);
  });

  /**
   * Hero type effect (restarts when the language changes)
   */
  let typedInstance = null;
  const startTyped = () => {
    if (!select(".typed")) return;
    if (typedInstance) typedInstance.destroy();
    typedInstance = new Typed(".typed", {
      strings: t("hero.typed"),
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  };
  startTyped();
  document.addEventListener("langchange", startTyped);

  /**
   * Dark / light theme
   */
  const themeBtn = select("[data-theme-toggle]");
  const setThemeIcon = () => {
    const dark = document.documentElement.getAttribute("data-bs-theme") === "dark";
    themeBtn.innerHTML = dark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  };
  if (themeBtn) {
    setThemeIcon();
    themeBtn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-bs-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked */ }
      setThemeIcon();
    });
  }

  /**
   * Demo links and toast
   */
  const toast = select("[data-toast]");
  let toastTimer;
  window.showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("active");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("active"), 3000);
  };
  on("click", "[data-demo]", function (e) {
    e.preventDefault();
    window.showToast(t("ui.demo"));
  }, true);

  const year = select("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    modules: [Autoplay, Pagination],
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

// ================= CONTACT FORM =================
// Messages go to a Telegram bot when VITE_BOT_TOKEN and VITE_GROUP_TOKEN are set
// (see .env.example); otherwise the form runs in demo mode.

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    contactForm.classList.add("was-validated");
    if (!contactForm.checkValidity()) return;

    const botToken = import.meta.env.VITE_BOT_TOKEN;
    const groupToken = import.meta.env.VITE_GROUP_TOKEN;
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    submitBtn.textContent = t("form.sending");

    let message = t("form.demo");

    if (botToken && groupToken) {
      const text = [
        "New message",
        `From: ${contactForm.fullName.value}`,
        `Email: ${contactForm.email.value}`,
        `Contact: ${contactForm.phoneNumber.value}`,
        `Message: ${contactForm.message.value}`,
      ].join("\n");

      try {
        const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: groupToken, text }),
        });
        message = res.ok ? t("form.sent") : t("form.error");
      } catch (err) {
        message = t("form.error");
      }
    }

    window.showToast(message);
    contactForm.reset();
    contactForm.classList.remove("was-validated");
    submitBtn.disabled = false;
    submitBtn.textContent = t("form.submit");
  });
}
