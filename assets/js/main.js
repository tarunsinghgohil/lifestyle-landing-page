(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.getElementById('newsletterForm');
  const email = document.getElementById('email');
  const success = document.getElementById('newsletterSuccess');
  const emailError = document.getElementById('emailError');

  if (!form || !email || !success) return;

  const setValidUI = () => {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    if (emailError) emailError.style.display = 'none';
  };

  const setInvalidUI = () => {
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    if (emailError) emailError.style.display = 'block';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    success.classList.add('d-none');
    if (emailError) emailError.style.display = 'none';

    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      setInvalidUI();
      email.focus();
      return;
    }

    setValidUI();
    success.classList.remove('d-none');

    // Keep it demo-only: no network request.
    form.reset();
    email.classList.remove('is-valid');
  });

  email.addEventListener('input', () => {
    if (!email.value) {
      email.classList.remove('is-valid', 'is-invalid');
      if (emailError) emailError.style.display = 'none';
      return;
    }

    if (email.checkValidity()) {
      email.classList.remove('is-invalid');
    }
  });

  // Navbar toggler icon change
  const navbarToggler = document.querySelector('.navbar-toggler');
  const menuIcon = document.getElementById('menuIcon');
  const navbarCollapse = document.getElementById('mainNav');

  if (navbarToggler && menuIcon && navbarCollapse) {
    navbarCollapse.addEventListener('show.bs.collapse', () => {
      menuIcon.classList.remove('bi-list');
      menuIcon.classList.add('bi-x-lg');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', () => {
      menuIcon.classList.remove('bi-x-lg');
      menuIcon.classList.add('bi-list');
    });
  }
})();
