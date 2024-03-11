import React, { useState } from "react";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";

function Dashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const {lang} = useParams();

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  // ชื่อเพจ !!!!!

  const ClickTable = () =>{
    //redirect("Table_cus/"+lang); 
    navigate("/Table_cus/"+lang);
  };

  const ClickFood = () =>{
    navigate("/Pfood_kitchen/"+lang);
    // redirect("Pfood_kitchen/"+lang);
  };
  
  const ClickDashDessert = () =>{
    navigate("/Pdessert/"+lang);

  };


  const ClickDrink = () =>{
    navigate("/Drink/"+lang);
    // redirect("Pfood_kitchen/"+lang); 
  };

  const funsumday = () =>{
    navigate("/Padedaysummary/"+lang);
  }

  const funsumweek = () =>{
    navigate("/Padeweeksummary/"+lang)
  }

  const funsummonth = () =>{
    navigate("/Pademonthsummary/"+lang);
  }

  const funsumyear = () =>{
    navigate("/Padeyearsummary/"+lang);
  }

  // Upmenu
  const Up_menu = () =>{
    navigate("/Page_upmenu/"+lang);
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="text-white w-64 py-4 px-4">
        <div className="mb-3 text-xl font-bold">Dashboard</div>
         <br />
        <ul>
          <li className="mb-3">
            <button className="Dash-bt">
              <a href="" className="text-black no-underline" onClick={ClickTable}>
                เลือกโต๊ะ
              </a>
            </button>
          </li>
          <li className="mb-3">
            <button className="Dash-bt">
              <a href="" className="text-black no-underline" onClick={ClickFood}>
                ครัวอาหาร
              </a>
            </button>
          </li>
          <li className="mb-3">
            <button className="Dash-bt">
              <a href="" className="text-black no-underline" onClick={ClickDashDessert}>
                ของหวาน
              </a>
            </button>
          </li>

          <li className="mb-3">
            <button className="Dash-bt text-black no-underline"  onClick={ClickDrink}>
              เครื่องดื่ม
            </button>
          </li>

          <li className="mb-3">
            <button className="Dash-bt text-black no-underline"  onClick={Up_menu}>
              เพิ่มเมนู
            </button>
          </li>
          

          <li className="mb-3">
            <button className="Dash-bt" onClick={toggleDropdown}>
              ยอดสรุป
            </button>
            {dropdownOpen && (
              <div className=" bg-white min-w-48 shadow-md z-10 Dropdown-content transform transition-all origin-top-right right-0 mt-2">
                <button className="text-black block px-3  py-3 no-underline hover:bg-gray-100 " onClick={funsumday}>ยอดรายขายวัน</button>
                <a href="#" className="text-black block px-3  py-3 no-underline hover:bg-gray-100" onClick={funsumweek}>ยอดขายรายสัปดาห์</a>
                <a href="#" className="text-black block px-3  py-3 no-underline hover:bg-gray-100" onClick={funsummonth}>ยอดขายเดือน</a>
                <a href="#" className="text-black block px-3  py-3 no-underline hover:bg-gray-100" onClick={funsumyear}>ยอดขายรายปี</a>
              </div>
            )}
          </li>
        </ul> 
         {/* <Menu onClick={({kye})}
           
         ></Menu> */}
        
      </div>
    </div>
  );
}

export default Dashboard;
