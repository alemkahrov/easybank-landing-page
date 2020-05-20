let toggleBtn = document.querySelector('.toggle-btn');
let modal = document.querySelector('.modal');
let open = false

function toggleModal() {
 modal.classList.toggle("show-modal");
 toggleBtn.classList.toggle("close");
 if (toggleBtn.classList.contains("close")) {
  toggleBtn.style.content = "url(../images/icon-close.svg)";
 } else {
  toggleBtn.style.content = "url(../images/icon-hamburger.svg)";
 }
}

function windowOnClick(event) {
 if (event.target === modal) {
  toggleModal();
 }
}

toggleBtn.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);