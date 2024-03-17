import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = [];

// редьюсер для обработки действий с задачами
function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      // добавляем новую задачу в список
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, completed: false },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

export default todosReducer;
