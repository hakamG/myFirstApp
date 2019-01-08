import { UPDATE_TEXT_AREA, updateTextArea } from "../wizard.actions";

describe("wizard actions", () => {
  it("should update text area text", () => {
    const text = "Text To Be Tested";
    const expectedAction = {
      type: UPDATE_TEXT_AREA,
      payload: text
    };

    expect(updateTextArea(text)).toEqual(expectedAction);
  });
});
