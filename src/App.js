import React, { Component } from 'react'
import Header from './components/layout/Header'
import Contact from './components/contacts/Contact'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Contact />
        </div>
      </div>
    )
  }
}


export default App;
