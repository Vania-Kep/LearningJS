import { useState } from "react";

function Player({ initialName, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(editing => !editing);
    onNameChange(symbol, playerName);
  }
  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span id="player">
        {isEditing ? (
          <input type="text" required value={playerName} onChange={handleNameChange}/>
        ) : (<span className="player-name">{playerName}</span>)}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button id="edit-player" onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player;
