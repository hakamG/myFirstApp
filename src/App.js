import React, { Component } from 'react';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { addTodo, updateTextArea, deleteTodo, toggleStatus } from './actions/todo.action';

class App extends Component {

  constructor(props) {
    super(props);
    this.onTodoToggleStatus = this.onTodoToggleStatus.bind(this);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
  }

  onTodoToggleStatus(id) {
    this.props.toggleStatus(id);
  }

  onDeleteTodo(id) {
    this.props.deleteTodo(id);
  }

  render() {
    const { todos } = this.props;
    const notFinishedTodosCount = todos.filter(todo => !todo.finished).length;

    return (
      <div className="App-intro">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="todolist not-done">
                <div>
                  <h1>Todos</h1>
                  <Link to="/new"><Button color="success" outline>Add New Todo</Button></Link>
                  <hr />
                  <TodoList
                    onDeleteTodo={this.onDeleteTodo}
                    onTextClick={this.onTodoToggleStatus}
                    todos={todos}
                  />
                  <div
                    className="todo-footer"
                  >
                    <strong>
                      <span className="count-todos"></span>
                    </strong>{`Items Left to do: ${notFinishedTodosCount}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    todos: state.todo.todos,
    textArea: state.todo.textArea,
  };
}

const mapDispatchToProps = {
  addTodo,
  updateTextArea,
  deleteTodo,
  toggleStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
