const contactForm = document.querySelector('.form-contato');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('O formulário não foi enviado porque essa página é apenas um exemplo.');
});
