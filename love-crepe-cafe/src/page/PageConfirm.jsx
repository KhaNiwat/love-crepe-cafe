import React, { useEffect, useState } from "react";
// import Style from "../Listmenu/Listmenu.module.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Navbar from "../components/Navbar/Navbar";
import Styles from "../components/addanddel/addanddel.module.css";
import  Axios  from "axios";
import { useNavigate, useParams } from "react-router-dom";
const menulist = [{ num: 1, name: "Padthai", price: 200 }];

export default function PageConfirm() {
  const [menulist_us, setmenulist_us] = useState([]);
  const {lang , table} = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getmenulist(lang);
  }, []);


  const netxtpage =(e) =>{
    navigate("/Option/"+lang+"/"+e+"/"+table);
  }

  const getmenulist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/payment_detail", {
        lang: lang,
        TableID: table,

      });
      setmenulist_us(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickHandle = () =>{
    navigate("/menu/all/"+lang+"/"+table);
  }
  // setmenulist_us(menulist);
  return (
    <>
      <Navbar />
      <Container className="mt-4 p-2">
        <h3 className="mx-auto">PageConfirm</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>amount</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {menulist_us.map((val, key) => {
              return (
                <tr>
                  <td>{key+1}</td>
                  <td>{val.Name}</td>
                  <td>{val.Amount}</td>
                  <td>{val.Price}&nbsp;&nbsp; ₩</td> 
                  <td><p className="mx-2 flex items-center">1</p></td> 
                </tr>
              );
            })}
          </tbody>
        </Table>
        <button className="bt-on" onClick={onClickHandle}>Back</button>
      </Container>
    </>
  );
}
