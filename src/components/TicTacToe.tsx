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

  const isDraw = !winner && squares.every((square) => square !== null);

  const handleClick = (i: number) => {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const getStatus = () => {
    if (winner) return `Winner: ${winner}`;
    if (isDraw) return "Draw!";
    return `Next turn: ${xIsNext ? "X" : "O"}`;
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Tic Tac Toe</h1>

      <div
        className={`alert ${winner ? "alert-success" : "alert-primary"} d-inline-block px-5`}
      >
        <h3>{getStatus()}</h3>
      </div>

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

      <button className="btn btn-primary btn-lg mt-4" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default TicTacToe;
