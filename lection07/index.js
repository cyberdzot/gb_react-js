import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import { storage } from "redux-persist/lib/storage";
import asyncMiddlewareEx3 from "./asyncMiddlewareEx3";
import "./index.css";
import App from "./App";
// import dataReducer from "./dataReducer";

// ex1
// это промежуточное ПО для демонстрации дополнительныъ эффектов
const middleware = (store) => (next) => (action) => {
  console.log("Дополнительный эффект!");

  setTimeout(() => {
    console.log("тайм-ауты, вызовы api и т.д.");
  }, 1000);

  return next(action);
};

// ex2
// это logger middleware, который выводит действия, отправленны в store
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  return next(action);
};

// ex Saga
// создаём middleware для Redux-Saga
const sagaMiddleware = createSagaMiddleware();

// конфигурация для redux-persist
const persistConfig = {
  key: "root", // ключ, по которому хранится состояние storage
  storage, // объект storage для хранения
};

// создаём "персистентный" редьюсер с использованием persistReducer и конфигурации
const persistedReducer = persistReducer(persistConfig, rootReducer);

// настраиваем store с персистентым редьюсером и всеми middleware
const store = configureStore({
  reducer: persistedReducer, // используем персистентный редьюсер
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST"], //игнорируем действия "persist/PERSIST", так как оно не сериализируемо
      },
    }).concat(
      middleware,
      loggerMiddleware,
      asyncMiddlewareEx3,
      thunk,
      sagaMiddleware
    ),
});

// запускаю нашу сагу
sagaMiddleware.run(mySaga);

// инициализируем persistor, который будет использоваться для сейва/восстановления состояния
let persistor = persistStore(store);

// оборачиваем наше приложение в Provider и PersistGate для предоставления store и persistor
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
