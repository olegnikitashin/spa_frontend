import * as types from './actionTypes';

export function getPostsSuccess(posts) {
  return {
    type: types.GET_POSTS_SUCCESS,
    posts: posts
  };
}

export function addPostSucess(post) {
  return {
    type: types.ADD_POST_SUCCESS,
    post
  };
}

export function deletePostSuccess(post) {
  return {
    type: types.DELETE_POST_SUCCESS,
    post
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
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(post => { dispatch(addPostSucess(post));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deletePost(post) {
  return dispatch => {
    fetch(process.env.BACKEND_SERVER.trimRight('/')+ '/api/posts/' + post.id, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(post => { dispatch(showPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}

export function showPost(post) {
  return dispatch => {
    fetch(process.env.BACKEND_SERVER.trimRight('/')+ '/api/posts/' + post.id)
    .then(response => response.json())
    .then(post => { dispatch(deletePostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}
