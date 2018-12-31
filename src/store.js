import { createStore, combineReducers } from "redux";

import wizard from "./todos/wizard/wizard.reducer";
import list from "./todos/list/list.reducer";

const rootReducer = combineReducers({
  wizard,
  list
});

const store = createStore(rootReducer);
export default store;
