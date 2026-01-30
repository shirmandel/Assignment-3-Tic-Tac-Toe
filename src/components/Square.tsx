interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  isWinningSquare: boolean;
}

function Square({ value, onSquareClick, isWinningSquare }: SquareProps) {
  return (
    <button
      className={`btn ${isWinningSquare ? "btn-success" : "btn-outline-secondary"}`}
      style={{
        width: "80px",
        height: "80px",
        fontSize: "40px",
        fontWeight: "bold",
        margin: "2px",
        verticalAlign: "top",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
