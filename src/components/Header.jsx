import React from 'react';
// import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';


function Header(){
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper" style={{backgroundColor: '#F4D03F'}}>
          <a href='/' className="brand-logo" style={{marginLeft: 25}}>login</a>
          <ul id='nav-mobile' className="right hide-on-med-and-down" style={{backgroundColor: '#26C6DA'}}>
            <li><a href='#/newroute'><i className="material-icons" style={{marginRight: 15}}>add_circle_outline</i></a></li>
            <li><a href='#/routes'><i className="material-icons" style={{marginRight: 15}}>search</i></a></li>
            <li><a href='#/user'><i className="material-icons" style={{marginRight: 15}}>account_circle</i></a></li>
          </ul> 
        </div>
      </nav>
    </div>

  );
}

export default Header;
{/* <nav>
<div class="nav-wrapper">
  <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
  <ul class="right hide-on-med-and-down">
    <li><a href="sass.html"><i class="material-icons">search</i></a></li>
    <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
    <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
    <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
  </ul>
</div>
</nav> */}