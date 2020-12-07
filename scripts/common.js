/***
 * Modal Creation Handler
* @param {string} modalId - This is accepting the ID of the modal
 */
function createModal(modalId) {
  const modal = document.getElementById(modalId);
  const span = document.querySelectorAll(`#${modalId} .modal-close-icon`)[0];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
/***
 * Close Modal Handler
* @param {string} modalId - This is accepting the ID of the modal
 */
function clsoseModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function signUp() {
  const errorMessageNodes = document.querySelectorAll('.modal-body .error-message');
  errorMessageNodes.forEach(e => e.style.display = "none");

  const showError = (id) => {
    errorMessageNodes[id].style.display = 'block';
  }

  const name = document.querySelector("#sign-up-modal .modal-body input[name='name']").value;
  if(!name) {
    showError(0);
    return;
  }
  const userName = document.querySelector("#sign-up-modal .modal-body input[name='username']").value;
  if(!userName) {
    showError(1);
    return;
  }
  const password = document.querySelector("#sign-up-modal .modal-body input[name='password']").value;
  if(!password) {
    showError(2);
    return;
  }
  const confirmPassword = document.querySelector("#sign-up-modal .modal-body input[name='confirm-password']").value;
  if(!confirmPassword) {
    showError(3);
    return;
  }
  if(password !== confirmPassword) {
    showError(4);
    return;
  }
}

function signIn() {
  const errorMessageNodes = document.querySelectorAll('#sign-in-modal .modal-body .error-message');
  errorMessageNodes.forEach(e => e.style.display = "none");

  const showError = (id) => {
    errorMessageNodes[id].style.display = 'block';
  }

  const name = document.querySelector("#sign-in-modal .modal-body input[name='username']").value;
  if(!name) {
    showError(0);
    return;
  }

  const password = document.querySelector("#sign-in-modal .modal-body input[name='password']").value;
  if(!password) {
    showError(1);
    return;
  }
}

function signUpNavFromSignIn() {
  clsoseModal('sign-in-modal');
  createModal('sign-up-modal');
}
