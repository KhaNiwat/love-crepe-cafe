import styles from "../../src/components/Index.module.css";
import React, { useState } from "react";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";

export default function Index() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const {lang} = useParams();

  // ไปหน้าอาหารรวม
  const To_page_cus_all = () =>{ 
    navigate("/Customernenuall/"+lang);
  }
  return (
    <div className={styles.mobile}>
      <div className={styles.lang}>
      <select className={styles.selectOption}>
        <option value="1">England</option>
        <option value="2">China</option>
        <option value="3">Thai</option>
        <option value="4">Korea</option>
      </select>
      </div>

      <div className={styles.footer}>
        <a href=""><button className={styles.button} onClick={To_page_cus_all}>Eat in</button> </a>
        {/* <a href=""><button className={styles.button}>Take away</button> </a> */}
      </div>
    </div>

  );
}
