import { ADD_TODO, DELETE_TODO, UPDATE_TEXT_AREA, TOGGLE_STATUS } from '../actions/todo.action';

const initialState = {
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
export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_TODO: {
      const newTodo = {
        text: state.textArea,
        finished: false,
        id: Date.now(),
      };
      return { ...state, todos: [...state.todos, newTodo], textArea: '' };
    }

    case DELETE_TODO:
      return {
        todos: [...state.todos.filter((todo) => { return todo.id !== payload;})],
        textArea: state.textArea,
      };

    case UPDATE_TEXT_AREA:

      return { ...state, textArea: payload };

    case TOGGLE_STATUS: {
      const todos = state.todos.map((todo, i) => {
        if (todo.id === payload) {
          return {
            ...todo, finished: !todo.finished,
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
