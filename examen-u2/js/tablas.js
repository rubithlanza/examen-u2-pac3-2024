/*1. Generador de Tablas de Multiplicar (tablas.html y tablas.js)
a. Descripción: La página tablas.html contiene un formulario para generar la tabla de multiplicar de un
número.
b. Requisitos de funcionalidad:
i. Al hacer clic en el botón "Generar Tabla", el JavaScript debe:
1. Leer el número ingresado en el campo Número.
2. Leer el límite ingresado en el campo Límite.
3. Calcular la tabla de multiplicar del número desde 1 hasta el límite.
4. Mostrar el resultado en el área de texto Resultado de la tabla..., formateado de la
siguiente manera:
5. Validaciones: Asegúrese de que el usuario no deje ningún campo vacío, y que ambos
campos contengan números válidos antes de generar la tabla. */

document.addEventListener('DOMContentLoaded', () => {
    const generarTabla = document.getElementById('generar-tabla');
    const numero = document.getElementById('number');
    const limite = document.getElementById('limit');
    const resultadoMultiplicacion = document.getElementById('result');
    
    
    console.log(`La tabla de multiplicar del numero ${numero.value}`);
    const multiplicar = () => {
        if (numero .value === '' || limite.value ===''){
            alert('Uno de los campos esta vacio');
        }else {
            for (let i = 1; i < limite; i++) {
                const multiplicar = numero.value * i;
                resultadoMultiplicacion.value += `${numero.value} x ${i} = ${multiplicar}\n`;
                console.log(resultadoMultiplicacion);
            }
        }
    }

    generarTabla.addEventListener('click', multiplicar);

});
