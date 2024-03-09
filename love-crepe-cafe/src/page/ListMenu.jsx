import React, { useState } from "react";
// import Style from "../Listmenu/Listmenu.module.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Addanddel from "../components/addanddel/addanddel";
import Navbar  from "../components/Navbar/Navbar"
const menulist = [{ num: 1, name: "Padthai", price: 200 }, { num: 2, name: "Cake", price: 300 }, { num: 3, name: "Coke", price: 100 }];




export default function Listmenu() {

    const [menulist_us, setmenulist_us] = useState(menulist);
    // setmenulist_us(menulist);
    return (
        <>
        <Navbar/>
        <Container className="my-2">
            <h3 className="mx-auto">List</h3>
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

                    {menulist_us.map((val, key) => {
                        return (
                            <tr>
                                <td>{val.num}</td>
                                <td>{val.name}</td>
                                <td>{val.price}&nbsp;&nbsp; ₩</td>
                                <td><Addanddel /></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </Container></>
    );
}
