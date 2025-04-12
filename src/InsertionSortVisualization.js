import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar estilos de Bootstrap

const InsertionSortVisualization = () => {
  const [array, setArray] = useState([12, 11, 13, 5, 6]);
  const [step, setStep] = useState(0);
  const [sortedArray, setSortedArray] = useState([...array]);
  const [sortedIndex, setSortedIndex] = useState(-1); // No hay parte ordenada al inicio

  const handleNextStep = () => {
    let newArray = [...sortedArray];

    if (step < array.length) {
      let key = newArray[step];
      let j = step - 1;

      // Ordenar
      while (j >= 0 && newArray[j] > key) {
        newArray[j + 1] = newArray[j];
        j--;
      }
      newArray[j + 1] = key;

      setSortedArray(newArray);
      setSortedIndex(step); // Actualizar índice de la parte ordenada
      setStep(step + 1); // Avanzar al siguiente paso
    }
  };

  const handleReset = () => {
    setSortedArray([...array]);
    setStep(0);
    setSortedIndex(-1); // Reiniciar todo
  };

  return (
    <div className="container text-center">
      <h1>Visualización del Algoritmo de Inserción</h1>
      <div className="array-container d-flex justify-content-center gap-2 mt-4">
        {sortedArray.map((num, index) => (
          <div
            key={index}
            className={`array-bar ${
              index <= sortedIndex ? "sorted" : "unsorted"
            } ${index === step ? "current" : ""}`}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="btn btn-primary me-2"
          onClick={handleNextStep}
          disabled={step >= array.length}
        >
          Siguiente Paso
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default InsertionSortVisualization;
