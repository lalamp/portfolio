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

/* --- INTERNATIONALIZATION (I18N) --- */
const translations = {
  pt: {
    "nav.home": "Home",
    "nav.tech": "Tecnologias",
    "nav.exp": "Experiência",
    "nav.contact": "Contato",
    "home.hello": "Olá, sou",
    "home.p1":
      "Desenvolvedora Full Stack, formada em Ciência da Computação pela Universidade de São Paulo (USP).",
    "home.p2":
      "Atualmente, transito entre a criatividade do Frontend e a lógica robusta do Backend. Meu objetivo é criar aplicações performáticas, escaláveis e com excelente experiência de usuário.",
    "home.scroll": "Arraste para mais",
    "tech.title": "Tecnologias",
    "tech.desc":
      "Linguagens e ferramentas com as quais tenho experiência e conhecimento técnico para desenvolver soluções. <br /> Explore meu GitHub para visualizar meus projetos.",
    "tech.data": "Dados & Tools",
    "exp.title": "Experiência",
    "exp.desc":
      "Uma visão geral da minha jornada profissional e das habilidades que adquiri ao longo do caminho.",
    "exp.resume": "Currículo",
    "exp.date1": "Dez 2023 - Mar 2024",
    "exp.job1": "Intercâmbio",
    "exp.company1": "Experiência Internacional - Stowe, EUA",
    "exp.desc1":
      "Experiência de trabalho nos EUA, aprimorando a proficiência no inglês, a habilidade de relacionamento com clientes e a adaptação cultural.",
    "exp.badge1": "Inglês Avançado",
    "exp.badge2": "Comunicação",
    "exp.date2": "Out 2024 - Jan 2026",
    "exp.job2": "Estágio em Desenvolvimento de Software",
    "exp.desc2":
      "Desenvolvimento de soluções ERP para o varejo, atuando no Frontend e Backend, desde a criação de novas funcionalidades até a manutenção e otimização do sistema.",
    "exp.date3": "Jan 2026 - Presente",
    "exp.job3": "Desenvolvedora de Software Júnior",
    "exp.desc3":
      "Desenvolvimento full-stack de sistemas de gestão voltados para o varejo.",
    "contact.title": "Vamos conversar?",
    "contact.desc": "Aberta a novos projetos e conexões.",
    "contact.phone": "Telefone",
    "footer.rights": "Todos os direitos reservados.",
  },
  en: {
    "nav.home": "Home",
    "nav.tech": "Tech",
    "nav.exp": "Experience",
    "nav.contact": "Contact",
    "home.hello": "Hi, I'm",
    "home.p1":
      "Full Stack Developer, graduated in Computer Science from the University of São Paulo (USP).",
    "home.p2":
      "Currently, I navigate between the creativity of the Frontend and the robust logic of the Backend. My goal is to create high-performance, scalable applications with an excellent user experience.",
    "home.scroll": "Scroll for more",
    "tech.title": "Technologies",
    "tech.desc":
      "Languages and tools I have experience and technical knowledge to build solutions. <br /> Explore my GitHub to see my projects.",
    "tech.data": "Data & Tools",
    "exp.title": "Experience",
    "exp.desc":
      "An overview of my professional journey and the skills I've acquired along the way.",
    "exp.resume": "Resume",
    "exp.date1": "Dec 2023 - Mar 2024",
    "exp.job1": "Exchange Program",
    "exp.company1": "International Experience - Stowe, USA",
    "exp.desc1":
      "Work experience in the USA, improving English proficiency, customer relationship skills, and cultural adaptation.",
    "exp.badge1": "Advanced English",
    "exp.badge2": "Communication",
    "exp.date2": "Oct 2024 - Jan 2026",
    "exp.job2": "Software Development Intern",
    "exp.desc2":
      "Development of ERP solutions for retail, working on Frontend and Backend, from creating new features to system maintenance and optimization.",
    "exp.date3": "Jan 2026 - Present",
    "exp.job3": "Junior Software Developer",
    "exp.desc3":
      "Full-stack development of management systems aimed at retail.",
    "contact.title": "Let's talk?",
    "contact.desc": "Open to new projects and connections.",
    "contact.phone": "Phone",
    "footer.rights": "All rights reserved.",
  },
  es: {
    "nav.home": "Home",
    "nav.tech": "Tecnologías",
    "nav.exp": "Experiencia",
    "nav.contact": "Contacto",
    "home.hello": "Hola, soy",
    "home.p1":
      "Desarrolladora Full Stack, graduada en Ciencias de la Computación por la Universidad de São Paulo (USP).",
    "home.p2":
      "Actualmente, transito entre la creatividad del Frontend y la lógica robusta del Backend. Mi objetivo es crear aplicaciones de alto rendimiento, escalables y con excelente experiencia de usuario.",
    "home.scroll": "Desliza para más",
    "tech.title": "Tecnologías",
    "tech.desc":
      "Lenguajes y herramientas con las que tengo experiencia y conocimiento técnico para desarrollar soluciones. <br /> Explora mi GitHub para ver mis proyectos.",
    "tech.data": "Datos & Tools",
    "exp.title": "Experiencia",
    "exp.desc":
      "Una visión general de mi trayectoria profesional y las habilidades que adquirí en el camino.",
    "exp.resume": "Currículum",
    "exp.date1": "Dic 2023 - Mar 2024",
    "exp.job1": "Intercambio",
    "exp.company1": "Experiencia Internacional - Stowe, EE. UU.",
    "exp.desc1":
      "Experiencia laboral en EE. UU., mejorando el dominio del inglés, habilidades de relación con clientes y adaptación cultural.",
    "exp.badge1": "Inglés Avanzado",
    "exp.badge2": "Comunicación",
    "exp.date2": "Oct 2024 - Ene 2026",
    "exp.job2": "Pasante de Desarrollo de Software",
    "exp.desc2":
      "Desarrollo de soluciones ERP para el comercio minorista, actuando en Frontend y Backend, desde la creación de nuevas funcionalidades hasta el mantenimiento y optimización del sistema.",
    "exp.date3": "Ene 2026 - Presente",
    "exp.job3": "Desarrolladora de Software Junior",
    "exp.desc3":
      "Desarrollo full-stack de sistemas de gestión orientados al comercio minorista.",
    "contact.title": "¿Hablamos?",
    "contact.desc": "Abierta a nuevos proyectos y conexiones.",
    "contact.phone": "Teléfono",
    "footer.rights": "Todos los derechos reservados.",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");
const textElements = document.querySelectorAll("[data-i18n]");

function updateLanguage(lang) {
  textElements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  langButtons.forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    updateLanguage(lang);
  });
});
