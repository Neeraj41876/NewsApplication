import React, { Component } from 'react'

import News from './component/News'
import NavBar from './component/NavBar'

export default class App extends Component {
  render() {
    return (
     <>
<NavBar></NavBar>
<News/>
  </>
    )
  }
}
