$(document).ready(function() {
    const myProjects = [
      {
        title: 'Dr. Moizes Batista',
        description: 'Esse projeto foi desenvolvido pela startup <a href="https://jrsolucoesgerenciais.com.br/" target="_blank" class="linkStyle" title="Startup onde desenvolvi o projeto">JR Soluções Gerenciais</a> para um nutricionista chamado Moizes Batista e sua clínica. Quando entrei para a equipe, o projeto já estava sendo desenvolvido. Fora o Sistema de fomulário e gerenciamento que existe em seu interior, participei do desenvolvimento da página do blog e fui responsável pela melhoraria na pontuação do site em relação ao SEO e Acessibilidade. O sistema foi criado usando Laravel, VueJS, Inertia, bootstrap e diversos outros adendos.',
        type: 'webProj',
        img_link: 'src/images/projects/drm-site.png',
        site_link: 'https://drmbatista.com.br/',
      },
      {
        title: 'Agiliza Registra',
        description: 'Esse projeto foi desenvolvido pela startup <a href="https://jrsolucoesgerenciais.com.br/" target="_blank" class="linkStyle" title="Startup onde desenvolvi o projeto">JR Soluções Gerenciais</a>. O sistema interno de gerenciamento da Agiliza foi o primeiro projeto na qual obtive experiência profissional. Começando pelos testes, passando por todo backend em Laravel e terminando no frontend com VueJS.',
        type: 'webProj',
        img_link: 'src/images/projects/agiliza-img.png',
        site_link: 'https://agilizaregistra.com.br/',
      },
      {
        title: 'Design do meu porfolio - Figma',
        description: 'O design do portifólio foi criado a partir de muitos estudos e pesquisas. Foi desenvolvido com intuito de ser algo simples, sem poluição visual e elegante ao mesmo tempo. A cor roxa presente, é uma cor que particularmente acho muito ornamental e leve.',
        type: 'designProj',
        img_link: 'src/images/projects/portfolio-img.png',
        site_link: 'https://www.figma.com/file/rLsquzPu92Z6ZCNU9JYX1D/Portfolio?type=design&node-id=0%3A1&mode=design&t=9F2xsCaAWorP4SeH-1',
      },
      {
        title: 'Meu portfolio',
        description: 'O portifólio é meu primeiro site criado e publicado na web com objetivo profissional. Usando HTML, CSS, JS e jQuery. Quis desenvolver neste momento algo mais simples e rápido, para que eu possa mostrar a mim e minhas experiências. No futuro irei "recodá-lo" adicionando uma página de blog usando ReactJS, Laravel e AWS. Vou iniciar o re-desenvolvimento em janeiro de 2024.',
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
    $("#descProj").html(projectData.description)
    $("#linkProj").text(projectData.site_link);
    $("#linkProj").attr("href", projectData.site_link);

    $(".modal-image").html(`<img id="imgProj" src='${projectData.img_link}' alt='${projectData.title}'>`);
  });
});

  
  