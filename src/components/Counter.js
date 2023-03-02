import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter , decreaseCounter } from './../redux/counter/counterAction';

const Counter = () => {
  const[value , setValue]=useState(1);

  const counter=useSelector(state => state.counterState.counter);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <input type="text" value={value} onChange={(event)=>setValue(event.target.value)} />
      <button onClick={()=>dispatch(increaseCounter(+value))}>Increase</button>
      <button onClick={()=>dispatch(decreaseCounter(+value))}>Decrease</button>
    </div>
  )
}



export default Counter;
