import reducer from "../wizard.reducer";
import { UPDATE_TEXT_AREA, updateTextArea } from "../wizard.actions";

describe("wizard reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ textArea: "" });
  });
  it("should handle UPDATE_TEXT_AREA", () => {
    expect(
      reducer(undefined, {
        type: UPDATE_TEXT_AREA,
        payload: "Test Text"
      })
    ).toEqual({
      textArea: "Test Text"
    });
  });
});
