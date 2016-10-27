import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';

const App = () => (
  <div className="main-app">
    <h1 className="list-title">Welcome to your To Do List!</h1>
    <TodoListContainer />
  </div>
);

export default App;
