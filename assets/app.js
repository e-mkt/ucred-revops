document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const isHidden = target.hasAttribute('hidden');
      if (isHidden) {
        target.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        target.setAttribute('hidden', 'hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const sections = [...document.querySelectorAll('section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];

  const activateLink = () => {
    const position = window.scrollY + 120;
    let current = sections[0]?.id || '';

    sections.forEach((section) => {
      if (section.offsetTop <= position) current = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  };

  activateLink();
  window.addEventListener('scroll', activateLink, { passive: true });
});
