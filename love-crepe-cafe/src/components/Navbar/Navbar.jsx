import React, { Component } from 'react';
import Styles from "./navbar.module.css"; 
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faArrowAltCircleLeft,faTimes,faLanguage,faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

import logo from '../../img/logo.png';
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideNav: false
    };
  }

  toggleSideNav = () => {
    this.setState(prevState => ({
      showSideNav: !prevState.showSideNav
    }));
  };

  closeNav = () => {
    this.setState({
      showSideNav: false
    });
  };

  render() {
    const { showSideNav } = this.state;
    return (
      <nav>
        <div className={Styles.navbar}>
          <div className={Styles.back}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </div>
          <div className={Styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={Styles.bar} onClick={this.toggleSideNav}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>

        {showSideNav && (
          <div className={Styles.sideNav}>
            <div className={Styles.closeNav} onClick={this.closeNav}>
              <FontAwesomeIcon icon={faTimes} /> {/* หรือไอคอนปิดที่คุณต้องการ */}
            </div>
            <a href=''><FontAwesomeIcon icon={faLanguage } /> Language</a> <br /> <br />
            <a href=''><FontAwesomeIcon icon={faShoppingCart } /> faOrder</a>
          </div>
        )}
      </nav>
    );
  }
}


