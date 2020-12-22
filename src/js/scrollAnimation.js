let isScrolling = false;
const needAnimateElements = document.querySelectorAll(".js-needAnimate");

let once = true;

function throttleScroll(e) {

  if (isScrolling === false) {
    window.requestAnimationFrame(()=> {
      scrolling(e);

      isScrolling = false;
    });
  }
  isScrolling = true;
}


function scrolling(e) {
  needAnimateElements.forEach(element => {
    if (isPartiallyVisible(element)) {
      element.classList.add("animate-active");
    }
  });
}

function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;
  return top + height >= 0 && height + window.innerHeight >= bottom;
}

function scrollingStart(){
  scrolling();
  window.addEventListener("scroll", throttleScroll);
}

window.addEventListener('load', ()=> {scrollingStart()})
