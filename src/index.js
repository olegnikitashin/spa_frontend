import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './pp';
import configureStore from './store/configureStore'

const store = configureStore()

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)


ReactDOM.render(
  <Provider store={store}>
  <App pollInterval={600000} />
  </Provider>,
  document.getElementById('root')
);
