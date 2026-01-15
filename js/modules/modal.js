// Modal control with focus trap and accessibility
export function initModal() {
  const modal = document.getElementById('projects-modal');
  if (!modal) return;

  const openTriggers = document.querySelectorAll('[data-modal="projects"]');
  const closeTriggers = modal.querySelectorAll('[data-close-modal]');
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  let lastFocusedElement = null;

  // Open modal
  function openModal() {
    lastFocusedElement = document.activeElement;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden'; // Prevent body scroll

    // Focus first focusable element
    const firstFocusable = modal.querySelector(focusableElements);
    if (firstFocusable) firstFocusable.focus();

    // Trap focus
    trapFocus(modal);
  }

  // Close modal
  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = ''; // Restore body scroll

    // Restore focus
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // Focus trap
  function trapFocus(element) {
    const focusables = Array.from(element.querySelectorAll(focusableElements));
    const firstFocusable = focusables[0];
    const lastFocusable = focusables[focusables.length - 1];

    function handleTabKey(e) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }

    element.addEventListener('keydown', handleTabKey);
  }

  // Event listeners
  openTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeTriggers.forEach(trigger => {
    trigger.addEventListener('click', closeModal);
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // Category navigation
  const categoryLinks = modal.querySelectorAll('[data-category]');
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      closeModal();

      // Show corresponding gallery section
      const gallerySection = document.getElementById(category);
      if (gallerySection) {
        gallerySection.removeAttribute('hidden');
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Back button functionality for galleries
  const backButtons = document.querySelectorAll('[data-back]');
  backButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.back;

      // Hide current gallery
      const currentGallery = button.closest('.gallery');
      if (currentGallery) {
        currentGallery.setAttribute('hidden', '');
      }

      // Show modal or scroll to target
      if (target === 'projects') {
        openModal();
      }
    });
  });
}
