// Цель: Создать компонент TemperatureConverter, используя компоненты TextField
// и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// (1°C × 9/5) + 32 = 33,8°F
const convertCelsiusToFahrenheit = (value) => {
  return Math.round(value * (9 / 5) + 32);
};

// (32°F − 32) × 5/9 = 0°C
const convertFahrenheitToCelsius = (value) => {
  return Math.round((value - 32) * (5 / 9));
};

export default function TemperatureConverter() {
  const [cValue, setCValue] = useState("");
  const [fValue, setFValue] = useState("");

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-number"
          label="Цельсий"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={cValue}
          onChange={(e) => {
            setCValue(e.target.value);
            setFValue(convertCelsiusToFahrenheit(e.target.value));
          }}
        />
        <TextField
          id="standard-number"
          label="Фаренгейт"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={fValue}
          onChange={(e) => {
            setFValue(e.target.value);
            setCValue(convertFahrenheitToCelsius(e.target.value));
          }}
        />
      </Box>
    </>
  );
}
