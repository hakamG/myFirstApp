import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import { addTodo, deleteTodo, toggleStatus } from "../list.actions";

const TodoList = ({ toggleStatus, deleteTodo, todos }) => {
  return (
    <ul className="list-unstyled">
      {todos.map((todo, i) => (
        <Todo
          key={i}
          todo={todo}
          onTextClick={toggleStatus}
          onDeleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

function mapStateToProps(state, props) {
  return {
    todos: state.list.todos,
    textArea: state.wizard.textArea
  };
}

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
