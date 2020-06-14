import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});
const CounterComponent = ({ counter }) => <div>{counter}</div>;
export default connect(mapStateToProps)(CounterComponent);