// Цель: Создать компонент TemperatureConverter, используя компоненты TextField
// и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// ? Компоненты:
// ? Используйте TextField для ввода значения температуры.
// ? Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.
import React, { useState } from "react";

// (1°C × 9/5) + 32 = 33,8°F
const convertCelsiusToFahrenheit = (value) => {
  return Math.round((value * (9 / 5)) + 32);
}

// (32°F − 32) × 5/9 = 0°C
const convertFahrenheitToCelsius = (value) => {
  return Math.round((value - 32) * (5 / 9));
}

export default function TemperatureConverter() {
  const [cValue, setCValue] = useState("");
  const [fValue, setFValue] = useState("");

  return (
    <>
      <p>
        C{" "}
        <input
          type="number"
          placeholder="Цельсий"
          value={cValue}
          onChange={(e) => {
            setCValue(e.target.value);
            setFValue(convertCelsiusToFahrenheit(e.target.value));
          }}
        ></input>
      </p>
      <p>
        F{" "}
        <input
          type="number"
          placeholder="Фаренгейт"
          value={fValue}
          onChange={(e) => {
            setFValue(e.target.value);
            setCValue(convertFahrenheitToCelsius(e.target.value));
          }}
        ></input>
      </p>
    </>
  );
}
