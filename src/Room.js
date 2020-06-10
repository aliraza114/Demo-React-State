import React, {useState} from 'react';
import './Room.css'

function Room() {
    let [isLit, setLit] = useState(true)
    let [count, setCount] = useState(0)
    let [temp, setTemp] = useState(73)
    function updateRoomState() {
        setLit(!isLit)
        setCount(++count)
    }
    function changeLight(value){
        setLit(isLit = value)
    }
    function changeTemp(value) {
        setTemp( temp += value )
    }
  return (
    <div className={`room ${isLit ? 'lit' : 'dark'}`}>
      This is room is { isLit ? 'lit' : 'dark' }
      <br/>
      <button className={'marginClass'} onClick={updateRoomState}>{ isLit ? 'Off The Light' : 'On the light' }</button>
      
      { isLit ? <button className={'marginClass'}> { isLit ? 'The Temperature is ' + temp : '' }</button> : ''}
    
      <button className={'marginClass'} onClick={() => changeLight(true)}> ON </button>
      <button className={'marginClass'} onClick={() => changeLight(false)}> OFF </button>
      
      <button className={'marginClass'} onClick={() => changeTemp(1)}> Add Temperature  </button>
      <button className={'marginClass'} onClick={() => changeTemp(-1)}> Subtract Temperature </button>
    </div>
  );
}

export default Room;
