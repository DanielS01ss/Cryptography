import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import mainbkg from './Images/photo-main-4.jpg';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import {BrowserRouter as Router , Route,Switch ,Redirect } from "react-router-dom";
import Vulnerabilitatii from "./Components/Vulnerabilitatii";
import FunctiiHash from "./Components/FunctiiHash";
import MD5 from "./Components/MD5";
import SecureHashAlgorithm from "./Components/SecureHashAlgorithm";
import SHA1 from "./Components/SHA1";
import DES from "./Components/DES";

class App extends React.Component{

  constructor(){
    super();

  }

  render()
  {
    return(
    <div className="main-bkg">
      <Router>
        <Navbar/>

      <div className="main-logo">
        <img src={mainbkg} alt="main-background" className="bkg-photo"/>
      </div>
      <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/vulnerabilitatii">
        <Vulnerabilitatii/>
      </Route>
      <Route exact path="/functii-hash">
        <FunctiiHash/>
      </Route>
      <Route exact path="/md-5">
        <MD5/>
      </Route>
      <Route exact path="/sha">
        <SecureHashAlgorithm/>
      </Route>
      <Route exact path="/sha1">
       <SHA1/>
      </Route>
      <Route exact path="/des">
      <DES/>
      </Route>
      </Switch>
      </Router>
      <Footer/>
      </div>
    )
  }


}

export default App;
