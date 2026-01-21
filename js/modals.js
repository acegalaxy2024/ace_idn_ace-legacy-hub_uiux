/**
 * Game Portal - Modal Controller
 * Handles all modal dialogs and popups
 */

/**
 * Show a generic modal with content
 * @param {string} type - Modal type (shop, settings, etc.)
 */
function showModal(type) {
  const modal = document.getElementById('generic-modal');
  const title = document.getElementById('modal-title');
  const content = document.getElementById('modal-content');

  const data = modalData[type] || { title: type.toUpperCase(), content: '<p style="color:white;">Content</p>' };
  title.textContent = data.title;
  content.innerHTML = data.content;

  modal.classList.add('active');
}

/**
 * Show exit confirmation modal
 */
function showExitModal() {
  document.getElementById('exit-modal').classList.add('active');
}

/**
 * Close modal when clicking overlay
 * @param {Event} event - Click event
 */
function closeModal(event) {
  if (event.target.classList.contains('modal-overlay')) {
    closeAllModals();
  }
}

/**
 * Close all active modals
 */
function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
}
