$.fn.popOut = function() {
  $(this).addClass('zoom').css('display', 'flex')
    .find('.media-img')
    .addClass('zoom');
  $('body').css('overflow-y', 'hidden');
  return this;
};
$.fn.centerTo = function(parent) {
  if ($(parent).outerHeight() > $(window).height()) {
    $(this).css('top', `${$(window).scrollTop()}px`);
  } else {
    $(this).css('top', `${(0 - ($(window).height() - $(parent).outerHeight()) / 2)}px`);
  }
  setTimeout(() => {
    $(this).css('left', `${(0 - ($(window).width() - $(parent).outerWidth()) / 2)}px`);
  }, 15);
  return this;
};
const closeModal = () => {
  $('.modal').removeClass('zoom slideFromTop').addClass('zoom2');
  $('.modal').css('overflow-y', 'hidden');
  $('body').css('overflow-y', 'auto');
  $('.module').removeClass('fadeOut');
  setTimeout(() => {
    $('.modal').hide();
    $('.modal').removeClass('zoom2');
  }, 250);
};
$('.half.section .media').click(function() {
  $(this).siblings('.modal').popOut().centerTo('.pageScroll');
});
$('.image.modal').click(function() {
  closeModal();
  $(this).find('.media-img').removeClass('zoom');
});
$(document).keyup((e) => {
  if (e.which === 27) {
    if ($('.image.modal').is(':visible')) {
      closeModal();
    }
  }
});
