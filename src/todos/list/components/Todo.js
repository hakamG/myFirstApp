import React from "react";
import {  } from "reactstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Switch, Label, Button} from "@guestyci/atomic-design/dist/components";

const Todo = ({ onDeleteTodo, onTextClick, todo: { id, finished, text } }) => {
  return (
    <li className="ui-state-default">
      <div className={classNames({ checked: finished })}>
        <Label
          onClick={() => {
            onTextClick(id);
          }}
        >
          {text}
        </Label>
        <Link to={`/todos/${id}`}>
          <Button className="ml-5" color="primary" >
            Edit
          </Button>
        </Link>
        <Button
          color="danger"
          className="ml-5"
          
          onClick={() => {
            onDeleteTodo(id);
          }}
        >
          Delete
        </Button>
        <Switch
        className="ml-5"
          on={finished}
          onChange={() => {
            onTextClick(id);
          }}
        />
      </div>
    </li>
  );
};

export default Todo;
