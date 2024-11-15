/*Lista de Tareas (lista-tareas.html y lista-tareas.js)
a. Descripción: La página lista-tareas.html permite al usuario agregar tareas a una lista de pendientes.
b. Requisitos de funcionalidad:
i. Al hacer clic en el botón "Agregar", el JavaScript debe:
1. Leer el valor ingresado en el campo Nueva tarea.
2. Crear un nuevo elemento de lista (<li>) con el texto de la tarea ingresada.
3. Agregar este nuevo elemento al final de la lista de tareas (ul con id "taskList").
ii. Validaciones: Evita agregar tareas vacías.
c. Ejemplo de uso: Si el usuario ingresa "Estudiar para el examen" en el campo de texto y hace clic en
"Agregar", la lista de tareas debería mostrar un nuevo elemento de lista con el texto "Estudiar para el
examen". */

document.addEventListener('DOMContentLoaded', () =>{
    const btnAgregar = document.getElementById('agregar');
    const nuevaTareaInput = document.getElementById('taskInput');
    const listadoTarea = document.getElementById('taskList');

    console.log('Listado de las tareas mostrados en el html');
    const ingresarTarea = () =>{
        const tarea = nuevaTareaInput.value.trim();

        if(tarea === ''){
            alert('El campo esta vacio');
            console.log('Debe Ingresar algo al formulario');
            
            return;
        }
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = tarea;
        listadoTarea.appendChild(nuevoElemento);
        nuevaTareaInput.value = '';
        console.log(tarea);
    }
    btnAgregar.addEventListener('click', ingresarTarea)
    console.log(ingresarTarea);
    
})