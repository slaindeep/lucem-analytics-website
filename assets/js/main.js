document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP animations
  gsap.from('.main-title', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
  });

  gsap.from('.subtitle', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
  });

  // Animate service features on scroll
  gsap.from('.feature', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.features',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    }
  });

  // Handle orb info display
  const orbInfos = document.querySelectorAll('.orb-info');
  orbInfos.forEach(info => {
    gsap.from(info, {
      duration: 1,
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: info,
        start: 'top center+=200',
        toggleActions: 'play none none reverse'
      }
    });
  });
});