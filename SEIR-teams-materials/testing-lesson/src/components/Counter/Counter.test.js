import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Counter />);
  });

  it('should have a header that says "Counter"', () => {
    // check that "Counter" is inside of the component
    expect(component.contains(<h1>Counter</h1>)).toBe(true);
  });

  it('should initialize the state count to 0', () => {
    let count = component.state('count');
    expect(count).toBe(0);
  });

  it('should display the initial count on the page', () => {
    // find the count element on the page
    let countElement = component.find('.count');
    // check for the presence of the count element with 0 zero displayed
    expect(countElement.text()).toBe('0');
  });

  it('should increment the count when + button is clicked one time', () => {
    // simulate a click
    component.find('.plus').simulate('click');
    // assert that the count has increased by 1
    let count = component.state('count');
    expect(count).toBe(1);
  });

  it('should increment the count each time the + button is clicked', () => {
    // simulate 5 clicks
    let clickCount = 5;
    let currentCount;
    let endCount;

    for (let i = 0; i < clickCount; i++) {
      // store the current count
      currentCount = component.state('count');

      // find the plus button and click on it
      component.find('.plus').simulate('click');

      // store the new count
      endCount = component.state('count');

      // check that the count has increased by 1
      expect(endCount).toBe(currentCount + 1);
    }
  });

  it('should decrement the count when - button is clicked one time', () => {
    // simulate a click
    component.find('.minus').simulate('click');
    // assert that the count has decreased by 1
    let count = component.state('count');
    expect(count).toBe(-1);
  });
});
