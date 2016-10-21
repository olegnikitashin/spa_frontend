import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <App pollInterval={600000} />,
  document.getElementById('root')
);
