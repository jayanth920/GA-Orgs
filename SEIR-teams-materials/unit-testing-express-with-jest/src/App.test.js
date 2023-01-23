import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {isSnakeEyes} from './dice/diceHelper';
import puppeteer from 'puppeteer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



