//  creamos una matriz para asignar los valores
const board2 = new Array();

// cargamos la matriz con valores para fines practicos, 'Red' y 'Blue'.
// Y para la propiedad bcg(backgroundcolor) generamos un color en rgb en azul y rojo para el fondo, también nos ayudara a cumplir con la condicion de no repetir
// filas o columnas con la misma cantidad de celdas rojas.

for (let i = 0; i < 8; i++) {
    board2[i] = new Array();
    for (let j = 0; j < 8; j++) {
        if (j < i || (i == j )) {
            board2[i][j] =
            {
                value: `Red`,
                bgc: `rgb(220, 20,0)`
                // bgc: `rgb(255, 20,0)`
            }

        } else (
            board2[i][j] =
            {
                value: `Blue`,
                bgc: `rgb(0, 20, 220)`
                // bgc: `rgb(0, 20,255)`
            }
        )
        
    }

}


export default board2;