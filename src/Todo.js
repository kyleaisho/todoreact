import React from 'react';

const Todo = ({ text, onClickDone, done = false }) => (
  <div class="columns is-small">
    <div class="column">
      <span class="icon has-text-success" onClick={onClickDone}>
        <i class="fas fa-check-square" />
      </span>
    </div>
    <div class="column is-three-quarters content">
      <h4 className={done ? 'strikethrough' : 'regular'}>{text}</h4>
    </div>
    <div class="column">
      <a class="delete" />
    </div>
  </div>
);

export default Todo;
