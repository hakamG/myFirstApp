const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TEXT_AREA = 'UPDATE_TEXT_AREA';
const TOGGLE_STATUS = 'TOGGLE_STATUS';

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const updateTextArea = (payload) => {
  return {
    type: UPDATE_TEXT_AREA,
    payload,
  };
};

const toggleStatus = (payload) => {
  return {
    type: TOGGLE_STATUS,
    payload,
  };
};

export {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TEXT_AREA,
  TOGGLE_STATUS,
  addTodo,
  deleteTodo,
  updateTextArea,
  toggleStatus,
};
