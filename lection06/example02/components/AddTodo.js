import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

function AddTodo() {
  // локальное состояние для текста новой задачи
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    // отправляем действие для добавления новой задачи
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Добавить задачу</button>
    </div>
  );
}

export default AddTodo;
