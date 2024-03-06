import React from "react";
import styles from "./Shownenu.module.css"; 
import img1 from "../../img/logo.png";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Addanddel from '../addanddel/addanddel.jsx';
export default function Shownenu() {
  return (
    <Container fluid>
      <h3>All menu</h3>
      <Row>
        <Col>
          <div className={styles.box}>
          <div className={styles.card}> 
            <div className={styles.boximg}><img src={img1} alt="img1" /></div>
            <div className={styles.namemanu}><p>name menu</p></div>
            <div class={styles.container}>
              <div class={styles.price}><p>2000 ₩</p></div>
              <div className={styles.quantity}><Addanddel /></div>
            </div>
          </div>
          </div>
        </Col>

        <Col>
          <div className={styles.box}>
          <div className={styles.card}> 
            <div className={styles.boximg}><img src={img1} alt="img1" /></div>
            <div className={styles.namemanu}><p>name menu</p></div>
            <div class={styles.container}>
              <div class={styles.price}><p>2000 ₩</p></div>
              <div className={styles.quantity}><Addanddel /></div>
            </div>
          </div>
          </div>
        </Col>

        <Col>
          <div className={styles.box}>
          <div className={styles.card}> 
            <div className={styles.boximg}><img src={img1} alt="img1" /></div>
            <div className={styles.namemanu}><p>name menu</p></div>
            <div class={styles.container}>
              <div class={styles.price}><p>2000 ₩</p></div>
              <div className={styles.quantity}><Addanddel /></div>
            </div>
          </div>
          </div>
        </Col>

        <Col>
          <div className={styles.box}>
          <div className={styles.card}> 
            <div className={styles.boximg}><img src={img1} alt="img1" /></div>
            <div className={styles.namemanu}><p>name menu</p></div>
            <div class={styles.container}>
              <div class={styles.price}><p>2000 ₩</p></div>
              <div className={styles.quantity}><Addanddel /></div>
            </div>
          </div>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
}
