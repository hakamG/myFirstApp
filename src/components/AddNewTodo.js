import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { addTodo, updateTextArea } from '../actions/todo.action';
import connect from 'react-redux/es/connect/connect';

const AddNewTodo = (props) => {
  const { updateTextArea, textArea, addTodo, history } = props;
  const onAddTodo = () => {
    addTodo();
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
                <Link to="/">
                  <Button
                    outline
                    className="add-todo"
                    color="warning"
                  >Back to Todo List</Button>
                </Link>
              </div>
              <div className="col-md-2">
                <Button
                  disabled={!(textArea.length > 0)}
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
