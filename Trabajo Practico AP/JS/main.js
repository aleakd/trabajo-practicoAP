function agradecer_mensaje(){

const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      alert('Gracias ' + nombre + ', hemos recibido tu consulta.');
    });
}