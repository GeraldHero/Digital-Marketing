// execute script page load
window.onload = function digital_fn() {
  let toggle = document.querySelector('#nav');
  let collapse = document.querySelector('#nav .collapse');

  toggle.addEventListener('click', function (event) {
    collapse.classList.toggle('active');
  });
};
