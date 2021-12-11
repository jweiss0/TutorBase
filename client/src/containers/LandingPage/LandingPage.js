import React, { Component } from "react";
import Navbar from './Navbar';
import Home from './Home';
import './LandingPage.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class landing extends Component {
  render() {
    return (
      <div>
        <header>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component= {Home} />
            </Switch>
          </Router>
          </header>
      </div>
    );
  }
}

export default landing;
