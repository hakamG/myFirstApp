import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const TodoForm = (props) => {
  const { updateTextArea, textArea, title, buttonText, onSubmit } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="add-new">
            <h1>{title}</h1>
            <div>
            <textarea
              className="form-control"
              placeholder="New todo"
              rows="3"
              onChange={(e) => {updateTextArea(e.target.value);}}
              onKeyPress={(e) => {
                if (e.charCode === 13) {
                  onSubmit();
                  e.preventDefault();
                }
              }}
              value={textArea}
            ></textarea>
            </div>
            <div>
              <Button
                outline
                className="add-todo"
                color="success"
                onClick={onSubmit}
              >{buttonText}
              </Button>
            </div>
            <div>
              <Link to="/">Back to Todo List</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
