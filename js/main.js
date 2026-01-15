// Main entry point - imports and initializes all modules
import { initSmoothScroll } from './modules/scroll.js';
import { initModal } from './modules/modal.js';
import { initNavigation } from './modules/navigation.js';

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initModal();
  initNavigation();

  console.log('Marina Portfolio initialized ✨');
});
