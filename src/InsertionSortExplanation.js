import React from "react";

const InsertionSortExplanation = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <p>11714 Fátima Garza Díaz</p>
      <h1>Algoritmo de Ordenamiento por Inserción</h1>
      <p>
        El ordenamiento por inserción es un algoritmo eficiente para ordenar
        pequeños conjuntos de datos. La idea es dividir el arreglo en dos
        partes: una parte ordenada y otra desordenada.
      </p>
      <h2>¿Cómo funciona?</h2>
      <ol>
        <li>Empieza considerando el primer elemento como ordenado.</li>
        <li>
          Selecciona el siguiente elemento de la parte desordenada y compáralo
          con los elementos de la parte ordenada, de derecha a izquierda.
        </li>
        <li>
          Desplaza los elementos mayores al "key" hacia la derecha para hacer
          espacio.
        </li>
        <li>
          Inserta el "key" en su posición correcta dentro de la parte ordenada.
        </li>
        <li>Repite este proceso hasta que todo el arreglo esté ordenado.</li>
      </ol>
      <h2>Visualización del Ejemplo</h2>
      <p>
        Supongamos que queremos ordenar el arreglo{" "}
        <strong>[12, 11, 13, 5, 6]</strong>. A través de varias iteraciones, los
        elementos se comparan y se insertan en su posición correcta.
      </p>
      <h2>Ventajas y Desventajas</h2>
      <ul>
        <li>
          <strong>Ventajas:</strong> Simple de implementar y eficiente para
          conjuntos de datos pequeños.
        </li>
        <li>
          <strong>Desventajas:</strong> Para conjuntos de datos grandes, su
          tiempo de ejecución puede ser lento en el peor caso.
        </li>
      </ul>
    </div>
  );
};

export default InsertionSortExplanation;
