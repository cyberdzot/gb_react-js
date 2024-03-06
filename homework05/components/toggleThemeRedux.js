import React from "react";
import { Provider } from "react-redux";
import ToggleTheme from "./toggleTheme";
import storeTheme from "./storeTheme";

function ToggleThemeRedux() {
  return (
    <Provider store={storeTheme}>
      <ToggleTheme />
    </Provider>
  );
}

export default ToggleThemeRedux;
