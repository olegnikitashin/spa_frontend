import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postReducer(state = initialState, action) {

  switch (action.type) {
    case types.GET_POSTS_SUCCESS:
      return Object.assign({}, state, {
        posts: action.posts
      });

    case types.ADD_POST_SUCCESS: {
      const newPosts = state.posts.concat(action.post);
      return Object.assign({}, state, {
        posts: newPosts
      });
    }

    case types.DELETE_POST_SUCCESS: {
      const newPosts = state.posts.filter(post => post.id !== action.post.id);
      return Object.assign({}, state, {
        posts: newPosts
      });
    }

    case types.SHOW_POST_SUCCESS:
      return Object.assign({}, state, {
        post: action.post
      });

    default:
      return state;
  }
}
