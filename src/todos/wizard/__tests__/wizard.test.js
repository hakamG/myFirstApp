import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { Provider } from "react-redux";
import Wizard from "../components/Wizard";

import store from "../../../store";

configure({ adapter: new Adapter() });


describe("Wizard", () => {
  it("should wizard be rendered", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Wizard
          title="Add New Todo"
          buttonText="Add New Todo"
          onSubmit={() => {}}
          onBackClick={() => {}}
          placeholder=""
        />
      </Provider>
    );

    //expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("Wizard").length).toBe(1);
    console.log(wrapper.find("Wizard").find("textarea").html());
    expect(wrapper.find("textarea").length).toBe(1);
  });
});
