import React, { Component } from 'react'
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import AddForm from './components/layout/AddForm'
import { Provider } from './Context'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
          <div className="container">
            <AddForm />
            <Contacts />
          </div>
        </div>
      </Provider>
    )
  }
}


export default App;
