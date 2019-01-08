import React, { Component } from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import { addTodo, deleteTodo, toggleStatus } from "../list.actions";
import { Search } from "@guestyci/atomic-design/dist/components";

class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTxt: "",
      filteredTodos: []
    };
    this.filterTodos = this.filterTodos.bind(this);
  }
  componentWillMount() {
    this.setState({
      filteredTodos: this.props.todos
    });
  }
  filterTodos = () => {
    let filteredTodos = this.props.todos;
    const searchTxt = this.state.searchTxt;

    filteredTodos = filteredTodos.filter(todo => {
      let todoText = todo.text.toLowerCase();
      return todoText.indexOf(searchTxt.toLowerCase()) !== -1;
    });

    return filteredTodos;
  };
  handleSearchChange = txt => {
    this.setState({ searchTxt: txt });
  };
  render() {
    const { toggleStatus, deleteTodo } = this.props;
    let filteredTodos = this.filterTodos();
    return (
      <div>
        <Search isOpen={true} onChange={this.handleSearchChange} />
        <ul className="list-unstyled">
          {filteredTodos.map((todo, i) => (
            <Todo
              key={i}
              todo={todo}
              onTextClick={toggleStatus}
              onDeleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    todos: state.list.todos,
    textArea: state.wizard.textArea
  };
}

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
