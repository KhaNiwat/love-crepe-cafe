import React, { Component } from 'react';
import Styles from "./navbar.module.css"; // Correct the import statement
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../img/logo.png';
import { faBars, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'; 

export default class Navbar extends Component {
  render() {
    return (
        <nav>
          <div className={Styles.navbar}>
          <div className={Styles.back}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </div>
          <div className={Styles.logo}> 
            <img src={logo} alt="Logo" />
          </div>
          <div className={Styles.bar}>
            <FontAwesomeIcon icon={faBars} /> 
          </div>
          </div>

        </nav>
    );
  }
}
