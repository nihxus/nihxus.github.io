(function () {
    const toggle = document.querySelector('.nav-toggle');
    const menu   = document.querySelector('#site-nav');
  
    if (!toggle || !menu) return;
  
    // close the menu
    function closeMenu() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  
    // open/close on button
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  
    // close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  
    // close after clicking a link
    menu.addEventListener('click', (e) => {
      if (e.target.matches('a')) closeMenu();
    });
  })();
  