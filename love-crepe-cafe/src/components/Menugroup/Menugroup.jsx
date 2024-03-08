import React from "react";
import styles from "../Menugroup/Menugroup.module.css";
import img1 from "../../img/logo.png";
import img2 from "../../img/food.png";
import img3 from "../../img/Dessert.png";
import img4 from "../../img/Drink.png";
export default function Menugroup() {
  return (
    <div className={styles.container}>
      <div className={styles.menugroup}>{/* เมนู */}
      <a className={styles.box} href="#" style={{textDecoration: 'none', color: '#A1A1A1'}}><img src={img1} alt="img1"/>
      All
      </a>

      <a className={styles.box} href="#" style={{textDecoration: 'none', color: '#A1A1A1'}}><img src={img2} alt="img2"/>
      Food
      </a>

      <a className={styles.box} href="#" style={{textDecoration: 'none', color: '#A1A1A1'}}><img src={img3} alt="img3"/>
      Dessert
      </a>

      <a className={styles.box} href="#" style={{textDecoration: 'none', color: '#A1A1A1'}}><img src={img4} alt="img4"/>
      Drink
      </a>
      </div>
    </div>
  );
}
