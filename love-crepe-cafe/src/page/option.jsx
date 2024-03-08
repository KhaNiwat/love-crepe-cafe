import React from "react";
import All from "../img/All.png";
import css from "../components/css/option.module.css";

export default function Option() {
  return (
    <div className={css.grid}>
      <div className={css.box1}>
        <img src={All} alt="" />
      </div>
      <div className={css.box2}>
        <img src={All} alt="" />
      </div>
    </div>
  );
}
