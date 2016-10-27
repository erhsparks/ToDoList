import React from 'react';

class TodoListForm extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    let newTitle = document.getElementById('title');
    let newBody = document.getElementById('body');

    let todo = {
      title: newTitle.value,
      body: newBody.value,
      done: false
    };

    this.props.createTodo({todo});
  }

  render() {
    return(
      <div className="todo-list-form-container">
        <form className="todo-list-form">
          <label htmlFor="title">Title: </label>
          <input id="title" ref="title" type="text" />

          <label htmlFor="body">Description: </label>
          <textarea id="body" ref="body" rows="10"></textarea>

          <input type='submit'
                 value="Create Todo"
                 onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default TodoListForm;
