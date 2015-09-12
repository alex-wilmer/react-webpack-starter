// Dependencies

import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Root Component

import App from './containers/App.js'

// Reducer

import list from './reducers/list.js'

let store = createStore(list)

React.render(
  <Provider store={ store }>
    { () => <App /> }
  </Provider>
, document.body
)
