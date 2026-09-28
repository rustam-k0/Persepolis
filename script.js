const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Beratungsanfrage: ${data.get('topic')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `E-Mail: ${data.get('email')}`,
      `Telefon: ${data.get('phone') || 'nicht angegeben'}`,
      `Thema: ${data.get('topic')}`,
      '',
      data.get('message')
    ].join('\n');
    document.querySelector('#form-status').textContent = 'Dein E-Mail-Programm wird geöffnet.';
    window.location.href = `mailto:info@fahrschule-persepolis.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
