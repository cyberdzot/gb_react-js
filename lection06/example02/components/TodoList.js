import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions/todoActions";
import { FilterContext } from "../contexts/FilterContext";
import withFilter from "../hoc/withFilter";

function TodoList() {
  // получаем список задач из Redux хранилища
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { filter } = useContext(FilterContext);

  // применяем фильтр к задачам
  const filteredTodos = withFilter(todos, filter);

  const handleToggleTodo = (id) => {
    // отправляем действие для изменения статуса задачи
    dispatch(toggleTodo(id));
  };
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleToggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
