import { configureStore } from "@reduxjs/toolkit";

const myReducer = (theme = true, action) => {
  switch (action.type) {
    case "APPLY_LIGHT":
      return true;
    case "APPLY_DARK":
      return false;
    case "TOGGLE_THEME":
      return !theme;
    default:
      return theme;
  }
};

// создание хранилища для значения темы
const storeTheme = configureStore({
  reducer: myReducer,
});

export default storeTheme;
