import React, { Component, findDOMNode } from 'react'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={ this.handleClick }>Add</button>
        <ul>
          { this.props.listItems.map(x => <li>{ x }</li>) }
        </ul>
      </div>
    )
  }

  handleClick (e) {
   const node = findDOMNode(this.refs.input)
   const text = node.value.trim()
   this.props.addItem(text)
   node.value = ''
 }
}
