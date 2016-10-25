import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

ReactDOM.render(
  <Provider store={store}>
    <App pollInterval={60000} />
  </Provider>,
  document.getElementById('root')
)
