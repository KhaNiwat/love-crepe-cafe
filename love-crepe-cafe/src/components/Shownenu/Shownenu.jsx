import React from "react";
import styles from "./Shownenu.module.css"; 
import img1 from "../../img/logo.png";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Shownenu() {
  return (
    <div className={styles.conshow}> 
      <h3>All menu</h3>
      <div className={styles.grid_container}> 

        <div className={styles.griditem}>
          <div className={styles.card}> 
            <div className={styles.boximg}><img src={img1} alt="img1" /></div>
            <div className={styles.namemanu}><p>name menu</p></div>
            <div class={styles.container}>
              <div class={styles.price}><p>2000 ₩</p></div>
              <div className={styles.quantity}><button><RemoveCircleIcon/></button><label>1</label> <button><AddCircleIcon/></button></div>
            </div>
          </div>
        </div>

        <div className={styles.griditem}>
          <div className={styles.card}> 
            <div className={styles.boximg}><img src={img1} alt="img1" /></div>
            <div className={styles.namemanu}><p>name menu</p></div>
            <div class={styles.container}>
              <div class={styles.price}><p>2000 ₩</p></div>
              <div className={styles.quantity}><button><RemoveCircleIcon/></button><label>1</label> <button><AddCircleIcon/></button></div>
            </div>
          </div>
        </div>

        <div className={styles.griditem}>
          <div className={styles.card}> 
            <div className={styles.boximg}><img src={img1} alt="img1" /></div>
            <div className={styles.namemanu}><p>name menu</p></div>
            <div class={styles.container}>
              <div class={styles.price}><p>2000 ₩</p></div>
              <div className={styles.quantity}><button><RemoveCircleIcon/></button><label>1</label> <button><AddCircleIcon/></button></div>
            </div>
          </div>
        </div>

        <div className={styles.griditem}>
          <div className={styles.card}> 
            <div className={styles.boximg}><img src={img1} alt="img1" /></div>
            <div className={styles.namemanu}><p>name menu</p></div>
            <div class={styles.container}>
              <div class={styles.price}><p>2000 ₩</p></div>
              <div className={styles.quantity}><button><RemoveCircleIcon/></button><label>1</label> <button><AddCircleIcon/></button></div>
            </div>
          </div>
        </div>





      </div>
    </div>
  );
}
