
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close image">×</button><div><img alt=""><div class="lightbox-caption"></div></div>';
  document.body.appendChild(lightbox);
  const img = lightbox.querySelector("img");
  const cap = lightbox.querySelector(".lightbox-caption");
  const close = () => lightbox.classList.remove("open");
  lightbox.querySelector("button").addEventListener("click", close);
  lightbox.addEventListener("click", e => { if(e.target === lightbox) close(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") close(); });
  document.querySelectorAll("[data-lightbox-src]").forEach(btn => btn.addEventListener("click", () => {
    img.src = btn.dataset.lightboxSrc;
    img.alt = btn.querySelector("img")?.alt || "";
    cap.textContent = btn.dataset.caption || "";
    lightbox.classList.add("open");
  }));
});
