import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowAltCircleLeft, faTimes, faLanguage, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Styles from "./navbar.module.css";
import logo from '../../img/logo.png';
import { useNavigate, useParams  } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const { lang, table } = useParams();
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(prevState => !prevState);
  };
  const ClickPage = () =>{
    navigate("/menu/all/"+lang+"/"+table);
  };
  const atc = async(e) => {
    await navigate("/PageConfirm/"+lang+"/"+table);
  };

  const closeNav = () => {
    setShowSideNav(false);
  };

  return (
    <nav>
      <div className={Styles.navbar}>
      <button className={Styles.back} onClick={ClickPage}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
        <div className={Styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <button className={Styles.bar} onClick={toggleSideNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {showSideNav && (
        <div className={Styles.sideNav}>
          <div className={Styles.closeNav} onClick={closeNav}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <button className='text-white'><FontAwesomeIcon icon={faLanguage} /> Language</button> <br /> <br />
          <button className='text-white' onClick={(e) => {atc(e)}}><FontAwesomeIcon icon={faShoppingCart} /> Order</button>
        </div>
      )}
    </nav>
  );
}
