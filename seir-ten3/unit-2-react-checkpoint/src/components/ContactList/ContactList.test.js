import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import Contact from '../Contact/Contact';

const contacts = [
  {
    name: 'Tweety',
    email: 'tweety@gmail.com',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg',
  },
  {
    name: 'Bugs Bunny',
    email: 'bugs@gmail.com',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Bugs_Bunny.svg',
  },
  {
    name: 'Daffy Duck',
    email: 'daffy@gmail.com',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Daffy_Duck.svg',
  },
];

describe('ContactList component:', () => {
  it('renders without crashing', () => {
    shallow(<ContactList contacts={contacts} />);
  });

  it('has a `.contact-list` class', () => {
    const component = shallow(<ContactList contacts={contacts} />);
    expect(component.hasClass('contact-list')).toEqual(true);
  });

  it(`should contain ${contacts.length} contacts`, () => {
    const component = shallow(<ContactList contacts={contacts} />);
    expect(component.find(Contact).length).toEqual(contacts.length);
  });
});
