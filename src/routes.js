import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import PostsPage from './containers/PostsPage';
import PostPage from './components/PostPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsPage} />
    <Route path="/posts" component={PostsPage}>
      <Route path="/posts/:id" component={PostPage} />
    </Route>
  </Route>
);
