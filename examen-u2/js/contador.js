/*Contador (contador.html y contador.js)
a. Descripción: La página contador.html muestra un contador simple con dos botones para aumentar y
disminuir el valor.
b. Requisitos de funcionalidad:
i. El valor del contador, que empieza en 0, debe mostrarse en el elemento div con el id "counter".
ii. Al hacer clic en el botón "Aumentar", el contador debe incrementar en 1 y actualizar el valor
mostrado en pantalla.
iii. Al hacer clic en el botón "Disminuir", el contador debe decrementar en 1 y actualizar el valor en
pantalla.
iv. Nota: El contador puede tener valores negativos. */

document.addEventListener('DOMContentLoaded',() =>{
    const contador = document.getElementById('counter');
    const aumentar = document.getElementById('aumentar');
    const disminuir = document.getElementById('disminiuir');
    const valor = 0;

    let nuevoContador = valor;
    console.log('Listado de los valores de los elementos');
    
    //contador.textContent = nuevoContador;
    disminuir.addEventListener('click', () =>{
        nuevoContador--;
        contador.textContent = nuevoContador;
        console.log(nuevoContador);
    })

    aumentar.addEventListener('click', () =>{
        nuevoContador++;
        contador.textContent = nuevoContador;
        console.log(nuevoContador);
    })
})