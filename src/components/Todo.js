import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Todo = ({ onDeleteTodo, onTextClick, todo: { id, finished, text } }) => {

  return (
    <li className="ui-state-default">
      <div className={classNames({ 'checked': finished })}>
        <label
          onClick={() => {onTextClick(id);}}
        >
          {text}
        </label>
        <Link to={`/todos/${id}`}>
          <Button
            className="ml-5"
            color="info"
            outline
          >Edit</Button></Link>
        <Button
          color="danger"
          className="ml-5"
          outline
          onClick={() => {onDeleteTodo(id);}}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default Todo;

