const headerSearch = document.querySelector('.header_search');

if (headerSearch.length > 0) {
  headerSearch.addEventListener('click', openSearch);
}

function openSearch() {
  this.classList.add('active');

  document.querySelector('.header_info').classList.add('show_search');
}

function isVisible(elem) { //открыто ли условное окно
  return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

document.addEventListener('click', function (e) {
  if (!headerSearch.contains(e.target) && isVisible(headerSearch)) {
	headerSearch.classList.remove('active');
	document.querySelector('.header_info').classList.remove('show_search');
  }
});
