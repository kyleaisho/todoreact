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
    this.onClickDelete = this.onClickDelete.bind(this);
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

    this.onClick(todoIndex, newTodo);
  }

  onClick(todoIndex, newTodo) {
    const { todos } = this.state;
    const todo = todos[todoIndex];

    if (!todo) {
      return;
    }

    // replace the old todo
    const beginningOfNewTodo = newTodo ? [...todos.slice(0, todoIndex), newTodo] : [...todos.slice(0, todoIndex)];
    const newTodos = [...beginningOfNewTodo, ...todos.slice(todoIndex + 1)];

    this.setState(Object.assign({}, ...this.state, { todos: newTodos }));
  }

  onClickDelete(todoIndex) {
    this.onClick(todoIndex);
  }

  render() {
    const { todos } = this.state;
    const onClickDone = this.onClickDone;
    const onClickDelete = this.onClickDelete;

    return (
      <div className="TodoList" className="section container">
        {todos.map((todo, index) => (
          <Todo
            {...todo}
            onClickDone={function() {
              onClickDone(index);
            }}
            onClickDelete={function() {
              onClickDelete(index);
            }}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
