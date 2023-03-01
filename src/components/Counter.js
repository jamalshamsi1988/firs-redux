import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter , decreaseCounter } from './../redux/counter/counterAction';

const Counter = () => {
  const counter=useSelector(state => state.counterState.counter);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increaseCounter())}>Increase</button>
      <button onClick={()=>dispatch(decreaseCounter())}>Decrease</button>
    </div>
  )
}



export default Counter;
