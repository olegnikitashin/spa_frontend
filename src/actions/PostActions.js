import * as types from './actionTypes';

export function getPostsSuccess(posts) {
  return {
    type: types.GET_POSTS_SUCCESS,
    posts
  };
}

export function addPostSuccess(post) {
  return {
    type: types.ADD_POST_SUCCESS,
    post
  };
}

export function deletePostSuccess(id) {
  return {
    type: types.DELETE_POST_SUCCESS,
    id
  };
}

export function showPostSuccess(post) {
  return {
    type: types.SHOW_POST_SUCCESS,
    post
  };
}


export function getPosts() {
  return dispatch => {
    fetch(process.env.BACKEND_SERVER.trimRight('/')+ '/api/posts')
    .then(response => response.json())
    .then(posts => { dispatch(getPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addPost(post) {
  return dispatch => {
    fetch(process.env.BACKEND_SERVER.trimRight('/')+ '/api/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(post => { dispatch(addPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deletePost(id) {
  return dispatch => {
    fetch(process.env.BACKEND_SERVER.trimRight('/')+ '/api/posts/' + id, {
      method: 'DELETE'
    })
    .then(() => { dispatch(deletePostSuccess(id));
    }).catch(error => {
      throw(error);
    });
  };
}

export function showPost(id) {
  return dispatch => {
    fetch(process.env.BACKEND_SERVER.trimRight('/')+ '/api/posts/' + id)
    .then(response => response.json())
    .then(post => { dispatch(showPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}
