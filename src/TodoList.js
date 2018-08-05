import React, { Component } from 'react';
import { mockTodos } from './MockTodos';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: mockTodos
    };
  }

  render() {
    const { todos } = this.state;
    return <div className="TodoList">{todos.map(todo => <Todo {...todo} />)}</div>;
  }
}

export default TodoList;
