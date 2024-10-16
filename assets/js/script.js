// add active class to the currently clicked link on the navbar 
document.addEventListener('DOMContentLoaded', () => {
    // Select the parent container of the nav links
    const navContainer = document.querySelector('.navbar-nav');
  
    // Check if the container exists
    if (navContainer) {
      console.log("Navbar container found");
  
      navContainer.addEventListener('click', function (event) {
        console.log("Nav container clicked");
  
        // Check if the clicked element is a link with the class 'nav-link'
        if (event.target.classList.contains('nav-link')) {
          console.log("Nav link clicked:", event.target);
  
          // Remove the "active" class from all links
          navContainer.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            console.log("Removed active class from:", link);
          });
  
          // Add "active" class to the clicked link
          event.target.classList.add('active');
          console.log("Added active class to:", event.target);
        } else {
          console.log("Clicked element is not a nav-link");
        }
      });
    } else {
      console.log("Navbar container not found");
    }
  });
  

  document.querySelectorAll(".slider-container ").forEach((sliderContainer) => {
    let currentSlideIndex = 0;
    const slides = sliderContainer.querySelectorAll(".slider-item");
    const bulletContainer = sliderContainer.querySelector(".bullet-container");
    const prevButton = sliderContainer.querySelector(".slider-control.prev");
    const nextButton = sliderContainer.querySelector(".slider-control.next");
  
    // Only proceed if bulletContainer exists
    if (bulletContainer) {
        // Function to create bullets dynamically for each slider
        function createBullets() {
            slides.forEach((_, index) => {
                const bullet = document.createElement("span");
                bullet.classList.add("bullet");
                if (index === 0) bullet.classList.add("active");
                bullet.addEventListener("click", () => currentSlide(index));
                bulletContainer.appendChild(bullet);
            });
        }
  
        createBullets(); // Call this function to create bullets for each slider
    } else {
        console.warn("bulletContainer not found. Check the HTML structure.");
    }
  
    const bullets = bulletContainer ? bulletContainer.querySelectorAll(".bullet") : [];
  
    // Function to show slide based on index for the specific slider
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        bullets.forEach(bullet => bullet.classList.remove("active"));
  
        slides[index].classList.add("active");
        if (bullets[index]) bullets[index].classList.add("active");
    }
  
    // Function for next slide with loop functionality
    nextButton?.addEventListener("click", () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
  
        // Add active class to the next button and remove from the prev button
        nextButton.classList.add("active");
        prevButton.classList.remove("active");
    });
  
    // Function for previous slide with loop functionality
    prevButton?.addEventListener("click", () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
  
        // Add active class to the prev button and remove from the next button
        prevButton.classList.add("active");
        nextButton.classList.remove("active");
    });
  
    // Function to set current slide based on bullet click for the specific slider
    function currentSlide(index) {
        currentSlideIndex = index;
        showSlide(currentSlideIndex);
  
        // Remove active class from both prev and next buttons when a bullet is clicked
        prevButton.classList.remove("active");
        nextButton.classList.remove("active");
    }
  });
  
// to add active class to the clicked tab 
  // Get all buttons with class 'nav-link'
  const buttons = document.querySelectorAll('.nav-link');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove 'active' class from all buttons
          buttons.forEach(btn => btn.classList.remove('active'));
          // Add 'active' class to the clicked button
          button.classList.add('active');
      });
  });

  // swiper-slider for tabs 
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
// swiper for our-services in mobile screen 
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
    },  on: {
      init: function () {
        // Make the prev button active by default
        document.querySelector('.swiper-button-prev').classList.add('active');
      },
      slideChange: function () {
        // Logic for disabling based on beginning and end states (if needed)
        if (this.isBeginning) {
          document.querySelector('.swiper-button-prev').classList.add('inactive');
        } else {
          document.querySelector('.swiper-button-prev').classList.remove('inactive');
        }
  
        if (this.isEnd) {
          document.querySelector('.swiper-button-next').classList.add('inactive');
        } else {
          document.querySelector('.swiper-button-next').classList.remove('inactive');
        }
      }
    }
  });
// Add event listeners to toggle the active class between buttons
document.querySelector('.swiper-button-prev').addEventListener('click', function () {
  document.querySelector('.swiper-button-prev').classList.add('active');
  document.querySelector('.swiper-button-next').classList.remove('active');
});

document.querySelector('.swiper-button-next').addEventListener('click', function () {
  document.querySelector('.swiper-button-next').classList.add('active');
  document.querySelector('.swiper-button-prev').classList.remove('active');
});