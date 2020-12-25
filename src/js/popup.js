const buttonPopup = document.querySelectorAll('.button_popup'),
      closePopup = document.querySelectorAll('.popup_close'),
      body = document.querySelector('body');

buttonPopup.forEach(element => {
   element.addEventListener('click', openModal);
});

closePopup.forEach(element => {
   element.addEventListener('click', closeModal);
});

function openModal() {
   const id_popup = this.getAttribute('data-id');
   document.querySelector(`#${id_popup}`).classList.add('active');
   body.classList.add('overflow-hidden');
}

function closeModal() {
   body.classList.remove('overflow-hidden');
   this.closest('.js-popup').classList.remove('active');
}


function initCookies(){
   const cookiesPopup = document.querySelector('.cookies_popup'),
         closeCookiesPopup = document.querySelector('.cookies_close');

   closeCookiesPopup.addEventListener('click', ()=>{
      sessionStorage.setItem('showPopupCookies', '1');
   })

   if( sessionStorage.getItem('showPopupCookies') ){
      cookiesPopup.classList.remove('active');
   } else{
      setTimeout(()=>{
         cookiesPopup.classList.add('active');
      }, 2000);
   }
}
initCookies();
