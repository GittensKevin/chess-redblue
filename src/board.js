//  creamos una matriz para asignar los valores
const board = new Array();

// cargamos la matriz con valores para fines practicos, 'Red' y 'Blue'.
// Y para la propiedad bcg(backgroundcolor) generamos un color aleatorio en rgb en azul y rojo para el fondo, también nos ayudara a cumplir con la condicion de no repetir
// filas o columnas con la misma cantidad de celdas rojas, además que cada celda tenga un color de fondo dinstinto nos permite diferenciarlas entre sí no solo de las azules.

for (let i = 0; i < 8; i++) {
    board[i] = new Array();
    for (let j = 0; j < 8; j++) {
        if (i < j || (i == j)) {
            board[i][j] =
            {
                value: `Red`,
                bgc: `rgb(${Math.floor(Math.random() * 256)}, 20,0)`
                // bgc: `rgb(255, 20,0)`
            }

        } else (
            board[i][j] =
            {
                value: `Blue`,
                bgc: `rgb(0, 20, ${Math.floor(Math.random() * 256)})`
                // bgc: `rgb(0, 20,255)`
            }
        )

    }

}


export default board;