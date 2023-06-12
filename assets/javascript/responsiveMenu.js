function menuShow() {
    let menuMobile = $('.mobile-menu');
    let icon = $('.icon');
  
    if (menuMobile.hasClass('open')) {
        menuMobile.removeClass('open');
        icon.attr('src', 'assets/images/menu-hamburger-svgrepo-com.svg');

    } else {
        menuMobile.addClass('open');
        icon.attr('src', 'assets/images/close-x-svgrepo-com.svg');
    }
  }
  