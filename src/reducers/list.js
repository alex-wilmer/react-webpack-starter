import { combineReducers } from 'redux'

function listItems (state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item]

    default:
      return state
  }
}

let list = combineReducers({ listItems })

export default list
