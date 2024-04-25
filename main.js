const botones = document.querySelectorAll('.teclado input[type="button"]');

botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      document.querySelector('input[type="tel"]').value += boton.value;
    });
  });
  


