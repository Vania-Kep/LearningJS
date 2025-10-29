export default function GameOver({ winner, isDraw, restartGame }) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {isDraw ? <p>It's a draw!</p> : <p>{winner} won!</p>}
        <p>
            <button id="restart-game" onClick={restartGame}>{isDraw ? 'Play again' : 'Rematch'}</button>
        </p>
    </div>;
}