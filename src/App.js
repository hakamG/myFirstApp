import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: 'Clean house',
          finished: true,
          id: Date.now(),
        },
        {
          text: 'Fix window',
          finished: false,
          id: Date.now() + 1,
        },

      ],
      textArea: '',
    };
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onTodoToggleStatus = this.onTodoToggleStatus.bind(this);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onTodoToggleStatus(id) {
    const todos = this.state.todos.map((todo, i) => {
      if (id === todo.id) { todo.finished = !todo.finished; }
      return todo;
    });
    this.setState({ todos });
  }

  onDeleteTodo(id) {
    const todos = this.state.todos.filter((todo) => { return todo.id !== id; });
    this.setState({ todos });
  }

  onAddTodo() {
    this.addTodo();
  }

  addTodo() {
    const todos = this.state.todos;
    todos.push({
      text: this.state.textArea,
      finished: false,
      id: Date.now(),
    });
    this.setState({ todos, textArea: '' });
  }

  onTextAreaChange(e) {
    this.setState({ textArea: e.target.value });
  }

  render() {
    const { textArea, todos } = this.state;
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="todolist not-done">
              <div>
                <h1>Todos</h1>
                <div>
                  <textarea
                    class="form-control"
                    placeholder="New todo"
                    rows="3"
                    onChange={this.onTextAreaChange}
                    value={textArea}
                  ></textarea>
                  <button
                    class="btn btn-outline-success add-todo"
                    onClick={this.onAddTodo}
                  >Add Todo
                  </button>
                </div>
                <hr />
                <TodoList
                  onDeleteTodo={this.onDeleteTodo}
                  onTextClick={this.onTodoToggleStatus}
                  todos={todos}
                />
                <div
                  class="todo-footer"
                >
                  <strong><span
                    class="count-todos"
                  ></span></strong>{`Items Left to do: ${todos.filter((todo) => { return !todo.finished; }).length}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
