import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <App page="http://www.facebook.com">Facebook</App>
    </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});