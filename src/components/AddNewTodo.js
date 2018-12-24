import React from 'react';
import { Button } from 'reactstrap';
import connect from 'react-redux/es/connect/connect';
import _ from 'lodash';

import { addTodo, updateTextArea } from '../actions/todo.actions';

const AddNewTodo = ({ updateTextArea, textArea, addTodo, history }) => {
  const isTextValid = _.trim(textArea).length > 0;

  const onAddTodo = () => {
    if (isTextValid) {
      addTodo();
      history.push('/');
    }

  };

  const onBack = () => {
    updateTextArea('');
    history.push('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="add-new">
            <h1>Add New Todo</h1>
            <div>
            <textarea
              className="form-control"
              placeholder="New todo"
              rows="3"
              onChange={(e) => {updateTextArea(e.target.value);}}
              onKeyPress={(e) => {
                if (e.charCode === 13) {
                  onAddTodo();
                  e.preventDefault();
                }
              }}
              value={textArea}
            ></textarea>
            </div>
            <div className="row">
              <div className="col-md-10">
                <Button
                  outline
                  onClick={onBack}
                  className="add-todo"
                  color="warning"
                >Back to Todo List</Button>
              </div>
              <div className="col-md-2">
                <Button
                  disabled={!isTextValid}
                  outline
                  className="add-todo"
                  color="success"
                  onClick={onAddTodo}
                >Add Todo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTodo);
