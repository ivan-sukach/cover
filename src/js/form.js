const button_edit = document.querySelectorAll('.edit_button');
const button_save = document.querySelectorAll('.save_button');

button_edit.forEach(element => {
   element.addEventListener('click', editForm);
});

button_save.forEach(element => {
   element.addEventListener('click', saveForm);
});

function editForm(params) {
   let id_form = this.getAttribute('data-id');
   let form_input = document.querySelector(`#${id_form}`).querySelectorAll('input');

   form_input.forEach(element => {
      element.removeAttribute('readonly');
   });

   this.hidden = true;
   let siblings = getSiblings(this);

   siblings.forEach(elementSiblings => {
      if(elementSiblings.classList.contains('save_button')) {
         elementSiblings.hidden = false;
      }
   });
}

function saveForm(params) {
   let id_form = this.getAttribute('data-id');
   let form_input = document.querySelector(`#${id_form}`).querySelectorAll('input');

   form_input.forEach(element => {
      element.setAttribute('readonly', true);
   });

   this.hidden = true;
   let siblings = getSiblings(this);

   siblings.forEach(elementSiblings => {
      if(elementSiblings.classList.contains('edit_button')) {
         elementSiblings.hidden = false;
      }
   });
}