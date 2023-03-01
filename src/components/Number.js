import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseNumber , decreaseNumber } from '../redux/number/numberAction';

const Number = () => {
  const number=useSelector(state => state.numberState.number);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Number {number}</h1>
      <button onClick={()=>dispatch(increaseNumber())}>Increase</button>
      <button onClick={()=>dispatch(decreaseNumber())}>Decrease</button>
    </div>
  )
}



export default Number;
