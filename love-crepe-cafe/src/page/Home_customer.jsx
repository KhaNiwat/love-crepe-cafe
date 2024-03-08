import React from "react";
import Menugroup from "../components/Menugroup/Menugroup.jsx";
import Shownenu from "../components/Shownenu/Shownenu.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
export default function HomeCustomer() {
  return (
    <>
      <Navbar />
      <Menugroup />
      <Shownenu />
    </>
  );
}
