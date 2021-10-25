new Vivus('move', {
    type: 'scenario-sync',
    duration: 250,
    forceRender: false,
    animTimingFunction: Vivus.EASE
  })

var hamb = document.querySelector('.hamburger');

hamb.onclick = function () {
     hamb.classList.toggle('toggle');
}