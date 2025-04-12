import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism"; // Tema claro
import "./App.css";

const App = () => {
  const tarjetas = [
    {
      titulo: "Estructura del Proyecto",
      explicacion:
        "El proyecto contiene estructuras principales que organizan los datos: `SegmentoTrayectoria` y `Avion`. Ambas definen las trayectorias y estados de los aviones.",
      codigo: `
typedef struct {
    double velocidad;
    double direccion;
    double duracion;
    double anguloAscenso;
} SegmentoTrayectoria;

typedef struct {
    int id;
    double posX;
    double posY;
    double altitud;
    double horaInicio;
    bool enTrayectoria;
    SegmentoTrayectoria ruta[3];
} Avion;
      `,
    },
    {
      titulo: "Inicialización de Aviones",
      explicacion:
        "La función `inicializarAviones` define aviones preconfigurados, incluyendo sus trayectorias divididas en ascenso, crucero y descenso.",
      codigo: `
void inicializarAviones(Avion aviones[], int *numAviones) {
    aviones[0] = (Avion){1, 10, 10, 0, 0, true, 
        {{13.33, 45, 10, 10}, {13.33, 0, 30, 0}, {13.33, 315, 20, -3}}};
    *numAviones = 1;
}
      `,
    },
    {
      titulo: "Agregar Aviones",
      explicacion:
        "Esta función permite al usuario introducir manualmente la posición inicial, altitud y segmentos de trayectoria de nuevos aviones.",
      codigo: `
void agregarAvion(Avion aviones[], int *numAviones) {
    if (*numAviones >= MAX_AVIONES) {
        printf("Número máximo alcanzado\\n");
        return;
    }
    Avion nuevo = { .id = *numAviones + 1 };
    scanf("%lf", &nuevo.posX); // Solicitar datos
    aviones[*numAviones] = nuevo;
    (*numAviones)++;
}
      `,
    },
    {
      titulo: "Actualizar Posición",
      explicacion:
        "Calcula y actualiza las posiciones `(X, Y)` y la altitud del avión según su trayectoria activa y tiempo transcurrido.",
      codigo: `
void actualizarPosicion(Avion *avion, int minutoActual) {
    if (minutoActual < avion->horaInicio) return;
    avion->posX += avion->ruta[0].velocidad * cos(avion->ruta[0].direccion);
}
      `,
    },
    {
      titulo: "Dimensiones Máximas",
      explicacion:
        "Calcula los límites máximos y mínimos en las trayectorias de los aviones para ajustar el tamaño del mapa.",
      codigo: `
void calcularDimensionesTrayectoria(Avion aviones[], double *maxX, double *maxY) {
    *maxX = *maxY = 0;
    for (int i = 0; i < 3; i++) {
        if (aviones[i].posX > *maxX) *maxX = aviones[i].posX;
    }
}
      `,
    },
    {
      titulo: "Escala del Mapa",
      explicacion:
        "Determina la escala del mapa para ajustarse proporcionalmente a las dimensiones máximas y mínimas calculadas.",
      codigo: `
void calcularEscala(double maxX, double minX, double *escala) {
    *escala = (maxX - minX) / GRID_SIZE;
}
      `,
    },
    {
      titulo: "Mostrar el Mapa",
      explicacion:
        "Dibuja un mapa 50x50 con los aviones representados por letras (A, B, C). Las celdas vacías se representan con puntos.",
      codigo: `
void mostrarMapa(Avion aviones[], int numAviones) {
    char map[GRID_SIZE][GRID_SIZE] = { '.' };
    for (int i = 0; i < numAviones; i++) {
        int x = (int)aviones[i].posX;
        int y = (int)aviones[i].posY;
        map[y][x] = 'A' + i;
    }
}
      `,
    },
    {
      titulo: "Simulación Principal",
      explicacion:
        "La simulación combina todas las funciones para mover aviones en el mapa y finalizar cuando todos completan sus trayectorias.",
      codigo: `
int main() {
    Avion aviones[MAX_AVIONES];
    int numAviones = 0;
    inicializarAviones(aviones, &numAviones);
    while (true) {
        mostrarMapa(aviones, numAviones);
    }
}
      `,
    },
    {
      titulo: "Conclusión",
      explicacion:
        "Este proyecto demuestra el uso avanzado de programación en C para simular movimientos dinámicos en un mapa 2D.",
      codigo: `
printf("Simulación finalizada. Todos los aviones han completado sus trayectorias.\\n");
return 0;
      `,
    },
  ];

  return (
    <div className="app-container">
      <h2>Programación Avanzada en C</h2>
      <h3>11714 Fatima Garza Díaz</h3>
      {tarjetas.map((tarjeta, index) => (
        <div className="card" key={index}>
          <h3>{tarjeta.titulo}</h3>
          <p>{tarjeta.explicacion}</p>
          <SyntaxHighlighter language="c" style={prism}>
            {tarjeta.codigo}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
};

export default App;
