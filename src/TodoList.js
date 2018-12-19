import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

  const { onTextClick, onDeleteTodo } = props;

  return (
    <ul class="list-unstyled">
      {props.todos.map((todo, i) =>
        <Todo
          key={i}
          todo={todo}
          onTextClick={onTextClick}
          onDeleteTodo={onDeleteTodo}
        />,
      )
      }
    </ul>
  );
};

export default TodoList;
