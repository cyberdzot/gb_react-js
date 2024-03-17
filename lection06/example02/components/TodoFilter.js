import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

function TodoFilter() {
    // применим текущий фильтр из контекста
    const { filter, setFilter } = useContext(FilterContext);

    const handleChange = (e) => {
        // устанавливаем выбранный фильтр
        setFilter(e.taget.value)
    }

    return (
        <select value={filter} onChange={handleChange}>
            <option value="all">Все</option>
            <option value="completed">Выполненые</option>
            <option value="active">Активные</option>
        </select>
    );
}

export default TodoFilter;