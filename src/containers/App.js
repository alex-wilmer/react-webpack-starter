import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/actions.js'
import List from '../components/List.js'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <List
        addItem={ text => this.props.dispatch(addItem(text)) }
        listItems={ this.props.listItems }
      />
    )
  }
}

function select (state) {
  return {
    listItems: state.listItems
  }
}

export default connect(select)(App)
