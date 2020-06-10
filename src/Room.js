import React, {useState} from 'react';

function Room() {
    let [isLit, setLit] = useState(true)
    let [count, setCount] = useState(0)
    function updateRoomState() {
        setLit(!isLit)
        setCount(++count)
    }
  return (
    <div>
      This is room is { isLit ? 'lit' : 'dark' }
      <br/>
      <button onClick={updateRoomState}>{ isLit ? 'Off The Light' : 'On the light' }</button>
      <br/>
      <button> { 'You switched the light ' + count + ' Times' }</button>
    </div>
  );
}

export default Room;
