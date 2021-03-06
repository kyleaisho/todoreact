import React from 'react';
import Form from './Form';

const getTextDiv = (text, done) => <h4 className={done ? 'strikethrough' : 'regular'}>{text}</h4>;

const Todo = ({ text, onClickDone, onClickDelete, handleSubmit, textAreaValue, done = false }) => (
  <div className="columns is-small">
    <div className="column">
      <span className="icon" className={done ? 'has-text-success' : ''} onClick={onClickDone}>
        <i className="fas fa-check-square" />
      </span>
    </div>
    <div className="column is-three-quarters content">
      {text ? getTextDiv(text, done) : <Form handleSubmit={handleSubmit} />}
    </div>
    <div className="column">
      <a className="delete" onClick={onClickDelete} />
    </div>
  </div>
);

export default Todo;
