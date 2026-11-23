(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const coreUrl = 'https://cdn.jsdelivr.net/npm/gsap@3.15.1/dist/gsap.min.js';
  const triggerUrl = 'https://cdn.jsdelivr.net/npm/gsap@3.15.1/dist/ScrollTrigger.min.js';

  function loadScript(src) {
    return new Promise(resolve => {
      const script = document.createElement('script');
      const timeout = window.setTimeout(() => resolve(false), 3500);
      script.src = src;
      script.async = true;
      script.onload = () => { window.clearTimeout(timeout); resolve(true); };
      script.onerror = () => { window.clearTimeout(timeout); resolve(false); };
      document.head.append(script);
    });
  }

  function animateHero() {
    if (window.scrollY > 40 || performance.now() > 2200) return;
    const parts = document.querySelectorAll('.hero-content .eyebrow, .hero-kicker, .hero-content h1, .hero-content h2, .hero-intro, .hero-tags, .scroll-cue');
    if (parts.length) window.gsap.from(parts, {
      y: 18,
      autoAlpha: 0,
      duration: 0.68,
      stagger: 0.075,
      ease: 'power3.out',
      clearProps: 'transform,opacity,visibility'
    });
  }

  function animateSectionTitles() {
    if (!window.ScrollTrigger) return;
    window.gsap.registerPlugin(window.ScrollTrigger);
    document.querySelectorAll('.main-section .section-cover-copy').forEach(copy => {
      window.gsap.from(copy.children, {
        y: 18,
        autoAlpha: 0,
        duration: 0.62,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: copy,
          start: 'top 84%',
          once: true
        }
      });
    });
    window.ScrollTrigger.refresh();
  }

  loadScript(coreUrl).then(loaded => {
    if (!loaded || !window.gsap) return;
    animateHero();
    loadScript(triggerUrl).then(pluginLoaded => {
      if (pluginLoaded && window.ScrollTrigger) animateSectionTitles();
    });
  });
})();
