import React from "react";
import img from "../../img/food.png";
import { useParams } from "react-router-dom";
import  Axios  from "axios";
import { useEffect, useState } from "react";

// #1
const dataFromapi = [
  { Name: "ผัดไทย", amount: "20", sum: "10000" },
];

export default function Day() {
  //แปรตัว
  const { lang } = useParams();
  const [dt, setdt] = useState([]);

  useEffect(() => {
    getdatalist(lang);
  }, []);

  const getdatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/dash_day", {
        lang: lang,
        
      });
      setdt(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-10">
      <h4>สรุปยอดขายรายวัน</h4>
      <table class="table">
        <thead>
          <tr>
            <th>ชื่อ</th>
            <th>จำนวน</th>
            <th>ยอดรวม</th>
          </tr>
        </thead>
        {dt.map((val) => {
          return (
            <tbody>
              <tr>
                <td> {val.Name}</td>
                <td>{val.total_Amount}</td>
                <td>{val.total_price}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
