import React from "react";
import { connect } from "react-redux";
import { decrement } from "../reducers/counterSlice";

const ButtonComponentMinus = (props) => {
  return <button onClick={props.decrement}> -1 </button>;
};

const mapDispachToProps = {
  decrement,
};

export default connect(null, mapDispachToProps)(ButtonComponentMinus);
