import { combineReducers } from 'redux';
import posts from './postsReducer';
import postForm from './postFormReducer';

const rootReducer = combineReducers({
  posts,
  postForm
});

export default rootReducer;
