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

describe("list actions", () => {
  it("should create new todo", () => {
    const text = "Text To Be Tested";
    const expectedAction = {
      type: ADD_TODO,
      payload: text
    };

    expect(addTodo(text)).toEqual(expectedAction);
  });

  it("should delete todo", () => {
    const text = "Text To Be Tested";
    const expectedAction = {
      type: DELETE_TODO,
      payload: text
    };

    expect(deleteTodo(text)).toEqual(expectedAction);
  });

  it("should Toggle todo status", () => {
    const id = 10;
    const expectedAction = {
      type: TOGGLE_STATUS,
      payload: id
    };

    expect(toggleStatus(id)).toEqual(expectedAction);
  });

  it("should update todo", () => {
    const id = 10;
    const expectedAction = {
      type: UPDATE_TODO,
      payload: id
    };

    expect(updateTodo(id)).toEqual(expectedAction);
  });
});
