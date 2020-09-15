import React from 'react'
import ReactDOM from 'react-dom'
import App from './apps/App'
import { Provider } from 'react-redux'
import store from './store/test_redux'
import './assets/styles/main.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
