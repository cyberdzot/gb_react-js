import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CounterComponent from "./components/CounterComponent";
import ButtonComponent from "./components/ButtonComponent";
import ButtonComponentMinus from "./components/ButtonComponentMinus";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterComponent />
        <ButtonComponent />
        <ButtonComponentMinus />
      </div>
    </Provider>
  );
}

export default App;
