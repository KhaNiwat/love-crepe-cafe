import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Menugroup from '../components/Menugroup/Menugroup';
import Shownenu from '../components/Shownenu/Shownenu';
import { useNavigate, useParams } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the correct icon

export default function Customernenuall() {
  const navigate = useNavigate();
  const { lang, Table } = useParams();

  const atc = () => {
    navigate("/list/"+lang+"/"+Table);
  };

  return (
    <>
      <div className='h-max'>
        <Navbar />
        <Search />
        <Menugroup />
        <Shownenu />
      </div>
      <button className="bt-on fixed bottom-1 font-medium" onClick={atc}><ShoppingCartIcon />Order</button>
    </>
  );
}
