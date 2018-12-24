import React from 'react';
import { Button } from 'reactstrap';
import _ from 'lodash';

const TodoForm = ({ updateTextArea, textArea, title, buttonText, onSubmit, onBackClick }) => {
  const isTextValid = _.trim(textArea).length > 0;

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
                  if (isTextValid) {onSubmit();};
                  e.preventDefault();
                }
              }}
              value={textArea}
            ></textarea>
            </div>
            <div className="row justify-content-between">
              <div className="col-auto mr-auto">
                <Button
                  outline
                  onClick={onBackClick}
                  className="add-todo"
                  color="warning"
                >Back to Todo List</Button>
              </div>
              <div className="col-auto">
                <Button
                  disabled={!isTextValid}
                  outline
                  className="add-todo"
                  color="success"
                  onClick={onSubmit}
                >{buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
