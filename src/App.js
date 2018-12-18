import React, { Component } from 'react';
import TodoList from "./TodoList";

class App extends Component {
    constructor(){
        super();
        this.state = {
            todos: [
                {
                    text: "Clean house",
                    finished: true,
                    id: Date.now()
                },
                {
                    text: "Fix window",
                    finished: false,
                    id: Date.now()+1
                }

            ],
            counter:0,
            textArea:''
        };
    }
    updateCounter(counter){
        this.setState({counter:counter});
    }
    onTextClick(id){
        const todos = this.state.todos.map((todo,i) => {
            if(id==todo.id){ todo.finished = !todo.finished; }
            return todo;
        });
        this.setState({todos});
        this.countNotFinishedItems(todos);
    }
    onDeleteTodo(id){
        const todos = this.state.todos.filter((todo) =>{ return todo.id !== id });
        this.setState({todos});
        this.countNotFinishedItems(todos);
    }
    countNotFinishedItems(todos){
        const newTodos = todos || this.state.todos;
        const counter = newTodos.filter((todo) =>{ return !todo.finished }).length;
        this.updateCounter(counter);
    }
    componentDidMount() {
        this.countNotFinishedItems();
    }
    onAddTodo(){
        this.addTodo();
    }
    addTodo(text){
        const todos = this.state.todos;
        todos.push({
            text: this.state.textArea,
            finished: false,
            id: Date.now()
        });
        this.countNotFinishedItems(todos);
        this.setState({todos,textArea: ''});
    }
    onTextAreaChange(e){
        this.setState({textArea: e.target.value});
    }
    render() {
    return (
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="todolist not-done">
                <div>
                    <h1>Todos</h1>
                    <div>
                        <textarea class="form-control" placeholder="New todo" rows="3"  onChange={this.onTextAreaChange.bind(this)} value={this.state.textArea}></textarea>
                        <button class="btn btn-outline-success add-todo" onClick={this.onAddTodo.bind(this)}>Add Todo</button>
                    </div>
                    <hr />
                    <TodoList updateCounter={this.updateCounter.bind(this)} onDeleteTodo={this.onDeleteTodo.bind(this)} onTextClick={this.onTextClick.bind(this)} todos={this.state.todos}/>
                    <div class="todo-footer">
                        <strong><span class="count-todos"></span></strong> Items Left to do: {this.state.counter}
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
