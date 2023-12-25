  // Función para manejar el desplazamiento suave al hacer clic en enlaces

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substr(1); // Obtiene el ID de destino
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          behavior: 'smooth',
          top: targetElement.offsetTop - 60, // Ajusta el desplazamiento si es necesario
        });
      }
    });
  });

  
  const menuHamburguesa = document.getElementById('menu-hamburguesa');
  const navegacion = document.querySelector('ul.navegacion');
  
  menuHamburguesa.addEventListener('click', () => {
    navegacion.classList.toggle('mostrar');
  });
  