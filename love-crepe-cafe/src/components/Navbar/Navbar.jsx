import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowAltCircleLeft,
  faTimes,
  faLanguage,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./navbar.module.css";
import logo from "../../img/logo.png";
import { useNavigate, useParams } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { lang, table } = useParams();
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav((prevState) => !prevState);
  };

  const ClickPage = () => {
    navigate("/menu/all/" + lang + "/" + table);
  };

  const atc = async (e) => {
    await navigate("/PageConfirm/" + lang + "/" + table);
  };
  

  const closeNav = () => {
    setShowSideNav(false);
  };

  // Language handlers
  const changeLanguage_TH = async (lang) => {
    navigate("/menu/all/"+ lang + "/" + table);
    window.location.reload()
  };
  const changeLanguage_EN = async (lang) => {
    navigate("/menu/all/"+ lang + "/" + table);
    window.location.reload()
  };
  const changeLanguage_CN= async (lang) => {
    navigate("/menu/all/"+ lang + "/" + table);
    window.location.reload()
  };
  const changeLanguage_KR= async (lang) => {
    navigate("/menu/all/"+ lang + "/" + table);
    window.location.reload()
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

          <div className={Styles.box}>
            <button className="text-white" onClick={() => changeLanguage_TH("TH")}>
              <FontAwesomeIcon icon={faLanguage} /> ไทย
            </button>
            <br />
            <button className="text-white" onClick={() => changeLanguage_EN("EN")}>
              <FontAwesomeIcon icon={faLanguage} /> English
            </button>
            <br />
            <button className="text-white" onClick={() => changeLanguage_CN("CN")}>
              <FontAwesomeIcon icon={faLanguage} /> 中文
            </button>
            <br />
            <button className="text-white" onClick={() => changeLanguage_KR("KR")}>
              <FontAwesomeIcon icon={faLanguage} /> 한국어
            </button>
            <br />

            <button
              className="text-white"
              onClick={(e) => {
                atc(e);
              }}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Order
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
