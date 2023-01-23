import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

describe('HelloWorld component', () => {
  it('should render as expected', () => {
    // use enzyme's shallow function to render the HelloWorld component
    const component = shallow(<HelloWorld name={'Hou'} />);
    // assert that the component renders properly with the correct name prop
    expect(component.contains('Hou')).toBe(true);
  });
});
