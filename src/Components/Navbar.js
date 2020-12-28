import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Navbar.css";
import {Link} from "react-router-dom";

class Navbar extends React.Component{

  constructor(){
    super();

  }

  render(){
    return (

      <nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" id="checkbox" />


    <span></span>
    <span></span>
    <span></span>

    <ul id="menu">

      <Link to ="/"><li>Informații generale</li></Link>
      <Link to="/vulnerabilitatii"><li>Vulnerabilități</li></Link>
      <Link to="/functii-hash"><li>Funcții Hash</li></Link>
      <Link to="/md-5"><li>MD5</li></Link>
      <Link to="/sha"><li>SHA</li></Link>
      <Link to="/sha1"><li>SHA1</li></Link>
      <Link to="/des"><li>DES</li></Link>
    </ul>
  </div>
   <p className="navbar-title">Criptografie</p>
</nav>




    )
  }

}

export default Navbar;
