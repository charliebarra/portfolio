const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".case-gallery img, .card-sheet-grid img, .project-card img, .feature-card img").forEach((img) => {
  img.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.classList.add("open");
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("open");
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
    }
  });
}
