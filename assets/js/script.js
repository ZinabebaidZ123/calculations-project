// Add active class to the currently clicked link on the navbar
document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.querySelector('.navbar-nav');

  if (navContainer) {
      navContainer.addEventListener('click', function (event) {
          if (event.target.classList.contains('nav-link')) {
              navContainer.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
              event.target.classList.add('active');
          }
      });
  }
});

// Handle sliders
document.querySelectorAll(".slider-container").forEach((sliderContainer) => {
  let currentSlideIndex = 0;
  const slides = sliderContainer.querySelectorAll(".slider-item");
  const bulletContainer = sliderContainer.querySelector(".bullet-container");
  const prevButton = sliderContainer.querySelector(".slider-control.prev");
  const nextButton = sliderContainer.querySelector(".slider-control.next");

  if (bulletContainer) {
      function createBullets() {
          slides.forEach((_, index) => {
              const bullet = document.createElement("span");
              bullet.classList.add("bullet");
              if (index === 0) bullet.classList.add("active");
              bullet.addEventListener("click", () => currentSlide(index));
              bulletContainer.appendChild(bullet);
          });
      }
      createBullets();
  }

  const bullets = bulletContainer ? bulletContainer.querySelectorAll(".bullet") : [];

  function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      bullets.forEach(bullet => bullet.classList.remove("active"));
      slides[index].classList.add("active");
      if (bullets[index]) bullets[index].classList.add("active");
  }

  nextButton?.addEventListener("click", () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
      nextButton.classList.add("active");
      prevButton.classList.remove("active");
  });

  prevButton?.addEventListener("click", () => {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      showSlide(currentSlideIndex);
      prevButton.classList.add("active");
      nextButton.classList.remove("active");
  });

  function currentSlide(index) {
      currentSlideIndex = index;
      showSlide(currentSlideIndex);
      prevButton.classList.remove("active");
      nextButton.classList.remove("active");
  }
});

// Add active class to clicked tab
const buttons = document.querySelectorAll('.nav-link');
if (buttons.length > 0) {
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
      });
  });
}

// Initialize Swiper slider for tabs (only if element exists)
if (document.querySelector('.mySwiper')) {
  var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: "auto",
      freeMode: true,
      scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          snapOnRelease: true,
      },
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
  });
}

// Swiper for our-services in mobile screen (only if element exists)
if (document.querySelector('.my-Swiper')) {
  var swiper = new Swiper(".my-Swiper", {
      loop: true,
      centeredSlides: false,
      spaceBetween: 30,
      slidesPerView: "auto",
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      on: {
          init: function () {
              const prevButton = document.querySelector('.swiper-button-prev');
              if (prevButton) prevButton.classList.add('active');
          },
          slideChange: function () {
              const prevButton = document.querySelector('.swiper-button-prev');
              const nextButton = document.querySelector('.swiper-button-next');

              if (this.isBeginning) {
                  prevButton?.classList.add('inactive');
              } else {
                  prevButton?.classList.remove('inactive');
              }

              if (this.isEnd) {
                  nextButton?.classList.add('inactive');
              } else {
                  nextButton?.classList.remove('inactive');
              }
          }
      }
  });

  // Add event listeners to toggle the active class between buttons
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');
  
  if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => {
          prevButton.classList.add('active');
          nextButton.classList.remove('active');
      });

      nextButton.addEventListener('click', () => {
          nextButton.classList.add('active');
          prevButton.classList.remove('active');
      });
  }
}

// Handle fullscreen menu toggle (only if elements exist)
const navbarToggler = document.querySelector('.navbar-toggler');
const fullscreenMenu = document.querySelector('.fullscreen-menu');
const closeMenuButton = document.querySelector('.close-menu');

if (navbarToggler && fullscreenMenu && closeMenuButton) {
  navbarToggler.addEventListener('click', function () {
      fullscreenMenu.classList.remove('d-none');
  });

  closeMenuButton.addEventListener('click', function () {
      fullscreenMenu.classList.add('d-none');
  });
}

// Search input handling (only if element exists)
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

if (searchInput && searchIcon) {
  searchInput.addEventListener('input', function () {
      searchIcon.style.opacity = this.value.trim() !== '' ? '0' : '1';
  });

  searchInput.addEventListener('focus', function () {
      searchIcon.style.opacity = '0';
  });

  searchInput.addEventListener('blur', function () {
      if (this.value.trim() === '') {
          searchIcon.style.opacity = '1';
      }
  });
}
