import React from 'react';
import TodoForm from '../components/TodoForm';
import { addTodo, updateTextArea } from '../actions/todo.action';
import {connect} from 'react-redux';

const NewTodo = (props) => {
  const { history, addTodo, updateTextArea } = props;
  const onSubmit = () => {
    addTodo();
    history.push('/');
  };

  return (
    <TodoForm
    title="Add New Todo"
    buttonText="Add New Todo"
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
  addTodo,
  updateTextArea,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
