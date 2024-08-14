const nombre = document.getElementById('nombre-tarea');
const fecha = document.getElementById('fecha-tarea');
const autor = document.getElementById('autor-tarea');
const btnAgregar = document.getElementById('agregar-tarea');
const listaTareas = document.getElementById('listado-tareas');

function agregarTarea() {
  const nombre_new = nombre.value.trim();
  const fecha_new = fecha.value;
  const autor_new = autor.value.trim();

  if (autor_new !== '' && fecha_new !== '' && autor_new !== '') {
    const tarea = document.createElement('li');
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Elimnar';
    btnEliminar.style.marginLeft = '1rem';
    btnEliminar.style.marginBottom = '1rem';
    btnEliminar.id = 'eliminar-tarea';

    btnEliminar.addEventListener('click', (e) => {
      const tarea = e.target.parentElement;
      tarea.remove();
      actualizarMensaje();
    });

    tarea.textContent = `${nombre_new} - ${fecha_new} - ${autor_new}`;
    tarea.appendChild(btnEliminar);

    listaTareas.appendChild(tarea);

    nombre.value = '';
    fecha.value = '';
    autor.value = '';

    actualizarMensaje();
  }
}

function actualizarMensaje() {
  let mensaje = document.getElementById('mensaje-vacio');

  if (listaTareas.children.length === 0) {
    if (!mensaje) {
      mensaje = document.createElement('p');
      mensaje.id = 'mensaje-vacio';
      mensaje.textContent = 'El listado de tareas está vacío.';
      listaTareas.parentElement.appendChild(mensaje);
    }
  } else {
    mensaje.remove();
  }
}

btnAgregar.addEventListener('click', agregarTarea);
actualizarMensaje();
