import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App.js'
import list from './reducers/list.js'

let store = createStore(list)

React.render(
  <Provider store={ store }>
    { () => <App /> }
  </Provider>
, document.body
)
