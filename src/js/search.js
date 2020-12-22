const header_search = document.querySelector('.header_search');

header_search.addEventListener('click', openSearch);

function openSearch() {
   this.classList.add('active');

   document.querySelector('.header_info').classList.add('show_search');
}

function isVisible(elem) { //открыто ли условное окно
   return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
}

document.addEventListener('click', function (e){
   if (!header_search.contains(e.target) && isVisible(header_search)) {
      header_search.classList.remove('active');
      document.querySelector('.header_info').classList.remove('show_search');
   }
});