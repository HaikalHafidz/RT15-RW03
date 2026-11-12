document.querySelectorAll('.yr').forEach(e => e.textContent = new Date().getFullYear());

// Lightbox galeri (Bootstrap modal)
const modalEl = document.getElementById('lightbox');
if (modalEl) {
  const img = modalEl.querySelector('img');
  const cap = modalEl.querySelector('.cap');
  document.querySelectorAll('.gal').forEach(g => {
    g.addEventListener('click', () => {
      img.src = g.dataset.full || g.src;
      img.alt = g.alt;
      cap.textContent = g.alt;
      bootstrap.Modal.getOrCreateInstance(modalEl).show();
    });
  });
}
