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
          <Contact
            name='usman'
            email='usman@gmail.com'
            phone='234-345-3456'
          />
          <Contact
            name='usman'
            email='usman@gmail.com'
            phone='234-345-3456'
          />
          <Contact
            name='usman'
            email='usman@gmail.com'
            phone='234-345-3456'
          />
        </div>
      </div>
    )
  }
}


export default App;
