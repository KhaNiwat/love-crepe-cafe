import React from "react";
import img from "../../img/food.png";
import DoneIcon from "@mui/icons-material/Done";
import { useParams } from "react-router-dom";
import { Axios } from "axios";
import { useEffect, useState } from "react";

const dataFromapi = [
  { name: "name1", order: 123 ,amount : 10}
];

const dataoption = [{ Des: 1 }, { Des: 1 }, { Des: 1 }];

export default function DashDessert() {
  const { lang } = useParams();
  const [dt, setDt] = useState(dataFromapi);
  const [dtop, setdtop] = useState(dataoption);

  useEffect(() => {
    getDatalist(lang);
  }, []);

  const getDatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/DashDessert_room", {
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

  const handleLoopClick = (index) => {
    const newData = [...dt];
    newData[index].status = "serve";
    setDt(newData);
  };

  const handleDoneClick = (index) => {
    const newData = [...dt];
    newData[index].status = "finish";
    setDt(newData);
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
                  className="bg-gray-300 p-1 w-4/5 rounded-md"
                  onClick={() => handleDoneClick(index)}
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
