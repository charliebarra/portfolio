const revealElements = document.querySelectorAll('.section, .case-hero, .landing, .contact-card');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); } });
},{threshold:0.08});
revealElements.forEach(el=>{ el.classList.add('reveal'); observer.observe(el); });

const galleryButtons = document.querySelectorAll('[data-lightbox-src]');
if (galleryButtons.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close image">×</button><img alt=""><div class="lightbox-caption"></div>';
  document.body.appendChild(lightbox);
  const lightboxImg = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  const close = lightbox.querySelector('.lightbox-close');
  galleryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      lightboxImg.src = btn.dataset.lightboxSrc;
      lightboxImg.alt = btn.dataset.caption || '';
      caption.textContent = btn.dataset.caption || '';
      lightbox.classList.add('open');
    });
  });
  const closeLightbox = () => lightbox.classList.remove('open');
  close.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}
