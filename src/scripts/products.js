function initProductFilter() {
  var searchInput = document.querySelector('.products-search');
  var productItems = document.querySelectorAll('.product-item');

  if (!searchInput || productItems.length === 0) return;

  searchInput.addEventListener('input', function () {
    var query = searchInput.value.toLowerCase().trim();

    productItems.forEach(function (item) {
      var name = item.querySelector('h4');
      var description = item.querySelector('p');

      var nameText = name ? name.textContent.toLowerCase() : '';
      var descText = description ? description.textContent.toLowerCase() : '';

      var matches = nameText.includes(query) || descText.includes(query);

      if (matches) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });

    updateEmptyState(query, productItems);
  });
}

function updateEmptyState(query, productItems) {
  var productsContainer = document.querySelector('.products');
  var emptyMessage = document.querySelector('.products-empty');

  var visibleCount = 0;
  productItems.forEach(function (item) {
    if (item.style.display !== 'none') {
      visibleCount++;
    }
  });

  if (visibleCount === 0 && query.length > 0) {
    if (!emptyMessage) {
      emptyMessage = document.createElement('p');
      emptyMessage.classList.add('products-empty');
      emptyMessage.textContent = 'Nenhum produto encontrado para "' + query + '".';
      productsContainer.appendChild(emptyMessage);
    } else {
      emptyMessage.textContent = 'Nenhum produto encontrado para "' + query + '".';
    }
  } else {
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }
}
