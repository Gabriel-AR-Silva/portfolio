$(document).ready(function() {
    const myProjects = [
      {
        title: 'Dr. Moizes Batista',
        description: 'O desenvolvimento do site "Dr. Moizes Batista" envolve a integração de duas poderosas tecnologias, Laravel e Vue.js, para criar uma experiência web dinâmica e eficiente. Laravel, um framework PHP robusto, é utilizado para a construção do backend, gerenciando as operações do servidor, banco de dados e fornecendo uma estrutura organizada para a lógica de negócios.',
        type: 'webProj',
        img_link: 'src/images/projects/drm-site.png',
        site_link: 'https://drmbatista.com.br/',
      },
      {
        title: 'Agiliza Registra',
        description: 'O desenvolvimento do site "Dr. Moizes Batista" envolve a integração de duas poderosas tecnologias, Laravel e Vue.js, para criar uma experiência web dinâmica e eficiente. Laravel, um framework PHP robusto, é utilizado para a construção do backend, gerenciando as operações do servidor, banco de dados e fornecendo uma estrutura organizada para a lógica de negócios.',
        type: 'webProj',
        img_link: 'src/images/projects/agiliza-img.png',
        site_link: 'https://agilizaregistra.com.br/',
      },
      {
        title: 'Design do meu porfolio - Figma',
        description: 'O desenvolvimento do site "Dr. Moizes Batista" envolve a integração de duas poderosas tecnologias, Laravel e Vue.js, para criar uma experiência web dinâmica e eficiente. Laravel, um framework PHP robusto, é utilizado para a construção do backend, gerenciando as operações do servidor, banco de dados e fornecendo uma estrutura organizada para a lógica de negócios.',
        type: 'designProj',
        img_link: 'src/images/projects/portfolio-img.png',
        site_link: 'https://www.figma.com/file/rLsquzPu92Z6ZCNU9JYX1D/Portfolio?type=design&node-id=0%3A1&mode=design&t=9F2xsCaAWorP4SeH-1',
      },
      {
        title: 'Meu portfolio',
        description: 'O desenvolvimento do site "Dr. Moizes Batista" envolve a integração de duas poderosas tecnologias, Laravel e Vue.js, para criar uma experiência web dinâmica e eficiente. Laravel, um framework PHP robusto, é utilizado para a construção do backend, gerenciando as operações do servidor, banco de dados e fornecendo uma estrutura organizada para a lógica de negócios.',
        type: 'webProj',
        img_link: 'src/images/projects/portsite-img.png',
        site_link: 'https://gabriel-ars-portfolio.netlify.app/',
      },
    ];

  myProjects.forEach(project => {
    const projectElement = $(`
      <div class="project ${project.type} allProj">
        <img src="${project.img_link}" alt="${project.title}" width="100%" height="100%" loading="lazy">
        <div class="hoverProject"></div>
      </div>
    `);

    projectElement.data('projectData', project);

    $(".projects").append(projectElement);
  });

  $(".projects").on("click", ".allProj", function(){
    $(".fade").addClass('fade-modal');

    const projectData = $(this).data('projectData');

    $("#titleProj").text(projectData.title)
    $("#descProj").text(projectData.description)
    $("#linkProj").text(projectData.site_link);
    $("#linkProj").attr("href", projectData.site_link);

    $(".modal-image").html(`<img id="imgProj" src='${projectData.img_link}' alt='${projectData.title}'>`);
  });
});

  
  