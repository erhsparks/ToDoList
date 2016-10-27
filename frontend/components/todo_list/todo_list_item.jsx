import React from 'react';

const TodoListItem = ({ todo }) => (
  <li className={`todo-list-item ${todo.done ? 'done' : 'not-done'}`}>
    <h1>{todo.title}</h1>
    <p>{todo.body}</p>
  </li>
 );

 export default TodoListItem;
