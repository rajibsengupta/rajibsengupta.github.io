import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import About from './Components/About';
//import Navbar from './Components/CustomNavitem';
import Welcome from './Components/Welcome';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcome} />
            </Switch>
        </Router>
    );
  }
}

export default App;
