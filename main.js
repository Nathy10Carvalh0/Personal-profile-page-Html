const translations = {
    en: {
      headerIntroText: "Home",
      headerAboutText: "About",
      headerTechnologyText: "Technology",
      headerContactText: "Contact",
  
      sectionIntroH2: "Hello World! <br>I am <span>Nathalia</span>, <br> Frontend Developer",
      sectionIntroP: "Currently located in Brazil, my love for art and technology make the professional that I am today.",
      sectionIntroA: "Let's get in touch!",
  
      sectionAboutH2: "ABOUT",
      sectionAboutH3: "Nathalia Carvalho, Frontend Developer & UX Designer",
      sectionAboutP: "Graduated in Systems Analysis since 2022, with postgraduate degrees in web applications and software engineering. Currently, I work as a Front-end developer, focusing on developing modern, high-quality interfaces. My expertise includes performance, user experience, and responsiveness.",
  
      sectionTechnologyH2: "Technology",
      sectionTechnologyP: "Over the course of my academic life and career, I have used various tools to develop solutions, with the main ones being:",
      divSkillsColumnH3: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
      },
  
      contactH2: "CONTACT",
    },
    pt: {
      headerIntroText: "Início",
      headerAboutText: "Sobre",
      headerTechnologyText: "Tecnologias",
      headerContactText: "Contato",
  
      sectionIntroH2: "Olá Mundo! <br>Eu sou <span>Nathalia</span>, <br> Desenvolvedora Frontend",
      sectionIntroP: "Atualmente localizada no Brasil, meu amor por arte e tecnologia formam a profissional que sou hoje.",
      sectionIntroA: "Vamos conversar!",
  
      sectionAboutH2: "SOBRE",
      sectionAboutH3: "Nathalia Carvalho, Desenvolvedora Frontend & UX Designer",
      sectionAboutP: "Graduada em Análise de Sistemas desde 2022, com pós-graduação em aplicações web e engenharia de software. Atualmente, trabalho como desenvolvedora Front-end, focando em criar interfaces modernas e de alta qualidade. Minha experiência inclui desempenho, experiência do usuário e responsividade.",
  
      sectionTechnologyH2: "TECNOLOGIAS",
      sectionTechnologyP: "Ao longo da minha vida acadêmica e carreira, utilizei diversas ferramentas para desenvolver soluções, sendo as principais delas:",
      divSkillsColumnH3: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Ferramentas",
      },
  
      contactH2: "CONTATO",
    },
  };
  
  const languageSelector = document.querySelector("select");
  const flag = document.getElementById("flag");
  
  const setLanguage = (language) => {
    const t = translations[language === "Português" ? "pt" : "en"];
  
    document.getElementById("headerIntroText").innerText = t.headerIntroText;
    document.getElementById("headerAboutText").innerText = t.headerAboutText;
    document.getElementById("headerTechnologyText").innerText = t.headerTechnologyText;
    document.getElementById("headerContactText").innerText = t.headerContactText;
  
    document.getElementById("sectionIntroH2").innerHTML = t.sectionIntroH2;
    document.getElementById("sectionIntroP").innerText = t.sectionIntroP;
    document.getElementById("sectionIntroA").innerText = t.sectionIntroA;
  
    document.getElementById("sectionAboutH2").innerText = t.sectionAboutH2;
    document.getElementById("sectionAboutH3").innerText = t.sectionAboutH3;
    document.getElementById("sectionAboutP").innerText = t.sectionAboutP;
  
    document.getElementById("sectionTechnologyH2").innerText = t.sectionTechnologyH2;
    document.getElementById("sectionTechnologyP").innerText = t.sectionTechnologyP;
  
    document.getElementById("divSkillsColumnH3Frontend").innerText = t.divSkillsColumnH3.frontend;
    document.getElementById("divSkillsColumnH3Backend").innerText = t.divSkillsColumnH3.backend;
    document.getElementById("divSkillsColumnH3Tools").innerText = t.divSkillsColumnH3.tools;
  
    document.getElementById("contactH2").innerText = t.contactH2;
  
    // Atualiza a bandeira
    flag.src = language === "Português" ? "img/flags/pt.png" : "img/flags/en.png";
    flag.alt = language === "Português" ? "Brazil" : "EUA";
  };
  
  // Listener para troca de idioma
  languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
  