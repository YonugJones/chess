import { useState } from "react";
import Square from "./Square";

const Chessboard = () => {
  const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
  ];

  const [board, setBoard] = useState(initialBoard);

  const handleMove = (fromPosition, toPosition) => {
    // move logic
  }

  return (
    <div className='chessboard'>
      {board.map((row, rowIndex) => (
        row.map((piece, colIndex) => (
          <Square 
            key={`${rowIndex}-${colIndex}`}
            position={[rowIndex, colIndex]}
            piece={piece}
            onClick={() => handleMove([rowIndex, colIndex], [/*[New Position]*/])}
          />
        ))
      ))}
    </div>
  )
}

export default Chessboard;
