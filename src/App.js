import React, { Component } from 'react'
import Contacts from './Components/Contacts';
import Header from './Components/Header';

import {Provider} from './Context';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <Provider>
      <div>
        <Header branding="Contact Manager"/>
        <div className="container">
          <Contacts />
        </div>
      </div>
      </Provider>
    )
  }
}


export default App;
