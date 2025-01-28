//this fuction changes the color theme (dark and light) of the site
var icon = document.getElementById("icon");
    icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        icon.src="img/dark-theme-icon/sun.png";
      }else{
        icon.src="img/dark-theme-icon/moon.png";
      }
    }


// This object holds translations for both languages (Portuguese and English)
const translations = {
    en: {
      headerIntroText: "Home",  // Translations for header and sections
      headerAboutText: "About",
      headerTechnologyText: "Technology",
      headerContactText: "Contact",
  
      sectionIntroH2: "Hello World! <br>I am <span>Nathalia</span>, <br> Frontend Developer", // Translated content for the intro section
      sectionIntroP: "Currently located in Brazil, my love for art and technology make the professional that I am today.",
      sectionIntroA: "Let's get in touch!",
  
      sectionAboutH2: "ABOUT", // Section titles and descriptions
      sectionAboutH3: "Nathalia Carvalho, Frontend Developer & UX Designer",
      sectionAboutP: "Graduated in Systems Analysis since 2022, with postgraduate degrees in web applications and software engineering. Currently, I work as a Front-end developer, focusing on developing modern, high-quality interfaces. My expertise includes performance, user experience, and responsiveness.",
      AboutStatsH3_1: "4 years",
      AboutStatsP_1:"of experience in field",
      AboutStatsH3_2: "21",
      AboutStatsP_2:"repositories in Github",
      AboutStatsH3_1: "4",
      AboutStatsP_1:"companies worked",
      ButtonDownloadResume:"Download resume",
  
      SectionQualificationsH2:"Qualifications",
      SectionQualificationsP:"My personal journey",
      ButtonWork:"Work",
      ButtonEducation:"Education",
      WorkTabH3_1:"JR Systems Analyst",
      WorkTabP_1:"Bradesco Bank",
      WorkTabH3_2:"Intern",
      WorkTabP_2:"Bradesco Bank",
      WorkTabH3_3:"Data Processing Analyst",
      WorkTabP_3:"Erodata",
      WorkTabH3_4:"Trainee",
      WorkTabP_4:"Itau bank",

      sectionTechnologyH2: "Technology", // Technologies section
      sectionTechnologyP: "Over the course of my academic life and career, I have used various tools to develop solutions, with the main ones being:",
      divSkillsColumnH3: {
        frontend: "Frontend", // Specific skills sections
        backend: "Backend",
        tools: "Tools",
      },
      sectionPortifolioH2: "My portifolio",
      contactH2: "CONTACT", // Contact section title
      rights:"© all rights reserved.",
    },
    pt: {
      headerIntroText: "Início", // Translations for the same sections in Portuguese
      headerAboutText: "Sobre",
      headerTechnologyText: "Tecnologias",
      headerContactText: "Contato",
  
      sectionIntroH2: "Olá Mundo! <br>Eu sou <span>Nathalia</span>, <br> Desenvolvedora Frontend", // Portuguese translation for intro section
      sectionIntroP: "Atualmente localizada no Brasil, meu amor por arte e tecnologia formam a profissional que sou hoje.",
      sectionIntroA: "Vamos conversar!",
  
      sectionAboutH2: "SOBRE", // Section titles and descriptions in Portuguese
      sectionAboutH3: "Nathalia Carvalho, Desenvolvedora Frontend & UX Designer",
      sectionAboutP: "Graduada em Análise de Sistemas desde 2022, com pós-graduação em aplicações web e engenharia de software. Atualmente, trabalho como desenvolvedora Front-end, focando em criar interfaces modernas e de alta qualidade. Minha experiência inclui desempenho, experiência do usuário e responsividade.",
      AboutStatsH3_1: "4 anos",
      AboutStatsP_1:"de experiência na Área",
      AboutStatsH3_2: "21",
      AboutStatsP_2:"repositorios no Github",
      AboutStatsH3_3: "4",
      AboutStatsP_3:"empresas trabalhadas",
      ButtonDownloadResume:"Baixar Curriculo",

      SectionQualificationsH2:"Qualificações",
      SectionQualificationsP:"Minha Jornada Profissinal",
      ButtonWork:"Trabalho",
      ButtonEducation:"Formação",
      WorkTabH3_1:"Analista de sistemas Junior",
      WorkTabP_1:"Banco Bradesco",
      WorkTabH3_2:"Intern",
      WorkTabP_2:"Banco Bradesco",
      WorkTabH3_3:"Analista de Processamento de Dados",
      WorkTabP_3:"Erodata",
      WorkTabH3_4:"Jovem Aprendiz",
      WorkTabP_4:"Banco Itau",
  
      sectionTechnologyH2: "TECNOLOGIAS", // Technologies section in Portuguese
      sectionTechnologyP: "Ao longo da minha vida acadêmica e carreira, utilizei diversas ferramentas para desenvolver soluções, sendo as principais delas:",
      divSkillsColumnH3: {
        frontend: "Frontend", // Specific skills sections in Portuguese
        backend: "Backend",
        tools: "Ferramentas",
      },
      sectionPortifolioH2: "Meu portifolio",
      contactH2: "CONTATO", // Contact section title in Portuguese
      rights:"© Todos os direitos reservados.",
    },
  };
  
  // Selecting the language selector dropdown and the flag image element
  const languageSelector = document.querySelector("select");
  const flag = document.getElementById("flag");
  
  // This function updates the content of the website based on the selected language
  const setLanguage = (language) => {
    // Check if the selected language is Portuguese or English and use the corresponding translations
    const t = translations[language === "Português" ? "pt" : "en"];
  
    // Update each section of the page with the translated text
    
    document.getElementById("headerAboutText").innerText = t.headerAboutText;  // Update the "About" section text
    document.getElementById("headerTechnologyText").innerText = t.headerTechnologyText;  // Update the "Technology" section text
    document.getElementById("headerContactText").innerText = t.headerContactText;  // Update the "Contact" section text
  
    document.getElementById("sectionIntroH2").innerHTML = t.sectionIntroH2;  // Update the introduction subtitle (can contain HTML)
    document.getElementById("sectionIntroP").innerText = t.sectionIntroP;  // Update the intro paragraph text
    document.getElementById("sectionIntroA").innerText = t.sectionIntroA;  // Update the "Let's get in touch" text
  
    document.getElementById("sectionAboutH2").innerText = t.sectionAboutH2;  // Update the "About" section title
    document.getElementById("sectionAboutH3").innerText = t.sectionAboutH3;  // Update the "About" section subtitle
    document.getElementById("sectionAboutP").innerText = t.sectionAboutP;  // Update the "About" section description
    document.getElementById("AboutStatsH3_1").innerText = t.AboutStatsH3_1;
    document.getElementById("AboutStatsP_1").innerText = t.AboutStatsP_1;
    document.getElementById("AboutStatsH3_2").innerText = t.AboutStatsH3_2;
    document.getElementById("AboutStatsP_2").innerText = t.AboutStatsP_2;
    document.getElementById("AboutStatsH3_3").innerText = t.AboutStatsH3_3;
    document.getElementById("AboutStatsP_3").innerText = t.AboutStatsP_3;
    document.getElementById("ButtonDownloadResume").innerText = t.ButtonDownloadResume;
    document.getElementById("SectionQualificationsH2").innerText = t.SectionQualificationsH2;
    document.getElementById("SectionQualificationsP").innerText = t.SectionQualificationsP;
    document.getElementById("ButtonWork").innerText = t.ButtonWork;
    document.getElementById("ButtonEducation").innerText = t.ButtonEducation;
    document.getElementById("WorkTabH3_1").innerText = t.WorkTabH3_1;
    document.getElementById("WorkTabP_1").innerText = t.WorkTabP_1;
    document.getElementById("WorkTabH3_2").innerText = t.WorkTabH3_2;
    document.getElementById("WorkTabP_2").innerText = t.WorkTabP_2;
    document.getElementById("WorkTabH3_3").innerText = t.WorkTabH3_3;
    document.getElementById("WorkTabP_3").innerText = t.WorkTabP_3;
    document.getElementById("WorkTabH3_4").innerText = t.WorkTabH3_4;
    document.getElementById("WorkTabP_4").innerText = t.WorkTabP_4;

    document.getElementById("sectionTechnologyH2").innerText = t.sectionTechnologyH2;  // Update the "Technology" section title
    document.getElementById("sectionTechnologyP").innerText = t.sectionTechnologyP;  // Update the "Technology" section description
  
    document.getElementById("divSkillsColumnH3Frontend").innerText = t.divSkillsColumnH3.frontend;  // Update the "Frontend" skill title
    document.getElementById("divSkillsColumnH3Backend").innerText = t.divSkillsColumnH3.backend;  // Update the "Backend" skill title
    document.getElementById("divSkillsColumnH3Tools").innerText = t.divSkillsColumnH3.tools;  // Update the "Tools" skill title
    document.getElementById("sectionPortifolioH2").innerText = t.sectionPortifolioH2;
    document.getElementById("contactH2").innerText = t.contactH2;  // Update the "Contact" section title
    document.getElementById("rights").innerText = t.rights;
    // Update the flag image source and alternative text based on the selected language
    flag.src = language === "Português" ? "img/flags/pt.png" : "img/flags/en.png";  // Set the flag image to match the language
    flag.alt = language === "Português" ? "Brazil" : "USA";  // Set the alt text of the flag based on the selected language
  };
  
  // Event listener for when the language selector is changed
  languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);  // Call the setLanguage function with the selected value
  });

  function downloadResume() {
    const link = document.createElement('a');
    link.href = 'CV_Nathalia_Carvalho_de_Araujo.pdf'; // Substitua pelo caminho correto do arquivo
    link.download = 'Curriculo-Nathalia-Carvalho.pdf';
    link.click();
  }
  

  function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
  
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
  
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
  }
  

  const projects = [
    {
      title: "Project 1", // Título do projeto 1
      description: "This is the description for project 1.", // Descrição do projeto 1
      image: "img/project1.jpg", // URL da imagem do projeto 1
      link: "https://example.com/project1" // Link para o projeto 1
    },
    {
      title: "Pokedex.api", // Título do projeto 2
      description: "Ao longo das aulas de Java Script desenvolvemos uma pokedex com um display de todos os Pokémons da 1ª geração. Esse projeto consiste em implementar uma aba de visualização com os detalhes de cada Pokémon através do Java script. SITE INDISPONIVEL TEMPORARIAMENTE PARA ATUALIZAÇÕES", // Descrição do projeto 2
      image: "img/project2.png", // URL da imagem do projeto 2
      link: "https://nathy10carvalh0.github.io/Pokedex/" // Link para o projeto 2
    },
    {
      title: "Dog Sitter", // Título do projeto 3
      description: "This is the description for project 3.", // Descrição do projeto 3
      image: "img/project3.png", // URL da imagem do projeto 3
      link: "https://nathy10carvalh0.github.io/Dog-Care/" // Link para o projeto 3
    },
    {
      title: "Project 1", // Título do projeto 1
      description: "This is the description for project 1.", // Descrição do projeto 1
      image: "img/project1.jpg", // URL da imagem do projeto 1
      link: "https://example.com/project1" // Link para o projeto 1
    },
    {
      title: "Project 1", // Título do projeto 1
      description: "This is the description for project 1.", // Descrição do projeto 1
      image: "img/project1.jpg", // URL da imagem do projeto 1
      link: "https://example.com/project1" // Link para o projeto 1
    },
    {
      title: "Project 1", // Título do projeto 1
      description: "This is the description for project 1.", // Descrição do projeto 1
      image: "img/project1.jpg", // URL da imagem do projeto 1
      link: "https://example.com/project1" // Link para o projeto 1
    },
    {
      title: "Project 1", // Título do projeto 1
      description: "This is the description for project 1.", // Descrição do projeto 1
      image: "img/project1.jpg", // URL da imagem do projeto 1
      link: "https://example.com/project1" // Link para o projeto 1
    },
  ];

  function openModal(index) { // Função para abrir o modal
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalLink = document.getElementById("modalLink");

    const project = projects[index]; // Obtém os dados do projeto clicado

    modalImage.src = project.image; // Atualiza a imagem no modal
    modalTitle.textContent = project.title; // Atualiza o título no modal
    modalDescription.textContent = project.description; // Atualiza a descrição no modal
    modalLink.href = project.link; // Atualiza o link no modal

    modal.classList.add("active"); // Exibe o modal
  }

  function closeModal() { // Função para fechar o modal
    const modal = document.getElementById("projectModal");
    modal.classList.remove("active"); // Oculta o modal
  }