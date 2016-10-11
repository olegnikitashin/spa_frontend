import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let posts = [
  {
    id: 1,
    name: 'First post!',
    description: 'The very first message'
  },
  {
    id: 2,
    name: 'Second post!',
    description: 'Second message'
  },
  {
    id: 3,
    name: 'Third post!',
    description: 'Third message'
  },
];

ReactDOM.render(
  <App posts={posts} />,
  document.getElementById('root')
);
