import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const InsertionSortPage = () => {
  const cppCode = `#include <iostream> // Librería estándar para entrada y salida
    using namespace std;
    
    // Función que implementa el algoritmo de ordenamiento por inserción
    void insertionSort(int arr[], int n) {
        // Itera sobre cada elemento a partir del segundo (índice 1)
        for (int i = 1; i < n; i++) {
            int key = arr[i]; // "key" es el elemento que se insertará en la parte ordenada
            int j = i - 1;    // Índice del último elemento de la parte ordenada
    
            // Mueve elementos mayores que "key" una posición hacia adelante
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j]; // Desplaza el elemento hacia la derecha
                j = j - 1;           // Decrementa el índice para continuar la comparación
            }
            // Inserta el "key" en su posición correcta en la parte ordenada
            arr[j + 1] = key;
        }
    }
    
    int main() {
        int arr[] = {12, 11, 13, 5, 6}; // Arreglo inicial sin ordenar
        int n = sizeof(arr) / sizeof(arr[0]); // Calcula el tamaño del arreglo
    
        // Llama a la función de ordenamiento por inserción
        insertionSort(arr, n);
    
        // Imprime el arreglo ordenado
        cout << "Array ordenado: ";
        for (int i = 0; i < n; i++)
            cout << arr[i] << " "; // Muestra cada elemento del arreglo
        return 0; // Finaliza el programa
    }`;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Algoritmo de Ordenamiento por Inserción</h1>
      <p>
        El ordenamiento por inserción es un algoritmo eficiente para ordenar
        pequeños conjuntos de datos. Iterativamente construye la lista ordenada
        desplazando elementos según sea necesario.
      </p>
      <h2>Código en C++</h2>
      <SyntaxHighlighter language="cpp" style={coy}>
        {cppCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default InsertionSortPage;
