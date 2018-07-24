import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

const appElem = document.getElementById('app');

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    appElem
  );

render(App);

if (module.hot) module.hot.accept('./App/App', () => render(App));
