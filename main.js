// Phone Navbar Toggle

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    // Toggle between max-h-0 and max-h-[500px] for smooth height transition
    if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
      menu.style.maxHeight = "500px"; // Set a large enough height for smooth transition
    } else {
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
