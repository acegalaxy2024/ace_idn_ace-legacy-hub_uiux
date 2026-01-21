/**
 * Game Portal - Main Application
 * Initializes the application and sets up event listeners
 */

// Keyboard navigation handler
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const activeModal = document.querySelector('.modal-overlay.active');
    if (activeModal) {
      closeAllModals();
    } else if (navigationStack.length > 1) {
      if (navigationStack[navigationStack.length - 1] === 'gameplay') {
        showExitModal();
      } else {
        navigateBack();
      }
    }
  }
});

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  console.log('Game Portal Prototype Loaded!');
  console.log('Navigation: Click game tiles to navigate through the flow');
  console.log('Press ESC to go back or close modals');
});
