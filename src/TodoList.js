import React, { Component } from 'react';
import { mockTodos } from './MockTodos';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: mockTodos
    };

    this.onClickDone = this.onClickDone.bind(this);
  }

  createTodo({ text, done = false }) {
    return { text, done };
  }

  onClickDone(todoIndex) {
    const { todos } = this.state;
    const todo = todos[todoIndex];

    if (!todo) {
      return;
    }
    const newTodo = this.createTodo({ text: todo.text, done: !todo.done });

    // replace the old todo
    const newTodos = [...todos.slice(0, todoIndex), newTodo, ...todos.slice(todoIndex + 1)];

    this.setState(Object.assign({}, ...this.state, { todos: newTodos }));
  }

  render() {
    const { todos } = this.state;
    const onClickDone = this.onClickDone;
    return (
      <div className="TodoList" class="section container">
        {todos.map((todo, index) => (
          <Todo
            {...todo}
            onClickDone={function() {
              onClickDone(index);
            }}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
