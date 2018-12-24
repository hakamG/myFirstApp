import React from 'react';
import TodoForm from '../components/TodoForm';
import { updateTextArea, updateTodo } from '../actions/todo.action';
import { connect } from 'react-redux';

const EditTodo = (props) => {
  const { history, updateTodo, updateTextArea, match: { params: { id } } } = props;
  const onSubmit = () => {
    updateTodo(id);
    history.push('/');
  };

  return (
    <TodoForm
      title="Edit Todo"
      buttonText="Save Todo"
      onSubmit={onSubmit}
      updateTextArea={updateTextArea}
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
