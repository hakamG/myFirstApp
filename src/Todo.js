import React from 'react';

const Todo = (props) => {
  const { onDeleteTodo, onTextClick, todo: { id, finished, text } } = props;
  return (
    <li class="ui-state-default">
      <div
        className={finished ? 'checked' : ''}
      >
        <label
          onClick={() => {onTextClick(id);}}
        >{text}</label>
        <button
          class="btn btn-sm btn-outline-danger"
          onClick={() => {onDeleteTodo(id);}}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
