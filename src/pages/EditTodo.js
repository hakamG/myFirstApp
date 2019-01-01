import React from "react";
import { connect } from "react-redux";
import Wizard from "../todos/wizard/components/Wizard";
import { updateTodo } from "../todos/list/list.actions";
import { updateTextArea } from "../todos/wizard/wizard.actions";

const EditTodo = props => {
  const {
    history,
    textArea,
    updateTodo,
    updateTextArea,
    match: {
      params: { id }
    },
    todos
  } = props;
  const onSubmit = () => {
    updateTodo({ id, text: textArea });
    updateTextArea("");
    history.push("/");
  };
  const backToMainList = () => {
    updateTextArea("");
    history.push("/");
  };
  const getTodoText = () => {
    return todos.filter(todo => todo.id === parseInt(id))[0].text;
  };

  return (
    <Wizard
      title="Edit Todo"
      buttonText="Save Todo"
      onSubmit={onSubmit}
      onBackClick={backToMainList}
      placeholder={getTodoText()}
      textArea={textArea}
    />
  );
};

function mapStateToProps(state, props) {
  return {
    textArea: state.wizard.textArea,
    todos: state.list.todos
  };
}

const mapDispatchToProps = {
  updateTodo,
  updateTextArea
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo);
