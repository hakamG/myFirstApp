import { UPDATE_TEXT_AREA } from "./wizard.actions";

const initialState = {
  textArea: ""
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TEXT_AREA:
      return { ...state, textArea: payload };

    default:
      return state;
  }
};
