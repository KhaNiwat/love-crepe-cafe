import React from "react";
import styles from "../Menugroup/Menugroup.module.css";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import img1 from "../../img/logo.png";
import img2 from "../../img/food.png";
import img3 from "../../img/Dessert.png";
import img4 from "../../img/Drink.png";
import { Axios } from "axios";
import { useEffect, useState } from "react";
export default function Menugroup() {
  const navigate = useNavigate();
  const { lang, table } = useParams();
  const [dataFromApi, setDataFromApi] = useState([]);
  const [translations, setTranslations] = useState({
    all: "All",
    food: "Food",
    dessert: "Dessert",
    drink: "Drink",
  });

  useEffect(() => {
    getDatalist(lang);
    if (lang === "TH") {
      setTranslations({
        all: "ทั้งหมด",
        food: "อาหาร",
        dessert: "ของหวาน",
        drink: "เครื่องดื่ม",
      });
    } else if (lang === "EN") {
      setTranslations({
        all: "All",
        food: "Food",
        dessert: "Dessert",
        drink: "Drink",
      });
    } else if (lang === "KR") { 
      setTranslations({
        all: "전체",
        food: "식품",
        dessert: "디저트",
        drink: "음료",
      });
    } else if (lang === "CN") { 
      setTranslations({
        all: "全部",
        food: "食品",
        dessert: "甜点",
        drink: "饮料",
      });
    }
  }, [lang]);
  

  const getDatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/food_room", {
        lang: lang,
      });
      setDataFromApi(res.data);
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
  }
  
  const redirectToPage = (type) => {
    navigate(`/menu/${type}/${lang}/${table}`);
  };
  
  const To_pade_Dessert = () =>{
    navigate("/menu/dessert/"+lang+"/"+table)
    window.location.reload();
  }
  
  // Go to drink page
  const To_pade_Drink = () =>{
    navigate("/menu/drink/"+lang+"/"+table)
    window.location.reload();
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menugroup}>
          {/* Menu */}
          <a
            className={styles.box}
            style={{ textDecoration: "none", color: "#A1A1A1" }}
            onClick={() => To_page_cus_all("all")}
          >
            <img src={img1} alt="img1" />
            <p>{translations.all}</p>
          </a>

          <a
            className={styles.box}
            style={{ textDecoration: "none", color: "#A1A1A1" }}
            onClick={() => To_page_food("food")}
          >
            <img src={img2} alt="img2" />
            <p>{translations.food}</p>
          </a>

          <a
            className={styles.box}
            style={{ textDecoration: "none", color: "#A1A1A1" }}
            onClick={() => To_pade_Dessert("dessert")}
          >
            <img src={img3} alt="img3" />
            <p>{translations.dessert}</p>
          </a>

          <a
            className={styles.box}
            style={{ textDecoration: "none", color: "#A1A1A1" }}
            onClick={() => To_pade_Drink("drink")}
          >
            <img src={img4} alt="img4" />
            <p>{translations.drink}</p>
          </a>
        </div>
      </div>
    </>
  );
}
