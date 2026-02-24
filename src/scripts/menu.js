function initMenu() {
  var menuToggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');

  if (!menuToggle || !menu) return;

  menuToggle.addEventListener('click', function () {
    var isOpen = menu.classList.contains('menu--open');

    if (isOpen) {
      menu.classList.remove('menu--open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰ Menu';
    } else {
      menu.classList.add('menu--open');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.textContent = '✕ Fechar';
    }
  });
}
