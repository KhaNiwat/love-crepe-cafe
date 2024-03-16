import React from "react";
import styles from "../Menugroup/Menugroup.module.css";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import img1 from "../../img/logo.png";
import img2 from "../../img/food.png";
import img3 from "../../img/Dessert.png";
import img4 from "../../img/Drink.png";
import { Axios } from "axios";
import { useEffect, useState } from "react";

const dataFromapi = [
  { All: "All", Food: "Food", Dessert: "Dessert" ,Drink: "Drink"},
];


export default function Menugroup() {
  const navigate = useNavigate();
  const { lang,table } = useParams();
  const [dt, setDt] = useState(dataFromapi);

  useEffect(() => {
    getDatalist(lang);
  }, );

  const getDatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/food_room", {
        lang: lang,
      });
      setDt(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  
  const To_page_cus_all = () =>{ 
  navigate("/menu/all/"+lang+"/"+table);
  window.location.reload();
  }
 
  const To_page_food = () =>{
    //redirect("Table_cus/"+lang); 
    navigate("/menu/food/"+lang+"/"+table);
    window.location.reload();
  };

  
  const To_pade_Dessert = () =>{
    navigate("/menu/dessert/"+lang+"/"+table)
    window.location.reload();
  }

    //ไปยังหน้าของเครื่องดื่ม
    const To_pade_Drink = () =>{
      navigate("/menu/drink/"+lang+"/"+table)
      window.location.reload();
    }
  return (
    <>
    {dt.map((val, index) => (
    <div className={styles.container}>
      <div className={styles.menugroup}>
        {/* เมนู */}
        <a
          className={styles.box}

          style={{ textDecoration: "none", color: "#A1A1A1" }} onClick={To_page_cus_all}
        >
          <img src={img1} alt="img1" />
          {val.All}
        </a>

        <a
          className={styles.box}
         
          style={{ textDecoration: "none", color: "#A1A1A1" }} onClick={To_page_food}
        >
          <img src={img2} alt="img2" />
          {val.Food}
        </a>

        <a
          className={styles.box}
          
          style={{ textDecoration: "none", color: "#A1A1A1" }} onClick={To_pade_Dessert}
        >
          <img src={img3} alt="img3" />
          {val.Dessert}
        </a>

        <a
          className={styles.box}
        
          style={{ textDecoration: "none", color: "#A1A1A1" }}  onClick={To_pade_Drink}
        >
          <img src={img4} alt="img4" />
          {val.Drink}
        </a>

      </div>
    </div>
    ))}
    </>
  );
}
