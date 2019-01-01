import React from "react";
import { connect } from "react-redux";

import Wizard from "../todos/wizard/components/Wizard";
import { addTodo } from "../todos/list/list.actions";
import { updateTextArea } from "../todos/wizard/wizard.actions";

const NewTodo = ({ history, addTodo, updateTextArea, textArea }) => {
  const onSubmit = () => {
    addTodo(textArea);
    updateTextArea("");
    history.push("/");
  };
  const backToMainList = () => {
    updateTextArea("");
    history.push("/");
  };

  return (
    <Wizard
      title="Add New Todo"
      buttonText="Add New Todo"
      onSubmit={onSubmit}
      onBackClick={backToMainList}
      placeholder="New todo"
      textArea={textArea}
    />
  );
};

function mapStateToProps(state, props) {
  return {
    textArea: state.wizard.textArea
  };
}

const mapDispatchToProps = {
  addTodo,
  updateTextArea
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodo);
