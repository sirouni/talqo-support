(() => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      }
    }, {threshold: 0.08});
    document.documentElement.classList.add('motion-ready');
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
})();
