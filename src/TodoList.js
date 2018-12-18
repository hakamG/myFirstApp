import React, { Component } from 'react';
import Todo from "./Todo";

class TodoList extends Component {
    onTextClick(id){
        this.props.onTextClick(id);
    }
    onDeleteTodo(id){
        this.props.onDeleteTodo(id);
    }

    render() {
        const todos = this.props.todos.map((todo,i) =>
            <Todo key={i} checked={todo.finished} text={todo.text} onTextClick={this.onTextClick.bind(this)} id={todo.id} onDeleteTodo={this.onDeleteTodo.bind(this)}/>);
        return (
            <ul class="list-unstyled">
              {todos}
            </ul>
        );
    }
}

export default TodoList;
