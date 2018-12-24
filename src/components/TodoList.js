import React from 'react';
import Todo from './Todo';

const TodoList = ({ onTextClick, onDeleteTodo, todos }) => {

  return (
    <ul className="list-unstyled">
      {todos.map((todo, i) =>
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
