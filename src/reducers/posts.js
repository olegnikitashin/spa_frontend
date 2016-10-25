import { ADD_POST } from '../actions'

const posts = (state = 0, action) => {
  switch (action.type) {
    case ADD_POST:
      console.log('Hello Redux!');
      return state;
    default:
      return state;
  }
}
