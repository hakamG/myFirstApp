import { Button } from "@guestyci/atomic-design/dist/components";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";
import React from "react";
import Todo from "../components/Todo";


configure({ adapter: new Adapter() });

describe("<Todo />", () => {
  it("todo has two buttons", () => {
    const wrapper = shallow(
      <Todo
        onDeleteTodo={() => {}}
        onTextClick={() => {}}
        todo={{ id: 1, finished: true, text: "txt" }}
      />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find("Button").length).toBe(2);
    expect(
      wrapper
        .find(Button)
        .at(0)
        .childAt(0)
        .text()
    ).toBe("Edit");
    expect(
      wrapper
        .find(Button)
        .at(1)
        .childAt(0)
        .text()
    ).toBe("Delete");
  });
});