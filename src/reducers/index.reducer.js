import todo from './todo.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
