
function GameBoard({ onSelectSquare, board }) {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={`row-${rowIndex}`} className="board-row">
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={`cell-${cellIndex}`} className="board-cell">
                                <button disabled={cell !== null} onClick={() => onSelectSquare(rowIndex, cellIndex)} >{cell}</button>
                            </li>
                            )
                        )}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;