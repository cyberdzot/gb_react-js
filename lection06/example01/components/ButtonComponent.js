import React from "react";
import { connect } from "react-redux";
import { increment } from "../reducers/counterSlice";

const ButtonComponent = (props) => {
  return <button onClick={props.increment}> +1 </button>;
};

const mapDispachToProps = {
  increment,
};

export default connect(null, mapDispachToProps)(ButtonComponent);
