import { ADD_POST } from '../constants/Posts'

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}
