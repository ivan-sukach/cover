const button_modal = document.querySelectorAll('.button_modal');
const close_modal = document.querySelectorAll('.modal_close');

button_modal.forEach(element => {
   element.addEventListener('click', openModal);
});

close_modal.forEach(element => {
   element.addEventListener('click', closeModal);
});

function openModal() {
   let id_modal = this.getAttribute('data-id');
   document.querySelector(`#${id_modal}`).classList.add('active');
}

function closeModal() {
   this.closest('.modal').classList.remove('active');
}