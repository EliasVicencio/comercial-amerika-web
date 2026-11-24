/* ============================================
   GALERÍA DE MARCAS (marcas.html)
   Cargar DESPUÉS de main.js. No depende de librerías.
   Hace 3 cosas: traduce sus textos (claves bg.*),
   cambia entre acordeón y mosaico, y abre la ficha de cada marca.
   ============================================ */
(function () {
  // ---------- 1) Textos propios de esta página (ES / EN) ----------
  const T = {
  "es": {
    "bg.badge": "Portafolio exclusivo Chile",
    "bg.filters.label": "Filtrar por categoría",
    "bg.view.label": "Cambiar vista de la galería",
    "bg.view.accordion": "Acordeón",
    "bg.view.grid": "Mosaico",
    "bg.open": "Ver ficha completa",
    "bg.open.sr": "Ver ficha de",
    "bg.details": "Ver detalles",
    "bg.close": "Cerrar",
    "bg.modal.about": "Sobre la marca",
    "bg.modal.origin": "Origen",
    "bg.modal.maker": "Fabricante",
    "bg.modal.dist": "Distribución",
    "bg.modal.dist.val": "Exclusiva en Chile",
    "bg.modal.flavors": "Sabores",
    "bg.modal.page": "Ver página de la marca",
    "bg.modal.cta": "¿Interesado en comercializar esta marca?",
    "bg.modal.btn": "Consultar por esta marca",
    "bg.country.br": "Brasil",
    "bg.country.es": "España",
    "bg.about.drinkball": "Cócteles listos para disfrutar, directo desde Brasil. De Comary, fabricante con más de 70 años de historia (1952).",
    "bg.about.pinkmoon": "Frisante de Comary, Brasil. Lema de la marca: “Experiencia y estilo”.",
    "bg.about.phantom": "Bebida energética para deportistas y consumidores en general.",
    "bg.about.cacaolat": "Creada en 1933 en Barcelona, es considerada uno de los primeros batidos de cacao industrializados del mundo.",
    "bg.about.myfoods": "Línea de alimentos con foco en alimentación sin gluten.",
    "bg.about.topk9": "Productos para mascotas, con foco en alimentos y accesorios para perros y gatos."
  },
  "en": {
    "bg.badge": "Exclusive portfolio · Chile",
    "bg.filters.label": "Filter by category",
    "bg.view.label": "Change gallery view",
    "bg.view.accordion": "Accordion",
    "bg.view.grid": "Grid",
    "bg.open": "View full profile",
    "bg.open.sr": "Open profile:",
    "bg.details": "View details",
    "bg.close": "Close",
    "bg.modal.about": "About the brand",
    "bg.modal.origin": "Origin",
    "bg.modal.maker": "Manufacturer",
    "bg.modal.dist": "Distribution",
    "bg.modal.dist.val": "Exclusive in Chile",
    "bg.modal.flavors": "Flavors",
    "bg.modal.page": "Visit the brand page",
    "bg.modal.cta": "Interested in selling this brand?",
    "bg.modal.btn": "Ask about this brand",
    "bg.country.br": "Brazil",
    "bg.country.es": "Spain",
    "bg.about.drinkball": "Ready-to-enjoy cocktails, straight from Brazil. From Comary, a manufacturer with more than 70 years of history (1952).",
    "bg.about.pinkmoon": "Frisante (lightly sparkling) from Comary, Brazil. Brand tagline: “Experience and style”.",
    "bg.about.phantom": "Energy drink for athletes and consumers in general.",
    "bg.about.cacaolat": "Created in 1933 in Barcelona, it is considered one of the first industrialized cocoa milkshakes in the world.",
    "bg.about.myfoods": "Food line focused on gluten-free eating.",
    "bg.about.topk9": "Pet products, focused on food and accessories for dogs and cats."
  }
};

  function applyLang(lang) {
    const d = T[lang] || T.es;
    document.querySelectorAll('[data-i18n^="bg."]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (d[k] !== undefined) el.innerHTML = d[k];
    });
    document.querySelectorAll('[data-i18n-aria-label^="bg."]').forEach(el => {
      const k = el.getAttribute('data-i18n-aria-label');
      if (d[k] !== undefined) el.setAttribute('aria-label', d[k]);
    });
  }

  function init() {
    applyLang(localStorage.getItem('amerika-lang') || 'es');
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.addEventListener('click', () => applyLang(b.dataset.lang)));
    document.querySelectorAll('[data-open]').forEach(el =>
      el.addEventListener('click', e => { e.stopPropagation(); openBrand(el.dataset.open); }));
    document.getElementById('brandClose').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); }); // clic fuera
    dialog.addEventListener('close', () => document.documentElement.classList.remove('ga-lock'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();