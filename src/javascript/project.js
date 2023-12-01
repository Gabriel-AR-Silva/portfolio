$(document).ready(function() {
    const myProjects = [
      {
        title: 'Dr. Moizes Batista',
        description: 'descrição',
        type: 'webProj',
        img_link: 'src/images/projects/drm-site.png',
        site_link: 'https://drmbatista.com.br/',
      },
      {
        title: 'Renata Panegossi Massoterapia',
        description: 'descrição',
        type: 'webProj',
        img_link: '',
        site_link: '',
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

    $("#link-site-proj").text(projectData.site_link)
  });
});

  
  