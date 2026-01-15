// Navigation highlighting and visibility
export function initNavigation() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  if (!header) return;

  // Get hero height for scroll detection
  const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;

  // Show/hide header and highlight active section
  function handleScroll() {
    const currentScrollY = window.pageYOffset;
    const threshold = heroHeight * 0.8;

    console.log('Scroll check:', {
      currentScrollY,
      heroHeight,
      threshold,
      shouldShow: currentScrollY > threshold
    });

    // Show header after scrolling past hero
    if (currentScrollY > threshold) {
      header.classList.add('header--visible');
      console.log('✅ Header VISIBLE - class added');
    } else {
      header.classList.remove('header--visible');
      console.log('❌ Header HIDDEN - class removed');
    }

    // Highlight active section in navigation
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (currentScrollY > sectionTop && currentScrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('nav__link--active');

          if (link.dataset.section === sectionId) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }

  // Throttle scroll events for performance
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });

      ticking = true;
    }
  });

  // Initial call
  handleScroll();
}
