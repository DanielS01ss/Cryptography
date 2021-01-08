import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Footer.css";
import githubLogo from "../Images/github-logo.png";
import linkedingLogo from "../Images/Linkedin-logo.png";
import facebookLogo from "../Images/facebook-logo.png";


class Footer extends React.Component{

    constructor(){
      super();

    }

    render(){
       return(
         <footer>
            <ul className="social-links">
              <li><a href="https://github.com/DanielS01ss"><img src={githubLogo} alt="github-logo" className="github-logo"/></a></li>
              <li><a href="https://www.linkedin.com/in/daniel-stanculescu-441901159/"><img src={linkedingLogo} alt="github-logo" className="github-logo"/> </a></li>
              <li><a><img src={facebookLogo} alt="github-logo" className="github-logo"/></a></li>
            </ul>
         </footer>
       )
    }
}

export default Footer;
