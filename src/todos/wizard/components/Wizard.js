import React from "react";
import { connect } from "react-redux";
import { Button, Input } from "reactstrap";
import _ from "lodash";

import { updateTextArea } from "../wizard.actions";

const Wizard = ({
  updateTextArea,
  textArea,
  title,
  buttonText,
  onSubmit,
  onBackClick,
  placeholder
}) => {
  const isTextValid = _.trim(textArea).length > 0;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="add-new mt-4 px-4 pt-4 pb-2">
            <h1 className="m-0 pb-4">{title}</h1>
            <div>
              <Input
                type="textarea"
                className="form-control"
                placeholder={placeholder}
                rows="3"
                onChange={e => {
                  updateTextArea(e.target.value);
                }}
                onKeyPress={e => {
                  if (e.charCode === 13) {
                    if (isTextValid) {
                      onSubmit();
                    }
                    e.preventDefault();
                  }
                }}
                value={textArea}
              />
            </div>
            <div className="row justify-content-between">
              <div className="col-auto mr-auto">
                <Button
                  outline
                  onClick={onBackClick}
                  className="mt-2"
                  color="warning"
                >
                  Back to Todo List
                </Button>
              </div>
              <div className="col-auto">
                <Button
                  disabled={!isTextValid}
                  outline
                  className="mt-2"
                  color="success"
                  onClick={onSubmit}
                >
                  {buttonText}
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
    textArea: state.wizard.textArea
  };
}

const mapDispatchToProps = {
  updateTextArea
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wizard);
