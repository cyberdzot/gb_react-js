import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ToggleTheme() {
  const themeFromStore = useSelector((theme) => theme);
  const sendActionToStore = useDispatch();

  const applyLightTheme = () => {
    sendActionToStore({ type: "APPLY_LIGHT" });
  };

  const applyDarkTheme = () => {
    sendActionToStore({ type: "APPLY_DARK" });
  };

  const switchTheme = () => {
    sendActionToStore({ type: "TOGGLE_THEME" });
  };

  return (
    <div
      className="contentTheme"
      style={{
        color: themeFromStore === false ? "#fff" : "#000",
        background: themeFromStore === false ? "#000" : "#fff",
      }}
    >
      <h1>Тема: {`${themeFromStore === false ? "Тёмная" : "Светлая"}`}</h1>
      <button onClick={applyLightTheme}>Светлая тема</button>{" "}
      <button onClick={applyDarkTheme}>Тёмная тема</button>{" "}
      <button onClick={switchTheme}>Сменить тему</button>
    </div>
  );
}

export default ToggleTheme;
