import React, { Component, findDOMNode } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/actions.js'
import Content from '../components/Content.js'

class App extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <div>
        <input type='text' ref='item' />
        <button onClick={ this.handleClick }>Add Item</button>
        { this.props.listItems }
      </div>
    )
  }

  handleClick (e) {
   const node = findDOMNode(this.refs.item)
   const text = node.value.trim()
   this.props.dispatch(addItem(text))
   node.value = ''
 }
}

function select (state) {
  return {
    listItems: state.listItems
  }
}

export default connect(select)(App)
