import Box from './components/Box';
import './App.css';
import board from './board';
import board2 from './board2';
import { useState } from 'react';

function App() {

  const [boardNumber, setBoardNumber] = useState(false)

  const changeBoard = () => {
    setBoardNumber(!boardNumber)    
  }

  let newBoard = board.flat() // genermos un nuevo array, pasando el tablero como una listo en lugar de una matriz para poder trabajar

  let boardList = newBoard.map(box => { // en este paso generamos la lista para poder renderizar desde el nuevo array 
    return <Box value={box.value} bgc={box.bgc} />
  });

  let newBoard2 = board2.flat() // genermos un nuevo array, pasando el tablero como una listo en lugar de una matriz para poder trabajar

  let boardList2 = newBoard2.map(box => { // en este paso generamos la lista para poder renderizar desde el nuevo array 
    return <Box value={``} bgc={box.bgc} />
  });

  return (
    <>
      <h2>Proyecto : Ajedrez - Red - Blue</h2>
      <div onClick={changeBoard} className='general'>
        {boardNumber ? boardList2 : boardList}
      </div>
    </>
  )
}

export default App
