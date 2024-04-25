document.addEventListener("DOMContentLoaded", function() {
// Función para mostrar el fondo semi-transparente del menú
function showMenuBackground() {
    var menu = document.getElementById("menu");
    var background = document.createElement("div");
    background.id = "menuBackground";
    background.style.position = "fixed";
    background.style.top = "0";
    background.style.left = "0";
    background.style.width = "100%";
    background.style.height = "100%";
    background.style.backgroundColor = "rgba(10, 25, 47, 0.8)"; /* Color de fondo semi-transparente */
    document.body.appendChild(background);
  }
  
  // Función para ocultar el fondo semi-transparente del menú
  function hideMenuBackground() {
    var background = document.getElementById("menuBackground");
    if (background) {
      background.parentNode.removeChild(background);
    }
  }

  // Enlace "imagen"
  document.addEventListener("DOMContentLoaded", function() {
    // Obtener la referencia a la imagen y agregarle el evento de clic
    var imagen = document.getElementById("imagen");
    imagen.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Obtener la posición de la section1
        var section0 = document.getElementById("section1");
        var section0Position = section0.getBoundingClientRect().top;

        // Realizar el desplazamiento suave hacia la section0
        window.scrollTo({
            top: section0Position,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});


    // Enlace "Sobre mí"
    document.querySelector('#sobre-mi-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Obtener la posición de la section2
        const section1 = document.getElementById('section2');
        const section1Position = section1.getBoundingClientRect().top + window.pageYOffset; // Añade el desplazamiento vertical actual

        // Realizar el desplazamiento suave hacia la section1
        window.scrollTo({
            top: section1Position,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    // Enlace "Experiencia"
    document.querySelector('#experiencia-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Obtener la posición de la section3
        const section3 = document.getElementById('section3');
        const section3Position = section3.getBoundingClientRect().top + window.pageYOffset; // Añade el desplazamiento vertical actual

        // Realizar el desplazamiento suave hacia la section3
        window.scrollTo({
            top: section3Position,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    // Enlace "Proyectos"
    document.querySelector('#proyectos-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Obtener la posición de la section4
        const section3 = document.getElementById('section4');
        const section3Position = section3.getBoundingClientRect().top + window.pageYOffset; // Añade el desplazamiento vertical actual

        // Realizar el desplazamiento suave hacia la section3
        window.scrollTo({
            top: section3Position,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    // Enlace "Contacto"
    document.querySelector('#contacto-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Obtener la posición de la section5
        const section4 = document.getElementById('section5');
        const section4Position = section4.getBoundingClientRect().top + window.pageYOffset; // Añade el desplazamiento vertical actual

        // Realizar el desplazamiento suave hacia la section4
        window.scrollTo({
            top: section4Position,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    // Seleccionar todos los elementos .info y los botones
const infoElements = document.querySelectorAll(".info");
const buttons = document.querySelectorAll(".experience-buttons button");

// Función para ocultar todas las secciones de información
function ocultarInfo() {
  infoElements.forEach((info) => {
    info.classList.remove("show");
  });
}

// Función para mostrar una sección de información específica
function mostrarInfo(id) {
  const infoElement = document.getElementById(id);
  if (infoElement) {
    ocultarInfo();
    infoElement.classList.add("show");
  }
}

// Agregar event listeners a los botones
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    mostrarInfo(`info-${index + 1}`);
  });
});

// Ocultar todas las secciones de información al cargar la página
ocultarInfo();
});

