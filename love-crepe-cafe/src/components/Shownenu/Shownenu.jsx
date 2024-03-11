import React, { useState, useEffect } from "react";
import styles from "./Shownenu.module.css";
import img1 from "../../img/logo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Addanddel from '../addanddel/addanddel.jsx';
import { useParams } from 'react-router-dom';
import Axios from "axios";

const dataFromapi = [
  { namemenu: "ข้าวผัด", price: 1000 }
];

export default function Shownenu() {
  const { lang } = useParams();
  const [menulist_us, setmenulist_us] = useState([]);
  const [dt, setdt] = useState(dataFromapi);

  useEffect(() => {
    getmenulist(lang);
  }, []);

  const getmenulist = async (lang) => {
    try {
      const res = await Axios.post('http://localhost:5177/getmenu', {
        lang: lang
      });
      setmenulist_us(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <h3>All menu</h3>
      <Row>
        {dt.map((val, index) => (
          <Col key={index}>
            <div className={styles.box}>
              <div className={styles.card}> 
                <div className={styles.boximg}><img src={img1} alt="img1" /></div>
                <div className={styles.namemanu}><p>{val.namemenu}</p></div>
                <div className={styles.container}>
                  <div className={styles.price}><p>{val.price} ₩</p></div>
                  <div className={styles.quantity}><Addanddel /></div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
