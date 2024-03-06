import React, { Component } from 'react';
import Styles from "./navbar.module.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowAltCircleLeft,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'; 
import logo from '../../img/logo.png';
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
          
          {/* ถ้ามีการสั่งซื้อ โชว? ไอคอน ตระกร้า */}
          {/* <div className={Styles.bar}>
          <FontAwesomeIcon icon={faShoppingBasket} />
          </div> */}

          <div className={Styles.bar}>
            <FontAwesomeIcon icon={faBars} /> 
          </div>

          </div>

        </nav>
    );
  }
}
