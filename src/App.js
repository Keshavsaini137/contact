import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './Components/contacts/Contacts';
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';
import Header from './Components/layout/Header';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';


import {Provider} from './Context';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager"/>
            <div className="container">
              <Switch>
                <Route exact path="/" 
                  component={Contacts} /> 

                <Route exact path="/contact/add" 
                component={AddContact} />
                <Route exact path="/contact/edit/:id" 
                component={EditContact} />

                <Route exact path="/about" 
                component={About} /> 
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;
