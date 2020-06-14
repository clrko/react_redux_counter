import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});
const CounterComponent = ({ counter, dispatch}) => (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: 'ADD_1' })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_1' })}>
        Remove 1
      </button>
      <button onClick={() => dispatch({ type: 'ADD_10' })}>
        Add 10
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_10' })}>
        Remove 10
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
);
export default connect(mapStateToProps)(CounterComponent);