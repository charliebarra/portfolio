
document.addEventListener("DOMContentLoaded", () => {
  let lightbox = document.querySelector("#siteLightbox");

  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "siteLightbox";
    lightbox.className = "lightbox";
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="Close image">×</button>
      <div class="lightbox-inner">
        <img alt="">
        <p class="lightbox-caption"></p>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const image = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    image.removeAttribute("src");
  }

  document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
    button.addEventListener("click", () => {
      image.src = button.dataset.lightboxSrc;
      image.alt = button.querySelector("img")?.alt || "";
      caption.textContent = button.dataset.caption || "";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
});
