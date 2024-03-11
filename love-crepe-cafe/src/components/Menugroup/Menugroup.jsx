import React from "react";
import styles from "../Menugroup/Menugroup.module.css";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import img1 from "../../img/logo.png";
import img2 from "../../img/food.png";
import img3 from "../../img/Dessert.png";
import img4 from "../../img/Drink.png";
export default function Menugroup() {
  const navigate = useNavigate();
  const {lang} = useParams();

  // ไปหน้าอาหารรวม
  const To_page_cus_all = () =>{ 
    navigate("/Customernenuall/"+lang);
  }
 
  //ไปยังหน้าอาหาร
  const To_page_food = () =>{
    //redirect("Table_cus/"+lang); 
    navigate("/Cusmenufood/"+lang);
  };

  //ไปยังหน้าของหวาน
  const To_pade_Dessert = () =>{
    navigate("/Cusmenudessert/"+lang)
  }

    //ไปยังหน้าของเครื่องดื่ม
    const To_pade_Drink = () =>{
      navigate("/Cusmenudrink/"+lang)
    }
  return (
    <div className={styles.container}>
      <div className={styles.menugroup}>
        {/* เมนู */}
        <a
          className={styles.box}
          href="#"
          style={{ textDecoration: "none", color: "#A1A1A1" }} onClick={To_page_cus_all}
        >
          <img src={img1} alt="img1" />
          All
        </a>

        <a
          className={styles.box}
          href="#"
          style={{ textDecoration: "none", color: "#A1A1A1" }} onClick={To_page_food}
        >
          <img src={img2} alt="img2" />
          Food
        </a>

        <a
          className={styles.box}
          href="#"
          style={{ textDecoration: "none", color: "#A1A1A1" }} onClick={To_pade_Dessert}
        >
          <img src={img3} alt="img3" />
          Dessert
        </a>

        <a
          className={styles.box}
          href="#"
          style={{ textDecoration: "none", color: "#A1A1A1" }}  onClick={To_pade_Drink}
        >
          <img src={img4} alt="img4" />
          Drink
        </a>
      </div>
    </div>
  );
}
