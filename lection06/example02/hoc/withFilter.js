// функция высшего порядка для фильтрации списа задач
function withFilter(todos, filter) {
  switch (filter) {
    case "completed":
      return todos.filter((todo) => todo.completed);
    case "active":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
}

export default withFilter;
