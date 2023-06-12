$(document).ready(function() {
    const mySkills = [
      {
        skill: 'figma',
        description: 'Figma is a vector graphics and prototyping editor for design projects. I have knowledge of fundamental resources for web design and animations utility variant interactions.'
      },
      {
        skill: 'html',
        description: 'HTML is a markup language for creating the structure and content of web pages. I have knowledge of fundamental resources for web design and animations utility variant interactions.'
      },
      {
        skill: 'css',
        description: 'CSS is a style sheet language used for describing the look and formatting of a document written in HTML. I have knowledge of fundamental resources for web design and animations utility variant interactions.'
      },
      {
        skill: 'javascript',
        description: 'javascript is a style sheet language used for describing the look and formatting of a document written in HTML. I have knowledge of fundamental resources for web design and animations utility variant interactions.'
      },
      {
        skill: 'php',
        description: 'php is a style sheet language used for describing the look and formatting of a document written in HTML. I have knowledge of fundamental resources for web design and animations utility variant interactions.'
      },
      {
        skill: 'mysql',
        description: 'mysql is a style sheet language used for describing the look and formatting of a document written in HTML. I have knowledge of fundamental resources for web design and animations utility variant interactions.'
      },
      {
        skill: 'vscode',
        description: 'vscode is a style sheet language used for describing the look and formatting of a document written in HTML. I have knowledge of fundamental resources for web design and animations utility variant interactions.'
      },
      {
        skill: 'git',
        description: 'git is a style sheet language used for describing the look and formatting of a document written in HTML. I have knowledge of fundamental resources for web design and animations utility variant interactions.'
      },
      {
        skill: 'photoshop',
        description: 'photoshop is a style sheet language used for describing the look and formatting of a document written in HTML. I have knowledge of fundamental resources for web design and animations utility variant interactions.'
      }
    ];

    function createHTMLElementsForMySkills(skillName, description) {
        const skillElement = $('<div>').addClass('skill_observation').addClass(`${skillName}SkillActive`);
        const contentElement = $('<div>').addClass('content').addClass(skillName);
        const descriptionElement = $('<p>').text(description);
      
        contentElement.append(descriptionElement);
        skillElement.append(contentElement);
        $('#aboutMySkill').html(skillElement);

    }
    
    // Renderizar a primeira skill ao carregar a página
    const firstSkill = mySkills[0];
    createHTMLElementsForMySkills(firstSkill.skill, firstSkill.description);
    
    // Adicionar função para retornar skill com base no atributo data
    $('.knowledge').on('click', function() {
        $('.knowledge').removeClass('SkillActive');
        $(this).addClass('SkillActive');
    
        const skillClass = $(this).data('skill-class');
        const skill = mySkills.find(function(item) {
            return item.skill === skillClass;
        });
    
        if (skill) {
            const { skill: skillName, description } = skill;
            createHTMLElementsForMySkills(skillName, description);
        }
    });
    


});

  
  