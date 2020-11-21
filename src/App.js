import React, { Component } from 'react'
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Contacts
          />
        </div>
      </div>
    )
  }
}


export default App;
