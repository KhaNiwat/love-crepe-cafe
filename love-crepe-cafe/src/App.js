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
import Drink from "./page/Pdrink.jsx";
import Pdessert from "./page/Pdesseret.jsx";
import Padedaysummary from"./page/Padedaysummary.jsx"
import Padeweeksummary from './page/Padeweeksummary.jsx'
import Pademonthsummary from "./page/Pademonthsummary.jsx";
import Padeyearsummary from "./page/Padeyearsummary.jsx";
import Customernenuall from "./page/Customernenuall.jsx";
import Cusmenufood from "./page/Cusmenufood.jsx";
import Cusmenudessert from "./page/Cusmenudessert.jsx"
import Cusmenudrink from "./page/Cusmenudrink.jsx"
import Page_upmenu from "./page/Page_upmenu.jsx";
import PageSumordertable from "./page/PageSumordertable.jsx"
import PageServe from "./page/PageServe.jsx";
import TextToSpeech from './components/TextToSpeech/TextToSpeech.jsx'
import PageConfirm from "./page/PageConfirm.jsx";
// เฉพาะ เพจ
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route Index path="*" element={<Index />} />
          <Route  path="HomeCustomer/:Table" element={<HomeCustomer />} />
          <Route path="list/:lang/:table" element={<Listmenu />} />
          <Route  element={<NoPage />} />
          <Route path="Option/:lang/:MenuID/:Table" element={<Option />}></Route>
          <Route path="Table_cus/:lang" element={<Table_cus />}></Route>
          <Route path="Pfood_kitchen/:lang" element={<Pfood_kitchen />}></Route>
          <Route path="Drink/:lang" element={<Drink />}></Route>
          <Route path="Pdessert/:lang" element={<Pdessert />}></Route>
          <Route path="Padedaysummary/:lang" element={<Padedaysummary />}></Route>
          <Route path="Pademonthsummary/:lang" element={<Pademonthsummary />}></Route>
          <Route path="Padeweeksummary/:lang" element={<Padeweeksummary />}></Route>
          <Route path="Padeyearsummary/:lang" element={<Padeyearsummary />}></Route>
          <Route path="menu/:Type_food/:lang/:Table" element={<Customernenuall />}></Route>
          <Route path="Page_upmenu/:lang" element={<Page_upmenu />}></Route>
          <Route path="PageSumordertable/:lang" element={<PageSumordertable />}></Route>
          <Route path="PageServe/:lang" element={<PageServe />}></Route>
          <Route path="TextToSpeech/:lang" element={<TextToSpeech />}></Route>
          <Route path="PageConfirm/:lang/:Table" element={<PageConfirm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
