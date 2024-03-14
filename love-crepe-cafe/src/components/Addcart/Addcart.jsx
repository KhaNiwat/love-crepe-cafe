import React, { useState } from "react";
import Style from "../Listmenu/Listmenu.module.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Addcart() {
    const { lang } = useParams();

  const [menulist_us,setmenulist_us] = useState(menulist);
  return (
    <Container className="my-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>princt</th>
            <th>amount</th>
          </tr>
        </thead>

        <tbody>

          {menulist.map((val,key) => {
            return(
              <tr>
            <td>{val.num}</td>
            <td>{val.name}</td>
            <td>{val.price}&nbsp;&nbsp; ₩</td>
          </tr>
            )
          })
          }
        </tbody>
      </Table>
    </Container>
  );
}
