import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Welcome extends Component {
    constructor() {
        super();
 }

 render() {
  return (
  <div className="Formwelcome">
      <form>
     
       <h1>welcome</h1>
       <div className="p">
       <p>As long as poverty, injustice and gross inequality persist in our world, none of us can truly rest.</p>
       </div>
        <div className="button">
            
       {/* <Link to="/login" className="FormField__Link">LOGIN</Link>   &nbsp;    &nbsp;

        <Link to="/Register" className="FormField__Link">REGISTER</Link> */}
            
        <NavLink to="/Login" className="PageSwitcher__Item">LOGIN</NavLink>
        <NavLink to="Register" className="PageSwitcher__Item">REGISTER</NavLink>
        </div>
      </form>
    </div>
  );
}
}


export default Welcome;