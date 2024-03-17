import React, { createContext, useState } from "react";

// создаём контект для фильтра
export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // локальное состояние для хранения текущего фильтра
  const [filter, setFilter] = useState("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
