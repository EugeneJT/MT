const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 'auto',
    parallax: true,
    initialSlide: 1,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});