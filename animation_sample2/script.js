document.getElementById('btn').addEventListener('click', function() {
  document.getElementsByClassName('content')[0].classList.toggle('active');
  document.getElementsByClassName('right')[0].classList.toggle('active');
  document.getElementsByClassName('left')[0].classList.toggle('active');
})
