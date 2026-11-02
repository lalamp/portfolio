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
      "hero.bio": "Desenvolvedora full stack com sólida vivência em Flutter, React e Go, construindo tanto sistemas web quanto aplicativos mobile. Tenho forte interesse na construção de soluções completas, unindo interfaces atraentes com foco em UI/UX e backends eficientes e de alta performance. Integro ferramentas de IA no dia a dia para otimizar meu fluxo de trabalho e me adapto com facilidade a novas linguagens e stacks tecnológicas.",
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
      "exp.job1.period": "01/02/2026 — Presente",
      "exp.job1.role": "Desenvolvedora de Software Júnior",
      "exp.job1.company": "Hipcom ERP • São Paulo, Brasil (remoto)",
      "exp.job1.b1": "Desenvolvimento de um framework de UI e biblioteca de componentes interno em Flutter para padronizar o desenvolvimento frontend e reduzir retrabalho em múltiplos apps, construindo desde formulários e datagrids CRUD básicos até interfaces mestre-detalhe complexas.",
      "exp.job1.b2": "Construção de um sistema web de controle de produção para clientes do varejo utilizando React, Go e MySQL, gerenciando fluxos de receitas, preparação, embalagem, transferências de estoque e controle de inventário.",
      "exp.job1.b3": "Manutenção e expansão de aplicativos mobile existentes (Android/iOS) em Flutter/Go e sistemas ERP de varejo na web em React/Go, solucionando chamados de suporte, corrigindo bugs e implementando novas funcionalidades.",
      "exp.job1.b4": "Gestão de pipelines de CI/CD e deploys de aplicações em diversos ambientes utilizando CircleCI, Codemagic, Firebase, Nomad, Apple App Store e Google Play Store.",
      "exp.job1.b5": "Integração de ferramentas com IA no fluxo diário de trabalho para acelerar a geração de código, auxiliar no debugging e refatoração e otimizar a eficiência geral de desenvolvimento.",

      // Experiência 2
      "exp.job2.period": "14/10/2024 — 31/01/2026",
      "exp.job2.role": "Estagiária em Desenvolvimento de Software",
      "exp.job2.company": "Hipcom ERP • São Paulo, Brasil (remoto)",
      "exp.job2.b1": "Desenvolvimento full-stack de aplicações web e mobile utilizando Flutter, Go e MySQL.",
      "exp.job2.b2": "Desenvolvimento e otimização de novas APIs e endpoints, além da migração e refatoração de sistemas backend de Java para Go.",
      "exp.job2.b3": "Contribuição no desenvolvimento de módulos centrais para sistema ERP de varejo, incluindo controle de estoque, processamento de pedidos, módulos fiscais, tabelas dinâmicas de preços e controle de usuários.",
      "exp.job2.b4": "Participação no desenvolvimento de painel interno de suporte para gerenciamento de clientes, suas integrações, APIs e ambientes em nuvem.",

      // Experiência 3
      "exp.job3.period": "15/12/2023 — 15/03/2024",
      "exp.job3.role": "Retail Assistant - Work and Travel",
      "exp.job3.company": "Vail Resorts • Stowe, Vermont - Estados Unidos",
      "exp.job3.b1": "Participação em programa de intercâmbio cultural e profissional em Stowe, Vermont, EUA.",
      "exp.job3.b2": "Desenvolvimento de habilidades avançadas de comunicação em inglês (nível C1), além de relacionamento com clientes e adaptabilidade cultural.",
      "exp.job3.badge1": "Inglês (Avançado)",
      "exp.job3.badge2": "Relacionamento com Clientes",
      "exp.job3.badge3": "Comunicação",

      // Experiência 4
      "exp.job4.period": "01/01/2023 — 31/12/2023",
      "exp.job4.role": "Membro da Equipe de Marketing (Empresa Júnior USP)",
      "exp.job4.company": "Voll Jr • Ribeirão Preto, Brasil",
      "exp.job4.b1": "Criação e gestão de conteúdo digital para os perfis oficiais da empresa no Instagram e LinkedIn.",
      "exp.job4.b2": "Análise de métricas de engajamento e estatísticas de redes sociais para otimizar o alcance de marketing.",
      "exp.job4.b3": "Implementação de estratégias de marketing com foco na prospecção passiva de novos clientes.",
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
      "hero.bio": "Full stack developer with solid experience in Flutter, React, and Go, building both web systems and mobile applications. I have a strong interest in creating complete solutions, uniting attractive interfaces focused on UI/UX and efficient, performant backends. I integrate AI-powered tools into my daily workflow to optimize my workflow and easily adapt to new languages and technology stacks.",
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
      "projects.p1.desc": "Integrated corporate financial management and analysis system to control balance sheets and income statements (P&L/DRE). Features statement management, financial indicator analysis, and chart visualization. Enables grouping companies into economic groups and consolidating data with intercompany transfer reconciliation and accounting.",

      "projects.p2.siteBadge": "This website",
      "projects.p2.title": "Personal Web Portfolio",
      "projects.p2.desc": "Web portfolio developed to present my academic education, professional trajectory, and hands-on projects.",

      "exp.title": "Work Experience",
      "exp.desc": "Professional trajectory:",
      "exp.showMore": "View details",
      "exp.showLess": "Hide details",

      // Experience 1 (verbatim from CV)
      "exp.job1.period": "01/02/2026 — Current",
      "exp.job1.role": "Junior Software Developer",
      "exp.job1.company": "Hipcom ERP • São Paulo, Brazil (Remote)",
      "exp.job1.b1": "Developed an internal UI framework and component library in Flutter to standardize frontend development and reduce rework across multiple apps, building from basic CRUD forms and datagrids to complex master-detail interfaces.",
      "exp.job1.b2": "Build a web-based production control system for retail clients using React, Go, and MySQL, managing workflows for recipes, preparation, packaging, stock transfers, and inventory control.",
      "exp.job1.b3": "Maintain and expand existing mobile apps (Android/iOS) in Flutter/Go and web systems in React/Go for a retail ERP system, resolving support tickets, fixing bugs, and implementing new features.",
      "exp.job1.b4": "Manage CI/CD pipelines and application deployments across various environments utilizing CircleCI, Codemagic, Firebase, Nomad, Apple App Store, and Google Play Store.",
      "exp.job1.b5": "Integrate AI-powered tools into the daily workflow to accelerate code generation, assist with debugging and refactoring, and optimize overall development efficiency.",

      // Experience 2 (verbatim from CV)
      "exp.job2.period": "14/10/2024 — 31/01/2026",
      "exp.job2.role": "Software Development Intern",
      "exp.job2.company": "Hipcom ERP • São Paulo, Brazil (Remote)",
      "exp.job2.b1": "Developed full-stack web and mobile applications using Flutter, Go and MySQL.",
      "exp.job2.b2": "Developed and optimized new APIs and endpoints, in addition to migrating and refactoring backend systems from Java to Go.",
      "exp.job2.b3": "Contributed to the development of core modules for a retail ERP system, including inventory management, order processing, fiscal modules, dynamic pricing tables and user control.",
      "exp.job2.b4": "Participated in developing an internal support panel to manage client integrations, APIs and cloud environments.",

      // Experience 3 (verbatim from CV)
      "exp.job3.period": "15/12/2023 — 15/03/2024",
      "exp.job3.role": "Retail Assistant - Work and Travel",
      "exp.job3.company": "Vail Resorts • Stowe, Vermont - United States",
      "exp.job3.b1": "Participated in a cultural and professional exchange program in Stowe, Vermont, USA.",
      "exp.job3.b2": "Developed advanced English communication skills, along with customer relationship abilities and cultural adaptability.",
      "exp.job3.badge1": "English (Advanced)",
      "exp.job3.badge2": "Customer Relations",
      "exp.job3.badge3": "Communication",

      // Experience 4 (verbatim from CV)
      "exp.job4.period": "01/01/2023 — 31/12/2023",
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
      "hero.bio": "Desarrolladora full stack con sólida experiencia en Flutter, React y Go, construyendo tanto sistemas web como aplicaciones móviles. Tengo un gran interés en la creación de soluciones completas, uniendo interfaces atractivas con foco en UI/UX y backends eficientes y de alto rendimiento. Integro herramientas de IA en el día a día para optimizar mi flujo de trabajo y me adapto con facilidad a nuevos lenguajes y stacks tecnológicos.",
      "hero.credentials": "Graduada en Ciencias de la Computación por la Universidad de São Paulo (USP), soy fluente en inglés y sigo mejorando mi español.",
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
      "projects.p1.desc": "Sistema integrado de gestión y análisis financiero empresarial para el control de balance patrimonial y estado de resultados (DRE). Ofrece gestión de estados contables, análisis de indicadores y gráficos interactivos, agrupamiento de empresas en grupos económicos y consolidación de datos con conciliación y contabilización de transferencias intercompany.",

      "projects.p2.siteBadge": "Este sitio",
      "projects.p2.title": "Portafolio Web Personal",
      "projects.p2.desc": "Portafolio web desarrollado para presentar mi formación académica, trayectoria profesional y proyectos prácticos.",

      "exp.title": "Experiencia Profesional",
      "exp.desc": "Trayectoria profesional:",
      "exp.showMore": "Ver detalles",
      "exp.showLess": "Ocultar detalles",

      // Experiencia 1
      "exp.job1.period": "01/02/2026 — Presente",
      "exp.job1.role": "Desarrolladora de Software Junior",
      "exp.job1.company": "Hipcom ERP • São Paulo, Brasil (remoto)",
      "exp.job1.b1": "Desarrollo de framework interno de UI y librería de componentes en Flutter para estandarizar el frontend en múltiples aplicaciones.",
      "exp.job1.b2": "Construcción de sistema web de control de producción para retail con React, Go y MySQL.",
      "exp.job1.b3": "Mantenimiento y expansión de apps móviles (Flutter/Go) y web (React/Go), resolución de tickets y nuevas funcionalidades.",
      "exp.job1.b4": "Gestión de pipelines de CI/CD y despliegues en CircleCI, Codemagic, Firebase, Nomad, App Store y Google Play.",
      "exp.job1.b5": "Integración de herramientas de IA en el flujo diario para optimizar generación de código, debugging y refactorización.",

      // Experiencia 2
      "exp.job2.period": "14/10/2024 — 31/01/2026",
      "exp.job2.role": "Practicante en Desarrollo de Software",
      "exp.job2.company": "Hipcom ERP • São Paulo, Brasil (remoto)",
      "exp.job2.b1": "Desarrollo full-stack de aplicaciones web y móviles utilizando Flutter, Go y MySQL.",
      "exp.job2.b2": "Desarrollo y optimización de nuevas APIs y endpoints, migrando servicios backend de Java a Go.",
      "exp.job2.b3": "Desarrollo de módulos centrales de ERP: inventario, pedidos, módulos fiscales y tablas de precios.",
      "exp.job2.b4": "Participación en panel interno de soporte para gestión de integraciones y entornos en la nube.",

      // Experiencia 3
      "exp.job3.period": "15/12/2023 — 15/03/2024",
      "exp.job3.role": "Retail Assistant - Work and Travel",
      "exp.job3.company": "Vail Resorts • Stowe, Vermont - Estados Unidos",
      "exp.job3.b1": "Programa de intercambio cultural y profesional en Stowe, Vermont, EE. UU.",
      "exp.job3.b2": "Desarrollo de habilidades avanzadas de comunicación en inglés (C1) y atención al cliente.",
      "exp.job3.badge1": "Inglés (Avanzado)",
      "exp.job3.badge2": "Relaciones con Clientes",
      "exp.job3.badge3": "Comunicación",

      // Experiencia 4
      "exp.job4.period": "01/01/2023 — 31/12/2023",
      "exp.job4.role": "Miembro del Equipo de Marketing (Empresa Junior USP)",
      "exp.job4.company": "Voll Jr • Ribeirão Preto, Brasil",
      "exp.job4.b1": "Creación y gestión de contenidos digitales para perfiles oficiales de Instagram y LinkedIn.",
      "exp.job4.b2": "Análisis de métricas de redes sociales y estrategias de marketing.",
      "exp.job4.b3": "Prospección pasiva de novos clientes a través de marketing de contenidos.",
      "exp.job4.badge1": "Marketing",
      "exp.job4.badge2": "Analítica de Redes Sociales",
      "exp.job4.badge3": "Comunicación",

      "contact.title": "Contacto",
      "contact.desc": "Puedes enviarme un mensaje o conectar a través de mis redes:",
      "contact.phone": "Teléfono / WhatsApp",

      "footer.rights": "Todos os direitos reservados."
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
