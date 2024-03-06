import React from "react";
import Style from "../Listmenu/Listmenu.module.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Addanddel from '../addanddel/addanddel.jsx'
export default function Listmenu() {
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
          <tr>
            <td>1</td>
            <td>Pad Thai</td>
            <td>2000&nbsp;&nbsp; ₩</td>
            <td><Addanddel /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tom Yum Goong</td>
            <td>2000&nbsp;&nbsp; ₩</td>
            <td><Addanddel /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Crepes</td>
            <td>2000&nbsp;&nbsp; ₩</td>
            <td><Addanddel /></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
