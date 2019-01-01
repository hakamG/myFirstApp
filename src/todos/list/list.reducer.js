import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_STATUS,
  UPDATE_TODO
} from "./list.actions";

const initialState = {
  todos: [
    {
      text: "Clean house",
      finished: true,
      id: Date.now()
    },
    {
      text: "Fix window",
      finished: false,
      id: Date.now() + 1
    }
  ]
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      const newTodo = {
        text: payload,
        finished: false,
        id: Date.now()
      };

      return { ...state, todos: [...state.todos, newTodo] };
    }

    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== payload)]
      };

    case UPDATE_TODO: {
      const { todos } = state;
      const [existTodo] = todos.filter(
        todo => todo.id === parseInt(payload.id)
      );
      const updatedTodo = { ...existTodo, text: payload.text };

      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo.id !== parseInt(payload.id)),
          updatedTodo
        ]
      };
    }

    case TOGGLE_STATUS: {
      const todos = state.todos.map((todo, i) => {
        if (todo.id === payload) {
          return {
            ...todo,
            finished: !todo.finished
          };
        }
        return todo;
      });

      return { ...state, todos: [...todos] };
    }

    default:
      return state;
  }
};
