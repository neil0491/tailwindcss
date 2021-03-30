module.exports = new Swiper('.slide-testimonies', {
    slidesPerView: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.next-testimonial',
      prevEl: '.prev-testimonial',
    },
  })
  