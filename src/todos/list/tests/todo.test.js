import React from 'react';
import { configure, shallow } from 'enzyme';
import Todo from '../components/Todo';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import { Button } from 'reactstrap';

configure({ adapter: new Adapter() });

describe('<Todo />', () => {
  it('todo has two buttons', () => {
    const wrapper = shallow(<Todo
      onDeleteTodo={() => {}}
      onTextClick={() => {}}
      todo={{ id: 1, finished: true, text: 'txt' }}
    />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('Button').length).toBe(2);
    expect(wrapper.find(Button).at(0).dive().find('button').text()).toBe("Edit");
    expect(wrapper.find(Button).at(1).dive().find('button').text()).toBe("Delete");
  });
});

