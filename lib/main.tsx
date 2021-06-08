import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';

// fix error with bundler
window.React = React;
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);


