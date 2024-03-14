import React from "react";
import img from "../../img/food.png";
import DoneIcon from "@mui/icons-material/Done";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import DesDrinkcrip from "./DesDrinkcrip";

const dataFromapi = [
  { name: "name1", order: 123 ,amount : 10},
  { name: "name1", order: 123 ,amount : 10},
];

const dataoption = [{ Des: 1 }, { Des: 1 }, { Des: 1 }];

export default function DasDrink() {
  const { lang } = useParams();
  const [dt, setData] = useState([]);
  const [dtop, setdtop] = useState([]);
  const [tmp,settmp] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getDrinklist(lang);
  }, []);

  const getDrinklist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/drink_bar", {
        lang: lang,
      });
      
      setData(res.data);
      // console.log("dasdrink");
    } catch (error) {
      console.log(error);
    }
  };

  const startgo = async (lang) =>{
    await getDrinklist(lang);
    
  }

  const sentCartIdtofinishmenu = async (cart) => {
    try {
      const res = await Axios.post("http://localhost:5177/finishMenu", {
        CartID : cart
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoopClick = (index) => {
    const newData = [...dt];
    newData[index].status = "serve";
  };

  const handleDoneClick = (cart,index_del) => {
    sentCartIdtofinishmenu(cart);
    setData(prevData => prevData.filter((_, index) => index !== index_del));
    navigate("/Drink/"+lang);
  };

  return (
    <div className="container p-10">
      <h4>รายการอาหาร</h4>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th className="text-center">รูป</th>
            <th className="text-center">ชื่ออาหาร</th>
            <th className="text-center">ออเดอร์</th>
            <th className="text-center">จำนวน</th>
            <th className="text-center">ออฟชั่น</th>
            <th className="text-center">เสร็จสิ้น</th>
          </tr>
        </thead>
        <tbody>
          
          {dt.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td
                className="text-center"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              >
                <img
                  src={img}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </td>
              <td className="text-center">{val.Name}</td>
              <td className="text-center">{val.TableID}</td>
              <td className="text-center">{val.amount}</td>
              <DesDrinkcrip OptionID={val.OptionID} />
              <td className="text-center">
                <button
                  className="bg-gray-300 p-1 w-4/5 rounded-md"
                  onClick={() => handleDoneClick(val.cartID,index)}
                  style={{
                    background:
                      val.status === "finish" ? "green" : "transparent",
                    color: val.status === "finish" ? "white" : "black",
                  }}
                >
                  <DoneIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
