import { ADD_POST } from '../constants/Posts'

const initialState = {
  id: null,
  title: '',
  body: '',
  username: ''
}

export default function post(state = initialState, action) {

  switch (action.type) {
    case ADD_POST:
      console.log('Hello Redux!');
      return {...state, post: action.payload}

    default:
      return state;
  }
}
