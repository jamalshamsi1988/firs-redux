import React from 'react';
import { connect } from 'react-redux';
import { increase } from './../redux/counter/counterAction';



const Counter = (props) => {
  return (
    <div>
      <h1>Counter {props.counter}</h1>
      <button onClick={props.dispatch}>Increase</button>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
      counter:state.counter
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    increase: ()=> dispatch(increase())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter)
