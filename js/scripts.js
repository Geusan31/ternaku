let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });

  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("bg-white");
      indicator.classList.remove("bg-white/50");
    } else {
      indicator.classList.remove("bg-white");
      indicator.classList.add("bg-white/50");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

let autoSlideInterval = setInterval(nextSlide, 5000);

const sliderContainer = document.getElementById("slider");
sliderContainer.addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener("mouseleave", () => {
  autoSlideInterval = setInterval(nextSlide, 5000);
});

showSlide(0);

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in, .card-hover").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("shadow-xl");
  } else {
    nav.classList.remove("shadow-xl");
  }
});
