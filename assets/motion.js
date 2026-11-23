(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  if (window.scrollY < 40 && performance.now() < 2200) {
    const heroParts = document.querySelectorAll('.hero-content .eyebrow, .hero-kicker, .hero-content h1, .hero-content h2, .hero-intro, .hero-tags, .scroll-cue');
    gsap.from(heroParts, {
      y: 18,
      autoAlpha: 0,
      duration: 0.68,
      stagger: 0.075,
      ease: 'power3.out',
      clearProps: 'transform,opacity,visibility'
    });
  }

  document.querySelectorAll('.main-section .section-cover-copy').forEach(copy => {
    gsap.from(copy.children, {
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
  ScrollTrigger.refresh();
})();
