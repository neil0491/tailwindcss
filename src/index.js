document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navLogin = document.getElementById("navLogin");
  const hamburger = document.getElementById("hamburger");
  const navMobile = document.getElementById("nav-mobile");
  const body = document.querySelector("body");

  hiddenMenu(nav, navLogin);

  window.addEventListener("resize", (e) => {
    hiddenMenu(nav, navLogin);
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("fixed-button");
    navMobile.classList.toggle("hidden");
    body.classList.toggle("overflow-y-hidden");
    // console.log(navLogin);
  });
});

function hiddenMenu(nav, navLogin) {
  if (window.innerWidth > 1024) {
    if (
      nav.classList.contains("hidden") &&
      navLogin.classList.contains("hidden")
    ) {
      nav.classList.remove("hidden");
      navLogin.classList.remove("hidden");
    }
  } else {
    nav.classList.add("hidden");
    navLogin.classList.add("hidden");
  }
}

const testimoniesSlider = new Swiper('.slide-testimonies', {
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

const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next-hero',
    prevEl: '.prev-hero',
  },
})


const slideAround = new Swiper('.slide-around', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});
