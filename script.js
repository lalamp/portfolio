/**
 * ==========================================================================
 * PORTFÓLIO LARISSA M. PEREIRA — SCRIPT DEFINITIVO
 * Experiência estruturada em tópicos fiéis ao Currículo Oficial (PT e EN).
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. LENIS SMOOTH SCROLL --- */
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* --- 2. SCROLL REVEAL (ANIMAÇÃO SUAVE AO ROLAR) --- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));


  /* --- 3. DICIONÁRIO DE INTERNACIONALIZAÇÃO (i18n) COM TÓPICOS DO CV --- */
  const translations = {
    pt: {
      "nav.home": "Home",
      "nav.edu": "Educação",
      "nav.tech": "Tecnologias",
      "nav.exp": "Profissional",
      "nav.projects": "Projetos",
      "nav.contact": "Contato",

      "hero.greeting": "Olá, sou",
      "hero.bio": "Desenvolvedora de software full stack com experiência profissional no desenvolvimento de aplicações web e mobile, utilizando diferentes linguagens e tecnologias. Atuo na construção de soluções de alta performance, com foco na experiência do usuário e abrangendo todo o ciclo de desenvolvimento, desde a criação de interfaces até a entrega das aplicações em produção.",
      "hero.credentials": "Formada em Ciência da Computação pela Universidade de São Paulo (USP), sou fluente em inglês e sigo aprimorando meu espanhol.",
      "hero.resume": "Currículo (PDF)",
      "hero.contact": "Contato",

      "edu.title": "Educação",
      "edu.desc": "Base acadêmica e proficiência em idiomas:",
      "edu.degree": "Bacharelado em Ciência da Computação",
      "edu.inst": "Universidade de São Paulo (USP) • FFCLRP • Ribeirão Preto, Brasil",
      "edu.period": "2022 - 2025",
      "edu.lang.title": "Idiomas",
      "edu.lang.pt": "Português (Nativo)",
      "edu.lang.en": "Inglês (Avançado • C1)",
      "edu.lang.es": "Espanhol (Iniciante)",

      "tech.title": "Tecnologias",
      "tech.desc": "Linguagens, frameworks e ferramentas que utilizo no desenvolvimento de software:",
      "tech.cat1": "Linguagens e Frameworks",
      "tech.cat2": "Dados e tools",

      "projects.title": "Projetos",
      "projects.desc": "Alguns dos meus projetos pessoais:",
      "projects.p1.title": "Saturnus",
      "projects.p1.desc": "Sistema integrado de gestão e análise financeira empresarial, que permite controlar o balanço patrimonial e DRE. Oferece gerenciamento de demonstrativos, análise de indicadores financeiros e visualização de dados por meio de gráficos. Possibilita ainda o agrupamento de empresas em grupos econômicos e a consolidação de informações, com conciliação e contabilização de transferências intercompany.",
      
      "projects.p2.siteBadge": "Este site",
      "projects.p2.title": "Portfólio Web Pessoal",
      "projects.p2.desc": "Portfólio web desenvolvido para apresentar minha formação acadêmica, trajetória profissional e projetos práticos.",

      "exp.title": "Experiência Profissional",
      "exp.desc": "Trajetória profissional:",
      "exp.showMore": "Ver detalhes",
      "exp.showLess": "Recolher detalhes",

      // Experiência 1
      "exp.job1.period": "fev 2026 — Presente",
      "exp.job1.role": "Desenvolvedora de Software Júnior",
      "exp.job1.company": "Hipcom ERP • São Paulo, Brasil (remoto)",
      "exp.job1.b1": "Desenvolvi uma biblioteca interna de componentes em Flutter para padronizar o desenvolvimento frontend e reduzir retrabalho entre diferentes aplicações da empresa, abrangendo desde componentes básicos, como formulários e datagrids CRUD, até interfaces complexas no modelo mestre-detalhe.",
      "exp.job1.b2": "Desenvolvo um sistema web de controle de produção para clientes do varejo utilizando React, Go e MySQL, contemplando o gerenciamento de fluxos de receitas, preparação, embalagem, transferências de estoque e controle de inventário.",
      "exp.job1.b3": "Mantenho e evoluo aplicações mobile (Android/iOS) desenvolvidas com Flutter e Go, além de um sistema ERP de varejo para web desenvolvido com React e Go, incluindo atendimento a chamados de suporte, correção de bugs e implementação de novas funcionalidades.",
      "exp.job1.b4": "Gerencio pipelines de CI/CD e processos de deploy em diferentes ambientes, utilizando CircleCI, Codemagic, Firebase, Nomad, Apple App Store e Google Play Store.",
      "exp.job1.b5": "Integro ferramentas de inteligência artificial ao fluxo diário de desenvolvimento para acelerar a geração de código, auxiliar em atividades de debugging e refatoração e aumentar a eficiência do processo de desenvolvimento.",

      // Experiência 2
      "exp.job2.period": "out 2024 — jan 2026",
      "exp.job2.role": "Estagiária em Desenvolvimento de Software",
      "exp.job2.company": "Hipcom ERP • São Paulo, Brasil (remoto)",
      "exp.job2.b1": "Desenvolvi aplicações full stack web e mobile utilizando Flutter, Dart, Go e MySQL.",
      "exp.job2.b2": "Desenvolvi e otimizei APIs, além de atuar na migração e refatoração de serviços backend de Java para Go.",
      "exp.job2.b3": "Desenvolvi módulos essenciais de um sistema ERP para o varejo, incluindo gestão de estoque, processamento de pedidos, funcionalidades fiscais, tabelas dinâmicas de preços e gerenciamento de usuários.",
      "exp.job2.b4": "Desenvolvi um painel interno de suporte para gerenciamento de clientes da empresa e administração de suas integrações, APIs e ambientes em nuvem.",

      // Experiência 3
      "exp.job3.period": "dez 2023 — mar 2024",
      "exp.job3.role": "Retail Assistant - Work and Travel",
      "exp.job3.company": "Vail Resorts • Stowe, Vermont - Estados Unidos",
      "exp.job3.b1": "Participei de programa de intercâmbio cultural e profissional em Stowe, Vermont, EUA.",
      "exp.job3.b2": "Desenvolvi habilidades avançadas de comunicação em inglês (nível C1), além de relacionamento com clientes e adaptabilidade cultural.",
      "exp.job3.badge1": "Inglês (Avançado)",
      "exp.job3.badge2": "Relacionamento com Clientes",
      "exp.job3.badge3": "Comunicação",

      // Experiência 4
      "exp.job4.period": "jan 2023 — dez 2023",
      "exp.job4.role": "Membro da Equipe de Marketing (Empresa Júnior USP)",
      "exp.job4.company": "Voll Jr • Ribeirão Preto, Brasil",
      "exp.job4.b1": "Criei e gerenciei conteúdo digital para os perfis oficiais da empresa no Instagram e LinkedIn.",
      "exp.job4.b2": "Analisei métricas de engajamento e estatísticas de redes sociais para otimizar o alcance de marketing.",
      "exp.job4.b3": "Implementei estratégias de marketing com foco na prospecção passiva de novos clientes.",
      "exp.job4.badge1": "Marketing",
      "exp.job4.badge2": "Análise de Redes Sociais",
      "exp.job4.badge3": "Comunicação",

      "contact.title": "Contato",
      "contact.desc": "Sinta-se à vontade para me enviar uma mensagem ou conectar-se através das redes:",
      "contact.phone": "Telefone / WhatsApp",

      "footer.rights": "Todos os direitos reservados."
    },

    en: {
      "nav.home": "Home",
      "nav.edu": "Education",
      "nav.tech": "Technologies",
      "nav.exp": "Experience",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      "hero.greeting": "Hi, I'm",
      "hero.bio": "Full-stack software developer with professional experience developing web and mobile applications using different programming languages and technologies. I focus on building high-performance solutions centered on user experience, covering the complete development lifecycle, from interface design to delivering applications into production.",
      "hero.credentials": "Graduated in Computer Science from the University of São Paulo (USP), fluent in English, and continually improving my Spanish.",
      "hero.resume": "Resume (PDF)",
      "hero.contact": "Get in touch",

      "edu.title": "Education",
      "edu.desc": "Academic foundation and language proficiency:",
      "edu.degree": "Bachelor in Computer Science",
      "edu.inst": "University of São Paulo (USP) • FFCLRP • Ribeirão Preto, Brazil",
      "edu.period": "2022 - 2025",
      "edu.lang.title": "Languages",
      "edu.lang.pt": "Portuguese (Native)",
      "edu.lang.en": "English (Advanced • C1)",
      "edu.lang.es": "Spanish (Beginner)",

      "tech.title": "Technologies",
      "tech.desc": "Languages, frameworks, and tools I use in software development:",
      "tech.cat1": "Languages & Frameworks",
      "tech.cat2": "Data & Tools",

      "projects.title": "Projects",
      "projects.desc": "Some of my personal projects:",
      "projects.p1.title": "Saturnus",
      "projects.p1.desc": "Integrated corporate financial management and analysis system to control balance sheets and income statements. Features statement management, financial indicator analysis, and chart visualization. Enables grouping companies into economic groups and consolidating data with intercompany transfer reconciliation and accounting.",

      "projects.p2.siteBadge": "This website",
      "projects.p2.title": "Personal Web Portfolio",
      "projects.p2.desc": "Web portfolio developed to present my academic education, professional trajectory, and hands-on projects.",

      "exp.title": "Work Experience",
      "exp.desc": "Professional trajectory:",
      "exp.showMore": "View details",
      "exp.showLess": "Hide details",

      // Experience 1 (verbatim from CV)
      "exp.job1.period": "Feb 2026 — Present",
      "exp.job1.role": "Junior Software Developer",
      "exp.job1.company": "Hipcom ERP • São Paulo, Brazil (Remote)",
      "exp.job1.b1": "Developed an internal Flutter component library to standardize frontend development and reduce duplicated work across the company's applications, covering everything from basic components, such as forms and CRUD data grids, to complex master-detail interfaces.",
      "exp.job1.b2": "Develop a web-based production management system for retail clients using React, Go, and MySQL, covering workflows for recipes, preparation, packaging, stock transfers, and inventory management.",
      "exp.job1.b3": "Maintain and enhance mobile applications (Android/iOS) built with Flutter and Go, as well as a web-based retail ERP system developed with React and Go, including handling support requests, fixing bugs, and implementing new features.",
      "exp.job1.b4": "Manage CI/CD pipelines and deployment processes across different environments using CircleCI, Codemagic, Firebase, Nomad, Apple App Store, and Google Play Store.",
      "exp.job1.b5": "Integrate AI tools into the daily development workflow to accelerate code generation, assist with debugging and refactoring, and improve overall development efficiency.",

      // Experience 2 (verbatim from CV)
      "exp.job2.period": "Oct 2024 — Jan 2026",
      "exp.job2.role": "Software Development Intern",
      "exp.job2.company": "Hipcom ERP • São Paulo, Brazil (Remote)",
      "exp.job2.b1": "Developed full-stack web and mobile applications using Flutter, Dart, Go, and MySQL.",
      "exp.job2.b2": "Developed and optimized APIs, as well as migrated and refactored backend services from Java to Go.",
      "exp.job2.b3": "Developed key modules for a retail ERP system, including inventory management, order processing, tax-related features, dynamic pricing tables, and user management.",
      "exp.job2.b4": "Developed an internal support system for managing company clients and overseeing their integrations, APIs, and cloud environments.",

      // Experience 3 (verbatim from CV)
      "exp.job3.period": "Dec 2023 — Mar 2024",
      "exp.job3.role": "Retail Assistant - Work and Travel",
      "exp.job3.company": "Vail Resorts • Stowe, Vermont - United States",
      "exp.job3.b1": "Participated in a cultural and professional exchange program in Stowe, Vermont, USA.",
      "exp.job3.b2": "Developed advanced English communication skills, along with customer relationship abilities and cultural adaptability.",
      "exp.job3.badge1": "English (Advanced)",
      "exp.job3.badge2": "Customer Relations",
      "exp.job3.badge3": "Communication",

      // Experience 4 (verbatim from CV)
      "exp.job4.period": "Jan 2023 — Dec 2023",
      "exp.job4.role": "Marketing Team Member (University Junior Enterprise)",
      "exp.job4.company": "Voll Jr • Ribeirão Preto, Brazil",
      "exp.job4.b1": "Created and managed digital content for the company's official Instagram and LinkedIn profiles.",
      "exp.job4.b2": "Analyzed social media engagement metrics and statistics to optimize marketing reach.",
      "exp.job4.b3": "Implemented marketing strategies focusing on the passive prospecting of new clients.",
      "exp.job4.badge1": "Marketing",
      "exp.job4.badge2": "Social Media Analytics",
      "exp.job4.badge3": "Communication",

      "contact.title": "Contact",
      "contact.desc": "Feel free to reach out or connect on social media:",
      "contact.phone": "Phone / WhatsApp",

      "footer.rights": "All rights reserved."
    },

    es: {
      "nav.home": "Home",
      "nav.edu": "Educación",
      "nav.tech": "Tecnologías",
      "nav.exp": "Profesional",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",

      "hero.greeting": "Hola, soy",
      "hero.bio": "Desarrolladora de software full stack con experiencia profesional en el desarrollo de aplicaciones web y móviles, utilizando diversos lenguajes y tecnologías. Me enfoco en la construcción de soluciones de alto rendimiento centradas en la experiencia del usuario, abarcando todo el ciclo de desarrollo, desde la creación de interfaces hasta el despliegue de las aplicaciones en producción.",
      "hero.credentials": "Graduada en Ciencias de la Computación por la Universidad de São Paulo (USP), con inglés fluido y sigo mejorando mi español.",
      "hero.resume": "Currículum (PDF)",
      "hero.contact": "Contacto",

      "edu.title": "Educación",
      "edu.desc": "Base académica y competencia lingüística:",
      "edu.degree": "Licenciatura en Ciencias de la Computación",
      "edu.inst": "Universidad de São Paulo (USP) • FFCLRP • Ribeirão Preto, Brasil",
      "edu.period": "2022 - 2025",
      "edu.lang.title": "Idiomas",
      "edu.lang.pt": "Portugués (Nativo)",
      "edu.lang.en": "Inglés (Avanzado • C1)",
      "edu.lang.es": "Español (Iniciante)",

      "tech.title": "Tecnologías",
      "tech.desc": "Lenguajes, frameworks y herramientas con las que trabajo:",
      "tech.cat1": "Lenguajes y Frameworks",
      "tech.cat2": "Datos y Tools",

      "projects.title": "Proyectos",
      "projects.desc": "Algunos de mis proyectos personales:",
      "projects.p1.title": "Saturnus",
      "projects.p1.desc": "Sistema integrado de gestión y análisis financiero empresarial para el control de balance patrimonial y estado de resultados. Ofrece gestión de estados contables, análisis de indicadores y gráficos interactivos, agrupamiento de empresas en grupos económicos y consolidación de datos con conciliación y contabilización de transferencias intercompany.",

      "projects.p2.siteBadge": "Este sitio",
      "projects.p2.title": "Portafolio Web Personal",
      "projects.p2.desc": "Portafolio web desarrollado para presentar mi formación académica, trayectoria profesional y proyectos prácticos.",

      "exp.title": "Experiencia Profesional",
      "exp.desc": "Trayectoria profesional:",
      "exp.showMore": "Ver detalles",
      "exp.showLess": "Ocultar detalles",

      // Experiencia 1
      "exp.job1.period": "feb 2026 — Presente",
      "exp.job1.role": "Desarrolladora de Software Junior",
      "exp.job1.company": "Hipcom ERP • São Paulo, Brasil (remoto)",
      "exp.job1.b1": "Desarrollé una librería interna de componentes en Flutter para estandarizar el desarrollo frontend y reducir el retrabajo entre diferentes aplicaciones de la empresa, abarcando desde componentes básicos, como formularios y datagrids CRUD, hasta interfaces complejas en el modelo maestro-detalle.",
      "exp.job1.b2": "Desarrollo un sistema web de control de producción para clientes de retail utilizando React, Go y MySQL, que contempla la gestión de flujos de recetas, preparación, empaque, transferencias de stock y control de inventario.",
      "exp.job1.b3": "Mantengo y evoluciono aplicaciones móviles (Android/iOS) desarrolladas con Flutter y Go, además de un sistema ERP de retail para web desarrollado con React y Go, incluyendo atención a tickets de soporte, corrección de bugs e implementación de nuevas funcionalidades.",
      "exp.job1.b4": "Gestiono pipelines de CI/CD y procesos de despliegue en diferentes entornos, utilizando CircleCI, Codemagic, Firebase, Nomad, Apple App Store y Google Play Store.",
      "exp.job1.b5": "Integro herramientas de inteligencia artificial en el flujo diario de desarrollo para acelerar la generación de código, asistir en actividades de depuración y refactorización y aumentar la eficiencia del proceso de desarrollo.",

      // Experiencia 2
      "exp.job2.period": "oct 2024 — ene 2026",
      "exp.job2.role": "Practicante en Desarrollo de Software",
      "exp.job2.company": "Hipcom ERP • São Paulo, Brasil (remoto)",
      "exp.job2.b1": "Desarrollé aplicaciones full stack web y móviles utilizando Flutter, Dart, Go y MySQL.",
      "exp.job2.b2": "Desarrollé y optimicé APIs, así como migré y refactoricé servicios backend de Java a Go.",
      "exp.job2.b3": "Desarrollé módulos esenciales de un sistema ERP para retail, incluyendo gestión de inventario, procesamiento de pedidos, funcionalidades fiscales, tablas dinámicas de precios y administración de usuarios.",
      "exp.job2.b4": "Desarrollé un panel interno de soporte para la gestión de clientes de la empresa y la administración de sus integraciones, APIs y entornos en la nube.",

      // Experiencia 3
      "exp.job3.period": "dic 2023 — mar 2024",
      "exp.job3.role": "Retail Assistant - Work and Travel",
      "exp.job3.company": "Vail Resorts • Stowe, Vermont - Estados Unidos",
      "exp.job3.b1": "Participé en un programa de intercambio cultural y profesional en Stowe, Vermont, EE. UU.",
      "exp.job3.b2": "Desarrollé habilidades avanzadas de comunicación en inglés (nivel C1), relaciones con clientes y adaptabilidad cultural.",
      "exp.job3.badge1": "Inglés (Avanzado)",
      "exp.job3.badge2": "Relaciones con Clientes",
      "exp.job3.badge3": "Comunicación",

      // Experiencia 4
      "exp.job4.period": "ene 2023 — dic 2023",
      "exp.job4.role": "Miembro del Equipo de Marketing (Empresa Junior USP)",
      "exp.job4.company": "Voll Jr • Ribeirão Preto, Brasil",
      "exp.job4.b1": "Creé y gestioné contenido digital para los perfiles oficiales de la empresa en Instagram y LinkedIn.",
      "exp.job4.b2": "Analicé métricas de interacción y estadísticas de redes sociales para optimizar el alcance de marketing.",
      "exp.job4.b3": "Implementé estrategias de marketing con enfoque en la prospección pasiva de nuevos clientes.",
      "exp.job4.badge1": "Marketing",
      "exp.job4.badge2": "Analítica de Redes Sociales",
      "exp.job4.badge3": "Comunicación",

      "contact.title": "Contacto",
      "contact.desc": "Puedes enviarme un mensaje o conectar a través de mis redes:",
      "contact.phone": "Teléfono / WhatsApp",

      "footer.rights": "Todos los derechos reservados."
    }
  };

  /* --- 4. SISTEMA DE TROCA DE IDIOMAS --- */
  const langButtons = document.querySelectorAll('.lang-btn');
  const translatableElements = document.querySelectorAll('[data-i18n]');
  let currentLang = localStorage.getItem('portfolio_lang') || 'pt';

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Atualiza texto dos botões de expansão de experiência
    document.querySelectorAll('.experience-card').forEach(card => {
      const btn = card.querySelector('.experience-toggle-btn');
      const textSpan = btn ? btn.querySelector('.toggle-text') : null;
      if (textSpan) {
        const isExpanded = card.classList.contains('is-expanded');
        textSpan.textContent = isExpanded 
          ? translations[lang]["exp.showLess"] 
          : translations[lang]["exp.showMore"];
      }
    });

    // Atualiza o arquivo de currículo de acordo com o idioma
    const resumeLink = document.getElementById('hero-resume-link');
    if (resumeLink) {
      const resumeFile = lang === 'pt' ? 'docs/curriculo_pt.pdf?v=4' : 'docs/curriculo_en.pdf?v=4';
      resumeLink.setAttribute('href', resumeFile);
    }

    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // Inicializa o idioma
  applyLanguage(currentLang);


  /* --- 5. EXPANDIR / RECOLHER EXPERIÊNCIA PROFISSIONAL --- */
  const expToggleButtons = document.querySelectorAll('.experience-toggle-btn');
  expToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.experience-card');
      if (!card) return;
      
      const isExpanded = card.classList.toggle('is-expanded');
      btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

      const textSpan = btn.querySelector('.toggle-text');
      if (textSpan) {
        textSpan.textContent = isExpanded
          ? translations[currentLang]["exp.showLess"]
          : translations[currentLang]["exp.showMore"];
      }

      if (lenis) {
        lenis.resize();
      }
    });
  });


  /* --- 6. NAVEGAÇÃO ATIVA NO PILL MENU COM DETECÇÃO DE FIM DE PÁGINA --- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.pill-links a, .popover-links a');

  function setActiveLink(id) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function checkActiveSection() {
    const scrollBottom = window.innerHeight + window.scrollY;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );

    // Se o contato estiver visível na janela ou o usuário rolou perto do fim da página
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      const contactRect = contactSec.getBoundingClientRect();
      if (contactRect.top <= window.innerHeight * 0.75 || scrollBottom >= documentHeight - 90) {
        setActiveLink('contact');
        return;
      }
    }

    let currentId = 'home';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 200) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      setActiveLink(currentId);
    }
  }

  window.addEventListener('scroll', checkActiveSection, { passive: true });
  if (lenis) {
    lenis.on('scroll', checkActiveSection);
  }
  checkActiveSection();


  /* --- 7. POPOVER MENU MOBILE (ABRIR, FECHAR E SELEÇÃO) --- */
  const menuTrigger = document.querySelector('.pill-menu-trigger');
  const popoverMenu = document.querySelector('.pill-popover-menu');

  if (menuTrigger && popoverMenu) {
    function togglePopover(open) {
      const willOpen = open !== undefined ? open : !popoverMenu.classList.contains('is-open');
      if (willOpen) {
        popoverMenu.classList.add('is-open');
        menuTrigger.classList.add('is-open');
        menuTrigger.setAttribute('aria-expanded', 'true');
        popoverMenu.setAttribute('aria-hidden', 'false');
      } else {
        popoverMenu.classList.remove('is-open');
        menuTrigger.classList.remove('is-open');
        menuTrigger.setAttribute('aria-expanded', 'false');
        popoverMenu.setAttribute('aria-hidden', 'true');
      }
    }

    menuTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePopover();
    });

    // Fecha o popover ao clicar em qualquer link interno
    popoverMenu.querySelectorAll('.popover-links a').forEach(link => {
      link.addEventListener('click', () => {
        togglePopover(false);
      });
    });

    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {
      if (!popoverMenu.contains(e.target) && !menuTrigger.contains(e.target)) {
        togglePopover(false);
      }
    });

    // Fecha ao pressionar Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        togglePopover(false);
      }
    });
  }

  /* --- 6. ROLAGEM SUAVE COM LENIS E OFFSET PARA O PILL MENU --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const navOffset = 85;

        setActiveLink(targetId.replace('#', ''));

        if (lenis) {
          lenis.scrollTo(targetElem, {
            offset: -navOffset,
            duration: 1.2
          });
        } else {
          const targetPos = targetElem.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }
      }
    });
  });

});
