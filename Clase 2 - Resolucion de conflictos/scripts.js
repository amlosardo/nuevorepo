document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario
    const form = document.getElementById("contact-form");
  
    // Escuchar el evento submit del formulario
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
  
      // Obtener los valores de los campos del formulario
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Aquí puedes agregar la lógica para enviar los datos del formulario a través de AJAX o realizar cualquier otra acción que desees
  
      // Ejemplo de impresión de los valores en la consola
      console.log("Nombre:", name);
      console.log("Email:", email);
      console.log("Mensaje:", message);
  
      // Restablecer el formulario después de enviar
      form.reset();
    });
  });