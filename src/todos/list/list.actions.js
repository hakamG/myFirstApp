const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS = "TOGGLE_STATUS";
const UPDATE_TODO = "UPDATE_TODO";

const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload
  };
};

const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  };
};

const toggleStatus = payload => {
  return {
    type: TOGGLE_STATUS,
    payload
  };
};

const updateTodo = payload => {
  return {
    type: UPDATE_TODO,
    payload
  };
};

export {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_STATUS,
  UPDATE_TODO,
  addTodo,
  deleteTodo,
  toggleStatus,
  updateTodo
};
