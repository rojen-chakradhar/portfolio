const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
	draggable: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});