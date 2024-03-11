import React from "react";
import img from "../../img/food.png";
import DoneIcon from "@mui/icons-material/Done";
import LoopIcon from "@mui/icons-material/Loop";
import { useParams } from "react-router-dom";
import { Axios } from "axios";
import { useEffect, useState } from "react";

// #1
const dataFromapi = [
  { name: "name1", order: 123, status: "finish" },
  { name: "name2", order: 124, status: "serve" },
];

export default function Foodroom() {
  //แปรตัว
  const { lang } = useParams();
  const [dt, setdt] = useState(dataFromapi);

  useEffect(() => {
    getdatalist(lang);
  }, []);

  const getdatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/food_room", {
        lang: lang,
      });
      setdt(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-10">
      <h4>รายการอาหาร</h4>
      <table class="table">
        <thead>
          <tr>
            <th>No.</th>
            <th className="text-center">รูป</th>
            <th className="text-center">ชื่ออาหาร</th>
            <th className="text-center">ออเดอร์</th>
            <th className="text-center">จำนวน</th>
            <th className="text-center">กำลังทำ</th>
            <th className="text-center">เสร็จสิ้น</th>
          </tr>
        </thead>
        {dt.map((val) => {
          return (
            <tbody>
              <tr>
                <td>1</td>
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
                <td className="text-center"> {val.order}</td>
                <td className="text-center"> 1</td>
                <td className="text-center bg-red-200">
                  <button>
                    <LoopIcon />
                  </button>
                </td>
                <td className="text-center ">
                  <button>
                    <DoneIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
