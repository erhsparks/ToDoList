import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_form';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, createTodo } = this.props;

    return (
      <div className="todo-list">
        <ul className="todo-list-items">
          {todos.map(todo => (
            <TodoListItem
              key={`todo-list-item${todo.id}`}
              todo={todo} />
          ))}
        </ul>

        <TodoListForm createTodo={createTodo}/>
      </div>
    );
  }
}

export default Todo;
