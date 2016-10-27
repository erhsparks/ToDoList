import { fetchTodos, createTodo } from '../util/todo_api_util';
import {
  REQUEST_TODOS, CREATE_TODO,
  receiveTodos, receiveTodo
} from '../actions/todo_actions';

const TodoMiddleware = ({ getState, dispatch }) => next => action => {
  const error = e => console.log(e);
  const todosSuccess = todos => dispatch(receiveTodos(todos));
  const todoSuccess = todo => dispatch(receiveTodo(todo));

  switch(action.type) {
    case REQUEST_TODOS:
      fetchTodos(todosSuccess, error);

      return next(action);
    case CREATE_TODO:
      createTodo(action.todo, todoSuccess, error);

      return next(action);
    default:
      return next(action);
  }
};

export default TodoMiddleware;
