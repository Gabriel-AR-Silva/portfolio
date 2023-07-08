$('.navigation').on('click', scrollToIdOnClick);

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = $(event.target);
  const id = element.attr('href');
  const to = $(id).offset().top;

  $('html, body').animate({
    scrollTop: to - 80
  }, 'smooth');
}

$(window).scroll(function() {
  if ($(window).scrollTop()) {
    $('header').addClass('black');
  } else {
    $('header').removeClass('black');
  }
});
