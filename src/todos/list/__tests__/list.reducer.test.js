import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_STATUS,
  UPDATE_TODO,
  addTodo,
  deleteTodo,
  toggleStatus,
  updateTodo
} from "../list.actions";
import reducer from "../list.reducer";

describe("list reducer", () => {
  const initialState = {
    todos: [
      {
        text: "Clean house",
        finished: true,
        id: 123456
      },
      {
        text: "Fix window",
        finished: false,
        id: 987654
      }
    ]
  };
  it("should return the initial state", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
