/* --- NAVIGATION OBSERVER --- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observerOptions = {
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));

      const id = entry.target.getAttribute("id");
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

/* --- SCROLL REVEAL ANIMATION --- */
const scrollObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15,
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-visible");
      observer.unobserve(entry.target);
    }
  });
}, scrollObserverOptions);

const animatedElements = document.querySelectorAll("[data-animate]");
animatedElements.forEach((el) => scrollObserver.observe(el));

/* --- SCROLL INDICATOR --- */
const scrollIndicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollIndicator.classList.add("hide");
  } else {
    scrollIndicator.classList.remove("hide");
  }
});

/* --- LENIS SMOOTH SCROLL --- */
const isMobile = window.innerWidth < 768;

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll("nav a, .btn").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElem = document.querySelector(targetId);

      if (targetElem) {
        if (isMobile) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          document.body.style.overflow = "auto";
        }

        lenis.scrollTo(targetElem, {
          offset: 0,
          immediate: isMobile,
          duration: 1.5,
        });
      }
    }
  });
});

/* --- MOBILE MENU --- */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerIcon = document.querySelector(".hamburger i");

function toggleMenu() {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    document.body.style.overflow = "hidden";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    document.body.style.overflow = "auto";
  }
}

hamburger.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-menu a").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    document.body.style.overflow = "auto";
  }),
);
