import React from "react";

const NotFinishedTodosCount = ({ todos }) => {
  const notFinishedTodosCount = todos.filter(todo => !todo.finished).length;

  return <div>{`Items Left to do: ${notFinishedTodosCount}`}</div>;
};

export default NotFinishedTodosCount;
