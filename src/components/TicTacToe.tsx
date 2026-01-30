import Square from "./Square";
import { useState } from "react";

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

function TicTacToe() {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null),
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winInfo = calculateWinner(squares);
  const winner = winInfo?.winner;
  const winningLine = winInfo?.line || [];

  const handleClick = (i: number) => {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="container text-center mt-5">
      <div className="d-flex justify-content-center mt-3">
        <div style={{ maxWidth: "260px" }}>
          <div className="row g-0">
            {[0, 1, 2].map((index) => (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                isWinningSquare={winningLine.includes(index)}
              />
            ))}
          </div>
          <div className="row g-0">
            {[3, 4, 5].map((index) => (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                isWinningSquare={winningLine.includes(index)}
              />
            ))}
          </div>
          <div className="row g-0">
            {[6, 7, 8].map((index) => (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                isWinningSquare={winningLine.includes(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
