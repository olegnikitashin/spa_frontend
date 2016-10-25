import { ADD_POST } from '../actions/PostActions'

export default function posts(state = [], action) {

  switch (action.type) {
    case ADD_POST:
      console.log('Hello Redux!');
      return state;

    default:
      return state;
  }
}
