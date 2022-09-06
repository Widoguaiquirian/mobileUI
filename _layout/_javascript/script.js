'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const contents = document.querySelectorAll('.phone .content');
const items = document.querySelectorAll('nav ul li');

items.forEach(function (item, idx) {
  item.addEventListener('click', function () {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach(function (content) {
    content.classList.remove('show');
  });
}

function hideAllItems() {
  items.forEach(function (item) {
    item.classList.remove('active');
  });
}
