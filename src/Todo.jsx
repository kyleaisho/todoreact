import React from 'react';

const getTextDiv = (text, done) => (
  <div className="column is-three-quarters content">
    <h4 className={done ? 'strikethrough' : 'regular'}>{text}</h4>
  </div>
);

const Todo = ({ text, onClickDone, onClickDelete, onCreate, done = false }) => (
  <div className="columns is-small">
    <div className="column">
      <span className="icon" className={done ? 'has-text-success' : ''} onClick={onClickDone}>
        <i className="fas fa-check-square" />
      </span>
    </div>
    {text ? getTextDiv(text, done) : <input placeholder="Add a task" onBlur={onCreate} type="text" />}
    <div className="column">
      <a className="delete" onClick={onClickDelete} />
    </div>
  </div>
);

export default Todo;
