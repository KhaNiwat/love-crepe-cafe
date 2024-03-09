import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout.js";
import HomeCustomer from "./page/Home_customer.jsx";
import NoPage from "./page/NoPage.jsx";
import Listmenu from "./page/ListMenu.jsx";
import Index from "./page/index.jsx";
import Option from "./page/option.jsx";
import Pfood_kitchen  from "./page/Pfood_kitchen.jsx";
import Table_cus from "./page/Table_cus.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route Index path="*" element={<Index />} />
          <Route  path="HomeCustomer" element={<HomeCustomer />} />
          <Route path="list" element={<Listmenu />} />
          <Route  element={<NoPage />} />
          <Route path="Option" element={<Option />}></Route>
          <Route path="Table_cus" element={<Table_cus />}></Route>
          <Route path="Pfood_kitchen" element={<Pfood_kitchen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
