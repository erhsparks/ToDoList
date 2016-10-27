export const allTodos = ({ todos }) => (
  Object.keys(todos).map( key => todos[key])
);
