document.getElementById("quiz").addEventListener("click", function () {
  const checked = document.querySelector('input[name="playlist"]:checked')
    .value;
  document.querySelector(`#recommendation #based`).style.display = 'inline';
  document.querySelectorAll(`#recommendation a`).forEach(function(item) {
    item.style.display = 'none';
  });
  document.querySelector(`#recommendation #${checked}`).style.display = 'inline';
});