// ================= CSS =================
import "../scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";

// ================= JS =================
import * as bootstrap from "bootstrap";
import PureCounter from "@srexi/purecounterjs";

// ================= INIT =================

// ===== PURE COUNTER INIT =====
new PureCounter();

// ===== SKILLS ANIMATION (Intersection Observer) =====
const skillsSection = document.querySelector("#skills");

const animateSkills = () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const value = bar.getAttribute("aria-valuenow");
    bar.style.width = value + "%";
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target); // faqat 1 marta ishlaydi
      }
    });
  },
  {
    threshold: 0.3,
  }
);

if (skillsSection) {
  observer.observe(skillsSection);
}
