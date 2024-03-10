import React from "react";
import styles from "../Menugroup/Menugroup.module.css";
import img1 from "../../img/logo.png";
export default function Menugroup() {
  return (
    // <div className={styles.container}>
    //   <div className={styles.menugroup}>{/* เมนู */}
    //     <div className={styles.box}>{/* กล่องใหญ่ */}
    //       <div className={styles.box_img}>{/* รูป */}
    //         <img src={img1} alt="img1" width={60} height={60} />
    //       </div>
    //       <div className={styles.box_name}>{/* text */}
    //         <a href="http://">All</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className={styles.container}>
      <div className={styles.menugroup}>{/* เมนู */}
      <a className={styles.box} href="#" style={{textDecoration: 'none', color: '#A1A1A1'}}><img src={img1} alt="img1"/>
      All
      </a>

      <a className={styles.box} href="#" style={{textDecoration: 'none', color: '#A1A1A1'}}><img src={img1} alt="img1"/>
      Food
      </a>

      <a className={styles.box} href="#" style={{textDecoration: 'none', color: '#A1A1A1'}}><img src={img1} alt="img1"/>
      Dessert
      </a>

      <a className={styles.box} href="#" style={{textDecoration: 'none', color: '#A1A1A1'}}><img src={img1} alt="img1"/>
      Drink
      </a>
      </div>
    </div>
  );
}
