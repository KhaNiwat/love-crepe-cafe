import React, { useEffect, useState } from "react";
// import Style from "../Listmenu/Listmenu.module.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Navbar from "../components/Navbar/Navbar";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Styles from "../components/addanddel/addanddel.module.css";
import  Axios  from "axios";
import { Button } from "@mui/material";
const menulist = [{ num: 1, name: "Padthai", price: 200 }];

export default function Listmenu() {
  const [menulist_us, setmenulist_us] = useState([]);
  const { lang , table } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getmenulist(lang);
  }, []);

  const getmenulist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/get_cart", {
        lang: lang,
        Table: table,

      });
      setmenulist_us(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickHandle = async(e) =>{
    try {
      const res = await Axios.post("http://localhost:5177/delcart", {
        CartID : e

      });
      getmenulist(lang)
    } catch (error) {
      console.log(error);
    }

  }

  const onClickHandle_2 =  () => {
     sentOrder();
    navigate("/menu/all/"+lang+"/" + table);

  }

  const sentOrder = async () =>{
    try {
      const res = await Axios.post("http://localhost:5177/order", {
        Table : table

      });
    } catch (error) {
      console.log(error);
    }
  }
  
  // setmenulist_us(menulist);
  return (
    <>
      <Navbar />
      <Container className="my-2">
        <h3 className="mx-auto">List</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>princ</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {menulist_us.map((val, key) => {
              return (
                <tr>
                  <td>{val.num}</td>
                  <td>{val.Name}</td>
                  <td>{val.Price}&nbsp;&nbsp; ₩</td>
                  <td>{val.Amount}</td>
                  <td>
                    <button onClick={() => {onClickHandle(val.CartID)}}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <button className='bt-on' onClick={onClickHandle_2}>ยืนยัน</button>
      </Container>
    </>
  );
}
