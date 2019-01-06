import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {} from "reactstrap";

import TodoList from "../todos/list/components/TodoList";
import NotFinishedCounter from "../todos/notFinishedCounter/components/NotFinishedCounter";
import { Button } from "@guestyci/atomic-design/dist/components";

const Main = ({ todos }) => {
  return (
    <div className="App-intro">
      <div className="container">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="todolist not-done mt-4 px-4 pt-4 pb-2">
              <div>
                <h1 className="m-0 pb-4">Todos</h1>
                <Link to="/new">
                  <Button color="success">Add New Todo</Button>
                </Link>
                <hr />
                <TodoList />
                <div className="todo-footer py-2 px-3">
                  <strong>
                    <span className="count-todos" />
                  </strong>
                  <NotFinishedCounter todos={todos} />
                </div>
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
    todos: state.list.todos
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
