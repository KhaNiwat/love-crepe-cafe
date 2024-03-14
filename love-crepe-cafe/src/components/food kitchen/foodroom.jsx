import React from "react";
import img from "../../img/food.png";
import DoneIcon from "@mui/icons-material/Done";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import  Axios  from "axios";
import { useEffect, useState } from "react";

const dataFromapi = [
  { name: "name1", order: 123 ,amount : 10},
  { name: "name1", order: 123 ,amount : 10}
];

const dataoption = [{ Des: 1 }, { Des: 1 }, { Des: 1 }];

export default function Foodroom() {
  const { lang } = useParams();
  const [dt, setDt] = useState([]);
  const [dtop, setdtop] = useState(dataoption);
  const navigate = useNavigate();

  useEffect(() => {
    getDatalist(lang);
  }, []);

  const getDatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/food_bar", {
        lang: lang,
      });
      setDt(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataOption = async (lang,Option) => {
    try {
      const res = await Axios.post("http://localhost:5177/food_room", {
        lang: lang,
        OptionID : Option
      });
      setdtop(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sentCartIdtofinishmenu = async (cart) => {
    try {
      const res = await Axios.post("http://localhost:5177/finishMenu", {
        CartID : cart
      });
    } catch (error) {
      console.log(error);
    }
  };


  const handleDoneClick = (cart,index_del) => {
    sentCartIdtofinishmenu(cart);
    setDt(prevData => prevData.filter((_, index) => index !== index_del));
    navigate("/Pfood_kitchen/"+lang);
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
              <td className="text-center">{val.name}</td>
              <td className="text-center">{val.order}</td>
              <td className="text-center">{val.amount}</td>
              <td className="text-center bg-red-200">
                {dtop.map((val, index) => (
                  <span key={index}>
                    {String(val.Des)}
                    <br />
                  </span>
                ))}
              </td>

              <td className="text-center">
                <button
                  className="bg-su"
                  onClick={() => handleDoneClick(val.cartID,index)}
                  style={{
                    background:
                      val.status === "finish" ? "green" : "transparent",
                    color: val.status === "finish" ? "white" : "black",
                  }}
                >
                  <DoneIcon className="bt-su" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
