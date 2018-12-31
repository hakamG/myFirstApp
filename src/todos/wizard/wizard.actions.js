const UPDATE_TEXT_AREA = "UPDATE_TEXT_AREA";

const updateTextArea = payload => {
  return {
    type: UPDATE_TEXT_AREA,
    payload
  };
};

export { UPDATE_TEXT_AREA, updateTextArea };
