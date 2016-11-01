import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import PostsPage from './containers/PostsPage';
import PostPage from './containers/PostPage';
import NotFound from './components/NotFound';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostsPage} />
      <Route path="posts" component={PostsPage} />
      <Route path="/posts/:id" component={PostPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
