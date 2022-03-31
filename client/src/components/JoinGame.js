import React, { useState } from 'react';
import { useChatContext, Channel } from 'stream-chat-react';
import CustomInput from './CustomInput';
import Game from './Game';

export default function JoinGame() {
  const [rivalUsername, setRivalUsername] = useState('');
  const { client } = useChatContext();
  const [channel, setChannel] = useState(null);

  const createChannel = async () => {
    // console.log(client);
    const response = await client.queryUsers({ name: { $eq: rivalUsername } });
    console.log(response);

    if (response.users.length === 0) {
      alert('User not found');
      return;
    }

    const newChannel = await client.channel('messaging', {
      members: [client.userID, response.users[0].id],
    });

    await newChannel.watch();
    setChannel(newChannel);
  };

  return (
    <>
      {channel ? (
        <Channel channel={channel} Input={CustomInput}>
          <Game channel={channel} setChannel={setChannel} />
        </Channel>
      ) : (
        <div className='joinGame'>
          <h4>Create Game</h4>
          <input
            placeholder='Username of rival...'
            onChange={(event) => {
              setRivalUsername(event.target.value);
            }}
          />
          <button onClick={createChannel}>Join/Start Game</button>
        </div>
      )}
    </>
  );
}
