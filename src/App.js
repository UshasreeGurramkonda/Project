import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Register';
import LoginForm from './pages/LoginForm';
import Welcome from './pages/Welcome';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div className="App__Side">
          <div className="App__Form">

          {/* <div className="PageSwitcher">
                <NavLink to="/Login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                <NavLink  to="/Register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Register</NavLink>
                
              </div> */}
              <Route exact path="/" component={Welcome}>
              </Route>

              <Route path="/Register" component={Register}>
              </Route>
              <Route path="/Login" component={LoginForm}>
              </Route>
              

          </div>
         
        </div>
        </div>
      </Router>
    );
  }
}
export default App;
