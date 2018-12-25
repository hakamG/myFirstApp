import React from 'react';
import TodoForm from '../components/TodoForm';
import { addTodo, updateTextArea } from '../actions/todo.actions';
import { connect } from 'react-redux';

const NewTodo = ({ history, addTodo, updateTextArea, textArea }) => {
  const onSubmit = () => {
    addTodo();
    history.push('/');
  };
  const backToMainList = () => {
    updateTextArea('');
    history.push('/');
  };

  return (
    <TodoForm
      title="Add New Todo"
      buttonText="Add New Todo"
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
  addTodo,
  updateTextArea,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
