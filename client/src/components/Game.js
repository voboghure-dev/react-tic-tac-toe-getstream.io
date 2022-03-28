import React, { useState } from 'react';
import Board from './Board';

export default function Game({ channel }) {
  const [playersJoined, setPlayersJoined] = useState(
    channel.state.watcher_count === 2
  );

  channel.on('user.watching.start', (event) => {
    setPlayersJoined(event.watcher_count === 2);
  });

  if (!playersJoined) {
    return <div>Waiting for other player to join...</div>;
  }
  return (
    <div className='gameContainer'>
      <Board />
      {/* CHAT */}
      {/* LEAVE GAME BUTTON */}
    </div>
  );
}
