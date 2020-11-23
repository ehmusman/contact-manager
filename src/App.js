import React, { Component } from 'react'
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import AddForm from './components/layout/AddForm'
import { Provider } from './Context'
import About from './components/pages/About'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/About" component={About} />
                <Route exact path="/AddForm" component={AddForm} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;
