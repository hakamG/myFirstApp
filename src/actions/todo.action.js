const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TEXT_AREA = 'UPDATE_TEXT_AREA';
const TOGGLE_STATUS = 'TOGGLE_STATUS';

const addTodo = (item) => {
  return {
    type: ADD_TODO,
    item,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const updateTextArea = (item) => {
  return {
    type: UPDATE_TEXT_AREA,
    item,
  };
};

const toggleStatus = (id) => {
  return {
    type: TOGGLE_STATUS,
    id,
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
