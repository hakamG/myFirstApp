import React from 'react';
import TodoForm from '../components/TodoForm';
import { updateTextArea, updateTodo } from '../actions/todo.actions';
import { connect } from 'react-redux';

const EditTodo = (props) => {
  const { history, textArea, updateTodo, updateTextArea, match: { params: { id } } } = props;
  const onSubmit = () => {
    updateTodo(id);
    history.push('/');
  };
  const backToMainList = () => {
    history.push('/');
  };

  return (
    <TodoForm
      title="Edit Todo"
      buttonText="Save Todo"
      onSubmit={onSubmit}
      updateTextArea={updateTextArea}
      onBackClick={backToMainList}
      textArea={textArea}
    />
  );
};

function mapStateToProps(state, props) {
  return {
    textArea: state.todo.textArea,
  };
}

const mapDispatchToProps = {
  updateTodo,
  updateTextArea,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
