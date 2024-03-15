import React, { useState, useEffect } from "react";
import styles from "./Shownenu.module.css";
import img1 from "../../img/All.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Styles from "../addanddel/addanddel.module.css";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Alert } from "@mui/material";

const dataFromapi = [{ namemenu: "ข้าวผัด", price: 10000 }];

export default function Shownenu() {
  const { lang,Type_food } = useParams();
  const [menulist_us, setmenulist_us] = useState([]);
  const [dt, setdt] = useState(dataFromapi);

  useEffect(() => {
    getmenulist(lang);
  }, []);

  const getmenulist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/getmenu", {
        lang: lang,
        Type: Type_food,

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
        {menulist_us.map((val, index) => (
          <Col key={index}>
            <div className={styles.box}>
              <div className={styles.card}>
                <div className={styles.boximg}>
                  <img src={img1} alt="img1" />
                </div>
                <h4>{val.Name}</h4>
                <div className={styles.container}>
                  <div className={styles.price}>
                    <p>{val.Price} ₩</p>
                  </div>
                  <button className="bt-add" onClick={() => console.log("hi")}>Add</button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
