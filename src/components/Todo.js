import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Todo = (props) => {
  const { onDeleteTodo, onTextClick, todo: { id, finished, text } } = props;
  return (
    <li className="ui-state-default">
      <div className={finished ? 'checked' : ''}>
        <label
          onClick={() => {onTextClick(id);}}
        >
          {text}
        </label>
        <Link to={`/todos/${id}`}><Button color="info" outline>Edit</Button></Link>
        <Button
          color="danger"
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

