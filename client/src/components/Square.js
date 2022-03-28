import React from 'react';

export default function Square({ chooseSquare, value }) {
  return (
    <div className='square' onClick={chooseSquare}>
      {value}
    </div>
  );
}
