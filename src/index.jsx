import React from 'react'

import Content from './components/Content.jsx'

class App {
  render () {
    return (
      <div>
        <Content />
      </div>
    )
  }
}

React.render(<App />, document.body)
