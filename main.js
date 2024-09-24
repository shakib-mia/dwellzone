// import Swiper JS
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
// For Smooth Scroll
import Lenis from "lenis";

// Phone Navbar Toggle

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    // Toggle between max-h-0 and max-h-[500px] for smooth height transition
    if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
      menu.style.maxHeight = "500px"; // Set a large enough height for smooth transition
      setTimeout(() => menu.classList.add("shadow-lg"), 200);
    } else {
      setTimeout(() => menu.classList.remove("shadow-lg"), 200);
      menu.style.maxHeight = "0px"; // Collapse the menu
    }
  });
});

// Hero video play functionality

const playButton = document.getElementById("play-button");
const videoOverlay = document.getElementById("video-overlay");
const closeButton = document.getElementById("close-button");
const videoFrame = document.getElementById("video-frame");

playButton.addEventListener("click", () => {
  videoOverlay.classList.remove("hidden");
  videoOverlay.classList.add("flex");
  // Start the video automatically (uncomment if needed)
  videoFrame.src += "?autoplay=1";
});

closeButton.addEventListener("click", () => {
  videoOverlay.classList.remove("flex");
  videoOverlay.classList.add("hidden");
  // Stop the video (uncomment if needed)
  videoFrame.src = videoFrame.src.replace("?autoplay=1", "");
});

videoOverlay.addEventListener("click", (e) => {
  // Close the overlay if the click is outside the video iframe
  if (!videoFrame.contains(e.target) && !closeButton.contains(e.target)) {
    videoOverlay.classList.add("hidden");
  }
});

// Testimonial Swiper

new Swiper(".swiper", {
  modules: [Navigation, Autoplay],
  loop: true, // enabling infinite loop
  autoplay: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

// Smooth Scroll Functionality
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.getElementById("year").innerText = new Date().getFullYear();

// Navbar scroll direction tracking logic
const navbar = document.getElementById("navbar");
navbar.style.position = "fixed";
navbar.style.top = `0px`;

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = lenis.scroll || window.pageYOffset; // Using Lenis scroll

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;

    // Hide navbar on scroll down
    if (scrollDirection === "down") {
      navbar.style.top = "-10rem";
      navbar.style.transition = "all 0.5s ease";
    } else {
      if (currentScrollY > 0) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = `0px`;
        navbar.style.transition = "all 0.5s ease";
      }
    }

    // Box shadow and fixed position on scroll
    if (currentScrollY > 10) {
      navbar.style.boxShadow = "0 0 20px 0 #2B245D21";
      navbar.style.position = "fixed";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.top = `0px`;
    }
  }

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
