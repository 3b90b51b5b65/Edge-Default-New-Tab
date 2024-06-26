var img = new Image();
img.src = './background-image.webp';
document.addEventListener('DOMContentLoaded', function () {
  var searchForm = document.getElementById('search-form');
  var searchInput = document.getElementById('search-input');

  searchForm.addEventListener('submit', function (event) {
    if (searchInput.value.trim() === '') {
      event.preventDefault();
    }
  });
});