import React, { Component } from 'react';

class Todo extends Component {
    onTextClick(){
        debugger;
        this.props.onTextClick(this.props.id);
    }
    onDeleteTodo(){
        this.props.onDeleteTodo(this.props.id);
    }
    render() {
        return (
              <li class="ui-state-default">
                  <div className={this.props.checked ? "checked":""}>
                    <label onClick={this.onTextClick.bind(this)}>{this.props.text}</label>
                    <button class="btn btn-sm btn-outline-danger" onClick={this.onDeleteTodo.bind(this)}>Delete</button>
                  </div>
              </li>
        );
    }
}

export default Todo;
