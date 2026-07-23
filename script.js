
document.addEventListener("DOMContentLoaded", () => {
  const footerLinks = document.querySelector(".footer-links");
  if (footerLinks && !footerLinks.querySelector("[data-site-credits-link]")) {
    const creditsLink = document.createElement("a");
    creditsLink.href = "contact.html#site-credits";
    creditsLink.textContent = "Site Credits";
    creditsLink.dataset.siteCreditsLink = "";
    footerLinks.appendChild(creditsLink);
  }

  let lastTrigger = null;
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.id = "siteLightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image">×</button>
    <div class="lightbox-inner">
      <img alt="">
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const image = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");

  function openLightbox(trigger) {
    lastTrigger = trigger;
    image.src = trigger.dataset.lightboxSrc;
    image.alt = trigger.querySelector("img")?.alt || "";
    caption.textContent = trigger.dataset.caption || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    image.removeAttribute("src");
    document.body.style.overflow = "";
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll("[data-lightbox-src]").forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
    if (event.key === "Tab" && lightbox.classList.contains("open")) {
      event.preventDefault();
      closeButton.focus();
    }
  });
});
